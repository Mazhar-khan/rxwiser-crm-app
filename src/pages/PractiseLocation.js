import React, { useState, useEffect } from "react";
import ApiService from "../services/api-service/ApiService";
import SpinningLoader from "../services/spinning-loader/SpinningLoader";

const PractiseLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [getLocation, setGetLocation] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", "locations?hospital_id=6");
      setGetLocation(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
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
              <div className="form-section-titles mt20">Locations</div>
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
                            <span>ADD LOCATION</span>
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
                    Location List
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
                              ADDRESS
                            </th>
                            <th
                              className="sort border-top border-translucent desc"
                              data-sort="locality"
                            >
                              LOCALITY
                            </th>
                            <th
                              className="sort border-top border-translucent desc"
                              data-sort="town"
                            >
                              TOWN
                            </th>
                            <th
                              className="sort border-top border-translucent desc"
                              data-sort="colour"
                            >
                              COLOUR
                            </th>
                            <th
                              className="sort border-top border-translucent desc"
                              data-sort="default"
                            >
                              DEFAULT
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
                              {getLocation.map((obj, index) => {
                                return (
                                  <>
                                    <tr>
                                      <td className="align-middle ps-3 name">
                                        {obj.name}
                                      </td>
                                      <td className="align-middle email">
                                        {obj.address}
                                      </td>
                                      <td className="align-middle age">
                                        {" "}
                                        {obj.locality}
                                      </td>
                                      <td className="align-middle ps-3 name">
                                        {obj.post_code}
                                      </td>
                                      <td className="align-middle email">
                                        <span style={{ color: "red" }}>
                                          {" "}
                                          {obj.color_code}{" "}
                                        </span>
                                      </td>
                                      <td className="align-middle age">
                                        {" "}
                                        {obj.default_status}
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
                                              href="#!"
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
                                              href="#!"
                                            >
                                              Remove
                                            </a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    ;
                                  </>
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
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-slideout"
          style={{ maxWidth: 800, width: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="topSlideOutModalLabel">
                Location
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
                              Add Location
                            </div>
                            <div className="well well-form-dotted">
                              <div className="form-block form-block-lg mb20 mt20 pl10 pr10">
                                <div className="form-group row">
                                  <label
                                    htmlFor="Name"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Name:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="Name"
                                      id="Name"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Name"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Location Type::
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    {" "}
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
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="address"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Address:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="address"
                                      id="Address"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Suburb"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Suburb:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="Suburb"
                                      id="Suburb"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="State"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    State:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="State"
                                      id="State"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Postcode"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Postcode:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="Postcode"
                                      id="Postcode"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Phone"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Phone:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="Phone"
                                      id="Phone"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Fax"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Fax:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <input
                                      type="text"
                                      className="valid form-control "
                                      name="Fax"
                                      id="Fax"
                                      defaultValue=""
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    htmlFor="Extra Invoice Text"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Extra Invoice Text:
                                  </label>
                                  <div className="col-sm-8 col-12">
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
                                <div className="form-group row mt-4">
                                  <label
                                    htmlFor="Fax"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Location Notes:
                                  </label>
                                  <div className="col-sm-8 col-12">
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
                                <div className="form-group row mt-4">
                                  <label
                                    htmlFor="Fax"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Active:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <div className="form-group">
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          role="switch"
                                          id="switchClient"
                                          defaultChecked=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row mt-2">
                                  <label
                                    htmlFor="Fax"
                                    className="col-sm-4 col-12 col-form-label pr0"
                                  >
                                    Default:
                                  </label>
                                  <div className="col-sm-8 col-12">
                                    <div className="form-group">
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          role="switch"
                                          id="switchClient"
                                        />
                                      </div>
                                    </div>
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
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PractiseLocation;
