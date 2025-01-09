import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import ApiService from "../../../../../services/api-service/ApiService";

export default function AddBills({isEdit, modal, toggle}) {
  const [patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [addLocFormData, setAddLocFormData] = useState({
    patient_id: patient.id,
    practitioner_id: patient.practitioner_id,
    hospital_id: patient.hospital_id,
    date: "",
    amount: null,
    method: "",
    notes: "",
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
      const data = await ApiService("post", "payments/create", addLocFormData);
    //   fetchData();
      console.log(data);
    //   setIsLoading(false);
    } catch (error) {
    //   setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      addLocFormData["payment_id"] = "editObj.id";
    //   setIsLoading(true);
      await ApiService("PUT", `payments/update`, addLocFormData);
    //   setIsLoading(false);
      delete addLocFormData["payment_id"];
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


  return (
    <>
       <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add Payment</ModalHeader>
        <ModalBody>
        <form>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            id="date"
            name="date"
            placeholder="Pick a Date"
            type="date"
            onChange={handleFormValues}
            value={addLocFormData.date}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input
            id="amount"
            name="amount"
            placeholder="Enter Amount"
            type="text"
            onChange={handleFormValues}
            value={addLocFormData.amount}
          />
        </FormGroup>
        <FormGroup>
          <Label for="method">Payment Method</Label>
          <Input
            id="method"
            name="method"
            placeholder="Pick Payment Method"
            type="select"
            value={addLocFormData.method}
            onChange={handleFormValues}
          >
            <option value="bank">Bank</option>
            <option value="cash">Cash</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="amount">Notes</Label>
          <Input
            id="amount"
            name="amount"
            placeholder="Enter Notes"
            type="textarea"
            onChange={handleFormValues}
            value={addLocFormData.notes}
            rows="1"
          />
        </FormGroup>
      </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel & Close
          </Button>{' '}
          <Button color="primary"  onClick={handleLocationData}>
          {isEdit ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
