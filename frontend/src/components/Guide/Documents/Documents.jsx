import React, { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Box, Button } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  // Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { DOCUMENTS, INFO, SLASH } from "../../../utils/routeConstants";
import axiosInstance from "../../../utils/routeUtils";
import DocumentDetail from "./DocumentDetail";

export default function Documents({ id, subcatName }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(-1);
  const [selectedSubcategoryName, setSelectedSubcategoryName] = useState("");
  const [documents, setDocuments] = useState([]);
  const [documentDetails, setDocumentDetails] = useState({
    documentTitle: "",
    documentDetails: [],
  });
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Handlers
  const handleClose = () => {
    setOpen(false);
  };

  function handleDocumentClick(id, title) {
    setOpen(true);
    axiosInstance
      .get(DOCUMENTS + SLASH + id + INFO)
      .then((response) => {
        const data = response.data;
        setDocumentDetails({ documentTitle: title, documentDetails: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  if (selectedSubcategory !== id) {
    axiosInstance
      .get(DOCUMENTS, {
        params: {
          subcategory_id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        setDocuments(data);
        setSelectedSubcategory(id);
        setSelectedSubcategoryName(subcatName);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Box
      sx={{
        padding: "16px",
        borderTop: 1,
      }}
    >
      <Typography
        variant="h6"
        style={{
          textAlign: "left",
        }}
      >
        Relevant Documents
      </Typography>
      <Typography
        style={{
          textAlign: "left",
          paddingBottom: "16px",
        }}
      >
        This section contains documents used in Korea that are relevant to{" "}
        {selectedSubcategoryName}. You can click on a document to see the full
        details of a document.
      </Typography>
      {/* Document list accordion */}
      <Accordion
        defaultExpanded
        sx={{
          marginLeft: 2,
          marginRight: 2,
        }}
        disableGutters
        // elevation={0}
        square
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Documents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {documents.map((document) => (
              <ListItem disablePadding key={document["document_id"]}>
                {document["has_details"] ? (
                  <>
                    <ListItemButton
                      color="primary"
                      onClick={() => {
                        handleDocumentClick(
                          document["document_id"],
                          document["document_title"]
                        );
                      }}
                    >
                      {/* <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon> */}
                      <ListItemText primary={document["document_title"]} />
                    </ListItemButton>
                  </>
                ) : (
                  <ListItemButton disabled>
                    <ListItemText primary={document["document_title"]} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      {/* Document dialog */}
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="docdetails-dialog-title"
        >
          <DialogTitle id="docdetails-dialog-title">
            {documentDetails["documentTitle"]}
          </DialogTitle>
          <DialogContent>
            {documentDetails.documentDetails.map((entry) => (
              <DocumentDetail entry={entry} key={entry["entry_id"]} />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}
