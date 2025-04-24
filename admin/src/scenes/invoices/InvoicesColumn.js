import { Typography, colors } from "@mui/material";

const InvoicesColumn = [
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
    field: "cost",
    headerName: "Cost",
    type: "number",
    headerAlign: "left",
    align: "left",
    alignItem: "center",
    justifyContent: 'center',
    editable: true,
    renderCell: (params) => (
        <Typography color={colors.green[500]}>
            ${params.row.cost}
        </Typography>
    ),
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    editable: true,
  },
];
export default InvoicesColumn;
