const formConfig = {
  form: {
    username: {
      uuid: "344baaf2-db7b-4d5f-a787-ed93e9306a67",
      id: "username",
      label: "Username",
      control: "input",
      type: "text",
      value: "TestInput",
      rules: {
        required: {
          value: true,
          message: "Username is required",
        },
        minLength: {
          value: 5,
          message: "Username must be at least 5 characters",
        },
        maxLength: {
          value: 20,
          message: "Username must be at most 20 characters",
        },
      },
    },
    group: {
      uuid: "679bafk8-hj1d-4h7f-a684-ad93b9426b42",
      id: "group",
      label: "Group",
      control: "group",
      items: {
        item: {
          uuid: "324bctf6-jb9k-1d3g-a757-ad93a9406b61",
          id: "item",
          label: "Item",
          control: "input",
          type: "text",
          value: "TestInput",
          rules: {
            required: {
              value: true,
              message: "Street is required",
            },
          },
        },
      },
    },
    gender: {
      uuid: "374baaf3-db1b-3d5t-u787-ed93e9306b67",
      id: "gender",
      label: "Gender",
      control: "select",
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
      ],
      rules: {
        required: {
          value: true,
          message: "Gender is required",
        },
      },
    },
    address: {
      uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
      id: "address",
      label: "Adresse",
      control: "list",
      creatable: true,
      swapable: true,
      visible: true,
      items: [
        {
          street: {
            uuid: "9665c4c6-e34b-46b3-bc8c-3c2e296af25f",
            id: "street",
            label: "Street",
            control: "input",
            type: "text",
            value: "test",
            rules: {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must be at most 20 characters",
              },
            },
          },
          address: {
            uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
            id: "address",
            label: "Adresse",
            control: "list",
            creatable: true,
            swapable: true,
            visible: true,
            items: [
              {
                street: {
                  uuid: "9665c4c6-e34b-46b2-bc8c-3c2e296ad25f",
                  id: "street",
                  label: "Street",
                  control: "input",
                  type: "text",
                  value: "test",
                  rules: {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                    minLength: {
                      value: 5,
                      message: "Username must be at least 5 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must be at most 20 characters",
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  template: {
    username: {
      id: "username",
      label: "Username",
      control: "input",
      type: "text",
      rules: {
        required: {
          value: true,
          message: "Username is required",
        },
        minLength: {
          value: 5,
          message: "Username must be at least 5 characters",
        },
        maxLength: {
          value: 20,
          message: "Username must be at most 20 characters",
        },
      },
    },
    gender: {
      id: "gender",
      label: "Gender",
      control: "select",
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
      ],
      rules: {
        required: {
          value: true,
          message: "Gender is required",
        },
      },
    },
    address: {
      id: "address",
      label: "Adresse",
      control: "list",
      creatable: true,
      swapable: true,
      visible: true,
      items: [
        {
          street: {
            id: "street",
            label: "Street",
            control: "input",
            type: "text",
            rules: {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must be at most 20 characters",
              },
            },
          },
          address: {
            id: "address",
            label: "Adresse",
            control: "list",
            creatable: true,
            swapable: true,
            visible: true,
            items: [
              {
                street: {
                  id: "street",
                  label: "Street",
                  control: "input",
                  type: "text",
                  rules: {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                    minLength: {
                      value: 5,
                      message: "Username must be at least 5 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must be at most 20 characters",
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export default formConfig;
