import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
// import SpinningLoader from "../services/spinning-loader/SpinningLoader";
// import ApiService from "../services/api-service/ApiService";
import SpinningLoader from "../../../services/spinning-loader/SpinningLoader";
import ApiService from "../../../services/api-service/ApiService";

const Practioners = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpent, setIsOpent] = useState(false);
  const [isOpenw, setIsOpenw] = useState(false);
  const [isOpenT, setIsOpenT] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const [clinics, setClinics] = useState([]);
  const [getPractitioners, setGetPractitioners] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [availability, setAvailability] = useState();
  const [isOpenSu, setIsOpenSu] = useState(false);
  const [selectedPractitioner, setSelectedPractitioner] = useState("");
  const [scheduleArray, setScheduleArray] = useState([]);
  const [payloadObj, setPayloadObj] = useState({
    hospital_id: 1,
    doctor_id: 2,
    location_id: 3,
    from_date: "2024-12-01",
    to_date: "2024-12-31",
    recurrence: "Weekly",
  });
  const [schedule, setSchedule] = useState({
    weekday: "",
    time_from: "",
    time_to: "",
  });
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [openDays, setOpenDays] = useState({});

  const toggle1 = (day) => {
    setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const fetchPractionerData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "GET",
        "practitioners/getall?hospital_id=4&user_type=practitioner"
      );
      setGetPractitioners(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const getClinics = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService("GET", "locations?hospital_id=6");
      setClinics(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // const handleDateChange = (day, type, value) => {
  //   setScheduleArray((prev) => {
  //     const updatedSchedule = prev.find((item) => item.weekday === day) || {
  //       weekday: day,
  //       time_from: "",
  //       time_to: "",
  //     };

  //     updatedSchedule[type === "start" ? "time_from" : "time_to"] = value;

  //     const filteredPrev = prev.filter((item) => item.weekday !== day);
  //     return [...filteredPrev, updatedSchedule];
  //   });
  // };

  const handleDateChange = (day, field, value) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: prevAvailability[day].map((slot) => ({
        ...slot,
        [field]: value,
      })),
    }));
  };

  const saveData = async () => {
    payloadObj.schedule = scheduleArray;
    try {
      setIsLoading(true);
      const data = await ApiService("post", "doctors/availability", payloadObj);

      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSelectChange = (e) => {
    const practitionerId = parseInt(e.target.value);
    const practitioner = getPractitioners.find(
      (practitioner) => practitioner.id === practitionerId
    );
    console.log("practitioner", practitioner);
    setDoctorName(practitioner.name);
    setSelectedPractitioner(practitionerId);
    setPayloadObj((prev) => ({ ...prev, doctor_id: practitionerId }));
  };

  const handleInputChange = (field, value) => {
    setPayloadObj((prev) => ({ ...prev, [field]: value }));
  };

  const fetechData = async () => {
    try {
      setIsLoading(true);
      const data = await ApiService(
        "Get",
        "doctors/availability?doctor_id=2&hospital_id=1"
      );
      console.log("data", data.availability);
      setIsLoading(false);
      const daysAvailability = data.availability;
      setAvailability(daysAvailability);
      const initialOpenDays = Object.keys(daysAvailability).reduce(
        (acc, day) => ({ ...acc, [day]: true }),
        {}
      );
      setOpenDays(initialOpenDays);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const toggleDayPanel = (day) => {
    setOpenDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  useEffect(() => {
    getClinics();
    fetchPractionerData();
    fetechData();
  }, []);

  return (
    <div className="dashboard">
      {isLoading ? (
        <>
          <div
            style={{
              display: "flex",
              height: "100vh",
              justifyContent: "center",
              marginLeft: "35%",
            }}
          >
            <SpinningLoader />
          </div>
        </>
      ) : (
        <>
          <div className="container-fluid">
            <div className="panel panel-default">
              <div className="panel-body">
                <div style={{ marginTop: "-3%" }}>
                  <div className="form-section-titles mt20">
                    {doctorName} Weekly Availability
                  </div>
                </div>
                <hr />

                {/* <form action="#" data-prompt-unsaved="" method="post"> */}
                <div className="panel-body">
                  <div className="form-section-title">
                    <span className="mt5 text-uppercase">
                      Weekly Availability Configuration
                    </span>
                  </div>
                  <div className="row main-form mt20">
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                      <div className="form-group row">
                        <label className="col-lg-4 col-12 col-form-label">
                          Practitioners
                        </label>
                        <div className="col-lg-8 col-12">
                          <div className="input-group">
                            <select
                              className="form-control"
                              value={payloadObj.doctor_id}
                              onChange={handleSelectChange}
                            >
                              {getPractitioners.map((practitioner) => (
                                <option
                                  key={practitioner.id}
                                  value={practitioner.id}
                                >
                                  {practitioner.firstname}{" "}
                                  {practitioner.middlename}{" "}
                                  {practitioner.lastname}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row mt-2">
                        <label className="col-lg-4 col-12 col-form-label">
                          From
                        </label>
                        <div className="col-lg-8 col-12">
                          <div className="input-group date" id="datepicker">
                            <input
                              className="form-control datetimepicker"
                              id="datepicker"
                              type="date"
                              placeholder="dd/mm/yyyy"
                              value={payloadObj.from_date}
                              onChange={(e) =>
                                handleInputChange("from_date", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row mt-2">
                        <label className="col-12 col-lg-4 col-form-label">
                          Recurs Every
                        </label>
                        <div className="col-12 col-lg-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{ fontSize: 12, color: "#707f94" }}
                            value={payloadObj.recurrence}
                            onChange={(e) =>
                              handleInputChange("recurrence", e.target.value)
                            }
                          >
                            <option value="Weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                      <div className="form-group row">
                        <label className="col-12 col-lg-4 col-form-label">
                          Clinic
                        </label>
                        <div className="col-12 col-lg-8">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{ fontSize: 12, color: "#707f94" }}
                            value={payloadObj.location_id}
                            onChange={(e) =>
                              handleInputChange(
                                "location_id",
                                parseInt(e.target.value)
                              )
                            }
                          >
                            {clinics &&
                              clinics.map((obj) => {
                                return (
                                  <>
                                    <option value={obj.id}>{obj.name}</option>
                                  </>
                                );
                              })}
                          </select>
                        </div>
                      </div>

                      <div className="form-group row mt-2">
                        <label className="col-lg-4 col-12 col-form-label">
                          To
                        </label>
                        <div className="col-lg-8 col-12">
                          <div className="input-group date" id="datepicker">
                            <input
                              className="form-control datetimepicker"
                              id="datepicker"
                              type="date"
                              placeholder="dd/mm/yyyy"
                              value={payloadObj.to_date}
                              onChange={(e) =>
                                handleInputChange("to_date", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row mt-2">
                        <label className="col-lg-4 col-12 col-form-label">
                          Description
                        </label>
                        <div className="col-lg-8 col-12">
                          <textarea
                            className="form-control notes"
                            data-val="true"
                            data-val-length="Description must be less than or equal to 300 characters"
                            data-val-length-max={300}
                            id="Notes"
                            name="Notes"
                            rows={1}
                          />
                          <span
                            className="field-validation-valid"
                            data-valmsg-for="Notes"
                            data-valmsg-replace="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-group mt20">
                    <div className="panel">
                      <div className="form-section-title">
                        <span className="panel-title" id="headingOne">
                          DAYS AND TIMES
                        </span>
                      </div>
                      <div className="panel-collapse">
                        <div className="panel-body p-0 pt-3 pb-3">
                          <div
                            className="row day-time"
                            role="tablist"
                            aria-multiselectable="true"
                          >
                            {daysOfWeek.map((day) => (
                              <div
                                className="col-12 col-sm-6 col-md-12 col-lg-6"
                                key={day}
                              >
                                <DayAvailability
                                  key={day}
                                  day={day}
                                  isOpen={openDays[day]}
                                  toggle={() => toggle1(day)}
                                  handleDateChange={handleDateChange}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "end" }}>
                          <Button color="primary" onClick={saveData}>
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Practioners;

const DayAvailability = ({ day, isOpen, toggle, handleDateChange }) => {
  return (
    <div className="entity-node">
      <table className="table table-time">
        <thead>
          <tr>
            <th className="text-uppercase">{day}</th>
            <th className="text-right">
              <a className="text-primary action-add-timespan" onClick={toggle}>
                + Add Availability
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <Collapse isOpen={isOpen}>
                <div className="time-span-entity">
                  <div className="form-group mb0 mt10 d-flex align-items-top justify-content-end">
                    <a href="#">
                      <i
                        className="fa fa-margin fa-trash"
                        style={{
                          color: "#e5546a!important",
                          fontSize: "12px !important",
                          margin: "10px 6px 6px 8px",
                        }}
                      />
                    </a>
                    <span className="time-span mr5 text-left">
                      <div className="input-group">
                        <input
                          className="form-control datetimepicker"
                          type="time"
                          onChange={(e) =>
                            handleDateChange(day, "start", e.target.value)
                          }
                        />
                      </div>
                    </span>
                    <span
                      className="mt5"
                      style={{ margin: "5px 8px 4px 7px", color: "#a2adbf" }}
                    >
                      To
                    </span>
                    <span className="time-span mr5 text-left">
                      <div className="input-group">
                        <input
                          className="form-control datetimepicker"
                          type="time"
                          onChange={(e) =>
                            handleDateChange(day, "end", e.target.value)
                          }
                        />
                      </div>
                    </span>
                  </div>
                  <div
                    className="form-group mt-2 text-right"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: 10,
                    }}
                  ></div>
                </div>
              </Collapse>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
