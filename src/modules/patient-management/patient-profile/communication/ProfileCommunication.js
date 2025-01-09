import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileSideBar from "../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../services/api-service/ApiService";
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

export default function ProfileCommunication() {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the currently active dropdown
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [getActivity, setGetActivity] = useState([]);
  const [error, setError] = useState("");
  const [appoinment, setAppoinment] = useState([]);
  const [contact, setContact] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [practioners, setPractioners] = useState([]);
  const [addLocFormData, setAddLocFormData] = useState({
    patient_id: patient.id,
    type: "",
    appointment_id: "",
    contact_id: "",
    messsage: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  const getAppoinments = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        `appointments?patient_id=${patient.id}`
      );
      setAppoinment(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getContacts = async () => {
    try {
      console.log("Ccccc");
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        `patient-contacts/user/${patient.id}`
      );
      setContact(data);
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
        "communication/create",
        addLocFormData
      );
      console.log(data);
      fetchData();
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
        `communication?patient_id=${patient.id}`
      );
      setGetActivity(data);
      //   setPractioners(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      const id = editObj.id;
      addLocFormData["communication_id"] = id;
      setIsLoading(true);
      delete addLocFormData["appointment_date"];
      delete addLocFormData["contact_detail"];
      delete addLocFormData["patient_name"];
      await ApiService("PUT", `communication/update`, addLocFormData);
      delete addLocFormData["communication_id"];

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
      const data = await ApiService("delete", `communication/delete/${id}`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Close sidebar if screen size increases
  useEffect(() => {
    getAppoinments();
    getContacts();
    fetchData();
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setSidebarOpen(false); // Hide sidebar on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleNewMessage = () => {
  //     setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //     setIsModalOpen(false);
  // };

  return (
    <>
      <div className="dashboard">
        <div className={`dashboard-nav ${isSidebarOpen ? "mobile-show" : ""}`}>
          <ProfileSideBar />
        </div>
        <div className="dashboard-app">
          <header className="dashboard-toolbar">
            <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
              <i className="fas fa-bars" />
            </a>
          </header>
          <div className="dashboard-content">
            <div className="card">
              <div className="form-section-titles mt20">
                Communication Activity
              </div>
              <hr />
              <div className="m-3">
                <div className="panel-group mt-4">
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <Button color="primary" onClick={toggle}>
                      NEW MESSAGE
                    </Button>
                  </div>

                </div>
                <div className="panel-group mt-4">
                  <div>
                    <div>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getActivity &&
                            getActivity.map((obj, index) => {
                              return (
                                <>
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td> {obj.appointment_date || "Null"} </td>
                                    <td> {obj.messsage} </td>
                                    <td> {obj.type} </td>
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Message Details</ModalHeader>
        <ModalBody>
          <form>
            <FormGroup>
              <Label for="type"> Message Type</Label>
              <Input
                id="type"
                type="select"
                name="type"
                onChange={handleFormValues}
                value={addLocFormData.type}
              >
                <option value={"sms"}>Sms</option>
                <option value={"email"}>Email</option>
                <option value={"letter"}>Letter</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="contact_id">To</Label>
              <Input
                id="contact_id"
                name="contact_id"
                placeholder="with a placeholder"
                type="select"
                onChange={handleFormValues}
                value={addLocFormData.contact_id}
              >
                {contact.map((obj) => {
                  return (
                    <>
                      <option selected value={obj.id}>
                        {obj.firstname} {obj.middlename} {obj.lastname}
                      </option>
                    </>
                  );
                })}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="appointment_id">Related Appointment</Label>
              <Input
                id="appointment_id"
                name="appointment_id"
                placeholder="with a placeholder"
                type="select"
                onChange={handleFormValues}
                value={addLocFormData.appointment_id}
              >
                {appoinment.map((obj) => {
                  return (
                    <>
                      <option selected value={obj.id}>
                        {" "}
                        {obj.practitioner_id}
                      </option>
                    </>
                  );
                })}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="messsage">Message</Label>
              <Input
                id="messsage"
                name="messsage"
                placeholder="Message"
                type="textarea"
                rows="1"
                onChange={handleFormValues}
                value={addLocFormData.messsage}
              />
            </FormGroup>

            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                id="notes"
                rows="1"
                name="notes"
                placeholder="Message"
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
            {isEdit ? "Update " : "Save"} & Send
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
