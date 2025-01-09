import React, { useState, useEffect } from "react";
import ProfileSideBar from "../../../profile-sidebar-menu/ProfileSideBar";
import ApiService from "../../../../../services/api-service/ApiService";
import SpinningLoader from "../../../../../services/spinning-loader/SpinningLoader";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
const ProfileDetails = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState([]);
  const [getstate, setGetState] = useState([]);
  const [patientId, setPatientId] = useState(
    JSON.parse(localStorage.getItem("client-information"))
  );

  const [formData, setFormData] = useState({
    preferred_name: "",
    firstname: "",
    middlename: "",
    email: "",
    lastname: "",
    dob: "",
    sex: "",
    gender: "",
    pronoun: "",
    identity: "",
    work_phone: "",
    home_phone: "",
    mobile_number: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    timezone: "",
    comments: "",
    status: "",
    client_type: "client1",
    file_under: "",
    business_name: "",
    occupation: "",
    client_referral: "",
    other_fields: "",
  });

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

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

  const updateProfile = async () => {
    try {
      setIsLoading(true);
      console.log("formData", formData);
      delete formData.hospital_id;
      const ID = patientId.id;
      const data = await ApiService(
        "put",
        `patients/update/details/${ID}`,
        formData
      );
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getProfileData = async () => {
    try {
      setIsLoading(true);
      const ID = patientId.id;
      const data = await ApiService("GET", `patients/details/${ID}`);
      console.log(data);
      setFormData(data);
      console.log("form", formData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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

  useEffect(() => {
    getCountry();
    getProfileData();

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
          {isLoading ? (
            <>
              <SpinningLoader />
            </>
          ) : (
            <>
              <div className="dashboard-content">
                <div className="card">
                  <div id="page-header-application" />
                  <div className="panel-body p-4">
                    <h3 className="profile-det">Profile Details</h3>
                    <hr />
                    <Form>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input
                              id="firstname"
                              name="firstname"
                              placeholder="Enter"
                              type="text"
                              value={formData.firstname}
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="middlename">Middle Name</Label>
                            <Input
                              id="middlename"
                              name="middlename"
                              placeholder="password placeholder"
                              type="text"
                              value={formData.middlename}
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <Input
                              id="lastname"
                              name="lastname"
                              placeholder="Enter Last Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="preferred_name">Preferred Name</Label>
                            <Input
                              id="preferred_name"
                              name="preferred_name"
                              placeholder="Enter Preferred Name"
                              type="text"
                              value={formData.preferred_name}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="dob">Date of Birth</Label>
                            <Input
                              id="dob"
                              name="dob"
                              placeholder="Date of birth"
                              type="date"
                              value={formData.dob}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="sex">Sex</Label>
                            <Input
                              id="sex"
                              name="sex"
                              type="select"
                              value={formData.sex}
                              onChange={handleInputs}
                            >
                              <option value={"unspecified"}>Unspecified</option>
                              <option value={"intersex"}>Intersex</option>
                              <option value={"male"}>Male</option>
                              <option value={"female"}>Female</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="gender">Gender</Label>
                            <Input
                              id="gender"
                              name="gender"
                              type="select"
                              value={formData.gender}
                              onChange={handleInputs}
                            >
                              <option value={"bigender"}>Bigender</option>
                              <option value={"agender"}>Agender</option>
                              <option value={"binary"}>Non-binary</option>
                              <option value={"male"}>Male</option>
                              <option value={"female"}>Female</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="pronoun">Pronouns</Label>
                            <Input
                              id="pronoun"
                              name="pronoun"
                              type="select"
                              value={formData.pronoun}
                              onChange={handleInputs}
                            >
                              <option value={"she"}>she/her</option>
                              <option value={"he"}>he/him</option>
                              <option value={"they"}>they/them</option>
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col md={4}>
                          <FormGroup>
                            <Label for="identity">Identity</Label>
                            <Input
                              id="identity"
                              name="identity"
                              placeholder="Enter Identity"
                              type="text"
                              value={formData.identity}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="mobile_number">Contact Details</Label>
                            <Input
                              id="mobile_number"
                              name="mobile_number"
                              type="number"
                              value={formData.mobile_number}
                              onChange={handleInputs}
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="mobile_number">Mobile Number</Label>
                            <Input
                              id="mobile_number"
                              name="mobile_number"
                              type="number"
                              value={formData.mobile_number}
                              onChange={handleInputs}
                            ></Input>
                          </FormGroup>
                        </Col>

                        <Col md={4}>
                          <FormGroup>
                            <Label for="work_phone">Work Phone</Label>
                            <Input
                              id="work_phone"
                              name="work_phone"
                              placeholder="Enter work phone"
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
                            <Label for="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputs}
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="country">Country</Label>
                            <Input
                              id="country"
                              name="country"
                              placeholder="Enter work phone"
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
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                              id="city"
                              name="city"
                              placeholder="Enter work phone"
                              type="text"
                              value={formData.city}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="postcode">Postcode</Label>
                            <Input
                              id="postcode"
                              name="postcode"
                              type="text"
                              value={formData.postcode}
                              onChange={handleInputs}
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                              id="address"
                              name="address"
                              type="text"
                              value={formData.address}
                              onChange={handleInputs}
                            ></Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="timezone">Time Zone</Label>
                            <Input
                              id="timezone"
                              name="timezone"
                              type="select"
                              value={formData.timezone}
                              onChange={handleInputs}
                            >
                              <option value="utc">
                                (UTC-12:00) International Date Line West
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="status">Status</Label>
                            <Input
                              id="status"
                              name="status"
                              type="select"
                              value={formData.status}
                              onChange={handleInputs}
                            >
                              <option value={"active"}>Active</option>
                              <option value={"closed"}>Closed</option>
                              <option value={"follow"}>
                                Follow Up Required
                              </option>
                              <option value={"hold"}>On Hold</option>
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col md={4}>
                          <FormGroup>
                            <Label for="client_referral">Client Type</Label>
                            <Input
                              id="client_referral"
                              name="client_referral"
                              placeholder="Enter work phone"
                              type="select"
                              value={formData.client_referral}
                              onChange={handleInputs}
                            >
                              <option value={"client1"}>
                                Example Client Type 1
                              </option>
                              <option value={"client2"}>
                                Example Client Type 2
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="file_under">File Under</Label>
                            <Input
                              id="file_under"
                              name="file_under"
                              type="text"
                              value={formData.file_under}
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
                              type="text"
                              value={formData.business_name}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>

                        <Col md={4}>
                          <FormGroup>
                            <Label for="occupation">Occupation</Label>
                            <Input
                              id="occupation"
                              name="occupation"
                              placeholder="Enter work phone"
                              type="text"
                              value={formData.occupation}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="client_referral">
                              How Client Heard About Us
                            </Label>
                            <Input
                              id="client_referral"
                              name="client_referral"
                              type="select"
                              value={formData.client_referral}
                              onChange={handleInputs}
                            >
                              <option value={"internet"}>Internet</option>
                              <option value={"referal"}>Referral</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="comments">Additional Comments</Label>
                            <Input
                              id="comments"
                              name="comments"
                              type="textarea"
                              value={formData.comments}
                              onChange={handleInputs}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <div className="mt-4" >
                            <Button color="primary" onClick={() => updateProfile()}>Update</Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
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
export default ProfileDetails;
