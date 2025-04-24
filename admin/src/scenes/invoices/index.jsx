import { useTheme } from "@emotion/react";
import { Box, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "~/data/mockData";
import { tokens } from "~/theme";
import Header from "~/components/Header";
import InvoicesColumn from "./InvoicesColumn";

function InvoicesPage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return ( 
        <div>
            <Box m="20px">
                <Header title="Contact" subtitle="Managing the Contacts Information" />
                <Box m="40px 0 0 0" height="75vh" sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: 'none',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none'
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: 'none'
                    },
                    "& .MuiButtonBase-root": {
                        color: "#fff"
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200] } !important`
                    }
                }}>
                    <DataGrid
                        rows={mockDataInvoices}
                        columns={InvoicesColumn}
                        slots={{
                            toolbar: GridToolbar,
                            loadingOverlay: LinearProgress,
                        }}
                        checkboxSelection
                    />
                </Box>
            </Box>
    </div> );
}

export default InvoicesPage;