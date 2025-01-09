import React, { useState, useEffect } from "react";
import ApiService from "../../../../services/api-service/ApiService";
import SpinningLoader from "../../../../services/spinning-loader/SpinningLoader";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Table, Row, Col, Button } from "reactstrap";
import AddPatient from "../add-patient/AddPatient";

const PatientList = () => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getPatient, setGetPatient] = useState([]);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);

  const toggle = () => setModal(!modal);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", "patients/practitioner/10");
      setGetPatient(data);
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
      const data = await ApiService("delete", `patients/${id}/delete`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="panel-body">
      <div>
        <h4>Patients</h4>
      </div>
      <hr />
      <AddPatient
        modal={modal}
        toggle={toggle}
        isEdit={isEdit}
        editObj={editObj}
        isLoading ={isLoading}
      />
      <div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            color="primary"
            onClick={() => {
              setIsEdit(false);
              toggle();
            }}
          >
            ADD PATIENT
          </Button>
        </div>
        <div className="panel-group mt-4">
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getPatient.map((patient, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row"> {index + 1} </th>
                      <td>
                        {" "}
                        {patient.firstname} {patient.middlename}{" "}
                        {patient.lastname}{" "}
                      </td>
                      <td> {patient.email} </td>
                      <td> {patient.phone_number} </td>
                      <td>
                        <Link to={"/patient-management/profile-details"}>
                          <AiOutlineEye
                            className="cursor"
                            onClick={() => {
                              localStorage.removeItem("client-information");
                              localStorage.setItem(
                                "client-information",
                                JSON.stringify(patient)
                              );
                            }}
                          />
                        </Link>
                        <AiFillEdit
                          className="cursor"
                          onClick={() => {
                            setIsEdit(true);
                            setModal(true);
                            setEditObj(patient);
                          }}
                        />
                        <AiOutlineDelete
                          className="cursor"
                          onClick={() => deleteLocation(patient)}
                        />
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
  );
};



export default PatientList;
