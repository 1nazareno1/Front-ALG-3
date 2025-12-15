import { AdminPanelSettings } from "@mui/icons-material";
import { capitalize, Tooltip } from "@mui/material";
import React from "react";

export const RoleTooltip = ({
  title,
  size = "18px",
  color = "common.white",
}) => {
  return (
    <Tooltip
      placement={"top"}
      title={`Este usuario es ${capitalize(title.toLowerCase())}`}
    >
      <AdminPanelSettings
        sx={{
          color: color,
          height: size,
          width: size,
        }}
      />
    </Tooltip>
  );
};
