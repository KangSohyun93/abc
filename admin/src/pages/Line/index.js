import { Box } from "@mui/material";
import Header from "~/components/Header";
import LineChart from "~/components/LineChart";

function LinePage() {

    return (
        <Box>
            <Header title='LINE CHART' subtitle='Create line chart'/>
            <Box>
                <LineChart height='75vh' />
            </Box>
        </Box>
      );
      
}

export default LinePage;