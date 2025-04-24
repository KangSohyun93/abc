
const columns = [
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
    field: "access",
    headerName: "Address",
    flex: 0.5,
    editable: true,
  },
];
export default columns;
