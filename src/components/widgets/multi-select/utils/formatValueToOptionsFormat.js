const formatValueToOptionsFormat = (values) => {
  return values.map((value) => ({
    value,
    label: value,
  }));
};

export default formatValueToOptionsFormat;
