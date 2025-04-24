const ContactColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      // editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      editable: true,
    },
    {
        field: "city",
        headerName: "City",
        flex: 1,
        editable: true,
      }, 
      {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
        editable: true,
      },
      {
        field: "registrarId",
        headerName: "Registrar Id",
        flex: 1,
        editable: true,
      },
  ];
export default ContactColumns;