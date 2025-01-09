import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileSideBar from "../../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../../services/api-service/ApiService";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Modal,
  Input,
  Label,
  FormGroup,
} from "reactstrap";

export default function PatientDiagnose() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getDiagonose, setGetDiagonose] = useState([]);
  const [getPractitioners, setGetPractitioners] = useState([]);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [practioners, setPractioners] = useState([]);
  const [addLocFormData, setAddLocFormData] = useState({
    patient_id: profile.id,
    date: "",
    diagnosis_code: "",
    practitioner_id: "",
    date_resolved: "",
    is_default: 1,
    notes: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleFormValues = async (e) => {
    try {
      const { name, value } = e.target;
      console.log(name, value);
      setAddLocFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } catch (error) {}
  };

  const saveLocation = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "post",
        "patient-diagnosis",
        addLocFormData
      );
      fetchData();
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        `patient-diagnosis/patient/${profile.id}`
      );
      setGetDiagonose(data);
      setPractioners(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      const id = editObj.id;
      setIsLoading(true);
      await ApiService("PUT", `patient-diagnosis/${id}`, addLocFormData);
      fetchData();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleLocationData = async () => {
    if (isEdit) {
      editLocation();
    } else {
      saveLocation();
    }
    setIsEdit(false);
    setEditObj(null);
  };

  const deleteLocation = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("delete", `patient-diagnosis/${id}`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchPractioner = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        "practitioners/getall?hospital_id=4&user_type=practitioner"
      );
      setGetPractitioners(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to toggle the sidebar menu
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar if screen size increases
  useEffect(() => {
    fetchPractioner();
    fetchData();
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
              <div className="form-section-titles mt20">Client Diagnoses</div>
              <hr />
              <div>
                {/* Show All */}
                <div>
                  <div className="m-3">
                    <div className="panel-group mt-4">
                      <div>
                        <div>
                          <div>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                }}
                              >
                                <Button
                                  type="button"
                                  color="primary"
                                  onClick={toggle}
                                >
                                  Add Diagnosis
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-group mt-4">
                      <div>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Date Diagnosed</th>
                              <th>Diagnosis Code</th>
                              {/* <th

                                >
                                  Practitioner
                                </th> */}
                              <th>Date Resolved</th>

                              <th>Notes</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getDiagonose &&
                              getDiagonose.map((obj) => {
                                return (
                                  <>
                                    <tr key={obj.id}>
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
                                      <td>{obj.diagnosis_code}</td>
                                      {/* <td>{obj.practitioner_id}</td> */}
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
                                      <td>{obj.notes}</td>
                                      <td>
                                        <div>
                                          <AiFillEdit
                                            style={{
                                              cursor: "pointer",
                                              marginLeft: "2px",
                                              marginRight: "2px",
                                              fontSize: "19px",
                                              color: "blue",
                                            }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#topSlideOutModal"
                                            onClick={() => {
                                              setIsEdit(true);
                                              setEditObj(obj);
                                              setAddLocFormData({
                                                ...addLocFormData,
                                                ...obj,
                                              });
                                            }}
                                          />
                                          <AiOutlineDelete
                                            style={{
                                              cursor: "pointer",
                                              fontSize: "19px",
                                              color: "red",
                                            }}
                                            onClick={() => deleteLocation(obj)}
                                          />
                                        </div>
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
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Client Diagnoses</ModalHeader>
        <ModalBody>
          <form>
            <FormGroup>
              <Label for="datepicker">Date Diagnosed</Label>
              <Input
                id="datepicker"
                type="date"
                name="date"
                onChange={handleFormValues}
                value={addLocFormData.date}
              />
            </FormGroup>

            <FormGroup>
              <Label for="diagnosis_code">Diagnosis Code</Label>
              <Input
                id="diagnosis_code"
                name="diagnosis_code"
                placeholder="with a placeholder"
                type="textarea"
                rows="1"
                onChange={handleFormValues}
                value={addLocFormData.diagnosis_code}
              />
            </FormGroup>

            <FormGroup>
              <Label for="practitioner_id">Select Practitioner</Label>
              <Input
                id="practitioner_id"
                name="practitioner_id"
                placeholder="with a placeholder"
                type="select"
                onChange={handleFormValues}
                value={addLocFormData.practitioner_id}
              >
                {getPractitioners.map((obj) => {
                  return (
                    <option value={obj.id}>
                      {obj.firstname} {obj.middlename} {obj.lastname}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="date_resolved">Date Resolved</Label>
              <Input
                id="date_resolved"
                name="date_resolved"
                placeholder="with a placeholder"
                type="date"
                onChange={handleFormValues}
                value={addLocFormData.date_resolved}
              />
            </FormGroup>

            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                id="notes"
                rows="1"
                name="notes"
                placeholder="with a placeholder"
                type="textarea"
                onChange={handleFormValues}
                value={addLocFormData.notes}
              />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel & Close
          </Button>{" "}
          <Button
            color="primary"
            onClick={() => {
              handleLocationData();
              toggle();
            }}
          >
            {isEdit ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
