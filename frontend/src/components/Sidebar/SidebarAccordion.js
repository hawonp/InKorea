import React from "react";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemButton } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  borderRight: 0,
  "&:before": {
    display: "none",
  },
}));

export default function SidebarAccordion({ options, handleSubcatSelect }) {
  return (
    <div>
      {options.map((option, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{option.categoryName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {option.subCategories.map((subcat) => (
                <ListItem disablePadding key={subcat["subcategory_name"]}>
                  <ListItemButton onClick={() => handleSubcatSelect(subcat['subcategory_id'])}>
                    <p style={{ fontSize: 12 }}>{subcat["subcategory_name"]}</p>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
