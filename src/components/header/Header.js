import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="navbar-logo">
                        <button
                            className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarVerticalCollapse"
                            aria-controls="navbarVerticalCollapse"
                            aria-expanded="false"
                            aria-label="Toggle Navigation"
                        >
                            <span className="navbar-toggle-icon">
                                <span className="toggle-line" />
                            </span>
                        </button>
                        <a className="navbar-brand me-1 me-sm-3" href="index.html">
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <h5 className="logo-text ms-2 d-none d-sm-block">
                                        Medical App
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        className="search-box navbar-top-search-box d-none d-lg-block"
                        data-list='{"valueNames":["title"]}'
                        style={{ width: "25rem" }}
                    >
                        <form
                            className="position-relative"
                            data-bs-toggle="search"
                            data-bs-display="static"
                        >
                            <input
                                className="form-control search-input fuzzy-search rounded-pill form-control-sm"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                            <span className="fas fa-search search-box-icon" />
                        </form>
                        <div
                            className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
                            data-bs-dismiss="search"
                        >
                            <button className="btn btn-link p-0" aria-label="Close" />
                        </div>
                    </div>
                    <ul className="navbar-nav navbar-nav-icons flex-row">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link"
                                href="#"
                                style={{ minWidth: "2.25rem" }}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <span className="d-block" style={{ height: 20, width: 20 }}>
                                    <span data-feather="bell" style={{ height: 20, width: 20 }} />
                                </span>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
                                id="navbarDropdownNotfication"
                                aria-labelledby="navbarDropdownNotfication"
                            >
                                <div className="card position-relative border-0">
                                    <div className="card-header p-2">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-body-emphasis mb-0">Notifications</h5>
                                            <button
                                                className="btn btn-link p-0 fs-9 fw-normal"
                                                type="button"
                                            >
                                                Mark all as read
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <img
                                                                className="rounded-circle"
                                                                src="assets/img/team/40x40/30.webp"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">
                                                                Jessie Samson
                                                            </h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                                <span className="me-1 fs-10">💬</span>Mentioned you
                                                                in a comment.
                                                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                                                    10m
                                                                </span>
                                                            </p>
                                                            <p className="text-body-secondary fs-9 mb-0">
                                                                <span className="me-1 fas fa-clock" />
                                                                <span className="fw-bold">10:41 AM </span>August
                                                                7,2021
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer p-0 border-top border-translucent border-0">
                                        <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                                            <a className="fw-bolder" href="pages/notifications.html">
                                                Notification history
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link lh-1 pe-0"
                                id="navbarDropdownUser"
                                href="#!"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div className="avatar avatar-l ">
                                    <img
                                        className="rounded-circle "
                                        src="assets/img/team/40x40/57.webp"
                                        alt=""
                                    />
                                </div>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
                                aria-labelledby="navbarDropdownUser"
                            >
                                <div className="card position-relative border-0">
                                    <div className="card-body p-0">
                                        <div className="text-center pt-4 pb-3">
                                            <div className="avatar avatar-xl ">
                                                <img
                                                    className="rounded-circle "
                                                    src="assets/img/team/72x72/57.webp"
                                                    alt=""
                                                />
                                            </div>
                                            <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                        </div>
                                        <div className="mb-3 mx-3">
                                            <input
                                                className="form-control form-control-sm"
                                                id="statusUpdateInput"
                                                type="text"
                                                placeholder="Update your status"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="overflow-auto scrollbar"
                                        style={{ height: "10rem" }}
                                    >
                                        <ul className="nav d-flex flex-column mb-2 pb-1">
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    {" "}
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="user"
                                                    />
                                                    <span>Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="pie-chart"
                                                    />
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    {" "}
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="lock"
                                                    />
                                                    Posts &amp; Activity
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    {" "}
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="settings"
                                                    />
                                                    Settings &amp; Privacy{" "}
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    {" "}
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="help-circle"
                                                    />
                                                    Help Center
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    {" "}
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="globe"
                                                    />
                                                    Language
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer p-0 border-top border-translucent">
                                        <ul className="nav d-flex flex-column my-3">
                                            <li className="nav-item">
                                                <a className="nav-link px-3 d-block" href="#!">
                                                    {" "}
                                                    <span
                                                        className="me-2 text-body align-bottom"
                                                        data-feather="user-plus"
                                                    />
                                                    Add another account
                                                </a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <div className="px-3">
                                            {" "}
                                            <a
                                                className="btn btn-phoenix-secondary d-flex flex-center w-100"
                                                href="#!"
                                            >
                                                {" "}
                                                <span className="me-2" data-feather="log-out">
                                                    {" "}
                                                </span>
                                                Sign out
                                            </a>
                                        </div>
                                        <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                                            <a className="text-body-quaternary me-1" href="#!">
                                                Privacy policy
                                            </a>
                                            •
                                            <a className="text-body-quaternary mx-1" href="#!">
                                                Terms
                                            </a>
                                            •
                                            <a className="text-body-quaternary ms-1" href="#!">
                                                Cookies
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
