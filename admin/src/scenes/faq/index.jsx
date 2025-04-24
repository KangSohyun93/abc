import { useTheme } from "@emotion/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Header from "~/components/Header";
import { tokens } from "~/theme";

function FaqPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="wrapper">
      <Header title="FAQ PAGE" subtitle="Answer the questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            All Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non est lectus. Maecenas id est eget quam ullamcorper hendrerit sit
            amet a lorem. Sed euismod mauris eget enim laoreet ullamcorper.
            Nullam interdum enim sit amet quam elementum pulvinar. Donec et eros
            tincidunt, semper risus id, aliquam ipsum. Proin non enim quis erat
            semper tincidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            All Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non est lectus. Maecenas id est eget quam ullamcorper hendrerit sit
            amet a lorem. Sed euismod mauris eget enim laoreet ullamcorper.
            Nullam interdum enim sit amet quam elementum pulvinar. Donec et eros
            tincidunt, semper risus id, aliquam ipsum. Proin non enim quis erat
            semper tincidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            All Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non est lectus. Maecenas id est eget quam ullamcorper hendrerit sit
            amet a lorem. Sed euismod mauris eget enim laoreet ullamcorper.
            Nullam interdum enim sit amet quam elementum pulvinar. Donec et eros
            tincidunt, semper risus id, aliquam ipsum. Proin non enim quis erat
            semper tincidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            All Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non est lectus. Maecenas id est eget quam ullamcorper hendrerit sit
            amet a lorem. Sed euismod mauris eget enim laoreet ullamcorper.
            Nullam interdum enim sit amet quam elementum pulvinar. Donec et eros
            tincidunt, semper risus id, aliquam ipsum. Proin non enim quis erat
            semper tincidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            All Important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non est lectus. Maecenas id est eget quam ullamcorper hendrerit sit
            amet a lorem. Sed euismod mauris eget enim laoreet ullamcorper.
            Nullam interdum enim sit amet quam elementum pulvinar. Donec et eros
            tincidunt, semper risus id, aliquam ipsum. Proin non enim quis erat
            semper tincidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FaqPage;
