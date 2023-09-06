import React from "react";
import "./ContextMenu.css";
import { Button } from "@components";
import { BUTTON_VARIANTS } from "@constants/buttons";
import { editIcon, deleteIcon } from "@assets/images";

const ContextMenu = () => {
  return (
    <div className="context-menu">
      <Button
        variant={BUTTON_VARIANTS.EDIT}
        icon={editIcon}
        onClick={() => {}}
      >
        Edit
      </Button>
      <Button
        variant={BUTTON_VARIANTS.DELETE}
        icon={deleteIcon}
        onClick={() => {}}
      >
        Delete
      </Button>
    </div>
  );
};

export default ContextMenu;
