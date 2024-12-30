import React, { useState, useEffect } from "react";
import ApiService from "../../services/api-service/ApiService";
import SpinningLoader from "../../services/spinning-loader/SpinningLoader";

const Practitioner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [getPractitioners, setGetPractitioners] = useState([]);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [addPractitionerFormData, setAddPractitionerFormData] = useState({
    type:"",
    firstname:"",
    middlename:"",
    lastname:"",
    email:"",
    password:"",
    phone_number:"",
    isactive:1,
    hospital_id:4
});


  const handleFormValues = async (e) => {
    try {
      const { name, value } = e.target;
      console.log(name, value);
      setAddPractitionerFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } catch (error) {}
  };

  const saveLocation = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("post", "practitioners/create", addPractitionerFormData);
      fetchData();
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", "practitioners/getall?hospital_id=4&user_type=practitioner");
      setGetPractitioners(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const editLocation = async () => {
    try {
      const id = editObj.id;
      setIsLoading(true);
      await ApiService(
        "PUT",
        `practitioners/update/${id}`,
        addPractitionerFormData,
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleLocationData = async () => {
    if (isEdit) {
      console.log("isEdit", isEdit);
      editLocation();
    } else {
      saveLocation();
    }
    setIsEdit(false);
    setEditObj(null);
  };

  const deleteLocation = async (obj) => {
    try {
      const id = obj.id;
      setIsLoading(true);
      const data = await ApiService("delete", `practitioners/delete/${id}`);
      console.log("data", data);
      fetchData();
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-body">
            <div style={{ marginTop: "-3%" }}>
              <div className="form-section-titles mt20">Practitioner</div>
            </div>
            <hr />
            {/* Show All */}
            <div id="search-location">
              <div className="panel panel-default">
                <div className="panel-group mt-4">
                  <div className="row align-items-center justify-content-between g-2 ">
                    <div className="col col-auto">
                      <div className="d-flex align-items-center">
                        <div className="export-options float-left text-center text-sm-left">
                          {/* <button id="report-print-main" class="btn btn-primary shadow mr10"
                                              type="button">
                                              <i class="fa fa-add mr5"></i>
                                              <span>ADD LOCATION</span>
                                          </button> */}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#topSlideOutModal"
                          >
                            <i className="fa fa-add mr5" />
                            <span>ADD PRACTITIONER </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="d-flex align-items-center">
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
                    </div>
                  </div>
                </div>
                <div className="panel-group mt-4">
                  <div className="table-caption text-center text-uppercase">
                  Practitioner List
                  </div>
                  <div id="tableExample">
                    <div
                      className="table-responsive"
                      style={{
                        border: "2px solid #d7e3e8 !important",
                        borderRadius: "2px 2px 8px 8px",
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
                              data-sort="locality"
                            >
                              Phone Number
                            </th>
                            <th
                              className="sort border-top border-translucent desc"
                              data-sort="town"
                            >
                              Active
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
                          {isLoading ? (
                            <>
                              <tr>
                                <td
                                  colSpan="7"
                                  style={{
                                    textAlign: "center",
                                    padding: "20px",
                                  }}
                                >
                                  <SpinningLoader isLoading={isLoading} />
                                </td>
                              </tr>
                            </>
                          ) : (
                            <>
                              {getPractitioners.map((obj, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="align-middle ps-3 name">
                                      {obj.firstname + " " + obj.middlename + " " + obj.lastname}
                                    </td>
                                    <td className="align-middle email">
                                      {obj.email}
                                    </td>
                                    <td className="align-middle age">
                                      {" "}
                                      {obj.phone_number}
                                    </td>
                                    <td className="align-middle ps-3 name">
                                      {obj.is_active}
                                    </td>

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
                                          <a
                                            className="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#topSlideOutModal"
                                            onClick={() => {
                                              setIsEdit(true);
                                              setEditObj(obj);
                                              setAddPractitionerFormData({
                                              ...addPractitionerFormData,
                                              ...obj,
                                            });
                                            }}
                                          >
                                            View
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#!"
                                          >
                                            Export
                                          </a>
                                          <div className="dropdown-divider" />
                                          <a
                                            className="dropdown-item text-danger"
                                            onClick={() => deleteLocation(obj)}
                                          >
                                            Remove
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="topSlideOutModal"
        tabIndex={-1}
        aria-labelledby="topSlideOutModalLabel"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-slideout"
          style={{ maxWidth: 800, width: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="topSlideOutModalLabel">
              Practitioner
              </h5>
            </div>
            <div
              className="modal-body"
              style={{ padding: "10px !important", backgroundColor: "#fff" }}
            >
              <div className="panel-body">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div id="template-form-container">
                    <div className="MuiScopedCssBaseline-root css-9sqakh">
                      <div>
                        <div
                          className="panel actionFormContainer"
                          id="action-form-container"
                        >
                          <form
                            data-no-bind-invalid-form-validate="true"
                            className="collapse show"
                            noValidate="novalidate"
                            style={{}}
                          >
                            <div className="internal-title text-uppercase">
                              Add Practitioner
                            </div>
                            <div className="well well-form-dotted">
                              <div className="form-block form-block-lg mb20 mt20 pl10 pr10">
                                <div className="form-group row">
                                  <label
                                    htmlFor="firstname"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    First Name:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="firstname"
                                      id="firstname"
                                      onChange={handleFormValues}
                                      value={addPractitionerFormData.firstname}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="middlename"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                   Middle Name:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="middlename"
                                      id="middlename"
                                      onChange={handleFormValues}
                                      value={addPractitionerFormData.middlename}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="lastname"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                  Last Name:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="lastname"
                                      id="lastname"
                                      onChange={handleFormValues}
                                      value={addPractitionerFormData.lastname}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="type"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Location Type::
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    {" "}
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      name="type"
                                      style={{
                                        fontSize: 12,
                                        color: "#707f94",
                                      }}
                                      value={addPractitionerFormData.type}
                                      onChange={handleFormValues}
                                    >

                                      <option value="">
                                        Select option
                                      </option>
                                      <option value="practitioner">
                                      Practitioner
                                      </option>
                                      <option value="hospital">
                                      Hospital
                                      </option>
                                      <option value="patient">
                                      Patient
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Name"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Email:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="email"
                                      className="valid form-control "
                                      name="email"
                                      id="email"
                                      onChange={handleFormValues}
                                      value={addPractitionerFormData.email}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="password"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Password:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="password"
                                      className="valid form-control "
                                      name="password"
                                      id="password"
                                      onChange={handleFormValues}
                                      value={addPractitionerFormData.password}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="phone_number"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Phone:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="phone_number"
                                      id="phone_number"
                                      onChange={handleFormValues}
                                      value={addPractitionerFormData.phone_number}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setIsEdit(false);
                  setEditObj(null);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleLocationData}
              >
                {isEdit ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practitioner;
