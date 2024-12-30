import { useEffect, useState } from "react";
import feather from "feather-icons";

import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();

  // Function to check if a link is active based on the current route
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const [isExpanded] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <aside>
      <nav className="navbar navbar-vertical navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item">
                <div className="nav-item-wrapper">
                  <Link
                    to="/"
                    className={`nav-link label-1 ${isActive("/")}`}
                    role="button"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-icon">
                        <span data-feather="calendar" />
                      </span>
                      <span className="nav-link-text-wrapper">
                        <span className="nav-link-text">Calendar</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </li>

              {/* People Dropdown */}
              <li className="nav-item">
                <div className="nav-item-wrapper">
                  <Link
                    to="#nv-home"
                    className={`nav-link dropdown-indicator label-1 ${
                      isActive("/add") ||
                      isActive("/client") ||
                      isActive("/shared") ||
                      isActive("/contact") ||
                      isActive("/referrers") ||
                      isActive("/third-party") ||
                      isActive("/waitlist")
                    }`}
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="nv-home"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <i
                          className={`fas fa-caret-right dropdown-indicator-icon ${
                            isExpanded ? "rotate" : ""
                          }`}
                        />
                      </div>
                      <span className="nav-link-icon">
                        <i data-feather="users" style={{ fontSize: "6px" }} />
                      </span>
                      <span className="nav-link-text">People</span>
                      <i
                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                        style={{ fontSize: "6px" }}
                      />
                    </div>
                  </Link>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent show"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-home"
                    >
                      <li className="nav-item">
                        <a
                          class="nav-link"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Add</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link
                          class="nav-link"
                          to="/practitioner"
                          className={`nav-link ${isActive("/practitioner")}`}
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Practitioner</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/client"
                          className={`nav-link ${isActive("/client")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Clients</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/shared"
                          className={`nav-link ${isActive("/shared")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Shared</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/contact"
                          className={`nav-link ${isActive("/contact")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Contact</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/referrers"
                          className={`nav-link ${isActive("/referrers")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Referrers</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/third-party"
                          className={`nav-link ${isActive("/third-party")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Third Parties</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/waitlist"
                          className={`nav-link ${isActive("/waitlist")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Waitlist</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Settings Dropdown */}
              <li className="nav-item">
                <hr className="navbar-vertical-line" />
                <div className="nav-item-wrapper">
                  <Link
                    to="#nv-icons"
                    className={`nav-link dropdown-indicator label-1 ${
                      isActive("/business_info") ||
                      isActive("/practise_location") ||
                      isActive("/user_management") ||
                      isActive("/select_practitioners") ||
                      isActive("/payment_received")
                    }`}
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="nv-icons"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon" />
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="settings" />
                      </span>
                      <span className="nav-link-text">Settings</span>
                    </div>
                  </Link>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-icons"
                    >
                      <li className="nav-item">
                        <Link
                          to="/business_info"
                          className={`nav-link ${isActive("/business_info")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Business Information
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/practise_location"
                          className={`nav-link ${isActive(
                            "/practise_location"
                          )}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Locations</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/user_management"
                          className={`nav-link ${isActive("/user_management")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              User Management
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/select_practitioners"
                          className={`nav-link ${isActive(
                            "/select_practitioners"
                          )}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Practitioners</span>
                          </div>
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          to="/payment_received"
                          className={`nav-link ${isActive("/payment_received")}`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Payment</span>
                          </div>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="navbar-vertical-footer">
          <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
            <span className="uil uil-left-arrow-to-left fs-8" />
            <span className="uil uil-arrow-from-right fs-8" />
            <span className="navbar-vertical-footer-text ms-2">
              Collapsed View
            </span>
          </button>
        </div>
      </nav>
      {/*------ Modals Add li top ------- */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: 600, width: "100%" }}
        >
          <div className="modal-content bg-body-highlight">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New
              </h5>
              <button
                className="btn btn-close p-1"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="modal-body"
              style={{ padding: "16px !important", backgroundColor: "#fff" }}
            >
              <div className="row">
                <div className="col-md-4">
                  <h5 className="modal-title md-top" id="exampleModalLabel">
                    Profile Type
                  </h5>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    {/* Client Switch */}
                    <div className="col-md-4 col-6 mt10">
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
                            <span style={{ fontSize: 14 }}>Client</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Shared Switch */}
                    <div className="col-md-4 col-6 mt10">
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
                    <div className="col-md-4 col-6 mt10">
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
                    <div className="col-md-4 col-6 mt10">
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
                    <div className="col-md-4 col-6 mt10">
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
              </div>
              <div className="row align-items-center g-3 mt-2">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label className="lb">Name</label>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Middle"
                  />
                </div>
              </div>
              <div className="row align-items-center g-3 mt-1">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label className="lb">Last Name</label>
                </div>
                <div className="col-lg-8 col-md-4 col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row align-items-center g-3 mt-1">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label className="lb">Mobile Number</label>
                </div>
                <div className="col-lg-8 col-md-4 col-sm-8">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="row align-items-center g-3 mt-1">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label className="lb">Email</label>
                </div>
                <div className="col-lg-8 col-md-4 col-sm-8">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row align-items-center g-3 mt-1">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <label className="lb">Primary practitioner</label>
                </div>
                <div className="col-lg-8 col-md-4 col-sm-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ fontSize: 12, color: "#707f94" }}
                  >
                    <option selected="selected" value="">
                      Select option{" "}
                    </option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-wrapper" style={{ backgroundColor: "#fff" }}>
              <div className="modal-footer">
                <button
                  id="savenewclient"
                  className="btn btn-success shadow validate-form save"
                  type="button"
                >
                  <i className="fa fa-check" /> Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
