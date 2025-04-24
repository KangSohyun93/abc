import { useTheme } from "@emotion/react";
import { Box, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "~/data/mockData";
import { tokens } from "~/theme";
import Header from "~/components/Header";
import ContactColumns from "./ContactColumns";

function ContactTable() {
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
                        borderBottom: 'none'
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
                    }
                }}>
                    <DataGrid
                        rows={mockDataContacts}
                        columns={ContactColumns}
                        slots={{
                            toolbar: GridToolbar,
                            loadingOverlay: LinearProgress,
                        }}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default ContactTable;