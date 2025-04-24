import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "~/data/mockData";
import { tokens } from "~/theme";
import Header from "~/components/Header";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import columns from "./TeamColumns";
import { Typography } from "@mui/material";



function TeamTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const modifiedColumns = columns.map((col) => {
        if (col.field === "access") {
            return {
                ...col,
                renderCell: ({ row: { access } }) => {
                    return (
                            <Box
                                display="flex"
                                width="100%"
                                m="10px auto"
                                p="5px"
                                justifyContent="center"
                                alignItems="center !important"
                                
                                backgroundColor={
                                    access === "admin" ? colors.greenAccent[600] : colors.greenAccent[200]
                                }
                                borderRadius="4px"
                            >
                                    {access === "admin" && <AdminPanelSettingsOutlined />}
                                    {access === "manager" && <SecurityOutlined />}
                                    {access === "user" && <LockOpenOutlined />}
                                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                                        {access}
                                    </Typography>
                            </Box>
              
                    );
                },
            };
        }
        return col;
    });

    return (
        <div>
            <Box m="20px">
                <Header title="Team" subtitle="Managing the Team Members" />
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
                }}>
                    <DataGrid
                        rows={mockDataTeam}
                        columns={modifiedColumns}
                        
                    />
                </Box>
            </Box>
        </div>
    );
}

export default TeamTable;
