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
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { DOCUMENTS, INFO, SLASH } from "../../utils/routeConstants";
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
      {/* Document list accordion */}
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
                  <>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
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
              <Box key={entry["entry_id"]}>
                <Accordion
                  sx={{ borderRight: 0, borderLeft: 0, marginBottom: 2 }}
                >
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
