import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileSideBar from "../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../services/api-service/ApiService";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import SpinningLoader from "../../../../services/spinning-loader/SpinningLoader";
import { Link } from "react-router-dom";
import AddBills from "./add-bills/AddBills";
import { Button, Table } from "reactstrap";
const Payment = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [getLocation, setGetLocation] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Function to toggle the sidebar menu
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", `payments?patient_id=${patient.id}`);
      setGetLocation(data);
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
      const data = await ApiService("delete", `payments/delete/${id}`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

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
              <div className="form-section-titles mt20">Payments Received</div>
              <hr />
              <div className="panel-body">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Button className="mb-4" color="primary" onClick={toggle}>
                    Add Payment
                  </Button>
                </div>
                <AddBills isEdit={isEdit} toggle={toggle} modal={modal} />
                    <div
                    >
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Notes</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

                        {getLocation &&
                            getLocation.map((obj) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      {obj.amount}
                                    </td>
                                    <td>
                                      {obj.method}
                                    </td>
                                    <td>
                                      {obj.practitioner_id}
                                    </td>
                                    <td>
                                      {obj.notes}
                                    </td>
                                    <td>
                                      {obj.date}
                                    </td>
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
export default Payment;
