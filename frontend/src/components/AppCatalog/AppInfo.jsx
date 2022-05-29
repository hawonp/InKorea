import { Typography } from "@mui/material";
import React, { useState } from "react";

import axiosInstance from "../../utils/routeUtils";
import { APPS, SLASH, DETAILS } from "../../utils/routeConstants";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Accordion } from "@mui/material";
export default function AppInfo({ id }) {
  const [appInfo, setAppInfo] = useState([]);
  const [appID, setAppID] = useState(-1);

  if (appID !== id) {
    axiosInstance.get(APPS + SLASH + id + DETAILS).then((response) => {
      const data = response.data;
      setAppInfo(data);
      console.log("app data", data);
      setAppID(id);
    });
  }

  return (
    <div>
      {appInfo !== 0 && appInfo !== undefined ? (
        <div>
          {appInfo.map((info) => (
            <Accordion
              key={info["info_id"]}
              sx={{ borderRight: 0, borderLeft: 0, marginBottom: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography> {info["info_title"]} </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {info["info_image"] !== "image url" ? (
                  <img
                    src={info["info_image"]}
                    style={{ width: "100%" }}
                    alt={"img"}
                  />
                ) : (
                  <></>
                )}
                <Typography style={{ wordWrap: "break-word" }}>
                  {info["info_text"]}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <Typography>This app has no details yet</Typography>
      )}
    </div>
  );
}
