import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { CATEGORIES, DOCUMENTS, SLASH } from "../../utils/routeConstants";
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

export default function DocumentList({ id }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(-1);
  const [documents, setDocuments] = useState([]);

  if (selectedSubcategory != id) {
    axiosInstance
      .get(DOCUMENTS + SLASH, {
        params: {
          subcategory_id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        setDocuments(data);
        setSelectedSubcategory(id);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Accordion sx={{ borderRight: 0, borderLeft: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Documents </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {documents.map((document) => (
              <ListItem disablePadding key={document["document_id"]}>
                {document["has_details"] ? (
                  <ListItemButton>{document["document_title"]}</ListItemButton>
                ) : (
                  <Box sx={{ padding: 1, paddingLeft: 2 }}>
                    {document["document_title"]}
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
