import React from "react";
import { TextField } from "@material-ui/core";
import Select from "react-select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/ar";

const SearchSection = (props) => {
  return (
    <>
      <div
        className="search_form_conainer my-2"
        style={{ backgroundColor: "#243b2e" }}
      >
        <div className="container">
          <form onSubmit={props.submit}>
            <div className="row align-items-center">
              {props.TextFieldOneHandler ? (
                <div
                  className={`${props.classNameTextFieldOne} form-group mt-4`}
                >
                  <TextField
                    variant="filled"
                    onChange={props.TextFieldOneHandler}
                    className="w-100"
                    id="standard-basic"
                    placeholder={props.labelTextFieldOne}
                  />
                </div>
              ) : null}

              {props.TextFieldTwoHandler ? (
                <div
                  className={`${props.classNameTextFieldTwo} form-group mt-4`}
                >
                  <TextField
                    variant="filled"
                    onChange={props.TextFieldTwoHandler}
                    className="w-100"
                    id="standard-basic"
                    placeholder={props.labelTextFieldTwo}
                  />
                </div>
              ) : null}

              {props.dropdownOneHandler ? (
                <div
                  style={{ height: "1.1rem" }}
                  className={`${props.classNameDropdownOne} form-group my-4`}
                >
                  <Select
                    isDisabled={props.disableOne ?? false}
                    value={props.dropdownOneVal}
                    onChange={props.dropdownOneHandler}
                    placeholder={props.dropdownOnePlaceholder}
                    options={props.dropdownOneName}
                  />
                </div>
              ) : null}

              {props.dropdownTwoHandler ? (
                <div
                  style={{ height: "1.1rem" }}
                  className={`${props.classNameDropdownTwo} form-group my-4`}
                >
                  <Select
                    isDisabled={props.disableTwo ?? false}
                    value={props.dropdownTwoVal}
                    onChange={props.dropdownTwoHandler}
                    placeholder={props.dropdownTwoPlaceholder}
                    options={props.dropdownTwoName}
                  />
                </div>
              ) : null}

              {props.dropdownThreeHandler ? (
                <div
                  style={{ height: "1.1rem" }}
                  className={`${props.classNameDropdownThree} form-group my-4`}
                >
                  <Select
                    isDisabled={props.disableThree ?? false}
                    value={props.dropdownThreeVal}
                    onChange={props.dropdownThreeHandler}
                    placeholder={props.dropdownThreePlaceholder}
                    options={props.dropdownThreeName}
                  />
                </div>
              ) : null}
              {props.publishFromHandler ? (
                <div
                  className={`${props.classNameDPFrom} mt-4 d-flex dateInput`}
                >
                  <label className="m-1 text-white">من</label>
                  <MuiPickersUtilsProvider
                    libInstance={moment}
                    utils={MomentUtils}
                    locale={"sw"}
                  >
                    <KeyboardDatePicker
                      format="L"
                      inputVariant="outlined"
                      value={props.publishDateFrom}
                      variant="dialog"
                      maxDateMessage=""
                      mask="__-__-____"
                      placeholder="يوم/شهر/سنة"
                      onChange={props.publishFromHandler}
                      views={["year", "month", "date"]}
                      okLabel="تحديد"
                      cancelLabel="إلغاء"
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : null}
              {props.publishToHandler ? (
                <div className={`${props.classNameDPTo} mt-4 d-flex dateInput`}>
                  <label className="m-1 text-white">إلى</label>
                  <MuiPickersUtilsProvider
                    libInstance={moment}
                    utils={MomentUtils}
                    locale={"sw"}
                  >
                    <KeyboardDatePicker
                      format="L"
                      value={props.publishDateTo}
                      variant="dialog"
                      inputVariant="outlined"
                      maxDateMessage=""
                      mask="__-__-____"
                      placeholder="يوم/شهر/سنة"
                      onChange={props.publishToHandler}
                      views={["year", "month", "date"]}
                      okLabel="تحديد"
                      cancelLabel="إلغاء"
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : null}
              <div
                className={`${props.classNameBtn} col-12 d-flex justify-content-end`}
              >
                {" "}
                <button
                  type={"submit"}
                  className="myButton mx-1 my-2"
                  style={{ verticalAlign: "middle" }}
                >
                  <span>بحث</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
