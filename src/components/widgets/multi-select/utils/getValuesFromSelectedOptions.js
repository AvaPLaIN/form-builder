const getValuesFromSelectedOptions = (selectedOptions) => {
  return selectedOptions.map((option) => {
    return option.value;
  });
};

export default getValuesFromSelectedOptions;
