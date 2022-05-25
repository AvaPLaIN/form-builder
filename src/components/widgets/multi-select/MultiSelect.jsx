import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { memo, useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import FormStateContext from "../../../context/formState";
import MultiSelectContainer from "./MultiSelect.styles";
import formatValueToOptionsFormat from "./utils/formatValueToOptionsFormat";
import getValuesFromSelectedOptions from "./utils/getValuesFromSelectedOptions";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// TODO - implement custom logic for multi-select
//* Error Message, ...
const MultiSelect = ({ errorMessage, id, registerProps, ...item }) => {
  const { layout, label, options, placeholder, value } = item;

  const [selectedValues, setSelectedValues] = useState([]);

  //* handle update control form state manually - specific control
  const { handleUpdateControl } = useContext(FormStateContext);
  const { setValue } = useFormContext();

  useEffect(() => {
    setSelectedValues(formatValueToOptionsFormat(value));
  }, [value]);

  const handleOnChange = (_, values) => {
    const formattedValues = getValuesFromSelectedOptions(values);

    setValue(id, formattedValues);
    handleUpdateControl(id, formattedValues);
    setSelectedValues(values);
  };

  return (
    <MultiSelectContainer
      className="control-container multi-select-container"
      layout={layout}
    >
      {label?.visible && (
        <label className="label multi-select-label" htmlFor={id}>
          {label?.text}
        </label>
      )}
      <Autocomplete
        multiple
        className="control multi-select"
        value={selectedValues}
        options={options}
        onChange={handleOnChange}
        disableCloseOnSelect
        limitTags={3}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label={label.text} placeholder={placeholder} />
        )}
      />
      {errorMessage && (
        <div className="error multi-select-error">{errorMessage}</div>
      )}
    </MultiSelectContainer>
  );
};

export default memo(MultiSelect);
