import React, { useState, useEffect } from "react";
import ApiService from "../../../services/api-service/ApiService";
import SpinningLoader from "../../../services/spinning-loader/SpinningLoader";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
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
} from "reactstrap";

const Practitioner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [getPractitioners, setGetPractitioners] = useState([]);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [clinic, setClinic] = useState([]);
  const [editObj, setEditObj] = useState(null);
  const [addPractitionerFormData, setAddPractitionerFormData] = useState({
    type: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
    isactive: 1,
    hospital_id: 4,
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleFormValues = async (e) => {
    try {
      const { name, value } = e.target;
      console.log(name, value);
      setAddPractitionerFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } catch (error) {}
  };

  const fetchClinic = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", "locations?hospital_id=6");
      setClinic(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const saveLocation = async () => {
    try {
      setIsLoading(true);
      addPractitionerFormData["type"] = "practitioner";
      const data = await ApiService(
        "post",
        "practitioners/create",
        addPractitionerFormData
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
        "practitioners/getall?hospital_id=4&user_type=practitioner"
      );
      setGetPractitioners(data);
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
      await ApiService(
        "PUT",
        `practitioners/update/${id}`,
        addPractitionerFormData
      );
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
      const data = await ApiService("delete", `practitioners/delete/${id}`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClinic();
    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body">
            <div style={{ marginTop: "-3%" }}>
              <div className="form-section-titles mt20">Practitioner</div>
            </div>
            <hr />
            {/* Show All */}
            <div id="search-location">
              <div className="panel panel-default">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Button color="primary" onClick={toggle}>
                    Add Practitioner
                  </Button>
                </div>
                <div className="panel-group mt-4">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Active</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
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
                          {getPractitioners.map((obj, index) => {
                            return (
                              <tr key={index}>
                                <th> {index + 1} </th>
                                <td>
                                  {obj.firstname +
                                    " " +
                                    obj.middlename +
                                    " " +
                                    obj.lastname}
                                </td>
                                <td>{obj.email}</td>
                                <td> {obj.phone_number}</td>
                                <td>{obj.is_active}</td>
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

                                      onClick={() => {
                                        setIsEdit(true);
                                        setEditObj(obj);
                                        toggle();
                                        setAddPractitionerFormData({
                                          ...addPractitionerFormData,
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
                                {/* <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#topSlideOutModal"
                                            onClick={() => {
                                              setIsEdit(true);
                                              setEditObj(obj);
                                              setAddPractitionerFormData({
                                              ...addPractitionerFormData,
                                              ...obj,
                                            });
                                            }}
                                          >
                                            View
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#!"
                                          >
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a
                                            className="dropdown-item text-danger"
                                            onClick={() => deleteLocation(obj)}
                                          >
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td> */}
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Practitioner</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              onChange={handleFormValues}
              value={addPractitionerFormData.firstname}
            />
          </FormGroup>

          <FormGroup>
            <Label for="middlename">Middle Name</Label>
            <Input
              type="text"
              id="middlename"
              name="middlename"
              placeholder="Middle Name"
              onChange={handleFormValues}
              value={addPractitionerFormData.middlename}
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleFormValues}
              value={addPractitionerFormData.lastname}
            />
          </FormGroup>

          <FormGroup>
            <Label for="type">Clinics</Label>
            <Input
              type="select"
              name="type"
              placeholder="Clinics"
              id="type"
              onChange={handleFormValues}
              value={addPractitionerFormData.type}
            >
              {clinic.map((clinic, index) => {
                return (
                  <>
                    <option value={clinic.id}>{clinic.name} </option>
                  </>
                );
              })}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              onChange={handleFormValues}
              value={addPractitionerFormData.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleFormValues}
              value={addPractitionerFormData.password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone_number">Phone</Label>
            <Input
              type="number"
              name="phone_number"
              placeholder="Phone"
              id="phone_number"
              onChange={handleFormValues}
              rows="1"
              value={addPractitionerFormData.phone_number}
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
    </div>
  );
};

export default Practitioner;
