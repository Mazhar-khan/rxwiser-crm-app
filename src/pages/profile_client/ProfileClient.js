import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const ProfileClient = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Track the currently active dropdown
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = (dropdown) => (e) => {
        e.preventDefault();
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown)); // Toggle the clicked dropdown
    };

    // Function to toggle the sidebar menu
    const toggleSidebar = (e) => {
        e.preventDefault();
        setSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar if screen size increases
    useEffect(() => {
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
                    <header>
                        <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
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
                                                    <span>Muhammad Waqas</span>
                                                </span>
                                                <span className="icon fsize13 ml-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <small>
                                (3)&nbsp;
                                <a className="roleLink client" href="#">
                                    Client
                                </a>
                            </small>
                        </div>
                    </header>
                    <nav className="dashboard-nav-list">
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "profile" ? "show" : ""
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
                                    to="/profile_client"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Details
                                </NavLink>

                                <NavLink
                                    to="/client_contact"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Contacts
                                </NavLink>

                                <NavLink
                                    to="/referral-received"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Referrals
                                </NavLink>
                                <NavLink
                                    to="/appoinments-remindar"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Appointment Reminders
                                </NavLink>
                                <NavLink to="/client-task" className={({ isActive }) =>
                                    `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                } >  Tasks </NavLink>
                            </div>
                        </div>

                        <div className={`dashboard-nav-dropdown ${activeDropdown === "appointments" ? "show" : ""
                            }`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("appointments")}
                            >
                                Appointments{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/appoinments_client"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Appointments
                                </NavLink>
                                <NavLink
                                    to="/appointment_statistics"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </div>
                        </div>

                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "billing" ? "show" : ""}`}
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
                                    to="/billing_setup"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Billing Setup
                                </NavLink>

                                <NavLink
                                    to="insurance.html" className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Insurance
                                </NavLink>

                                <NavLink
                                    to="/invoices" className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Invoice
                                </NavLink>
                                <NavLink
                                    to="/payment_received" className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Payments
                                </NavLink>
                            </div>
                        </div>
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "records" ? "show" : ""}`}
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
                                    to="notes.html"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Notes
                                </NavLink>
                                <NavLink
                                    to="/record_files"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Files
                                </NavLink>
                                <NavLink
                                    to="correspondence"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Correspondence
                                </NavLink>
                                <NavLink
                                    to="/client_diagnoses"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Diagnoses
                                </NavLink>
                            </div>
                        </div>
                        <div className={`dashboard-nav-dropdown ${activeDropdown === "communication" ? "show" : ""}`}>
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("communication")}
                            >
                                Communication{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/communication_activity"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Activity
                                </NavLink>
                                <NavLink
                                    to="/create_sms"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    New SMS
                                </NavLink>
                                <NavLink
                                    to="new_email"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    New Email
                                </NavLink>
                                <NavLink
                                    to="/create_letter"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    New Letter
                                </NavLink>
                            </div>
                        </div>
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "admin" ? "show" : ""}`}
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
                                    to="/admin_manage"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Manage
                                </NavLink>
                                <NavLink
                                    to="/admin_notes"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Admin Notes
                                </NavLink>
                                <NavLink
                                    to="/admin_files"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Admin Files
                                </NavLink>
                                <NavLink
                                    to="/admin_form"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Admin Forms
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="dashboard-app">
                    <header className="dashboard-toolbar">
                        <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
                            <i className="fas fa-bars" />
                        </a>

                    </header>
                    <div className="dashboard-content">
                        <div className="card">
                            <div id="page-header-application" />
                            <form action="#" data-prompt-unsaved="" method="post">
                                <div className="panel-body p-4">
                                    <h3 className="profile-det">Profile Details</h3>
                                    <hr />
                                    <div className="row mt20 mb10">
                                        <div className="col-xl-6 col-12 pr-md-4">
                                            <div className="form-group row">
                                                <h3 className="section-heading col-12">
                                                    Identifying Information
                                                </h3>
                                            </div>
                                            <div className="form-group row mb10 mt10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="NameView_Salutation"
                                                >
                                                    Salutation
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected="selected" value="">
                                                            No Salutation
                                                        </option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Ms">Ms</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Miss">Miss</option>
                                                        <option value="Mx">Mx</option>
                                                        <option value="Master">Master</option>
                                                        <option value="Dr">Dr</option>
                                                        <option value="Prof">Prof</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="NameView_ClientFirstName"
                                                >
                                                    Name
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <input
                                                        className="form-control medicare-first-name"
                                                        data-val="true"
                                                        data-val-length="The field First Name must be a string with a maximum length of 100."
                                                        data-val-length-max={100}
                                                        data-val-required="The First Name field is required."
                                                        id="NameView_ClientFirstName"
                                                        maxLength={100}
                                                        name="NameView.ClientFirstName"
                                                        placeholder="First Name"
                                                        type="text"
                                                        defaultValue="Muhammad"
                                                    />
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="NameView.ClientFirstName"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                                <label className="sr-only" htmlFor="NameView_ClientMiddleName">
                                                    Middle Name
                                                </label>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-length="The field ClientMiddleName must be a string with a maximum length of 80."
                                                        data-val-length-max={80}
                                                        id="NameView_ClientMiddleName"
                                                        maxLength={80}
                                                        name="NameView.ClientMiddleName"
                                                        placeholder="Middle Name"
                                                        type="text"
                                                        defaultValue="khan"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="NameView_ClientLastName"
                                                >
                                                    Last Name
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control medicare-last-name"
                                                        data-val="true"
                                                        data-val-length="The field ClientLastName must be a string with a maximum length of 80."
                                                        data-val-length-max={80}
                                                        id="NameView_ClientLastName"
                                                        maxLength={80}
                                                        name="NameView.ClientLastName"
                                                        placeholder="Last Name"
                                                        type="text"
                                                        defaultValue="Waqas"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="NameView_PreferredClientName"
                                                >
                                                    Preferred Name
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-length="The field PreferredClientName must be a string with a maximum length of 200."
                                                        data-val-length-max={200}
                                                        id="NameView_PreferredClientName"
                                                        maxLength={200}
                                                        name="NameView.PreferredClientName"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb20" id="clientDateofBirthBlock">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="BirthView_DateOfBirth"
                                                >
                                                    Date of Birth
                                                </label>
                                                <div className="col-lg-8 col-sm-12 col-12">
                                                    <div className="input-group date bs-datepicker">
                                                        <input
                                                            autoComplete="off"
                                                            className="form-control  form-control medicare-date-of-birth"
                                                            currentmenuitem="ClientDetails"
                                                            id="BirthView_DateOfBirth"
                                                            name="BirthView.DateOfBirth"
                                                            style={{ minWidth: 93 }}
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
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="BirthView.DateOfBirth"
                                                        data-valmsg-replace="true"
                                                    />
                                                    <span className="fsize11 d-none" id="clientAge">
                                                        (Age: <span id="ageYears" /> yrs, <span id="ageMonths" />{" "}
                                                        mths)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group row mt20">
                                                <h3 className="section-heading col-12">
                                                    Gender, Sex, and Pronouns
                                                </h3>
                                            </div>
                                            <div className="form-group row mb10 mt10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="BirthView_SexId"
                                                >
                                                    Sex and Gender
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <select
                                                        id="BirthView_SexId"
                                                        name="BirthView.SexId"
                                                        className="form-control"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value={642935} data-default-pronoun-id={3}>
                                                            Unspecified
                                                        </option>
                                                        <option value={642936} data-default-pronoun-id={3}>
                                                            Intersex
                                                        </option>
                                                        <option value={642937} data-default-pronoun-id={2}>
                                                            Male
                                                        </option>
                                                        <option value={642938} data-default-pronoun-id={1}>
                                                            Female
                                                        </option>
                                                    </select>
                                                    <span className="fsize11">Sex</span>
                                                </div>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <select
                                                        id="BirthView_GenderIdentityId"
                                                        name="BirthView.GenderIdentityId"
                                                        className="form-control"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value={642929} data-default-pronoun-id={3}>
                                                            Unspecified
                                                        </option>
                                                        <option value={642930} data-default-pronoun-id={3}>
                                                            Bigender
                                                        </option>
                                                        <option value={642931} data-default-pronoun-id={3}>
                                                            Agender
                                                        </option>
                                                        <option value={642932} data-default-pronoun-id={3}>
                                                            Non-binary
                                                        </option>
                                                        <option value={642933} data-default-pronoun-id={2}>
                                                            Male
                                                        </option>
                                                        <option value={642934} data-default-pronoun-id={1}>
                                                            Female
                                                        </option>
                                                    </select>
                                                    <span className="fsize11">Gender Identity</span>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <div className="col-lg-4 col-12">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="BirthView_PreferredPronounId"
                                                    >
                                                        Pronouns
                                                    </label>
                                                    <span id="preferred-pronouns-icon" />
                                                </div>
                                                <div className="col-lg-8 col-12">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value={1}>she/her</option>
                                                        <option value={2}>he/him</option>
                                                        <option value={3}>they/them</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb20">
                                                <div className="col-lg-4 col-12">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="BirthView_IdentityNote"
                                                    >
                                                        Identity
                                                    </label>
                                                    <span id="identity-note-icon" />
                                                </div>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-length="The field Identity must be a string with a maximum length of 50."
                                                        data-val-length-max={50}
                                                        id="BirthView_IdentityNote"
                                                        maxLength={50}
                                                        name="BirthView.IdentityNote"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                data-val="true"
                                                data-val-required="The PreferredPronounAssignedByUser field is required."
                                                id="BirthView_PreferredPronounAssignedByUser"
                                                name="BirthView.PreferredPronounAssignedByUser"
                                                type="hidden"
                                                defaultValue="False"
                                            />
                                            <input
                                                hidden="hidden"
                                                id="pronouns"
                                                defaultValue='[{"Id":1,"Name":"she/her","Active":true},{"Id":2,"Name":"he/him","Active":true},{"Id":3,"Name":"they/them","Active":true}]'
                                            />
                                            <input hidden="hidden" id="model-pronoun-id" />
                                            <div className="form-group row mt20">
                                                <h3 className="section-heading col-12">Contact Details</h3>
                                            </div>
                                            <div className="form-group row mb10 mt10 mobile-number-group">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="PhoneView_ClientMobile"
                                                >
                                                    Mobile Number
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-length="The mobile number must be less than 25 characters"
                                                        data-val-length-max={25}
                                                        data-val-mobilenumber=""
                                                        data-val-phonenumberbasic=""
                                                        id="PhoneView_ClientMobile"
                                                        maxLength={25}
                                                        name="PhoneView.ClientMobile"
                                                        type="text"

                                                    />
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="PhoneView.ClientMobile"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="PhoneView_WorkPhone"
                                                >
                                                    Telephone
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-landlineormobilenumber=""
                                                        data-val-length="The work phone number must be less than 25 characters"
                                                        data-val-length-max={25}
                                                        data-val-phonenumberbasic=""
                                                        id="PhoneView_WorkPhone"
                                                        maxLength={25}
                                                        name="PhoneView.WorkPhone"
                                                        placeholder="Work Phone"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                    <span className="fsize11">Work</span>
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="PhoneView.WorkPhone"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <label className="sr-only" htmlFor="PhoneView_HomePhone">
                                                        Home Phone
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-landlineormobilenumber=""
                                                        data-val-length="The home phone number must be less than 25 characters"
                                                        data-val-length-max={25}
                                                        data-val-phonenumberbasic=""
                                                        id="PhoneView_HomePhone"
                                                        maxLength={25}
                                                        name="PhoneView.HomePhone"
                                                        placeholder="Home Phone"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                    <span className="fsize11 ">Home</span>
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="PhoneView.HomePhone"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="PhoneView_ClientEmail"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        id="PhoneView_ClientEmail"
                                                        name="PhoneView.ClientEmail"
                                                        title="Filter by any part of the client's email address."
                                                        type="text"
                                                        defaultValue="mwaqasdgk789@gmail.com"
                                                    />
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="PhoneView.ClientEmail"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="AddressView_Address"
                                                >
                                                    Address
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <textarea
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="The field Address must be a string or array type with a maximum length of '255'."
                                                        data-val-maxlength-max={255}
                                                        id="AddressView_Address"
                                                        maxLength={255}
                                                        name="AddressView.Address"
                                                        rows={2}
                                                        defaultValue={"            "}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="AddressView_Suburb"
                                                >
                                                    City
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="The field Suburb must be a string or array type with a maximum length of '50'."
                                                        data-val-maxlength-max={50}
                                                        id="AddressView_Suburb"
                                                        maxLength={50}
                                                        name="AddressView.Suburb"
                                                        placeholder="Suburb/Town"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="AddressView_Region"
                                                >
                                                    State
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="The field Region must be a string or array type with a maximum length of '50'."
                                                        data-val-maxlength-max={50}
                                                        id="AddressView_Region"
                                                        maxLength={50}
                                                        name="AddressView.Region"
                                                        placeholder="State"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <label className="sr-only" htmlFor="AddressView_Postcode">
                                                        Postcode
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-length="The field Postcode must be a string with a maximum length of 20."
                                                        data-val-length-max={20}
                                                        id="AddressView_Postcode"
                                                        maxLength={20}
                                                        name="AddressView.Postcode"
                                                        placeholder="Postcode"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Country
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="">Select a Country...</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AX">Åland Islands</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AS">American Samoa</option>
                                                        <option value="AD">Andorra</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarctica</option>
                                                        <option value="AG">Antigua And Barbuda</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="BY">Belarus</option>
                                                        <option value="BE">Belgium</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="BO">Bolivia</option>
                                                        <option value="BQ">Bonaire, Sint Eustatius And Saba</option>
                                                        <option value="BA">Bosnia And Herzegovina</option>
                                                        <option value="BW">Botswana</option>
                                                        <option value="BV">Bouvet Island</option>
                                                        <option value="BR">Brazil</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="BG">Bulgaria</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CM">Cameroon</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="KY">Cayman Islands</option>
                                                        <option value="CF">Central African Republic</option>
                                                        <option value="TD">Chad</option>
                                                        <option value="CL">Chile</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="CO">Colombia</option>
                                                        <option value="KM">Comoros</option>
                                                        <option value="CG">Congo</option>
                                                        <option value="CD">
                                                            Congo, The Democratic Republic Of The
                                                        </option>
                                                        <option value="CK">Cook Islands</option>
                                                        <option value="CR">Costa Rica</option>
                                                        <option value="CI">Côte D'Ivoire</option>
                                                        <option value="HR">Croatia</option>
                                                        <option value="CU">Cuba</option>
                                                        <option value="CW">Curaçao</option>
                                                        <option value="CY">Cyprus</option>
                                                        <option value="CZ">Czech Republic</option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="DM">Dominica</option>
                                                        <option value="DO">Dominican Republic</option>
                                                        <option value="EC">Ecuador</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="GQ">Equatorial Guinea</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="ET">Ethiopia</option>
                                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                                        <option value="FO">Faroe Islands</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="FI">Finland</option>
                                                        <option value="FR">France</option>
                                                        <option value="GF">French Guiana</option>
                                                        <option value="PF">French Polynesia</option>
                                                        <option value="TF">French Southern Territories</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="GH">Ghana</option>
                                                        <option value="GI">Gibraltar</option>
                                                        <option value="GR">Greece</option>
                                                        <option value="GL">Greenland</option>
                                                        <option value="GD">Grenada</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GN">Guinea</option>
                                                        <option value="GW">Guinea-Bissau</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">
                                                            Heard Island And Mcdonald Islands
                                                        </option>
                                                        <option value="VA">Holy See (Vatican City State)</option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran, Islamic Republic Of</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IM">Isle Of Man</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="JM">Jamaica</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="KP">
                                                            Korea, Democratic People'S Republic Of
                                                        </option>
                                                        <option value="KR">Korea, Republic Of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao People's Democratic Republic</option>
                                                        <option value="LV">Latvia</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LR">Liberia</option>
                                                        <option value="LY">Libya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Lithuania</option>
                                                        <option value="LU">Luxembourg</option>
                                                        <option value="MO">Macao</option>
                                                        <option value="MK">
                                                            Macedonia, The Former Yugoslav Republic Of
                                                        </option>
                                                        <option value="MG">Madagascar</option>
                                                        <option value="MW">Malawi</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="MH">Marshall Islands</option>
                                                        <option value="MQ">Martinique</option>
                                                        <option value="MR">Mauritania</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="FM">Micronesia, Federated States Of</option>
                                                        <option value="MD">Moldova, Republic Of</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="NA">Namibia</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NL">Netherlands</option>
                                                        <option value="NC">New Caledonia</option>
                                                        <option value="NZ">New Zealand</option>
                                                        <option value="NI">Nicaragua</option>
                                                        <option value="NE">Niger</option>
                                                        <option value="NG">Nigeria</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Island</option>
                                                        <option value="MP">Northern Mariana Islands</option>
                                                        <option value="NO">Norway</option>
                                                        <option value="OM">Oman</option>
                                                        <option selected="selected" value="PK">
                                                            Pakistan
                                                        </option>
                                                        <option value="PW">Palau</option>
                                                        <option value="PS">Palestinian Territory, Occupied</option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua New Guinea</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Poland</option>
                                                        <option value="PT">Portugal</option>
                                                        <option value="PR">Puerto Rico</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RE">Réunion</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="BL">Saint Barthélemy</option>
                                                        <option value="SH">
                                                            Saint Helena, Ascension And Tristan Da Cunha
                                                        </option>
                                                        <option value="KN">Saint Kitts And Nevis</option>
                                                        <option value="LC">Saint Lucia</option>
                                                        <option value="MF">Saint Martin (French Part)</option>
                                                        <option value="PM">Saint Pierre And Miquelon</option>
                                                        <option value="VC">Saint Vincent And The Grenadines</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="ST">Sao Tome And Principe</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="RS">Serbia</option>
                                                        <option value="SC">Seychelles</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="SX">Sint Maarten (Dutch Part)</option>
                                                        <option value="SK">Slovakia</option>
                                                        <option value="SI">Slovenia</option>
                                                        <option value="SB">Solomon Islands</option>
                                                        <option value="SO">Somalia</option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GS">
                                                            South Georgia And The South Sandwich Islands
                                                        </option>
                                                        <option value="SS">South Sudan</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Suriname</option>
                                                        <option value="SJ">Svalbard And Jan Mayen</option>
                                                        <option value="SZ">Swaziland</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="SY">Syrian Arab Republic</option>
                                                        <option value="TW">Taiwan, Province Of China</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TZ">Tanzania, United Republic Of</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TL">Timor-Leste</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad And Tobago</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="TC">Turks And Caicos Islands</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom</option>
                                                        <option value="US">United States</option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VE">
                                                            Venezuela, Bolivarian Republic Of
                                                        </option>
                                                        <option value="VN">Viet Nam</option>
                                                        <option value="VG">Virgin Islands, British</option>
                                                        <option value="VI">Virgin Islands, U.S.</option>
                                                        <option value="WF">Wallis And Futuna</option>
                                                        <option value="EH">Western Sahara</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="TimeZone"
                                                >
                                                    <span
                                                        className="has-tooltip"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        data-original-title="Select the client's time zone if it differs from the business time zone."
                                                    >
                                                        Time Zone
                                                    </span>
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-control"
                                                        id="TimeZone"
                                                        name="TimeZone"
                                                    >
                                                        <option value="">Same as Business Time Zone</option>
                                                        <option value="Dateline Standard Time">
                                                            (UTC-12:00) International Date Line West
                                                        </option>
                                                        <option value="UTC-11">
                                                            (UTC-11:00) Coordinated Universal Time-11
                                                        </option>
                                                        <option value="Aleutian Standard Time">
                                                            (UTC-10:00) Aleutian Islands
                                                        </option>
                                                        <option value="Hawaiian Standard Time">
                                                            (UTC-10:00) Hawaii
                                                        </option>
                                                        <option value="Marquesas Standard Time">
                                                            (UTC-09:30) Marquesas Islands
                                                        </option>
                                                        <option value="Alaskan Standard Time">
                                                            (UTC-09:00) Alaska
                                                        </option>
                                                        <option value="UTC-09">
                                                            (UTC-09:00) Coordinated Universal Time-09
                                                        </option>
                                                        <option value="Pacific Standard Time (Mexico)">
                                                            (UTC-08:00) Baja California
                                                        </option>
                                                        <option value="UTC-08">
                                                            (UTC-08:00) Coordinated Universal Time-08
                                                        </option>
                                                        <option value="Pacific Standard Time">
                                                            (UTC-08:00) Pacific Time (US &amp; Canada)
                                                        </option>
                                                        <option value="US Mountain Standard Time">
                                                            (UTC-07:00) Arizona
                                                        </option>
                                                        <option value="Mountain Standard Time (Mexico)">
                                                            (UTC-07:00) La Paz, Mazatlan
                                                        </option>
                                                        <option value="Mountain Standard Time">
                                                            (UTC-07:00) Mountain Time (US &amp; Canada)
                                                        </option>
                                                        <option value="Yukon Standard Time">
                                                            (UTC-07:00) Yukon
                                                        </option>
                                                        <option value="Central America Standard Time">
                                                            (UTC-06:00) Central America
                                                        </option>
                                                        <option value="Central Standard Time">
                                                            (UTC-06:00) Central Time (US &amp; Canada)
                                                        </option>
                                                        <option value="Central Standard Time (Mexico)">
                                                            (UTC-06:00) Guadalajara, Mexico City, Monterrey
                                                        </option>
                                                        <option value="Canada Central Standard Time">
                                                            (UTC-06:00) Saskatchewan
                                                        </option>
                                                        <option value="SA Pacific Standard Time">
                                                            (UTC-05:00) Bogota, Lima, Quito, Rio Branco
                                                        </option>
                                                        <option value="Eastern Standard Time (Mexico)">
                                                            (UTC-05:00) Chetumal
                                                        </option>
                                                        <option value="Easter Island Standard Time">
                                                            (UTC-05:00) Easter Island
                                                        </option>
                                                        <option value="Eastern Standard Time">
                                                            (UTC-05:00) Eastern Time (US &amp; Canada)
                                                        </option>
                                                        <option value="Haiti Standard Time">
                                                            (UTC-05:00) Haiti
                                                        </option>
                                                        <option value="Cuba Standard Time">
                                                            (UTC-05:00) Havana
                                                        </option>
                                                        <option value="US Eastern Standard Time">
                                                            (UTC-05:00) Indiana (East)
                                                        </option>
                                                        <option value="Turks And Caicos Standard Time">
                                                            (UTC-05:00) Turks and Caicos
                                                        </option>
                                                        <option value="Atlantic Standard Time">
                                                            (UTC-04:00) Atlantic Time (Canada)
                                                        </option>
                                                        <option value="Venezuela Standard Time">
                                                            (UTC-04:00) Caracas
                                                        </option>
                                                        <option value="Central Brazilian Standard Time">
                                                            (UTC-04:00) Cuiaba
                                                        </option>
                                                        <option value="SA Western Standard Time">
                                                            (UTC-04:00) Georgetown, La Paz, Manaus, San Juan
                                                        </option>
                                                        <option value="Newfoundland Standard Time">
                                                            (UTC-03:30) Newfoundland
                                                        </option>
                                                        <option value="Tocantins Standard Time">
                                                            (UTC-03:00) Araguaina
                                                        </option>
                                                        <option value="Paraguay Standard Time">
                                                            (UTC-03:00) Asuncion
                                                        </option>
                                                        <option value="E. South America Standard Time">
                                                            (UTC-03:00) Brasilia
                                                        </option>
                                                        <option value="SA Eastern Standard Time">
                                                            (UTC-03:00) Cayenne, Fortaleza
                                                        </option>
                                                        <option value="Argentina Standard Time">
                                                            (UTC-03:00) City of Buenos Aires
                                                        </option>
                                                        <option value="Montevideo Standard Time">
                                                            (UTC-03:00) Montevideo
                                                        </option>
                                                        <option value="Magallanes Standard Time">
                                                            (UTC-03:00) Punta Arenas
                                                        </option>
                                                        <option value="Saint Pierre Standard Time">
                                                            (UTC-03:00) Saint Pierre and Miquelon
                                                        </option>
                                                        <option value="Bahia Standard Time">
                                                            (UTC-03:00) Salvador
                                                        </option>
                                                        <option value="Pacific SA Standard Time">
                                                            (UTC-03:00) Santiago
                                                        </option>
                                                        <option value="UTC-02">
                                                            (UTC-02:00) Coordinated Universal Time-02
                                                        </option>
                                                        <option value="Greenland Standard Time">
                                                            (UTC-02:00) Greenland
                                                        </option>
                                                        <option value="Mid-Atlantic Standard Time">
                                                            (UTC-02:00) Mid-Atlantic - Old
                                                        </option>
                                                        <option value="Azores Standard Time">
                                                            (UTC-01:00) Azores
                                                        </option>
                                                        <option value="Cape Verde Standard Time">
                                                            (UTC-01:00) Cabo Verde Is.
                                                        </option>
                                                        <option value="UTC">
                                                            (UTC) Coordinated Universal Time
                                                        </option>
                                                        <option value="GMT Standard Time">
                                                            (UTC+00:00) Dublin, Edinburgh, Lisbon, London
                                                        </option>
                                                        <option value="Greenwich Standard Time">
                                                            (UTC+00:00) Monrovia, Reykjavik
                                                        </option>
                                                        <option value="Sao Tome Standard Time">
                                                            (UTC+00:00) Sao Tome
                                                        </option>
                                                        <option value="W. Europe Standard Time">
                                                            (UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm,
                                                            Vienna
                                                        </option>
                                                        <option value="Central Europe Standard Time">
                                                            (UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana,
                                                            Prague
                                                        </option>
                                                        <option value="Romance Standard Time">
                                                            (UTC+01:00) Brussels, Copenhagen, Madrid, Paris
                                                        </option>
                                                        <option value="Morocco Standard Time">
                                                            (UTC+01:00) Casablanca
                                                        </option>
                                                        <option value="Central European Standard Time">
                                                            (UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb
                                                        </option>
                                                        <option value="W. Central Africa Standard Time">
                                                            (UTC+01:00) West Central Africa
                                                        </option>
                                                        <option value="GTB Standard Time">
                                                            (UTC+02:00) Athens, Bucharest
                                                        </option>
                                                        <option value="Middle East Standard Time">
                                                            (UTC+02:00) Beirut
                                                        </option>
                                                        <option value="Egypt Standard Time">
                                                            (UTC+02:00) Cairo
                                                        </option>
                                                        <option value="E. Europe Standard Time">
                                                            (UTC+02:00) Chisinau
                                                        </option>
                                                        <option value="West Bank Standard Time">
                                                            (UTC+02:00) Gaza, Hebron
                                                        </option>
                                                        <option value="South Africa Standard Time">
                                                            (UTC+02:00) Harare, Pretoria
                                                        </option>
                                                        <option value="FLE Standard Time">
                                                            (UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
                                                        </option>
                                                        <option value="Israel Standard Time">
                                                            (UTC+02:00) Jerusalem
                                                        </option>
                                                        <option value="South Sudan Standard Time">
                                                            (UTC+02:00) Juba
                                                        </option>
                                                        <option value="Kaliningrad Standard Time">
                                                            (UTC+02:00) Kaliningrad
                                                        </option>
                                                        <option value="Sudan Standard Time">
                                                            (UTC+02:00) Khartoum
                                                        </option>
                                                        <option value="Libya Standard Time">
                                                            (UTC+02:00) Tripoli
                                                        </option>
                                                        <option value="Namibia Standard Time">
                                                            (UTC+02:00) Windhoek
                                                        </option>
                                                        <option value="Jordan Standard Time">
                                                            (UTC+03:00) Amman
                                                        </option>
                                                        <option value="Arabic Standard Time">
                                                            (UTC+03:00) Baghdad
                                                        </option>
                                                        <option value="Syria Standard Time">
                                                            (UTC+03:00) Damascus
                                                        </option>
                                                        <option value="Turkey Standard Time">
                                                            (UTC+03:00) Istanbul
                                                        </option>
                                                        <option value="Arab Standard Time">
                                                            (UTC+03:00) Kuwait, Riyadh
                                                        </option>
                                                        <option value="Belarus Standard Time">
                                                            (UTC+03:00) Minsk
                                                        </option>
                                                        <option value="Russian Standard Time">
                                                            (UTC+03:00) Moscow, St. Petersburg
                                                        </option>
                                                        <option value="E. Africa Standard Time">
                                                            (UTC+03:00) Nairobi
                                                        </option>
                                                        <option value="Volgograd Standard Time">
                                                            (UTC+03:00) Volgograd
                                                        </option>
                                                        <option value="Iran Standard Time">
                                                            (UTC+03:30) Tehran
                                                        </option>
                                                        <option value="Arabian Standard Time">
                                                            (UTC+04:00) Abu Dhabi, Muscat
                                                        </option>
                                                        <option value="Astrakhan Standard Time">
                                                            (UTC+04:00) Astrakhan, Ulyanovsk
                                                        </option>
                                                        <option value="Azerbaijan Standard Time">
                                                            (UTC+04:00) Baku
                                                        </option>
                                                        <option value="Russia Time Zone 3">
                                                            (UTC+04:00) Izhevsk, Samara
                                                        </option>
                                                        <option value="Mauritius Standard Time">
                                                            (UTC+04:00) Port Louis
                                                        </option>
                                                        <option value="Saratov Standard Time">
                                                            (UTC+04:00) Saratov
                                                        </option>
                                                        <option value="Georgian Standard Time">
                                                            (UTC+04:00) Tbilisi
                                                        </option>
                                                        <option value="Caucasus Standard Time">
                                                            (UTC+04:00) Yerevan
                                                        </option>
                                                        <option value="Afghanistan Standard Time">
                                                            (UTC+04:30) Kabul
                                                        </option>
                                                        <option value="West Asia Standard Time">
                                                            (UTC+05:00) Ashgabat, Tashkent
                                                        </option>
                                                        <option value="Ekaterinburg Standard Time">
                                                            (UTC+05:00) Ekaterinburg
                                                        </option>
                                                        <option value="Pakistan Standard Time">
                                                            (UTC+05:00) Islamabad, Karachi
                                                        </option>
                                                        <option value="Qyzylorda Standard Time">
                                                            (UTC+05:00) Qyzylorda
                                                        </option>
                                                        <option value="India Standard Time">
                                                            (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                                                        </option>
                                                        <option value="Sri Lanka Standard Time">
                                                            (UTC+05:30) Sri Jayawardenepura
                                                        </option>
                                                        <option value="Nepal Standard Time">
                                                            (UTC+05:45) Kathmandu
                                                        </option>
                                                        <option value="Central Asia Standard Time">
                                                            (UTC+06:00) Astana
                                                        </option>
                                                        <option value="Bangladesh Standard Time">
                                                            (UTC+06:00) Dhaka
                                                        </option>
                                                        <option value="Omsk Standard Time">(UTC+06:00) Omsk</option>
                                                        <option value="Myanmar Standard Time">
                                                            (UTC+06:30) Yangon (Rangoon)
                                                        </option>
                                                        <option value="SE Asia Standard Time">
                                                            (UTC+07:00) Bangkok, Hanoi, Jakarta
                                                        </option>
                                                        <option value="Altai Standard Time">
                                                            (UTC+07:00) Barnaul, Gorno-Altaysk
                                                        </option>
                                                        <option value="W. Mongolia Standard Time">
                                                            (UTC+07:00) Hovd
                                                        </option>
                                                        <option value="North Asia Standard Time">
                                                            (UTC+07:00) Krasnoyarsk
                                                        </option>
                                                        <option value="N. Central Asia Standard Time">
                                                            (UTC+07:00) Novosibirsk
                                                        </option>
                                                        <option value="Tomsk Standard Time">
                                                            (UTC+07:00) Tomsk
                                                        </option>
                                                        <option value="China Standard Time">
                                                            (UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi
                                                        </option>
                                                        <option value="North Asia East Standard Time">
                                                            (UTC+08:00) Irkutsk
                                                        </option>
                                                        <option value="Singapore Standard Time">
                                                            (UTC+08:00) Kuala Lumpur, Singapore
                                                        </option>
                                                        <option value="W. Australia Standard Time">
                                                            (UTC+08:00) Perth
                                                        </option>
                                                        <option value="Taipei Standard Time">
                                                            (UTC+08:00) Taipei
                                                        </option>
                                                        <option value="Ulaanbaatar Standard Time">
                                                            (UTC+08:00) Ulaanbaatar
                                                        </option>
                                                        <option value="Aus Central W. Standard Time">
                                                            (UTC+08:45) Eucla
                                                        </option>
                                                        <option value="Transbaikal Standard Time">
                                                            (UTC+09:00) Chita
                                                        </option>
                                                        <option value="Tokyo Standard Time">
                                                            (UTC+09:00) Osaka, Sapporo, Tokyo
                                                        </option>
                                                        <option value="North Korea Standard Time">
                                                            (UTC+09:00) Pyongyang
                                                        </option>
                                                        <option value="Korea Standard Time">
                                                            (UTC+09:00) Seoul
                                                        </option>
                                                        <option value="Yakutsk Standard Time">
                                                            (UTC+09:00) Yakutsk
                                                        </option>
                                                        <option value="AUS Central Standard Time">
                                                            (UTC+09:30) Darwin
                                                        </option>
                                                        <option value="E. Australia Standard Time">
                                                            (UTC+10:00) Brisbane
                                                        </option>
                                                        <option value="West Pacific Standard Time">
                                                            (UTC+10:00) Guam, Port Moresby
                                                        </option>
                                                        <option value="Vladivostok Standard Time">
                                                            (UTC+10:00) Vladivostok
                                                        </option>
                                                        <option value="Cen. Australia Standard Time">
                                                            (UTC+10:30) Adelaide
                                                        </option>
                                                        <option value="Bougainville Standard Time">
                                                            (UTC+11:00) Bougainville Island
                                                        </option>
                                                        <option value="AUS Eastern Standard Time">
                                                            (UTC+11:00) Canberra, Melbourne, Sydney
                                                        </option>
                                                        <option value="Russia Time Zone 10">
                                                            (UTC+11:00) Chokurdakh
                                                        </option>
                                                        <option value="Tasmania Standard Time">
                                                            (UTC+11:00) Hobart
                                                        </option>
                                                        <option value="Lord Howe Standard Time">
                                                            (UTC+11:00) Lord Howe Island
                                                        </option>
                                                        <option value="Magadan Standard Time">
                                                            (UTC+11:00) Magadan
                                                        </option>
                                                        <option value="Sakhalin Standard Time">
                                                            (UTC+11:00) Sakhalin
                                                        </option>
                                                        <option value="Central Pacific Standard Time">
                                                            (UTC+11:00) Solomon Is., New Caledonia
                                                        </option>
                                                        <option value="Russia Time Zone 11">
                                                            (UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky
                                                        </option>
                                                        <option value="UTC+12">
                                                            (UTC+12:00) Coordinated Universal Time+12
                                                        </option>
                                                        <option value="Fiji Standard Time">(UTC+12:00) Fiji</option>
                                                        <option value="Norfolk Standard Time">
                                                            (UTC+12:00) Norfolk Island
                                                        </option>
                                                        <option value="Kamchatka Standard Time">
                                                            (UTC+12:00) Petropavlovsk-Kamchatsky - Old
                                                        </option>
                                                        <option value="New Zealand Standard Time">
                                                            (UTC+13:00) Auckland, Wellington
                                                        </option>
                                                        <option value="UTC+13">
                                                            (UTC+13:00) Coordinated Universal Time+13
                                                        </option>
                                                        <option value="Tonga Standard Time">
                                                            (UTC+13:00) Nuku'alofa
                                                        </option>
                                                        <option value="Chatham Islands Standard Time">
                                                            (UTC+13:45) Chatham Islands
                                                        </option>
                                                        <option value="Line Islands Standard Time">
                                                            (UTC+14:00) Kiritimati Island
                                                        </option>
                                                        <option value="Samoa Standard Time">
                                                            (UTC+14:00) Samoa
                                                        </option>
                                                    </select>
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="TimeZone"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-12 mb20 pl-md-4">
                                            <div className="form-group row">
                                                <h3 className="section-heading col-12">Administration</h3>
                                            </div>
                                            <div className="form-group row mb10 mt10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="ClientStatusId"
                                                >
                                                    Status
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-required="The ClientStatusId field is required."
                                                        id="ClientStatusId"
                                                        name="ClientStatusId"
                                                    >
                                                        <option selected="selected" value={0} />
                                                        <option value={1}>Active</option>
                                                        <option value={4}>Closed</option>
                                                        <option value={2}>Follow Up Required</option>
                                                        <option value={3}>On Hold</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="ClientTypeId"
                                                >
                                                    Client Type
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-control"
                                                        id="ClientTypeId"
                                                        name="ClientTypeId"
                                                    >
                                                        <option value="" />
                                                        <option value={164524}>Example Client Type 1</option>
                                                        <option value={164523}>Example Client Type 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="FileUnder"
                                                >
                                                    File Under
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="The field FileUnder must be a string or array type with a maximum length of '80'."
                                                        data-val-maxlength-max={80}
                                                        id="FileUnder"
                                                        maxLength={80}
                                                        name="FileUnder"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="ClientCompanyNameView_CompanyName"
                                                >
                                                    Business Name
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-length="The field Business Name must be a string with a maximum length of 100."
                                                        data-val-length-max={100}
                                                        id="ClientCompanyNameView_CompanyName"
                                                        maxLength={100}
                                                        name="ClientCompanyNameView.CompanyName"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="ClientCompanyNameView.CompanyName"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="Occupation"
                                                >
                                                    Occupation
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="Maximum 100 characters allowed."
                                                        data-val-maxlength-max={100}
                                                        id="Occupation"
                                                        maxLength={100}
                                                        name="Occupation"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="HowHeardId"
                                                >
                                                    How Client Heard About Us
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-control"
                                                        id="HowHeardId"
                                                        name="HowHeardId"
                                                    >
                                                        <option value="" />
                                                        <option value={1}>Internet</option>
                                                        <option value={2}>Referral</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb20">
                                                <label
                                                    className="form-control-label col-lg-4 col-12"
                                                    htmlFor="DateAdded"
                                                >
                                                    Date Added
                                                </label>
                                                <div className="col-sm-12 col-lg-8">29/11/2024</div>
                                            </div>
                                            <input
                                                className="medicare-client-id"
                                                data-val="true"
                                                data-val-required="The Id field is required."
                                                id="ClientBase_Id"
                                                name="ClientBase.Id"
                                                type="hidden"
                                                defaultValue={17899024}
                                            />
                                        </div>
                                    </div>
                                    <input
                                        id="clientNumber"
                                        name="clientNumber"
                                        type="hidden"
                                        defaultValue={3}
                                    />
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group row">
                                                <label
                                                    className="form-control-label col-12"
                                                    htmlFor="ClientNotes"
                                                >
                                                    Additional Comments
                                                </label>
                                                <div className="col-12">
                                                    <textarea
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="The field ClientNotes must be a string or array type with a maximum length of '60000'."
                                                        data-val-maxlength-max={60000}
                                                        id="ClientNotes"
                                                        maxLength={60000}
                                                        name="ClientNotes"
                                                        rows={7}
                                                        defaultValue={"            "}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mt-4">
                                            <button
                                                type="submit"
                                                id="btnSubmit"
                                                className="float-right btn btn-lg btn-green save validate-form action-form"
                                            >
                                                <i className="fa fa-check fa-margin" />
                                                SAVE CHANGES
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
export default ProfileClient;