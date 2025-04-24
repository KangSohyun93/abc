import { Box } from "@mui/material";
import Header from "~/components/Header";
import PieChart from "~/components/PieChart";


function PiePage() {
  return (
    <Box>
      <Header title="PIE CHART" subtitle="Create new pie" />
      <Box>
        <PieChart height='75vh'/>
      </Box>
    </Box>
  );
}

export default PiePage;
