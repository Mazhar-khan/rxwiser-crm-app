import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileSideBar from "../../../../modules/patient-management/profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../services/api-service/ApiService";
import SpinningLoader from "../../../../services/spinning-loader/SpinningLoader";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Table, Button } from "reactstrap";
import AddAppoinment from "./add-appoinment/AddAppoinment";

const AppoinmentsClient = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState([]);
  const [practioner, setPractioner] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const [modal, setModal] = useState(false);
  const [patientData, setPatientData] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );


  const toggle = () => setModal(!modal);



  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };



  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        `appointments?patient_id=${patientData.id}`
      );
      setAppointment(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPractionerData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        "practitioners/getall?hospital_id=4&user_type=practitioner"
      );
      setPractioner(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLocation = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", "locations?hospital_id=6");
      setLocation(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };




  const deleteLocation = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("delete", `appointments/delete/${id}`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPractionerData();
    fetchData();
    fetchLocation();
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setSidebarOpen(false);
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
          <header className="dashboard-toolbar">
            <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
              <i className="fas fa-bars" />
            </a>
          </header>
          <div className="dashboard-content">
            <div className="card">
              <div className="panel-body">
                <h3 className="profile-det">Appointment</h3>
                <hr />
                <div style={{ display:'flex', justifyContent:'end' }} >
                  <Button color="primary" onClick={toggle}>New Appointment</Button>
                </div>
              <AddAppoinment modal={modal} toggle={toggle} isEdit={isEdit} practioner={practioner}
                location={location}
              />
                <div className="panel-group mt-4">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Location ID</th>
                        <th>Practitioner ID</th>
                        <th>Notes</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointment &&
                        appointment.map((obj, index) => {
                          return (
                            <>
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.location_id}</td>
                                <td>{obj.practitioner_id}</td>
                                <td>{obj.notes}</td>
                                <td>{obj.service}</td>

                                <td>{obj.date}</td>
                                <td>{obj.time}</td>
                                <td>
                                  <div className="btn-reveal-trigger position-static">
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
                                        // setAddLocFormData({
                                        //   ...addLocFormData,
                                        //   ...obj,
                                        // });
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
    </>
  );
};
export default AppoinmentsClient;
