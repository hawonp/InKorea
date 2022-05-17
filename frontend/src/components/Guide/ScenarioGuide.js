import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { SCENARIO, SLASH } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";
import ScenarioItem from "./ScenarioItem";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function ScenarioGuide({ id }) {
  const [rootID, setRootID] = useState(-1);

  useEffect(() => {
    axiosInstance
      .get(SCENARIO + SLASH, {
        params: {
          subcategory_id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        if (data != 0) {
          console.log("get root", data);

          setRootID(data[0].phrase_id);
          console.log("this is the new root id", rootID);
        } else {
          setRootID(-1);
        }
      });
  });
  return (
    <div>
      {rootID == -1 ? (
        <p> hello world</p>
      ) : (
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineContent style={{ textAlign: "right" }}>
              <ScenarioItem id={rootID} />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent style={{ textAlign: "left" }}>
              <ScenarioItem id={2} />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <ScenarioItem id={3} />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent>
              <ScenarioItem id={4} />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      )}
    </div>
  );
}
