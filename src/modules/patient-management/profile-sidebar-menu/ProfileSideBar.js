import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function ProfileSideBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const [profile, setProfile] = useState( JSON.parse(localStorage.getItem("client-information")));

  const toggleDropdown = (dropdown) => (e) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown)); // Toggle the clicked dropdown
  };

  return (
    <div className="profile-sidebar">
      <header>
        <a href="#!" className="menu-toggle">
          <i className="fas fa-bars" />
        </a>
        <div className="column-title">
          <span id="menu-header-title">
            <span className="sr-only">Profile Menu:</span>
            <div className="client-profile-menu">
              <div className="MuiScopedCssBaseline-root css-9sqakh">
                <div className="dropdown mega-menu undefined">
                  <a
                    data-selenium-id="client-megamenu"
                    className="menu-trigger highlighted-link"
                    href="#"
                    aria-label="Client Menu"
                  >
                    <span className="display-name">
                      <span>
                        {" "}
                        {profile.firstname} {profile.lastname}{" "}
                      </span>
                    </span>
                    <span className="icon fsize13 ml-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
      </header>
      <nav className="dashboard-nav-list">
        <div
          className={`dashboard-nav-dropdown ${
            activeDropdown === "profile" ? "show" : ""
          }`}
        >
          <a
            href="#!"
            className="dashboard-nav-item dashboard-nav-dropdown-toggle"
            onClick={toggleDropdown("profile")}
          >
            Profile{" "}
          </a>
          <div className="dashboard-nav-dropdown-menu">
            <NavLink
              to="/patient-management/profile-details"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Details
            </NavLink>

            <NavLink
              to="/patient-management/profile-contact"
            //   state={}
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Contacts
            </NavLink>
          </div>
        </div>

        <div
          className={`dashboard-nav-dropdown ${
            activeDropdown === "appointments" ? "show" : ""
          }`}
        >
          <a
            href="#!"
            className="dashboard-nav-item dashboard-nav-dropdown-toggle"
            onClick={toggleDropdown("appointments")}
          >
            Appointment History{" "}
          </a>
          <div className="dashboard-nav-dropdown-menu">
            <NavLink
              to="/patient-management/profile-appointment"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Appointments
            </NavLink>
          </div>
        </div>

        <div
          className={`dashboard-nav-dropdown ${
            activeDropdown === "billing" ? "show" : ""
          }`}
        >
          <a
            href="#!"
            className="dashboard-nav-item dashboard-nav-dropdown-toggle"
            onClick={toggleDropdown("billing")}
          >
            Billing{" "}
          </a>
          <div className="dashboard-nav-dropdown-menu">
            <NavLink
              to="/patient-management/profile-billings"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Payments
            </NavLink>
          </div>
        </div>
        <div
          className={`dashboard-nav-dropdown ${
            activeDropdown === "records" ? "show" : ""
          }`}
        >
          <a
            href="#!"
            className="dashboard-nav-item dashboard-nav-dropdown-toggle"
            onClick={toggleDropdown("records")}
          >
            Records{" "}
          </a>
          <div className="dashboard-nav-dropdown-menu">
            <NavLink
              to="/patient-management/profile-notes"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Notes
            </NavLink>
            <NavLink
              to="/patient-management/profile-files"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Files
            </NavLink>
            <NavLink
              to="/patient-management/profile-diagnose"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Diagnoses
            </NavLink>
            {/* <NavLink
              to="/diagnoses_recomendation"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Recommendation
            </NavLink> */}
            {/* <NavLink
              to="/client-prescription"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Prescription
            </NavLink> */}
          </div>
        </div>
        <div
          className={`dashboard-nav-dropdown ${
            activeDropdown === "communication" ? "show" : ""
          }`}
        >
          <a
            href="#!"
            className="dashboard-nav-item dashboard-nav-dropdown-toggle"
            onClick={toggleDropdown("communication")}
          >
            Communication{" "}
          </a>
          <div className="dashboard-nav-dropdown-menu">
            <NavLink
              to="/patient-management/profile-communication"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Activity
            </NavLink>
          </div>
        </div>
        <div
          className={`dashboard-nav-dropdown ${
            activeDropdown === "admin" ? "show" : ""
          }`}
        >
          <a
            href="#!"
            className="dashboard-nav-item dashboard-nav-dropdown-toggle"
            onClick={toggleDropdown("admin")}
          >
            Admin{" "}
          </a>
          <div className="dashboard-nav-dropdown-menu">
            <NavLink
              to="/patient-management/admin-notes"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Admin Notes
            </NavLink>
            <NavLink
              to="/patient-management/admin-files"
              className={({ isActive }) =>
                `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
              }
            >
              Admin Files
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
