const formConfig = {
  form: {
    test: {
      id: "test",
      control: "urlInput",
      type: "url",
      value: "",
      placeholder: "url...",
      label: {
        text: "Test",
        visible: true,
      },
      rules: {
        required: {
          value: true,
          message: "Test is required",
        },
      },
      uuid: "test",
    },
    select: {
      id: "select",
      control: "select",
      options: [
        {
          value: "test",
          label: "test",
        },
      ],
      value: "",
      label: {
        text: "Test",
        visible: true,
      },
      rules: {
        required: {
          value: true,
          message: "Select is required",
        },
      },
      uuid: "select",
    },
    textarea: {
      id: "textarea",
      control: "textarea",
      type: "text",
      value: "",
      placeholder: "textarea...",
      label: {
        text: "Textarea",
        visible: true,
      },
      rules: {
        required: {
          value: true,
          message: "Textarea is required",
        },
      },
      uuid: "textarea",
    },
    testpw: {
      id: "testpw",
      control: "passwordInput",
      type: "password",
      value: "",
      placeholder: "password...",
      label: {
        text: "Password",
        visible: true,
      },
      rules: {
        required: {
          value: true,
          message: "Password is required",
        },
      },
      uuid: "password",
    },
    address: {
      id: "address",
      control: "group",
      label: {
        text: "Address",
        visible: true,
      },
      uuid: "5cb9e464-0458-481a-b66a-f78b420ccb85",
      items: {
        main: {
          id: "main",
          control: "group",
          label: {
            text: "Main",
            visible: true,
          },
          layout: {
            display: "grid",
            columns: "4",
          },
          uuid: "d322284a-8eb0-4689-b9c6-b4ef1dc2e5e2",
          items: {
            street: {
              id: "street",
              control: "input",
              type: "text",
              value: "",
              placeholder: "Street...",
              label: {
                text: "Street",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Street is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "4",
                rowStart: "1",
                rowEnd: "2",
              },
              uuid: "c18c701d-2c4b-4e78-8099-25ae995ef7c3",
            },
            number: {
              id: "number",
              control: "input",
              type: "number",
              value: "",
              placeholder: "Number...",
              label: {
                text: "Number",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Number is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "4",
                columnEnd: "5",
                rowStart: "1",
                rowEnd: "2",
              },
              uuid: "a213c49f-0566-4371-b1cc-d6e7e73257d9",
            },
            postalCode: {
              id: "plz",
              control: "input",
              type: "number",
              value: "",
              placeholder: "postal code...",
              label: {
                text: "Postal code",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Postal code is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "2",
                rowStart: "2",
                rowEnd: "3",
              },
              uuid: "e51d4109-d370-480e-8ee8-437ad68267fa",
            },
            city: {
              id: "city",
              control: "input",
              type: "text",
              value: "",
              placeholder: "city...",
              label: {
                text: "City",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "City is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "2",
                columnEnd: "5",
                rowStart: "2",
                rowEnd: "3",
              },
              uuid: "8837f34e-8ca9-4e80-8a62-6c7fefea61a7",
            },
            country: {
              id: "country",
              control: "input",
              type: "text",
              value: "",
              placeholder: "country...",
              label: {
                text: "Country",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Country is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "5",
                rowStart: "3",
                rowEnd: "4",
              },
              uuid: "c8172e20-e3f3-495c-bdd5-ad96f336f943",
            },
          },
        },
        sub: {
          id: "sub",
          control: "list",
          label: {
            text: "Sub Address",
            visible: true,
          },
          creatable: true,
          swapable: true,
          visible: true,
          uuid: "e217fd62-3891-4aa0-a831-2e3adf2d4ca5",
          items: [],
        },
      },
    },
  },
  template: {
    address: {
      id: "address",
      control: "group",
      label: {
        text: "Address",
        visible: true,
      },
      uuid: "5cb9e464-0458-481a-b66a-f78b420ccb85",
      items: {
        main: {
          id: "main",
          control: "group",
          label: {
            text: "Main",
            visible: true,
          },
          layout: {
            display: "grid",
            columns: "4",
          },
          uuid: "d322284a-8eb0-4689-b9c6-b4ef1dc2e5e2",
          items: {
            street: {
              id: "street",
              control: "input",
              type: "text",
              value: "",
              placeholder: "Street...",
              label: {
                text: "Street",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Street is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "4",
                rowStart: "1",
                rowEnd: "2",
              },
              uuid: "c18c701d-2c4b-4e78-8099-25ae995ef7c3",
            },
            number: {
              id: "number",
              control: "input",
              type: "number",
              value: "",
              placeholder: "Number...",
              label: {
                text: "Number",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Number is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "4",
                columnEnd: "5",
                rowStart: "1",
                rowEnd: "2",
              },
              uuid: "a213c49f-0566-4371-b1cc-d6e7e73257d9",
            },
            postalCode: {
              id: "plz",
              control: "input",
              type: "number",
              value: "",
              placeholder: "postal code...",
              label: {
                text: "Postal code",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Postal code is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "2",
                rowStart: "2",
                rowEnd: "3",
              },
              uuid: "e51d4109-d370-480e-8ee8-437ad68267fa",
            },
            city: {
              id: "city",
              control: "input",
              type: "text",
              value: "",
              placeholder: "city...",
              label: {
                text: "City",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "City is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "2",
                columnEnd: "5",
                rowStart: "2",
                rowEnd: "3",
              },
              uuid: "8837f34e-8ca9-4e80-8a62-6c7fefea61a7",
            },
            country: {
              id: "country",
              control: "input",
              type: "text",
              value: "",
              placeholder: "country...",
              label: {
                text: "Country",
                visible: true,
              },
              rules: {
                required: {
                  value: true,
                  message: "Country is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "5",
                rowStart: "3",
                rowEnd: "4",
              },
              uuid: "c8172e20-e3f3-495c-bdd5-ad96f336f943",
            },
          },
        },
        sub: {
          id: "sub",
          control: "list",
          label: {
            text: "Sub Address",
            visible: true,
          },
          creatable: true,
          swapable: true,
          visible: true,
          uuid: "e217fd62-3891-4aa0-a831-2e3adf2d4ca5",
          items: [
            {
              sub: {
                id: "sub",
                control: "group",
                label: {
                  text: "Sub",
                  visible: false,
                },
                layout: {
                  display: "grid",
                  columns: "4",
                },
                items: {
                  street: {
                    id: "street",
                    control: "input",
                    type: "text",
                    value: "",
                    placeholder: "Street...",
                    label: {
                      text: "Street",
                      visible: true,
                    },
                    rules: {
                      required: {
                        value: true,
                        message: "Street is required",
                      },
                    },
                    layout: {
                      display: "grid",
                      columnStart: "1",
                      columnEnd: "4",
                      rowStart: "1",
                      rowEnd: "2",
                    },
                  },
                  number: {
                    id: "number",
                    control: "input",
                    type: "number",
                    value: "",
                    placeholder: "Number...",
                    label: {
                      text: "Number",
                      visible: true,
                    },
                    rules: {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    },
                    layout: {
                      display: "grid",
                      columnStart: "4",
                      columnEnd: "5",
                      rowStart: "1",
                      rowEnd: "2",
                    },
                  },
                  postalCode: {
                    id: "plz",
                    control: "input",
                    type: "number",
                    value: "",
                    placeholder: "postal code...",
                    label: {
                      text: "Postal code",
                      visible: true,
                    },
                    rules: {
                      required: {
                        value: true,
                        message: "Postal code is required",
                      },
                    },
                    layout: {
                      display: "grid",
                      columnStart: "1",
                      columnEnd: "2",
                      rowStart: "2",
                      rowEnd: "3",
                    },
                  },
                  city: {
                    id: "city",
                    control: "input",
                    type: "text",
                    value: "",
                    placeholder: "city...",
                    label: {
                      text: "City",
                      visible: true,
                    },
                    rules: {
                      required: {
                        value: true,
                        message: "City is required",
                      },
                    },
                    layout: {
                      display: "grid",
                      columnStart: "2",
                      columnEnd: "5",
                      rowStart: "2",
                      rowEnd: "3",
                    },
                  },
                  country: {
                    id: "country",
                    control: "input",
                    type: "text",
                    value: "",
                    placeholder: "country...",
                    label: {
                      text: "Country",
                      visible: true,
                    },
                    rules: {
                      required: {
                        value: true,
                        message: "Country is required",
                      },
                    },
                    layout: {
                      display: "grid",
                      columnStart: "1",
                      columnEnd: "5",
                      rowStart: "3",
                      rowEnd: "4",
                    },
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
};

export default formConfig;
