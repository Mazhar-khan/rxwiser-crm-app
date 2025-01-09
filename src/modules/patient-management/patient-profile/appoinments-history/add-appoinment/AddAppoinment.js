import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ApiService from "../../../../../services/api-service/ApiService";

export default function AddAppoinment({
  modal,
  toggle,
  isEdit,
  practioner,
  location,
}) {
  const [patientData, setPatientData] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [addLocFormData, setAddLocFormData] = useState({
    patient_id: patientData.id,
    practitioner_id: patientData.practitioner_id,
    hospital_id: patientData.hospital_id,
    location_id: 1,
    date: "",
    time: "",
    service: "",
    notes: "",
    status: "",
  });

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
      //   setIsLoading(true);
      const data = await ApiService(
        "post",
        "appointments/create",
        addLocFormData
      );
      //   fetchData();
      console.log(data);
      //   setIsLoading(false);
    } catch (error) {
      //   setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      //   console.log(editObj);
      //   addLocFormData["appointment_id"] = editObj.id;
      //   setIsLoading(true);
      await ApiService("PUT", `appointments/update`, addLocFormData);
      //   setIsLoading(false);
      delete addLocFormData["appointment_id"];
      //   fetchData();
    } catch (error) {
      //   setIsLoading(false);
    }
  };

  const handleLocationData = async () => {
    if (isEdit) {
      editLocation();
    } else {
      saveLocation();
    }
    // setIsEdit(false);
    // setEditObj(null);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Appointment</ModalHeader>
        <ModalBody>
          <div className="form-block form-block-lg mb20 mt20 pl10 pr10">
            <div className="form-group row">
              <label
                htmlFor="practitioner_id"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Select Practitioner:
              </label>
              <div className="col-sm-8 col-12">
                <select
                  className="valid form-control "
                  name="practitioner_id"
                  id="practitioner_id"
                  onChange={handleFormValues}
                  value={addLocFormData.practitioner_id}
                >
                  {practioner &&
                    practioner.map((obj) => {
                      return (
                        <>
                          <option value={obj.id}>
                            {" "}
                            {obj.firstname} {obj.middlename} {obj.lastname}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="location_id"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Select Location:
              </label>
              <div className="col-sm-8 col-12">
                <select
                  className="valid form-control "
                  name="location_id"
                  id="location_id"
                  onChange={handleFormValues}
                  value={addLocFormData.location_id}
                >
                  {location &&
                    location.map((obj) => {
                      return (
                        <>
                          <option value={obj.id}> {obj.name} </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="service"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Services:
              </label>
              <div className="col-sm-8 col-12">
                <textarea
                  rows="1"
                  className="valid form-control "
                  name="service"
                  id="service"
                  onChange={handleFormValues}
                  value={addLocFormData.service}
                >
                  <option value={"1"}>1</option>
                  <option value={"1"}>1</option>
                  <option value={"1"}>1</option>
                </textarea>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="notes"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Notes:
              </label>
              <div className="col-sm-8 col-12">
                <textarea
                  rows="1"
                  className="valid form-control "
                  name="notes"
                  id="notes"
                  onChange={handleFormValues}
                  value={addLocFormData.notes}
                ></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="status"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Status:
              </label>
              <div className="col-sm-8 col-12">
                <select
                  className="valid form-control "
                  name="status"
                  id="status"
                  onChange={handleFormValues}
                  value={addLocFormData.status}
                >
                  <option value={"pending"}>Pending</option>
                  <option value={"active"}>Active</option>
                  <option value={"completed"}>Completed</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="date"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Appointment Date:
              </label>
              <div className="col-sm-8 col-12">
                <input
                  type="date"
                  className="valid form-control "
                  name="date"
                  id="date"
                  onChange={handleFormValues}
                  value={addLocFormData.date}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="time"
                className="col-sm-4 col-12 col-form-label pr0"
              >
                Appointment Time:
              </label>
              <div className="col-sm-8 col-12">
                <input
                  type="time"
                  className="valid form-control "
                  name="time"
                  id="time"
                  onChange={handleFormValues}
                  value={addLocFormData.time}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggle();
            }}
          >
            Cancel & Close
          </Button>{" "}
          <Button
            color="primary"
            onClick={() => {
              toggle();
              handleLocationData();
            }}
          >
            {isEdit ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
