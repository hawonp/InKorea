import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { DOCUMENTS, SLASH } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";

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

export default function DocumentList({ subCateogry }) {
  const [documents, setDocuments] = React.useState([]);
  const sub = "1";
  useEffect(() => {
    axiosInstance
      .get(DOCUMENTS + SLASH + sub)
      .then((response) => {
        const data = response.data;
        setDocuments(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Documents </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {documents.map((document, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton>{document["document_title"]}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
