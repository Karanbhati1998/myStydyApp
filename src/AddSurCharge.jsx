import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSurCharge,
  deleteSurcharge,
  getSurCharge,
  surChargeStatus,
} from "../../../features/slices/vechileManagement/surCharge";
import { toastService } from "../../../utils/toastify";
import { useLocation, useSearchParams } from "react-router-dom";
import moment from "moment";
import CommonPagination from "../../CommonPagination";
import DeleteModal from "../../DeleteModal";
import BackButton from "../../BackButton";
import EditSurCharge from "./EditSurCharge";

const initialState = {
  categoryId: "",
  serviceType: "",
  ruleName: "",
  time: [{ effectiveFrom: "", effectiveTo: "" }],
  effectiveFrom: "",
  effectiveTo: "",
  surchargeType: "",
  surchargeValue: 0,
  day: "",
  errors: {},
  deleteModal: false,
  updateModal: false,
  id: "",
  data: {},
};
const AddSurCharge = () => {
  const [iState, setUpdateState] = useState(initialState);
  const dispatch = useDispatch();
  const {
    categoryId,
    serviceType,
    ruleName,
    effectiveFrom,
    effectiveTo,
    surchargeType,
    surchargeValue,
    day,
    errors,
    deleteModal,
    updateModal,
    id,
    data,
    time,
  } = iState;
  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  console.log({ state });
  const { surCharge } = useSelector((state) => {
    return state?.surCharge;
  });
  useEffect(() => {
    setUpdateState((prev) => ({
      ...prev,
      categoryId: state?.categoryId,
      serviceType: state?.serviceType,
    }));
    dispatch(
      getSurCharge({
        categoryId: state?.categoryId,
        serviceType: state?.serviceType,
      })
    );
  }, [state]);
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setUpdateState((prev) => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: "",
      },
    }));
  };

  const handleValidation = () => {
    let formErrors = {};
    let isValid = true;

    // Rule Name Validation
    if (!ruleName?.trim()) {
      formErrors.ruleName = "Rule Name is required";
      isValid = false;
    }

    // Day Validation
    if (!day?.trim()) {
      formErrors.day = "Day is required";
      isValid = false;
    }

    // Surcharge Value Validation
    if (!surchargeValue?.toString()?.trim()) {
      formErrors.surchargeValue = "Surcharge Value is required";
      isValid = false;
    }

    // Time Slots Validation
    const timeErrors = [];

    time.forEach((slot, index) => {
      const slotErrors = {};

      if (!slot.effectiveFrom?.trim()) {
        slotErrors.effectiveFrom = "Effective From is required";
        isValid = false;
      }

      if (!slot.effectiveTo?.trim()) {
        slotErrors.effectiveTo = "Effective To is required";
        isValid = false;
      }

      timeErrors[index] = slotErrors;
    });

    formErrors.time = timeErrors;

    setUpdateState((prev) => ({
      ...prev,
      errors: formErrors,
    }));

    return isValid;
  };

  const handleSave = () => {
    const data = {
      categoryId,
      serviceType,
      ruleName,
      effectiveFrom,
      effectiveTo,
      surchargeValue,
      day,
    };
    if (handleValidation()) {
      dispatch(addSurCharge(data)).then((res) => {
        if (res?.payload?.code == 200) {
          toastService.success("surcharge added successfully");
          setUpdateState((prev) => ({
            ...prev,
            ruleName: "",
            effectiveFrom: "",
            effectiveTo: "",
            surchargeValue: 0,
            day: "",
          }));
          dispatch(
            getSurCharge({
              categoryId: state?.categoryId,
              serviceType: state?.serviceType,
            })
          );
        } else {
          setUpdateState((prev) => ({
            ...prev,
            ruleName,
            effectiveFrom,
            effectiveTo,
            surchargeValue,
            day,
          }));
          toastService.error("surcharge added failed");
        }
      });
    }
  };
  const handlePageChange = (page) => {
    setSearchParams({ page });
    dispatch(
      getSurCharge({
        categoryId: state?.categoryId,
        serviceType: state?.serviceType,
      })
    );
  };
  console.log({ surCharge });
  const handleCloseDeleteModal = () => {
    setUpdateState((prev) => ({
      ...prev,
      id: "",
      deleteModal: false,
    }));
  };
  const handleDelete = () => {
    dispatch(deleteSurcharge({ id })).then((res) => {
      if (res?.payload?.code == 200) {
        toastService.success("SurCharge Deleted Successfully");
        dispatch(
          getSurCharge({
            categoryId: state?.categoryId,
            serviceType: state?.serviceType,
          })
        );
        handleCloseDeleteModal();
      } else {
        toastService.error("SurCharge Deleted failed");
      }
    });
  };
  const handleCloseUpdateModal = () => {
    setUpdateState((prev) => ({
      ...prev,
      updateModal: false,
    }));
  };
  const handleChecked = (e, id) => {
    const { name, checked } = e?.target;
    const status = checked ? "ACTIVE" : "INACTIVE";
    const data = { id, status };
    dispatch(surChargeStatus(data)).then((res) => {
      if (res?.payload?.code == 200) {
        toastService.success("Status updated successfully");
        dispatch(
          getSurCharge({
            categoryId: state?.categoryId,
            serviceType: state?.serviceType,
          })
        );
      } else {
        toastService.error("status update failed");
      }
    });
  };
  return (
    <>
      <div className="">
        <div className="WrapperBox">
          <div className="TitleBox">
            <a className="TitleLink">
              <BackButton />
            </a>
          </div>
          <div className="Small-Wrapper">
            {" "}
            <div className="TitleBox Border">
              <h4 className="Title">Create New SurCharge Rule</h4>
            </div>
            <div className="CommonForm">
              <div className="form-group">
                <label>Rule Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rule Name"
                  name="ruleName"
                  value={ruleName}
                  onChange={handleChange}
                />
                {errors?.ruleName && (
                  <p className="d-flex justify-content-start text-danger mt-2 error">
                    {errors?.ruleName}
                  </p>
                )}
              </div>
              {/* <div className="d-flex">
                <div className="form-group">
                  <label>Effective From </label>
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Effective From"
                    name="effectiveFrom"
                    value={effectiveFrom}
                    onChange={handleChange}
                  />
                  {errors?.effectiveFrom && (
                    <p className="d-flex justify-content-start text-danger mt-2 error">
                      {errors?.effectiveFrom}
                    </p>
                  )}
                </div>
                <div className="form-group ml-4">
                  <label>Effective To </label>
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Effective From"
                    name="effectiveTo"
                    value={effectiveTo}
                    onChange={handleChange}
                  />
                  {errors?.effectiveTo && (
                    <p className="d-flex justify-content-start text-danger mt-2 error">
                      {errors?.effectiveTo}
                    </p>
                  )}
                </div>
              </div> */}
              <div className="form-group">
                <label>Time Slots</label>
                {time?.map((res, index) => (
                  <div className="row align-items-end " key={index}>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label>Effective From</label>
                        <input
                          type="time"
                          className="form-control"
                          name="effectiveFrom"
                          value={res.effectiveFrom}
                          onChange={(e) => {
                            const updatedTime = [...time];
                            const updatedError = { ...errors };
                            updatedTime[index].effectiveFrom = e.target.value;
                            if (updatedError.time && updatedError.time[index]) {
                              updatedError.time[index].effectiveTo = "";
                            }
                            setUpdateState((prev) => ({
                              ...prev,
                              time: updatedTime,
                              errors: updatedError,
                            }));
                          }}
                        />
                        {errors?.time?.[index]?.effectiveFrom && (
                          <small className="text-danger">
                            {errors?.time?.[index]?.effectiveFrom}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="form-group">
                        <label>Effective To</label>
                        <input
                          type="time"
                          className="form-control"
                          name="effectiveTo"
                          value={res.effectiveTo}
                          onChange={(e) => {
                            const updatedTime = [...time];
                            const updatedError = { ...errors };
                            updatedTime[index].effectiveTo = e.target.value;
                            if (updatedError.time && updatedError.time[index]) {
                              updatedError.time[index].effectiveTo = "";
                            }
                            setUpdateState((prev) => ({
                              ...prev,
                              time: updatedTime,
                              errors: updatedError,
                            }));
                          }}
                        />
                        {errors?.time?.[index]?.effectiveTo && (
                          <small className="text-danger">
                            {errors?.time?.[index]?.effectiveTo}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-2 d-flex align-items-center">
                      {index > 0 && (
                        <button
                          type="button"
                          style={{
                            background: "red",
                          }}
                          className="btn btn-outline-danger mt-2"
                          onClick={() => {
                            const updatedTime = [...time];
                            updatedTime.splice(index, 1);
                            setUpdateState((prev) => ({
                              ...prev,
                              time: updatedTime,
                            }));
                          }}
                          aria-label="Delete time range"
                        >
                          <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="mb-3">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() =>
                      setUpdateState((prev) => ({
                        ...prev,
                        time: [
                          ...prev.time,
                          { effectiveFrom: "", effectiveTo: "" },
                        ],
                      }))
                    }
                  >
                    + Add Time Slot
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>SurCharge Value</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="SurCharge Value"
                  name="surchargeValue"
                  value={surchargeValue}
                  onChange={handleChange}
                />
                {errors?.surchargeValue && (
                  <p className="d-flex justify-content-start text-danger mt-2 error">
                    {errors?.surchargeValue}
                  </p>
                )}
              </div>
              <div className="form-group w-100">
                <label>Priority</label>
                <select
                  className="form-control"
                  name="day"
                  value={day}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                {errors?.day && (
                  <p className="d-flex justify-content-start text-danger mt-2 error">
                    {errors?.day}
                  </p>
                )}
              </div>
              <div className="form-group">
                <button className="Button" onClick={handleSave}>
                  Save Rule
                </button>
              </div>
            </div>
            <div className="TitleBox">
              <h4 className="Title">SurCharge Rule</h4>
            </div>
            <div className="TableList">
              <table className="table-hover">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Rule Name</th>
                    <th>Rule Value</th>
                    <th> Effective from </th>
                    <th> Effective To </th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {surCharge?.result?.[0]?.paginationData?.map((res, i) => {
                    return (
                      <tr>
                        <td>{i + 1 + (page - 1) * 10}</td>
                        <td>{res?.ruleName}</td>
                        <td>{res?.surchargeValue}</td>
                        <td>
                          {moment(res?.effectiveFrom, "HH:mm").format(
                            "hh:mm A"
                          )}
                        </td>
                        <td>
                          {moment(res?.effectiveTo, "HH:mm").format("hh:mm A")}
                        </td>

                        <td>
                          <span
                            className={
                              res?.status == "ACTIVE" ? "Green" : "Red"
                            }
                          >
                            {res?.status == "ACTIVE" ? "Enabled" : "Disabled"}
                          </span>
                        </td>
                        <td>
                          <div className="Actions">
                            <label className="Switch">
                              <input
                                type="checkbox"
                                name="status"
                                checked={res?.status == "ACTIVE"}
                                onChange={(e) => handleChecked(e, res?._id)}
                              />
                              <span className="slider" />
                            </label>
                            <a
                              className="Green"
                              onClick={() =>
                                setUpdateState((prev) => ({
                                  ...prev,
                                  updateModal: true,
                                  data: res,
                                }))
                              }
                            >
                              <i className="fa fa-pencil" />
                            </a>
                            <a
                              className="Red"
                              onClick={() =>
                                setUpdateState((prev) => ({
                                  ...prev,
                                  deleteModal: true,
                                  id: res?._id,
                                }))
                              }
                            >
                              <i className="fa fa-trash" aria-hidden="true" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {surCharge?.result?.[0]?.totalCount?.[0]?.count < 0 && (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                  height: 200,
                  color: "green",
                }}
              >
                No SurCharge Yet! Please add a new SurCharge
              </p>
            )}
            <div className="PaginationBox">
              <div className="PaginationLeft">
                <p>
                  Total Records :{" "}
                  <span>
                    {surCharge?.result?.[0]?.totalCount?.[0]?.count || 0}
                  </span>
                </p>
              </div>
              <div className="PaginationRight">
                {surCharge?.result?.[0]?.totalCount?.[0]?.count > 0 && (
                  <CommonPagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={
                      surCharge?.result?.[0]?.totalCount?.[0]?.count || 0
                    }
                    pageRangeDisplayed={4}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteModal && (
        <DeleteModal
          handleClose={handleCloseDeleteModal}
          handleDelete={handleDelete}
          statement="SurCharge"
        />
      )}
      {updateModal && (
        <EditSurCharge handleClose={handleCloseUpdateModal} data={data} />
      )}
    </>
  );
};

export default AddSurCharge;
