import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileSideBar from "../../../profile-sidebar-menu/ProfileSideBar";
import SpinningLoader from "../../../../../services/spinning-loader/SpinningLoader";
import ApiService from "../../../../../services/api-service/ApiService";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Table, Button } from "reactstrap";

const ProfileContacts = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [getClientData, setGetClientData] = useState([]);
  const [patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [isLoading, setIsLoading] = useState(false);

  const getClientTableData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        `patient-contacts/user/${patient.id}`
      );
      console.log(data);
      setGetClientData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const deleteContact = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("delete", `patient-contacts/${id}`);
      console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getClientTableData();
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
          <div>
            <div className="container-fluid">
              <div className="panel-body">
                <div>
                  <div className="form-section-titles mt20">Contacts</div>
                </div>
                <hr />
                <div>
                  <div className="mt-2 mb-4" style={{ display:'flex', justifyContent:'end' }} >
                    <Link to={"/patient-management/create-profile-contact"}>
                      <Button color="primary"> ADD CONTACT </Button>
                    </Link>
                  </div>
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="list">
                      {isLoading ? (
                        <>
                          <tr>
                            <td
                              colSpan="7"
                              style={{
                                textAlign: "center",
                                padding: "20px",
                              }}
                            >
                              <SpinningLoader isLoading={isLoading} />
                            </td>
                          </tr>
                        </>
                      ) : (
                        <>
                          {getClientData.map((obj, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row"> {index + 1} </th>
                                <td>
                                  {obj.firstname +
                                    " " +
                                    obj.middlename +
                                    " " +
                                    obj.lastname}
                                </td>
                                <td>{obj.email}</td>
                                <td> {obj.mobile_number}</td>
                                <td>{obj.address}</td>

                                <td>
                                  <Link to="/create_contact" state={obj}>
                                    <AiFillEdit
                                      style={{
                                        cursor: "pointer",
                                        marginLeft: "2px",
                                        marginRight: "2px",
                                        fontSize: "19px",
                                        color: "blue",
                                      }}
                                      onClick={() => {}}
                                    />
                                  </Link>
                                  <AiOutlineDelete
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "19px",
                                      color: "red",
                                    }}
                                    onClick={() => deleteContact(obj)}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      )}
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
export default ProfileContacts;
