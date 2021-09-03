import React from "react";
import "./SidebarRow.css";
import { Avatar, Icon } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  //es6 convention
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
