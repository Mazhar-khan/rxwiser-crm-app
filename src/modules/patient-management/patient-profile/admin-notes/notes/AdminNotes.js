import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileSideBar from "../../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../../services/api-service/ApiService";
import SpinningLoader from "../../../../../services/spinning-loader/SpinningLoader";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
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

const AdminNotes = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the currently active dropdown
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [getClientData, setGetClientData] = useState([]);
  const [patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [editObj, setEditObj] = useState(null);
  const [addLocFormData, setAddLocFormData] = useState({
    patient_id: patient.id,
    notes: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Function to toggle the sidebar menu
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  const deleteContact = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("delete", `admin_notes/delete/${id}`);
      fetchData();
      console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

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
        "admin_notes/create",
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
        `admin_notes?patient_id=${patient.id}`
      );
      console.log("data", data);
      setNotes(data);
      // setPractioners(data);
    } catch (err) {
      // setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      const id = editObj.id;
      addLocFormData["note_id"] = id;
      setIsLoading(true);
      await ApiService("PUT", `admin_notes/update`, addLocFormData);
      delete addLocFormData["note_id"];
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
  // Close sidebar if screen size increases
  useEffect(() => {
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
        <div className="dashboard-nav">
          <ProfileSideBar />
        </div>

        <div className="dashboard-app">
          <div className="dashboard-content">
            <div className="card">
              <div className="form-section-titles mt20">Notes</div>
              <hr />
              <div className="panel-body">
                <div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <Button onClick={toggle} color="primary">
                        Add Notes
                      </Button>
                    </div>
                    <div className="panel-group mt-4">
                      <div>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Notes</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {notes.map((obj, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{obj.notes}</td>
                                  <td>
                                    <div>
                                      <AiFillEdit
                                        data-bs-toggle="modal"
                                        data-bs-target="#topSlideOutModal"
                                        style={{
                                          cursor: "pointer",
                                          marginLeft: "2px",
                                          marginRight: "2px",
                                          fontSize: "19px",
                                          color: "blue",
                                        }}
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
                                        onClick={() => deleteContact(obj)}
                                      />
                                    </div>
                                  </td>
                                </tr>
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
        <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Note</Label>
            <Input
              type="textarea"
              name="notes"
              onChange={handleFormValues}
              value={addLocFormData.notes}
              rows={2}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggle();
              setIsEdit(false);
              setEditObj(null);
            }}
          >
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
};
export default AdminNotes;
