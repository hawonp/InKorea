import { Typography } from "@mui/material";
import React, { useState } from "react";

import axiosInstance from "../../utils/routeUtils";
import { APPS, SLASH, DETAILS } from "../../utils/routeConstants";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Accordion } from "@mui/material";

export default function AppInfo({ id }) {
  const [appInfo, setAppInfo] = useState([]);
  const [appID, setAppID] = useState(-1);
  const [images, setImages] = useState([]);

  if (appID !== id) {
    axiosInstance.get(APPS + SLASH + id + DETAILS).then((response) => {
      const data = response.data;
      setAppInfo(data["data"]);
      setImages(data["imgs"]);
      setAppID(id);
    });
  }

  return (
    <div>
      {appInfo !== 0 && appInfo !== undefined ? (
        <div>
          {appInfo.map((info) => (
            <Accordion
              defaultExpanded
              key={info["info_id"]}
              sx={{ borderRight: 0, borderLeft: 0, marginBottom: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography color="text.primary" fontWeight="bold">
                  {info["info_title"]}{" "}
                </Typography>
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
          <ImageList sx={{ height: 400 }} cols={3} spacing={1}>
            {images.map((image) => (
              <ImageListItem key={image.img_src}>
                <img src={image.img_src} alt="Image" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : (
        <Typography>This app has no details yet</Typography>
      )}
    </div>
  );
}
