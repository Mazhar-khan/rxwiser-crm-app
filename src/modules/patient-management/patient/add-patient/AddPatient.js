import React, { useEffect, useState } from "react";
import ApiService from "../../../../services/api-service/ApiService";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

export default function AddPatient({ modal, toggle, editObj, isEdit, isLoading }) {
  const [addPatient, setAddPatient] = useState({
    type: "patient",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
    isactive: 1,
    hospital_id: 4,
    practitioner_id: 10,
  });

  const handleFormValues = async (e) => {
    try {
      const { name, value } = e.target;
      console.log(name, value);
      setAddPatient((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } catch (error) {}
  };

  const saveLocation = async () => {
    try {
      // setIsLoading(true);
      const data = await ApiService("post", "patients/create", addPatient);
      // fetchData();
      console.log(data);
      // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      const id = "";
      // setIsLoading(true);
      await ApiService("PUT", `patients/update/${id}`, addPatient);
      // setIsLoading(false);
      // fetchData();
    } catch (error) {
      // setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (isEdit) {
      editLocation();
    } else {
      saveLocation();
    }
  };

  useEffect(() => {
    if (isEdit && editObj) {
      setAddPatient((prevData) => ({
        ...prevData,
        ...editObj,
      }));
    } else {
      setAddPatient({
        type: "patient",
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        password: "",
        phone_number: "",
        isactive: 1,
        hospital_id: 4,
        practitioner_id: 10,
      });
    }
  }, [isEdit, editObj]);

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {" "}
          {isEdit ? "Edit" : "Add"} Patient {isEdit}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Enter First Name"
                type="text"
                onChange={handleFormValues}
                value={addPatient.firstname}
              />
            </FormGroup>
            <FormGroup>
              <Label for="middlename">Middle Name</Label>
              <Input
                id="middlename"
                name="middlename"
                placeholder="Enter Middle Name"
                type="text"
                onChange={handleFormValues}
                value={addPatient.firstname}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Enter Last Name"
                type="text"
                onChange={handleFormValues}
                value={addPatient.firstname}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Email"
                type="email"
                onChange={handleFormValues}
                value={addPatient.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter Password"
                type="password"
                onChange={handleFormValues}
                value={addPatient.password}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone_number">Phone</Label>
              <Input
                id="phone_number"
                name="phone_number"
                placeholder="Enter Phone Number"
                type="number"
                onChange={handleFormValues}
                value={addPatient.phone_number}
              />
              <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel & Close
          </Button>{" "}
          <Button color="primary" onClick={handleSave}>
            {isEdit ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
