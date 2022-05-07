## Config Docs

# Input
key: {
  id: string,
  control: "input",
  type: "text" | "number" | ...,
  value: string,
  placeholder: string,
  label: {
    text: string,
    visible: boolean,
  },
  rules?: {
    required: {
      value: boolean,
      message: string
    },
  },
  layout: {
    display: "grid",
    columnStart: "1",
    columnEnd: "3",
    rowStart: "1",
    rowEnd: "4",
  }
}