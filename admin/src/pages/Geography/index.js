import { Box, colors } from "@mui/material";
import GeographyChart from "~/components/Geography";
import Header from "~/components/Header";

function GeographyPage() {
  return (
    <Box>
      <Header title="GEOGRAPHY PAGE" subtitle="Create geography page" />
      <Box sx={{ width: "100%", height: "75vh" }}
      border={`1px solid ${colors.grey[100]}`}
      borderRadius='4px'
      >
        <GeographyChart height='75vh'/>
      </Box>
    </Box>
  );
}

export default GeographyPage;
