const formConfig = {
  form: {
    person: {
      uuid: "679bafk8-hj1d-4h7f-a684-ad93b9426b42",
      id: "person",
      label: "Person",
      control: "group",
      items: {
        info: {
          uuid: "679bctu3-hz6d-9h1f-a684-ad93b9426b42",
          id: "info",
          label: "Info",
          control: "group",
          layout: {
            display: "grid",
            columns: "4",
          },
          items: {
            firstName: {
              uuid: "619ahcu8-hz6d-9h1t-a681-ad93b9426b42",
              id: "firstName",
              label: "First Name",
              control: "input",
              type: "text",
              value: "test",
              rules: {
                required: {
                  value: true,
                  message: "First Name is required",
                },
              },
              layout: {
                display: "grid",
                columnStart: "1",
                columnEnd: "3",
                rowStart: "1",
                rowEnd: "1",
              },
            },
            lastName: {
              uuid: "679bczu1-hz6d-9h1f-a647-ht93b9426b42",
              id: "lastName",
              label: "Last Name",
              control: "input",
              type: "text",
              layout: {
                display: "grid",
                columnStart: "3",
                columnEnd: "5",
                rowStart: "1",
                rowEnd: "1",
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
            },
          },
        },
        address: {
          uuid: "f8f4f8g6-a2h7-w8jv-w1k9-f8f8f8f8f8f8",
          id: "address",
          label: "Adresse",
          control: "group",
          items: {
            main: {
              uuid: "f8f4f8g6-a2h7-w8jv-w1k9-f8t4z9q2b5n1",
              id: "main",
              label: "Main Address",
              control: "group",
              items: {
                street: {
                  uuid: "f2z8u1g6-a2h7-w8jv-w1k9-p8o8i8u8t8r8",
                  id: "street",
                  label: "Street",
                  control: "input",
                  type: "text",
                },
                city: {
                  uuid: "f2z8u1t1-b1u3-j8jw-r1k1-p8o8i8u8t8r8",
                  id: "city",
                  label: "City",
                  control: "input",
                  type: "text",
                },
              },
            },
            sub: {
              uuid: "f1z4i8c8-a1y7-w8jv-w1k9-t8t4z9q2b5n2",
              id: "sub",
              label: "Sub Address",
              control: "list",
              creatable: true,
              swapable: true,
              visible: true,
              items: [],
            },
          },
        },
      },
    },
  },
  template: {
    person: {
      id: "person",
      label: "Person",
      control: "group",
      items: {
        info: {
          id: "info",
          label: "Info",
          control: "group",
          items: {
            firstName: {
              id: "firstName",
              label: "First Name",
              control: "input",
              type: "text",
            },
            lastName: {
              id: "lastName",
              label: "Last Name",
              control: "input",
              type: "text",
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
          },
        },
        address: {
          id: "address",
          label: "Adresse",
          control: "group",
          items: {
            main: {
              id: "main",
              label: "Main Address",
              control: "group",
              items: {
                street: {
                  id: "street",
                  label: "Street",
                  control: "input",
                  type: "text",
                },
                city: {
                  id: "city",
                  label: "City",
                  control: "input",
                  type: "text",
                },
              },
            },
            sub: {
              id: "sub",
              label: "Sub Address",
              control: "list",
              creatable: true,
              swapable: true,
              visible: true,
              items: [
                {
                  address: {
                    id: "address",
                    label: "Sub Adresse",
                    control: "group",
                    items: {
                      street: {
                        id: "street",
                        label: "Street",
                        control: "input",
                        type: "text",
                      },
                      city: {
                        id: "city",
                        label: "City",
                        control: "input",
                        type: "text",
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
};

export default formConfig;
