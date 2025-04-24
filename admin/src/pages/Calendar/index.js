import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import CalendarPage from "~/scenes/calendar";
import { tokens } from "~/theme";

function Calendar() {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    return ( 
        <div className="wrapper">
            <CalendarPage />
        </div>
     );
}

export default Calendar;