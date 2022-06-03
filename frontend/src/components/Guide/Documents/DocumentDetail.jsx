import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import MuiAccordion from "@mui/material/Accordion";
import { Link, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
    sx={{
      borderRight: 0,
      borderLeft: 0,
      marginBottom: 2,
      borderColor: "primary.main",
    }}
  />
))(({ theme }) => ({
  borderTop: `1px solid`,
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
  },
}));

export default function DocumentDetail({ entry }) {
  // About the document
  if (entry["entry_index"] === 1) {
    return (
      <Box key={entry["entry_id"]}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> {entry["entry_title"]} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {entry["entry_image"] !== "image url" ? (
              <img
                src={entry["entry_image"]}
                style={{ width: "100%" }}
                alt={"img"}
              />
            ) : (
              <></>
            )}
            <Typography style={{ wordWrap: "break-word" }}>
              {entry["entry_text"]}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }
  // Requirements
  if (entry["entry_index"] === 2) {
    const entryArray = entry["entry_text"].split("&");
    return (
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> {entry["entry_title"]} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {entryArray.map((entryText, index) => (
                <ListItem key={index}>
                  <CheckIcon sx={{ pr: 1 }} />
                  <Typography style={{ wordWrap: "break-word" }}>
                    {entryText}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }
  // Procedure
  if (entry["entry_index"] === 3) {
    const entryArray = entry["entry_text"].split("&");
    return (
      <Box key={entry["entry_id"]}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> {entry["entry_title"]} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              {entryArray.map((entryText, index) => (
                <li key={index}>
                  <Typography
                    style={{ wordWrap: "break-word" }}
                    key={entryText["entry_id"]}
                  >
                    {entryText}
                  </Typography>
                </li>
              ))}
            </ol>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }

  // Links
  if (entry["entry_index"] === 4) {
    const entryArray = entry["entry_text"].split("&");
    return (
      <Box key={entry["entry_id"]}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> {entry["entry_title"]} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {entryArray.map((entryText, index) => (
                <ListItem key={index}>
                  <LinkIcon />
                  <Link href={entryText.split(">")[1]} underline="none">
                    <Typography style={{ wordWrap: "break-word" }}>
                      &nbsp;{entryText.split(">")[0]}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  }

  return (
    <Box key={entry["entry_id"]}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> {entry["entry_title"]} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {entry["entry_image"] !== "image url" ? (
            <img
              src={entry["entry_image"]}
              style={{ width: "100%" }}
              alt={"img"}
            />
          ) : (
            <></>
          )}
          <Typography style={{ wordWrap: "break-word" }}>
            {entry["entry_text"]}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
