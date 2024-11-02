/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Select from "react-select";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const Fieldset = styled("fieldset")({
  display: "flex",
  textAlign: "left",
  gap: "12px",
  padding: "0px 12px",
  borderRadius: "8px",
  border: "1px solid #d2d6da",
  color: "#b5b5c3",
  background: "white",
  fontWeight: 400,
  "&:focus-within": {
    borderColor: "#35d1f5", //#35d1f5 #44c8f5
    boxShadow: "0rem 0rem 0rem 0.125rem rgba(129, 227, 249, 1)",
    "& legend": {
      color: "#44c8f5",
    },
  },
});
const Legend = styled("legend")({
  lineHeight: "16px",
  fontSize: "12px",
  padding: "0 4px",
});
const SelectContainer = styled(Select)({
  border: "none",
  outline: "none",
  padding: 0,
  width: "100%",
  fontSize: "14px",
  // fontFamily: "Nunito Sans",
  paddingBottom: "0px !important",
  " > div": {
    borderStyle: "hidden",
    minHeight: "auto",
    " > div": {
      padding: "8px 0",
    },
  },
  " > div:first-of-type": {
    borderColor: "transparent !important",
    boxShadow: "none",
  },
});

function SelectBox({
  onChange,
  value,
  options,
  isDisabled,
  label,
  placeholder,
  width,
  height,
  fontSize,
  required,
  mapField,
  customStatusStyle,
  getOptionLabel,
  getOptionValue,
  isMulti,
  defaultValue,
  ...rest
}) {
  const inputId = uuidv4();
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (value && options.length > 0) {
      const findValue = options.find((item) => item[mapField] === value || item.label === value);
      setDisplayValue(findValue);
    } else {
      setDisplayValue("");
    }
  }, [value, options]);

  return (
    <Fieldset
      className={
        displayValue || isMulti ? "custom-select-box" : "custom-select-box select-box-placeholder"
      }
      sx={{
        backgroundColor: isDisabled ? "#F5F5F5" : "#fff",
        width,
        height,
        fontSize,
      }}
      {...rest}
    >
      {label && (
        <Legend>
          {label}
          {required ? <span style={{ color: "var(--red-light)" }}>*</span> : null}
        </Legend>
      )}

      <SelectContainer
        defaultValue={defaultValue}
        isMulti={isMulti}
        sx={{
          paddingBottom: label ? "8px" : 0,
          lineHeight: "1.2",
          ...customStatusStyle,
          "&>div": isDisabled
            ? {
                backgroundColor: "unset",
              }
            : null,
        }}
        id={inputId}
        options={options}
        placeholder={isDisabled ? value : placeholder}
        isDisabled={isDisabled}
        onChange={(e) => onChange(e)}
        value={displayValue}
        required={required}
        noOptionsMessage={() => "Không có dữ liệu"}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        closeMenuOnSelect={!isMulti}
      />
    </Fieldset>
  );
}
export default SelectBox;

SelectBox.defaultProps = {
  value: "",
  onChange: () => {},
  isDisabled: false,
  label: "Label",
  options: [
    {
      value: null,
      label: null,
    },
  ],
  placeholder: "Placeholder",
  width: "max-content",
  height: "52px",
  fontSize: "13px",
  required: true,
  mapField: "",
  customStatusStyle: null,
  isMulti: false,
};

SelectBox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  required: PropTypes.bool,
  mapField: PropTypes.string,
  customStatusStyle: PropTypes.objectOf(PropTypes.string),
  isMulti: PropTypes.bool,
};
