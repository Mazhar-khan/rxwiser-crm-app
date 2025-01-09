import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileSideBar from "../../../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../../../services/api-service/ApiService";
import SpinningLoader from "../../../../../../services/spinning-loader/SpinningLoader";
import { useLocation } from "react-router-dom";
import {
  Form,
  Input,
  Label,
  FormGroup,
  Row,
  Col,
  InputGroupText,
  InputGroup,
  Button
} from "reactstrap";

const CreateContact = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState([]);
  const [getstate, setGetState] = useState([]);
  const location = useLocation();
  const [contact, setContact] = useState(location.state);
  const [patientName, setPatientName] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );
  const [formData, setFormData] = useState({
    user_id: patientName?.id,
    firstname: "",
    lastname: "",
    middlename: "",
    preferred_name: "",
    dob: "",
    sex: "",
    gender: "",
    pronoun: "",
    identity: "",
    mobile_number: "",
    work_phone: "",
    home_phone: "",
    email: "",
    notes: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    timezone: "",
    comments: "",
    status: "",
    client_type: "",
    file_under: "",
    business_name: "",
    relation: "",
    occupation: "",
    client_referral: "",
    disclosure_level: 1,
    disclosure_level_value: "Full",
    portal_appointment: 1,
    appointment_reminder: 1,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (name === "country") {
      getStateFun(value);
    }
  };

  const getStateFun = async (val) => {
    try {
      setIsLoading(true);
      const data = await ApiService("get", `states/${val}`);
      setGetState(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSaveContact = async () => {
    console.log("handle click");

    try {
      setIsLoading(true);
      const data = await ApiService("post", "patient-contacts", formData);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  const getPatient = async () => {
    if (contact && contact.id) {
      try {
        setIsLoading(true);
        const data = await ApiService("get", `patient-contacts/${contact.id}`);
        console.log(data);
        setFormData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  const getCountry = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("get", "countries");
      console.log(data);
      setCountry(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Close sidebar if screen size increases
  useEffect(() => {
    getCountry();
    getPatient();
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
          {isLoading ? (
            <>
              <SpinningLoader />
            </>
          ) : (
            <>
              <div className="dashboard-content">
                <div className="card">
                  <div className="panel-body">
                    <h3 className="profile-det">
                      {contact && contact.id
                        ? "Update Contact"
                        : "Create Contact"}
                    </h3>
                    <hr />
                    <Form>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="relation">Relationship</Label>
                            <InputGroup>
                              <Input
                                type="select"
                                placeholder="Select Relative of Patient"
                                id="relation"
                                name="relation"
                                value={formData.relation}
                                onChange={handleInputs}
                              >
                                <option value={"father"}>Father</option>
                                <option value={"mother"}>Mother</option>
                                <option value={"brother"}>Brother</option>
                                <option value={"sister"}>Sister</option>
                                <option value={"wife"}>Wife</option>
                                <option value={"husband"}>Husband</option>
                              </Input>
                              <InputGroupText>
                                {patientName.firstname} {patientName.middlename}{" "}
                                {patientName.lastname}
                              </InputGroupText>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input
                              id="firstname"
                              name="firstname"
                              placeholder="First Name"
                              type="text"
                              value={formData.firstname}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="middlename">Middle Name</Label>
                            <Input
                              id="middlename"
                              name="middlename"
                              placeholder="Middle Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <InputGroup>
                              <Input
                                type="text"
                                placeholder="Last Name"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleInputs}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="preferred_name">Preferred Name</Label>
                            <Input
                              id="preferred_name"
                              type="text"
                              placeholder="Preferred Name"
                              name="preferred_name"
                              value={formData.preferred_name}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="middlename">Date of Birth</Label>
                            <Input
                              id="datepicker"
                              type="date"
                              placeholder="dd/mm/yyyy"
                              name="dob"
                              value={formData.dob}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="sex">Sex</Label>
                            <InputGroup>
                              <Input
                                type="select"
                                placeholder="Select"
                                id="sex"
                                name="sex"
                                value={formData.sex}
                                onChange={handleInputs}
                              >
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="unspecified">Unspecified</option>
                                <option value="intersex">Intersex</option>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input
                              id="gender"
                              name="gender"
                              placeholder="Gender"
                              type="select"
                              value={formData.gender}
                              onChange={handleInputs}
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="unspecified">Unspecified</option>
                              <option value="bigender">Bigender</option>
                              <option value="agender">Agender</option>
                              <option value="nonbinary">Non-binary</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="pronoun">Pronouns</Label>
                            <Input
                              id="pronoun"
                              name="pronoun"
                              placeholder="Pronoun"
                              type="select"
                              value={formData.pronoun}
                              onChange={handleInputs}
                            >
                              <option value={"he"}>he/him</option>
                              <option value={"she"}>she/her</option>
                              <option value={"they"}>they/them</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="sex">Identity</Label>
                            <InputGroup>
                              <Input
                                type="text"
                                placeholder="Identity"
                                id="identity"
                                name="identity"
                                value={formData.identity}
                                onChange={handleInputs}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="mobile_number">Mobile Number</Label>
                            <Input
                              id="mobile_number"
                              name="mobile_number"
                              placeholder="Mobile Number"
                              type="number"
                              value={formData.mobile_number}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="work_phone">Work Number</Label>
                            <Input
                              id="work_phone"
                              name="work_phone"
                              placeholder="Work Phone"
                              type="number"
                              value={formData.work_phone}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="sex">Home Phone</Label>
                            <InputGroup>
                              <Input
                                type="number"
                                placeholder="Home Phone"
                                id="home_phone"
                                name="home_phone"
                                value={formData.home_phone}
                                onChange={handleInputs}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              placeholder="Mobile Number"
                              type="email"
                              value={formData.email}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="business_name">Business Name</Label>
                            <Input
                              id="business_name"
                              name="business_name"
                              placeholder="Business Name"
                              type="text"
                              value={formData.business_name}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="country">Country</Label>
                            <Input
                              id="country"
                              name="country"
                              placeholder="Mobile Number"
                              type="select"
                              value={formData.country}
                              onChange={handleInputs}
                            >
                              {country.map((obj, index) => {
                                return (
                                  <option key={index} value={obj.id}>
                                    {obj.name}
                                  </option>
                                );
                              })}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="state">State</Label>
                            <Input
                              id="state"
                              name="state"
                              placeholder="State"
                              type="select"
                              value={formData.state}
                              onChange={handleInputs}
                            >
                              {getstate.map((obj, index) => {
                                return (
                                  <option key={index} value={obj.id}>
                                    {obj.name || "Not found any state"}
                                  </option>
                                );
                              })}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="city">City</Label>
                            <InputGroup>
                              <Input
                                type="text"
                                placeholder="City"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputs}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="postcode">Postcode</Label>
                            <Input
                              id="postcode"
                              name="postcode"
                              placeholder="Postcode"
                              type="text"
                              value={formData.postcode}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                              id="address"
                              name="address"
                              placeholder="Address"
                              type="text"
                              value={formData.address}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>

                        <Col md={4}>
                          <FormGroup>
                            <Label for="notes">Notes</Label>
                            <InputGroup>
                              <Input
                                type="textarea"
                                placeholder="Notes"
                                id="notes"
                                name="notes"
                                rows={1}
                                value={formData.notes}
                                onChange={handleInputs}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <div style={{ display:'flex', justifyContent:'center' }} >
                      <Button
                        color="primary"
                        onClick={() => handleSaveContact()}
                      >
                        {contact && contact.id ? "Update" : "Save"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default CreateContact;
