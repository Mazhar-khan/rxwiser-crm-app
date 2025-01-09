import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileSideBar from "../../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../../services/api-service/ApiService";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Table,
  Label,
  FormGroup,
  Row,
  Col,
} from "reactstrap";

const PatientFile = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the currently active dropdown
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [getFiles, setGetFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    patient_id: patient.id,
    tags: "",
    description: "",
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to toggle the sidebar menu
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  const handleInputsValues = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const postFile = async (event) => {
    event.preventDefault();
    const formPayload = new FormData();
    formPayload.append("patient_id", formData.patient_id);
    formPayload.append("tags", formData.tags);
    formPayload.append("description", formData.description);
    formPayload.append("file", selectedFile); // Add the file here

    try {
      setIsLoading(true);
      const data = await ApiService("post", "patient-files", formPayload);
      getAllFiles();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const deleteLocation = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("delete", `patient-files/${id}`);
      console.log("data", data);
      getAllFiles();
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getAllFiles = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "get",
        `patient-files/patient/${patient.id}`
      );
      console.log("data", data);
      setGetFiles([]);
      setGetFiles(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const downloadFile = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("get", `patient-files/${id}/download`);
      console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Close sidebar if screen size increases
  useEffect(() => {
    getAllFiles();
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setSidebarOpen(false); // Hide sidebar on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className={`dashboard-nav ${isSidebarOpen ? "mobile-show" : ""}`}>
          <ProfileSideBar />
        </div>
        <div className="dashboard-app">
          <div className="dashboard-content">
            <div className="card">
              <div className="form-section-titles mt20">Files</div>
              <hr />
              <div>
                <div className="panel-body">
                  <div>
                    <Row>
                      <Col xs={4}>
                        <FormGroup>
                          <Label className="tags">Tags</Label>
                          <Input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleInputsValues}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label className="description">Description</Label>
                          <Input
                            type="textarea"
                            id="description"
                            name="description"
                            rows="1"
                            value={formData.description}
                            onChange={handleInputsValues}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <Label for="myFile">Choose your file</Label>
                        <Input
                          type="file"
                          id="myFile"
                          name="file"
                          onChange={handleFileChange}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button color="danger" onClick={postFile}>
                      Cancel
                    </Button>
                    <Button
                      style={{ marginLeft: "5px" }}
                      color="primary"
                      onClick={postFile}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <div className="panel-group mt-4 m-2">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Tags</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFiles &&
                        getFiles.map((obj, index) => {
                          return (
                            <>
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  {new Date(obj.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                                </td>
                                <td>{obj.file_name}</td>
                                <td>{obj.file_extension}</td>
                                <td>{obj.tags}</td>
                                <td>{obj.description}</td>
                                <td>
                                  <td>
                                    <div>
                                      <AiOutlineDelete
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "19px",
                                          color: "red",
                                        }}
                                        onClick={() => deleteLocation(obj)}
                                      />
                                      <AiOutlineDownload
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "19px",
                                        }}
                                        onClick={() => downloadFile(obj)}
                                      />
                                    </div>
                                  </td>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientFile;
