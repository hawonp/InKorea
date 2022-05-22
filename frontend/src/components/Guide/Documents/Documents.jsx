import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  // Checkbox,
  List,
  ListItem,
  ListItemButton,
  // ListItemIcon,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { DOCUMENTS, INFO, SLASH } from "../../../utils/routeConstants";
import axiosInstance from "../../../utils/routeUtils";
import DocumentDetail from "./DocumentDetail";

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

export default function Documents({ id }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(-1);
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
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Typography
        variant="h6"
        style={{
          textAlign: "left",
          paddingLeft: "16px",
          paddingBottom: "16px",
        }}
      >
        Relevant Documents
      </Typography>
      <Typography
        style={{
          textAlign: "left",
          paddingBottom: "16px",
          paddingLeft: "16px",
        }}
      >
        This section contains documents used in Korea that are relevant to the
        scenario. You can click on a document to see the full details of a
        document.
      </Typography>
      {/* Document list accordion */}
      <Accordion defaultExpanded sx={{ background: "#f5f5f5" }}>
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
                    {/* <ListItemIcon>
                      <Checkbox
                        edge="start"
                        // checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        // inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon> */}
                    <ListItemButton
                      onClick={() => {
                        handleDocumentClick(
                          document["document_id"],
                          document["document_title"]
                        );
                      }}
                    >
                      {document["document_title"]}
                    </ListItemButton>
                  </>
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
    </div>
  );
}
