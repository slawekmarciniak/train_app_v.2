import Button from "@material-ui/core/Button";
import * as React from 'react';
import { FunctionComponent as FC } from 'react';

import CloseIcon from "@material-ui/icons/Close";

import "./style.css";

interface  CloseButtonProps {
  handleClose: () => void,
}

const CloseButton: FC<CloseButtonProps> = ({ handleClose }) => {
  return (
    <div className="buttonContainer">
      <Button
        style={{
          width: 50,
          height: 55,
          borderRadius: "50%",
          margin: "5px 5px 5px 0px",
          color: "gray",
        }}
        className="button"
        onClick={handleClose}
      >
        <CloseIcon />
      </Button>
    </div>
  );
};



export default CloseButton;
