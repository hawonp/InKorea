import React, { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import { List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function DocumentDetail({ entry }) {
  // Requirements
  if (entry["entry_index"] == 2) {
    const entryArray = entry["entry_text"].split("&");
    return (
      <Box key={entry["entry_id"]}>
        <Accordion sx={{ borderRight: 0, borderLeft: 0, marginBottom: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> {entry["entry_title"]} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {entryArray.map((entryText) => (
                <ListItem>
                  <CheckIcon />
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
  if (entry["entry_index"] == 3) {
    const entryArray = entry["entry_text"].split("&");
    return (
      <Box key={entry["entry_id"]}>
        <Accordion sx={{ borderRight: 0, borderLeft: 0, marginBottom: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> {entry["entry_title"]} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              {entryArray.map((entryText) => (
                <li>
                  <Typography style={{ wordWrap: "break-word" }}>
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

  return (
    <Box key={entry["entry_id"]}>
      <Accordion sx={{ borderRight: 0, borderLeft: 0, marginBottom: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> {entry["entry_title"]} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {entry["entry_image"] !== "image url" ? (
            <img src={entry["entry_image"]} />
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
