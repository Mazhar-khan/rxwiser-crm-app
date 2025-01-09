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

const PractiseLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [getLocation, setGetLocation] = useState([]);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [addLocFormData, setAddLocFormData] = useState({
    hospital_id: 6,
    name: "",
    location_type: "loc 1",
    email: "",
    address: "",
    locality: "",
    post_code: "",
    phone: null,
    town: "",
    fax: "",
    extra_invoice_text: "",
    location_notes: "",
    color_code: "#ffffff",
    active: 1,
    default_status: 1,
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
      const data = await ApiService("post", "locations/create", addLocFormData);
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
      const data = await ApiService("GET", "locations?hospital_id=6");
      setGetLocation(data);
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
      await ApiService("PUT", `locations/update/${id}`, addLocFormData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleLocationData = async () => {
    if (isEdit) {
      console.log("isEdit", isEdit);
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
      const data = await ApiService("delete", `locations/delete/${id}`);
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
    <div>
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body">
            <div style={{ marginTop: "-3%" }}>
              <div className="form-section-titles mt20">Clinics</div>
            </div>
            <hr />
            {/* Show All */}
            <div>
              <div className="panel panel-default">
                <div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <Button color="primary" onClick={toggle}>
                      Add Clinics
                    </Button>
                  </div>
                </div>
                <div className="panel-group mt-4">
                  <div>
                    <div>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>ADDRESS</th>
                            <th>PHONE</th>
                            <th>TOWN</th>
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
                              {getLocation.map((obj, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="align-middle ps-3 name">
                                      {obj.name}
                                    </td>
                                    <td className="align-middle email">
                                      {obj.address}
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      {obj.email}
                                    </td>
                                    <td className="align-middle ps-3 name">
                                      {obj.post_code}
                                    </td>
                                    <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        {/* <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a
                                            className="dropdown-item"
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
                                          </div> */}
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
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleFormValues}
              value={addLocFormData.name}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleFormValues}
              value={addLocFormData.email}
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleFormValues}
              value={addLocFormData.address}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">State</Label>
            <Input
              type="text"
              name="town"
              placeholder="State"
              id="town"
              onChange={handleFormValues}
              value={addLocFormData.town}
            />
          </FormGroup>

          <FormGroup>
            <Label for="post_code">Postcode</Label>
            <Input
              type="text"
              name="post_code"
              placeholder="Post Code"
              id="post_code"
              onChange={handleFormValues}
              value={addLocFormData.post_code}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone"
              onChange={handleFormValues}
              value={addLocFormData.phone}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location_notes">Notes</Label>
            <Input
              type="textarea"
              name="location_notes"
              placeholder="Notes"
              id="location_notes"
              onChange={handleFormValues}
              rows="1"
              value={addLocFormData.location_notes}
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

export default PractiseLocation;
