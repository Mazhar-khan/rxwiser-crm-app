import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

const Client = () => {
  const [activeTab, setActiveTab] = useState('1'); // Initial active tab is Tab 1

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab); // Set the clicked tab as active
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body p-0">
            <div className="form-section-titles mt20">Search</div>
            <hr />
            <div className="panel-body roleSearchContainer">
              <div className="form-section-title mt10">Roles</div>
              <div className="row">
                {/* Client Switch */}
                <div className="col-md-3 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchClient"
                        defaultChecked=""
                        checked
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchClient"
                      >
                        <span style={{ fontSize: 14 }}>Client</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Shared Switch */}
                <div className="col-md-3 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchShared"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchShared"
                      >
                        <span style={{ fontSize: 14 }}>Shared</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Contact Switch */}
                <div className="col-md-3 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchContact"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchContact"
                      >
                        <span style={{ fontSize: 14 }}>Contact</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Referrer Switch */}
                <div className="col-md-3 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchReferrer"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchReferrer"
                      >
                        <span style={{ fontSize: 14 }}>Referrer</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Third Party Switch */}
                <div className="col-md-3 col-6 mt10">
                  <div className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="switchThirdParty"
                      />
                      <label
                        className="d-inline ml10 form-control-label form-check-label"
                        htmlFor="switchThirdParty"
                      >
                        <span style={{ fontSize: 14 }}>Third Party</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-body clientSearchContainer">
              <div className="form-section-title mb10">Search Options</div>
              {/* <div className="btn-group" role="group">
          <button
            className="btn btn-wrap btn-primary js-search-option active"
            type="button"
            data-target="#search-option-name"
          >
            Search by Name
          </button>
          <button
            className="btn btn-wrap btn-primary js-search-option"
            type="button"
            data-target="#search-option-advanced"
          >
            Advanced Search
          </button>
          <button
            className="btn btn-wrap btn-primary js-search-option"
            type="button"
            data-target="#search-option-all"
          >
            Show All
          </button>
        </div> */}
              <div>
             
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === '1' ? 'active' : ''}
                      onClick={() => toggleTab('1')}
                    >
                      <button
                        className={`btn btn-wrap btn-primary js-search-option ${activeTab === '1' ? 'active' : ''}`}
                        type="button"
                        data-target="#search-option-name"
                      >
                        Search by Name
                      </button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '2' ? 'active' : ''}
                      onClick={() => toggleTab('2')}
                    >
                      <button
                        className={`btn btn-wrap btn-primary js-search-option ${activeTab === '2' ? 'active' : ''}`}
                        type="button"
                        data-target="#search-option-advanced"
                      >
                        Advanced Search
                      </button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '3' ? 'active' : ''}
                      onClick={() => toggleTab('3')}
                    >
                      <button
                        className={`btn btn-wrap btn-primary js-search-option ${activeTab === '3' ? 'active' : ''}`}
                        type="button"
                        data-target="#search-option-all"
                      >
                        Show All
                      </button>
                    </NavLink>
                  </NavItem>
                </Nav>
               
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">

                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <div className="row">
                        <div className="col-12 mt20" id="searchFilters">
                          <form id="advanced-seach-form" action="#">
                            <div className="row">
                              {/* <input id="client-role-raw" name="ClientType" type="hidden" value="1" />

                                          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                              data-raw-role-value="16">
                                              <div class="form-group row">
                                                  <label class="col-form-label col-12">Shared Profile
                                                      Name:</label>
                                                  <div class="col-12 col-lg-9">
                                                      <input class="form-control" id="SharedProfileName"
                                                          name="SharedProfileName" type="text" value="" />
                                                  </div>
                                              </div>
                                          </div> */}
                              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                                <div className="form-group row">
                                  <label className="col-form-label col-12 shared-dynamic-label">
                                    First Name:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="ClientFirstName"
                                      name="ClientFirstName"
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                                <div className="form-group row">
                                  <label className="col-form-label col-12 shared-dynamic-label">
                                    Last Name:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="ClientLastName"
                                      name="ClientLastName"
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={16}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">File Under:</label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="FileUnder"
                                      name="FileUnder"
                                      title="Filter by any part of the client's File Under attribute."
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                                <div className="form-group row">
                                  <label className="col-form-label col-12 shared-dynamic-label">
                                    Telephone:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="Phone"
                                      name="Phone"
                                      title="Search for any of the Client's telephone numbers"
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={16}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Business Name:</label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="BusinessName"
                                      name="BusinessName"
                                      title="Filter by any part of the business name"
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                                <div className="form-group row">
                                  <label className="col-form-label col-12 shared-dynamic-label">
                                    Email:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="Email"
                                      name="Email"
                                      title="Filter by any part of the client's email address."
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Sex:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Sexes</option>
                                      <option value={642938}>Female</option>
                                      <option value={642936}>Intersex</option>
                                      <option value={642937}>Male</option>
                                      <option value={642935}>Unspecified</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Gender Identity:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Gender Identities</option>
                                      <option value={642931}>Agender</option>
                                      <option value={642930}>Bigender</option>
                                      <option value={642934}>Female</option>
                                      <option value={642933}>Male</option>
                                      <option value={642932}>Non-binary</option>
                                      <option value={642929}>Unspecified</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={10}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">
                                    Primary Practitioner:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Practitioners</option>
                                      <option value={181607}>Muhammad</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Client Status:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Statuses</option>
                                      <option value={1}>Active</option>
                                      <option value={4}>Closed</option>
                                      <option value={2}>Follow Up Required</option>
                                      <option value={3}>On Hold</option>
                                      <option value={0}>None Allocated</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Client Type:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Client Types</option>
                                      <option value={164524}>Example Client Type 1</option>
                                      <option value={164523}>Example Client Type 2</option>
                                      <option value={0}>None Allocated</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Archived:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option selected="selected" value={1}>
                                        Non-Archived Only
                                      </option>
                                      <option value={0}>Archived Clients Only</option>
                                      <option value={-1}>Archived and Non-Archived</option>
                                      <option value={2}>Flagged for Deletion</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={18}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Referrers:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Referrers</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10 mb-lg-n3"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">
                                    Date Of Birth Range:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <div className="row">
                                      <div className="col">
                                        <div className="input-group">
                                        <input type="date" id="messageDate" className="form-control" />
                                          <div className="input-group-append input-group-addon">
                                            {/* <span
                                              className="input-group-text input-group-addon-gray"
                                              id="datetimepicker"
                                            >
                                              <i className="far fa-calendar-alt" />
                                            </span> */}
                                          </div>
                                        </div>
                                        <small>Start</small>
                                      </div>
                                      <div className="col">
                                        <div className="input-group date bs-datepicker">
                                          <input
                                            autoComplete="off"
                                            className="form-control "
                                            id="DateOfBirthEnd"
                                            name="DateOfBirthEnd"
                                            type="text"
                                            uimessages="System.Collections.Generic.List`1[System.Object]"
                                            defaultValue=""
                                          />
                                          <div className="input-group-append input-group-addon">
                                            <span className="input-group-text input-group-addon-gray">
                                              <i className="far fa-calendar-alt" />
                                            </span>
                                          </div>
                                        </div>
                                        <small>End</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={16}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">
                                    Marketing Communication:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option selected="selected" value={-1}>
                                        All Statuses
                                      </option>
                                      <option value={0}>Opted In</option>
                                      <option value={1}>Opted Out</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={16}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Marketing Source:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Sources</option>
                                      <option value={-1}>Source Not Selected</option>
                                      <option value={1}>Internet</option>
                                      <option value={2}>Referral</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={2}
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Referrer Type:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Types</option>
                                      <option value={1}>Client</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Insurance Number:</label>
                                  <div className="col-12 col-lg-9">
                                    <input
                                      className="form-control"
                                      id="InsuranceNumber"
                                      name="InsuranceNumber"
                                      type="text"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={26}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">
                                    Assigned Practitioners:
                                  </label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option value="">All Practitioners</option>
                                      <option value={181607}>Muhammad</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                data-raw-role-value={16}
                                data-role-action="hide"
                              >
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Receives SMS:</label>
                                  <div className="col-12 col-lg-9">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      style={{ fontSize: 12, color: "#707f94" }}
                                    >
                                      <option selected="selected" value="">
                                        All Statuses
                                      </option>
                                      <option value={0}>Subscribed</option>
                                      <option value={1}>Unsubscribed</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10 mb-lg-n3">
                                <div className="form-group row">
                                  <label className="col-form-label col-12">Date Added:</label>
                                  <div className="col-12 col-lg-9">
                                    <div className="row">
                                      <div className="col">
                                        <div className="input-group date bs-datepicker">
                                          <input
                                            autoComplete="off"
                                            className="form-control "
                                            id="DateAddedStart"
                                            name="DateAddedStart"
                                            type="text"
                                            uimessages="System.Collections.Generic.List`1[System.Object]"
                                            defaultValue=""
                                          />
                                          <div className="input-group-append input-group-addon">
                                            <span className="input-group-text input-group-addon-gray">
                                              <i className="far fa-calendar-alt" />
                                            </span>
                                          </div>
                                        </div>
                                        <small>Start</small>
                                      </div>
                                      <div className="col">
                                        <div className="input-group date bs-datepicker">
                                          <input
                                            autoComplete="off"
                                            className="form-control "
                                            id="DateAddedEnd"
                                            name="DateAddedEnd"
                                            type="text"
                                            uimessages="System.Collections.Generic.List`1[System.Object]"
                                            defaultValue=""
                                          />
                                          <div className="input-group-append input-group-addon">
                                            <span className="input-group-text input-group-addon-gray">
                                              <i className="far fa-calendar-alt" />
                                            </span>
                                          </div>
                                        </div>
                                        <small>End</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="appointments-section"
                              className="mt-5"
                              data-raw-role-value={14}
                              data-role-action="hide"
                            >
                              <div className="form-section-title mb20">Appointments</div>
                              <div className="row mt-4">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                                  <div className="form-group">
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="switchClient"
                                        defaultChecked=""
                                      />
                                      <label
                                        className="d-inline ml10 form-control-label form-check-label"
                                        htmlFor="switchClient"
                                      >
                                        <span style={{ fontSize: 14 }}>No Future Appointments</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                                  <div className="form-group row">
                                    <label className="col-form-label col-12">
                                      Had an Appointment Between:
                                    </label>
                                    <div className="col-12 col-lg-9">
                                      <div className="row">
                                        <div className="col">
                                          <div className="input-group date bs-datepicker">
                                            <input
                                              autoComplete="off"
                                              className="form-control "
                                              id="HadAppointmentsStartDate"
                                              name="HadAppointmentsStartDate"
                                              type="text"
                                              uimessages="System.Collections.Generic.List`1[System.Object]"
                                              defaultValue=""
                                            />
                                            <div className="input-group-append input-group-addon">
                                              <span className="input-group-text input-group-addon-gray">
                                                <i className="far fa-calendar-alt" />
                                              </span>
                                            </div>
                                          </div>
                                          <small>Start</small>
                                        </div>
                                        <div className="col">
                                          <div className="input-group date bs-datepicker">
                                            <input
                                              autoComplete="off"
                                              className="form-control "
                                              id="HadAppointmentsEndDate"
                                              name="HadAppointmentsEndDate"
                                              type="text"
                                              uimessages="System.Collections.Generic.List`1[System.Object]"
                                              defaultValue=""
                                            />
                                            <div className="input-group-append input-group-addon">
                                              <span className="input-group-text input-group-addon-gray">
                                                <i className="far fa-calendar-alt" />
                                              </span>
                                            </div>
                                          </div>
                                          <small>End</small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                                  <div className="form-group row">
                                    <label className="col-form-label col-12">
                                      No Appointments Between:
                                    </label>
                                    <div className="col-12 col-lg-9">
                                      <div className="row">
                                        <div className="col">
                                          <div className="input-group date bs-datepicker">
                                            <input
                                              autoComplete="off"
                                              className="form-control "
                                              id="NoAppointmentsStartDate"
                                              name="NoAppointmentsStartDate"
                                              type="text"
                                              uimessages="System.Collections.Generic.List`1[System.Object]"
                                              defaultValue=""
                                            />
                                            <div className="input-group-append input-group-addon">
                                              <span className="input-group-text input-group-addon-gray">
                                                <i className="far fa-calendar-alt" />
                                              </span>
                                            </div>
                                          </div>
                                          <small>Start</small>
                                        </div>
                                        <div className="col">
                                          <div className="input-group date bs-datepicker">
                                            <input
                                              autoComplete="off"
                                              className="form-control "
                                              id="NoAppointmentsEndDate"
                                              name="NoAppointmentsEndDate"
                                              type="text"
                                              uimessages="System.Collections.Generic.List`1[System.Object]"
                                              defaultValue=""
                                            />
                                            <div className="input-group-append input-group-addon">
                                              <span className="input-group-text input-group-addon-gray">
                                                <i className="far fa-calendar-alt" />
                                              </span>
                                            </div>
                                          </div>
                                          <small>End</small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                                  <div className="form-group row">
                                    <label
                                      className="col-form-label col-12"
                                      htmlfor="practitionerIds"
                                    >
                                      Appointment Practitioner:
                                    </label>
                                    <div className="col-12 col-lg-9">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        style={{ fontSize: 12, color: "#707f94" }}
                                      >
                                        <option value="">All Practitioners</option>
                                        <option value={181607}>Muhammad</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                                  <div className="form-group row">
                                    <label className="col-form-label col-12">
                                      Appointment Location:
                                    </label>
                                    <div className="col-12 col-lg-9">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        style={{ fontSize: 12, color: "#707f94" }}
                                      >
                                        <option value="">All Locations</option>
                                        <option value={369883}>Prime Care Movers</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-5">
                              <div className="col-12">
                                <button
                                  id="action-submit"
                                  type="submit"
                                  className="float-right btn btn-lg btn-green shadow"
                                >
                                  <i className="fa fa-search fa-margin" /> SHOW FILTERED LIST
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="d-flex">
                      <div className="panel panel-default hidden" id="client-list">
                        <div className="panel-group mt-4">
                          <div className="export-options float-left text-center text-sm-left">
                            <button
                              id="report-print-main"
                              className="btn btn-primary shadow mr10"
                              type="button"
                            >
                              <i className="fa fa-print mr5" />
                              <span>PRINT</span>
                            </button>
                            <button
                              id="report-excel-main"
                              className="btn btn-teal shadow mr10"
                              type="button"
                            >
                              <i className="fas fa-file-excel mr5" />
                              <span>EXCEL</span>
                            </button>
                            <button
                              id="report-pdf-main"
                              className="btn btn-salmon shadow"
                              type="button"
                            >
                              <i className="fas fa-file-pdf mr5" />
                              <span>PDF</span>
                            </button>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="panel-group mt-4">
                          <div className="table-caption text-center text-uppercase">
                            Search Results
                          </div>
                          <div
                            id="tableExample"
                            data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
                          >
                            <div
                              className="table-responsive"
                              style={{
                                border: "2px solid #d7e3e8 !important",
                                borderRadius: "2px 2px 8px 8px"
                              }}
                            >
                              <table className="table table-sm fs-9 mb-0">
                                <thead>
                                  <tr>
                                    <th
                                      className="sort border-top border-translucent ps-3"
                                      data-sort="name"
                                    >
                                      Name
                                    </th>
                                    <th
                                      className="sort border-top border-translucent"
                                      data-sort="email"
                                    >
                                      Email
                                    </th>
                                    <th
                                      className="sort border-top border-translucent desc"
                                      data-sort="age"
                                    >
                                      Age
                                    </th>
                                    <th
                                      className="sort text-end align-middle pe-0 border-top border-translucent"
                                      scope="col"
                                    >
                                      ACTION
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="list">
                                  <tr>
                                    <td className="align-middle ps-3 name">Janessa Mann</td>
                                    <td className="align-middle email">janessa@example.com</td>
                                    <td className="align-middle age">65</td>
                                    <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        <button
                                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          data-boundary="window"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-bs-reference="parent"
                                        >
                                          <svg
                                            className="svg-inline--fa fa-ellipsis fs-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="ellipsis"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                            ></path>
                                          </svg>
                                          {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a className="dropdown-item" href="#!">
                                            View
                                          </a>
                                          <a className="dropdown-item" href="#!">
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item text-danger" href="#!">
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">Oscar</td>
                                    <td className="align-middle email">oscar@example.com</td>
                                    <td className="align-middle age">52</td>
                                    <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        <button
                                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          data-boundary="window"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-bs-reference="parent"
                                        >
                                          <svg
                                            className="svg-inline--fa fa-ellipsis fs-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="ellipsis"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                            ></path>
                                          </svg>
                                          {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a className="dropdown-item" href="#!">
                                            View
                                          </a>
                                          <a className="dropdown-item" href="#!">
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item text-danger" href="#!">
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">Jennifer</td>
                                    <td className="align-middle email">jennifer@example.com</td>
                                    <td className="align-middle age">52</td>
                                    <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        <button
                                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          data-boundary="window"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-bs-reference="parent"
                                        >
                                          <svg
                                            className="svg-inline--fa fa-ellipsis fs-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="ellipsis"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                            ></path>
                                          </svg>
                                          {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a className="dropdown-item" href="#!">
                                            View
                                          </a>
                                          <a className="dropdown-item" href="#!">
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item text-danger" href="#!">
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">Raymond</td>
                                    <td className="align-middle email">raymond@example.com</td>
                                    <td className="align-middle age">52</td>
                                    <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        <button
                                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          data-boundary="window"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-bs-reference="parent"
                                        >
                                          <svg
                                            className="svg-inline--fa fa-ellipsis fs-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="ellipsis"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                            ></path>
                                          </svg>
                                          {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a className="dropdown-item" href="#!">
                                            View
                                          </a>
                                          <a className="dropdown-item" href="#!">
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item text-danger" href="#!">
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="align-middle ps-3 name">Clayton Arnold</td>
                                    <td className="align-middle email">clayton@example.com</td>
                                    <td className="align-middle age">52</td>
                                    <td className="align-middle white-space-nowrap text-end pe-0">
                                      <div className="btn-reveal-trigger position-static">
                                        <button
                                          className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          data-boundary="window"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          data-bs-reference="parent"
                                        >
                                          <svg
                                            className="svg-inline--fa fa-ellipsis fs-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="ellipsis"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                            ></path>
                                          </svg>
                                          {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a className="dropdown-item" href="#!">
                                            View
                                          </a>
                                          <a className="dropdown-item" href="#!">
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a className="dropdown-item text-danger" href="#!">
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="d-flex flex-between-center pt-3">
                              <div className="pagination d-none">
                                <li className="active">
                                  <button className="page" type="button" data-i={1} data-page={5}>
                                    1
                                  </button>
                                </li>
                                <li>
                                  <button className="page" type="button" data-i={2} data-page={5}>
                                    2
                                  </button>
                                </li>
                                <li>
                                  <button className="page" type="button" data-i={3} data-page={5}>
                                    3
                                  </button>
                                </li>
                                <li className="disabled">
                                  <button className="page" type="button">
                                    ...
                                  </button>
                                </li>
                              </div>
                              <p className="mb-0 fs-9">
                                <span
                                  className="d-none d-sm-inline-block"
                                  data-list-info="data-list-info"
                                >
                                  1 to 5 <span className="text-body-tertiary"> Items of </span>43
                                </span>
                                <span className="d-none d-sm-inline-block"> — </span>
                                <a className="fw-semibold" href="#!" data-list-view="*">
                                  View all
                                  <svg
                                    className="svg-inline--fa fa-angle-right ms-1"
                                    data-fa-transform="down-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                    style={{ transformOrigin: "0.3125em 0.5625em" }}
                                  >
                                    <g transform="translate(160 256)">
                                      <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                        <path
                                          fill="currentColor"
                                          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                          transform="translate(-160 -256)"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                  {/* <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                                </a>
                                <a className="fw-semibold d-none" href="#!" data-list-view="less">
                                  View Less
                                  <svg
                                    className="svg-inline--fa fa-angle-right ms-1"
                                    data-fa-transform="down-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                    style={{ transformOrigin: "0.3125em 0.5625em" }}
                                  >
                                    <g transform="translate(160 256)">
                                      <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                        <path
                                          fill="currentColor"
                                          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                          transform="translate(-160 -256)"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                  {/* <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                                </a>
                              </p>
                              <div className="d-flex">
                                <button
                                  className="btn btn-sm btn-primary disabled"
                                  type="button"
                                  data-list-pagination="prev"
                                  disabled=""
                                >
                                  <span>Previous</span>
                                </button>
                                <button
                                  className="btn btn-sm btn-primary px-4 ms-2"
                                  type="button"
                                  data-list-pagination="next"
                                >
                                  <span>Next</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </Row>
                  </TabPane>
                </TabContent>
              </div>
              <div id="search-option-name" className="collapse show">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt20">
                    <div className="form-group">
                      <p className="fsize12">
                        Type a few letters from the Name and select from the list
                      </p>
                      <div className="col-12 pl0 pr0">
                        <div id="b28dd890-030e-4984-be01-cad744566d04" />
                        <div className="results autocomplete-powerdiary" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="form-group has-search position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name..."
                        />
                        <span className="fa fa-search form-control-feedback" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advanced Search */}
              <div id="search-option-advanced" className="collapse">
                <div className="row">
                  <div className="col-12 mt20" id="searchFilters">
                    <form id="advanced-seach-form" action="#">
                      <div className="row">
                        {/* <input id="client-role-raw" name="ClientType" type="hidden" value="1" />

                                          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                                              data-raw-role-value="16">
                                              <div class="form-group row">
                                                  <label class="col-form-label col-12">Shared Profile
                                                      Name:</label>
                                                  <div class="col-12 col-lg-9">
                                                      <input class="form-control" id="SharedProfileName"
                                                          name="SharedProfileName" type="text" value="" />
                                                  </div>
                                              </div>
                                          </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                          <div className="form-group row">
                            <label className="col-form-label col-12 shared-dynamic-label">
                              First Name:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="ClientFirstName"
                                name="ClientFirstName"
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                          <div className="form-group row">
                            <label className="col-form-label col-12 shared-dynamic-label">
                              Last Name:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="ClientLastName"
                                name="ClientLastName"
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={16}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              File Under:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="FileUnder"
                                name="FileUnder"
                                title="Filter by any part of the client's File Under attribute."
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                          <div className="form-group row">
                            <label className="col-form-label col-12 shared-dynamic-label">
                              Telephone:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="Phone"
                                name="Phone"
                                title="Search for any of the Client's telephone numbers"
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={16}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Business Name:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="BusinessName"
                                name="BusinessName"
                                title="Filter by any part of the business name"
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                          <div className="form-group row">
                            <label className="col-form-label col-12 shared-dynamic-label">
                              Email:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="Email"
                                name="Email"
                                title="Filter by any part of the client's email address."
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">Sex:</label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Sexes</option>
                                <option value={642938}>Female</option>
                                <option value={642936}>Intersex</option>
                                <option value={642937}>Male</option>
                                <option value={642935}>Unspecified</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Gender Identity:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Gender Identities</option>
                                <option value={642931}>Agender</option>
                                <option value={642930}>Bigender</option>
                                <option value={642934}>Female</option>
                                <option value={642933}>Male</option>
                                <option value={642932}>Non-binary</option>
                                <option value={642929}>Unspecified</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={10}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Primary Practitioner:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Practitioners</option>
                                <option value={181607}>Muhammad</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Client Status:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Statuses</option>
                                <option value={1}>Active</option>
                                <option value={4}>Closed</option>
                                <option value={2}>Follow Up Required</option>
                                <option value={3}>On Hold</option>
                                <option value={0}>None Allocated</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Client Type:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Client Types</option>
                                <option value={164524}>Example Client Type 1</option>
                                <option value={164523}>Example Client Type 2</option>
                                <option value={0}>None Allocated</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10">
                          <div className="form-group row">
                            <label className="col-form-label col-12">Archived:</label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option selected="selected" value={1}>
                                  Non-Archived Only
                                </option>
                                <option value={0}>Archived Clients Only</option>
                                <option value={-1}>Archived and Non-Archived</option>
                                <option value={2}>Flagged for Deletion</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={18}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Referrers:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Referrers</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10 mb-lg-n3"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Date Of Birth Range:
                            </label>
                            <div className="col-12 col-lg-9">
                              <div className="row">
                                <div className="col">
                                  <div className="input-group">
                                    <input
                                      className="form-control datetimepicker"
                                      id="datetimepicker"
                                      type="text"
                                      placeholder="dd/mm/yyyy hour : minute"
                                      data-options='{"enableTime":true,"dateFormat":"d/m/y H:i","disableMobile":true}'
                                    />
                                    <div className="input-group-append input-group-addon">
                                      <span
                                        className="input-group-text input-group-addon-gray"
                                        id="datetimepicker"
                                      >
                                        <i className="far fa-calendar-alt" />
                                      </span>
                                    </div>
                                  </div>
                                  <small>Start</small>
                                </div>
                                <div className="col">
                                  <div className="input-group date bs-datepicker">
                                    <input
                                      autoComplete="off"
                                      className="form-control "
                                      id="DateOfBirthEnd"
                                      name="DateOfBirthEnd"
                                      type="text"
                                      uimessages="System.Collections.Generic.List`1[System.Object]"
                                      defaultValue=""
                                    />
                                    <div className="input-group-append input-group-addon">
                                      <span className="input-group-text input-group-addon-gray">
                                        <i className="far fa-calendar-alt" />
                                      </span>
                                    </div>
                                  </div>
                                  <small>End</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={16}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Marketing Communication:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option selected="selected" value={-1}>
                                  All Statuses
                                </option>
                                <option value={0}>Opted In</option>
                                <option value={1}>Opted Out</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={16}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Marketing Source:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Sources</option>
                                <option value={-1}>Source Not Selected</option>
                                <option value={1}>Internet</option>
                                <option value={2}>Referral</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={2}
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Referrer Type:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Types</option>
                                <option value={1}>Client</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Insurance Number:
                            </label>
                            <div className="col-12 col-lg-9">
                              <input
                                className="form-control"
                                id="InsuranceNumber"
                                name="InsuranceNumber"
                                type="text"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={26}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Assigned Practitioners:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option value="">All Practitioners</option>
                                <option value={181607}>Muhammad</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 col-12 mt10"
                          data-raw-role-value={16}
                          data-role-action="hide"
                        >
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Receives SMS:
                            </label>
                            <div className="col-12 col-lg-9">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ fontSize: 12, color: "#707f94" }}
                              >
                                <option selected="selected" value="">
                                  All Statuses
                                </option>
                                <option value={0}>Subscribed</option>
                                <option value={1}>Unsubscribed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt10 mb-lg-n3">
                          <div className="form-group row">
                            <label className="col-form-label col-12">
                              Date Added:
                            </label>
                            <div className="col-12 col-lg-9">
                              <div className="row">
                                <div className="col">
                                  <div className="input-group date bs-datepicker">
                                    <input
                                      autoComplete="off"
                                      className="form-control "
                                      id="DateAddedStart"
                                      name="DateAddedStart"
                                      type="text"
                                      uimessages="System.Collections.Generic.List`1[System.Object]"
                                      defaultValue=""
                                    />
                                    <div className="input-group-append input-group-addon">
                                      <span className="input-group-text input-group-addon-gray">
                                        <i className="far fa-calendar-alt" />
                                      </span>
                                    </div>
                                  </div>
                                  <small>Start</small>
                                </div>
                                <div className="col">
                                  <div className="input-group date bs-datepicker">
                                    <input
                                      autoComplete="off"
                                      className="form-control "
                                      id="DateAddedEnd"
                                      name="DateAddedEnd"
                                      type="text"
                                      uimessages="System.Collections.Generic.List`1[System.Object]"
                                      defaultValue=""
                                    />
                                    <div className="input-group-append input-group-addon">
                                      <span className="input-group-text input-group-addon-gray">
                                        <i className="far fa-calendar-alt" />
                                      </span>
                                    </div>
                                  </div>
                                  <small>End</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="appointments-section"
                        className="mt-5"
                        data-raw-role-value={14}
                        data-role-action="hide"
                      >
                        <div className="form-section-title mb20">Appointments</div>
                        <div className="row mt-4">
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                            <div className="form-group">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="switchClient"
                                  defaultChecked=""
                                />
                                <label
                                  className="d-inline ml10 form-control-label form-check-label"
                                  htmlFor="switchClient"
                                >
                                  <span style={{ fontSize: 14 }}>
                                    No Future Appointments
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                            <div className="form-group row">
                              <label className="col-form-label col-12">
                                Had an Appointment Between:
                              </label>
                              <div className="col-12 col-lg-9">
                                <div className="row">
                                  <div className="col">
                                    <div className="input-group date bs-datepicker">
                                      <input
                                        autoComplete="off"
                                        className="form-control "
                                        id="HadAppointmentsStartDate"
                                        name="HadAppointmentsStartDate"
                                        type="text"
                                        uimessages="System.Collections.Generic.List`1[System.Object]"
                                        defaultValue=""
                                      />
                                      <div className="input-group-append input-group-addon">
                                        <span className="input-group-text input-group-addon-gray">
                                          <i className="far fa-calendar-alt" />
                                        </span>
                                      </div>
                                    </div>
                                    <small>Start</small>
                                  </div>
                                  <div className="col">
                                    <div className="input-group date bs-datepicker">
                                      <input
                                        autoComplete="off"
                                        className="form-control "
                                        id="HadAppointmentsEndDate"
                                        name="HadAppointmentsEndDate"
                                        type="text"
                                        uimessages="System.Collections.Generic.List`1[System.Object]"
                                        defaultValue=""
                                      />
                                      <div className="input-group-append input-group-addon">
                                        <span className="input-group-text input-group-addon-gray">
                                          <i className="far fa-calendar-alt" />
                                        </span>
                                      </div>
                                    </div>
                                    <small>End</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                            <div className="form-group row">
                              <label className="col-form-label col-12">
                                No Appointments Between:
                              </label>
                              <div className="col-12 col-lg-9">
                                <div className="row">
                                  <div className="col">
                                    <div className="input-group date bs-datepicker">
                                      <input
                                        autoComplete="off"
                                        className="form-control "
                                        id="NoAppointmentsStartDate"
                                        name="NoAppointmentsStartDate"
                                        type="text"
                                        uimessages="System.Collections.Generic.List`1[System.Object]"
                                        defaultValue=""
                                      />
                                      <div className="input-group-append input-group-addon">
                                        <span className="input-group-text input-group-addon-gray">
                                          <i className="far fa-calendar-alt" />
                                        </span>
                                      </div>
                                    </div>
                                    <small>Start</small>
                                  </div>
                                  <div className="col">
                                    <div className="input-group date bs-datepicker">
                                      <input
                                        autoComplete="off"
                                        className="form-control "
                                        id="NoAppointmentsEndDate"
                                        name="NoAppointmentsEndDate"
                                        type="text"
                                        uimessages="System.Collections.Generic.List`1[System.Object]"
                                        defaultValue=""
                                      />
                                      <div className="input-group-append input-group-addon">
                                        <span className="input-group-text input-group-addon-gray">
                                          <i className="far fa-calendar-alt" />
                                        </span>
                                      </div>
                                    </div>
                                    <small>End</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                            <div className="form-group row">
                              <label
                                className="col-form-label col-12"
                                htmlfor="practitionerIds"
                              >
                                Appointment Practitioner:
                              </label>
                              <div className="col-12 col-lg-9">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  style={{ fontSize: 12, color: "#707f94" }}
                                >
                                  <option value="">All Practitioners</option>
                                  <option value={181607}>Muhammad</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb10">
                            <div className="form-group row">
                              <label className="col-form-label col-12">
                                Appointment Location:
                              </label>
                              <div className="col-12 col-lg-9">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  style={{ fontSize: 12, color: "#707f94" }}
                                >
                                  <option value="">All Locations</option>
                                  <option value={369883}>Prime Care Movers</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-12">
                          <button
                            id="action-submit"
                            type="submit"
                            className="float-right btn btn-lg btn-green shadow"
                          >
                            <i className="fa fa-search fa-margin" /> SHOW FILTERED
                            LIST
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Show All */}
              <div id="search-option-all" className="collapse">
                <div className="panel panel-default hidden" id="client-list">
                  <div className="panel-group mt-4">
                    <div className="export-options float-left text-center text-sm-left">
                      <button
                        id="report-print-main"
                        className="btn btn-primary shadow mr10"
                        type="button"
                      >
                        <i className="fa fa-print mr5" />
                        <span>PRINT</span>
                      </button>
                      <button
                        id="report-excel-main"
                        className="btn btn-teal shadow mr10"
                        type="button"
                      >
                        <i className="fas fa-file-excel mr5" />
                        <span>EXCEL</span>
                      </button>
                      <button
                        id="report-pdf-main"
                        className="btn btn-salmon shadow"
                        type="button"
                      >
                        <i className="fas fa-file-pdf mr5" />
                        <span>PDF</span>
                      </button>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="panel-group mt-4">
                    <div className="table-caption text-center text-uppercase">
                      Search Results
                    </div>
                    <div
                      id="tableExample"
                      data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
                    >
                      <div
                        className="table-responsive"
                        style={{
                          border: "2px solid #d7e3e8 !important",
                          borderRadius: "2px 2px 8px 8px"
                        }}
                      >
                        <table className="table table-sm fs-9 mb-0">
                          <thead>
                            <tr>
                              <th
                                className="sort border-top border-translucent ps-3"
                                data-sort="name"
                              >
                                Name
                              </th>
                              <th
                                className="sort border-top border-translucent"
                                data-sort="email"
                              >
                                Email
                              </th>
                              <th
                                className="sort border-top border-translucent desc"
                                data-sort="age"
                              >
                                Age
                              </th>
                              <th
                                className="sort text-end align-middle pe-0 border-top border-translucent"
                                scope="col"
                              >
                                ACTION
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <td className="align-middle ps-3 name">Janessa Mann</td>
                              <td className="align-middle email">
                                janessa@example.com
                              </td>
                              <td className="align-middle age">65</td>
                              <td className="align-middle white-space-nowrap text-end pe-0">
                                <div className="btn-reveal-trigger position-static">
                                  <button
                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-boundary="window"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-bs-reference="parent"
                                  >
                                    <svg
                                      className="svg-inline--fa fa-ellipsis fs-10"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="ellipsis"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                      ></path>
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end py-2">
                                    <a className="dropdown-item" href="#!">
                                      View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#!"
                                    >
                                      Remove
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="align-middle ps-3 name">Oscar</td>
                              <td className="align-middle email">
                                oscar@example.com
                              </td>
                              <td className="align-middle age">52</td>
                              <td className="align-middle white-space-nowrap text-end pe-0">
                                <div className="btn-reveal-trigger position-static">
                                  <button
                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-boundary="window"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-bs-reference="parent"
                                  >
                                    <svg
                                      className="svg-inline--fa fa-ellipsis fs-10"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="ellipsis"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                      ></path>
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end py-2">
                                    <a className="dropdown-item" href="#!">
                                      View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#!"
                                    >
                                      Remove
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="align-middle ps-3 name">Jennifer</td>
                              <td className="align-middle email">
                                jennifer@example.com
                              </td>
                              <td className="align-middle age">52</td>
                              <td className="align-middle white-space-nowrap text-end pe-0">
                                <div className="btn-reveal-trigger position-static">
                                  <button
                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-boundary="window"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-bs-reference="parent"
                                  >
                                    <svg
                                      className="svg-inline--fa fa-ellipsis fs-10"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="ellipsis"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                      ></path>
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end py-2">
                                    <a className="dropdown-item" href="#!">
                                      View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#!"
                                    >
                                      Remove
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="align-middle ps-3 name">Raymond</td>
                              <td className="align-middle email">
                                raymond@example.com
                              </td>
                              <td className="align-middle age">52</td>
                              <td className="align-middle white-space-nowrap text-end pe-0">
                                <div className="btn-reveal-trigger position-static">
                                  <button
                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-boundary="window"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-bs-reference="parent"
                                  >
                                    <svg
                                      className="svg-inline--fa fa-ellipsis fs-10"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="ellipsis"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                      ></path>
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end py-2">
                                    <a className="dropdown-item" href="#!">
                                      View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#!"
                                    >
                                      Remove
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="align-middle ps-3 name">
                                Clayton Arnold
                              </td>
                              <td className="align-middle email">
                                clayton@example.com
                              </td>
                              <td className="align-middle age">52</td>
                              <td className="align-middle white-space-nowrap text-end pe-0">
                                <div className="btn-reveal-trigger position-static">
                                  <button
                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    data-boundary="window"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-bs-reference="parent"
                                  >
                                    <svg
                                      className="svg-inline--fa fa-ellipsis fs-10"
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="ellipsis"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                      ></path>
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end py-2">
                                    <a className="dropdown-item" href="#!">
                                      View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#!"
                                    >
                                      Remove
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="d-flex flex-between-center pt-3">
                        <div className="pagination d-none">
                          <li className="active">
                            <button
                              className="page"
                              type="button"
                              data-i={1}
                              data-page={5}
                            >
                              1
                            </button>
                          </li>
                          <li>
                            <button
                              className="page"
                              type="button"
                              data-i={2}
                              data-page={5}
                            >
                              2
                            </button>
                          </li>
                          <li>
                            <button
                              className="page"
                              type="button"
                              data-i={3}
                              data-page={5}
                            >
                              3
                            </button>
                          </li>
                          <li className="disabled">
                            <button className="page" type="button">
                              ...
                            </button>
                          </li>
                        </div>
                        <p className="mb-0 fs-9">
                          <span
                            className="d-none d-sm-inline-block"
                            data-list-info="data-list-info"
                          >
                            1 to 5{" "}
                            <span className="text-body-tertiary"> Items of </span>43
                          </span>
                          <span className="d-none d-sm-inline-block"> — </span>
                          <a className="fw-semibold" href="#!" data-list-view="*">
                            View all
                            <svg
                              className="svg-inline--fa fa-angle-right ms-1"
                              data-fa-transform="down-1"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="angle-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                              style={{ transformOrigin: "0.3125em 0.5625em" }}
                            >
                              <g transform="translate(160 256)">
                                <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                  <path
                                    fill="currentColor"
                                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    transform="translate(-160 -256)"
                                  />
                                </g>
                              </g>
                            </svg>
                            {/* <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                          </a>
                          <a
                            className="fw-semibold d-none"
                            href="#!"
                            data-list-view="less"
                          >
                            View Less
                            <svg
                              className="svg-inline--fa fa-angle-right ms-1"
                              data-fa-transform="down-1"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="angle-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                              style={{ transformOrigin: "0.3125em 0.5625em" }}
                            >
                              <g transform="translate(160 256)">
                                <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                  <path
                                    fill="currentColor"
                                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    transform="translate(-160 -256)"
                                  />
                                </g>
                              </g>
                            </svg>
                            {/* <span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span> Font Awesome fontawesome.com */}
                          </a>
                        </p>
                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-primary disabled"
                            type="button"
                            data-list-pagination="prev"
                            disabled=""
                          >
                            <span>Previous</span>
                          </button>
                          <button
                            className="btn btn-sm btn-primary px-4 ms-2"
                            type="button"
                            data-list-pagination="next"
                          >
                            <span>Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Client;


