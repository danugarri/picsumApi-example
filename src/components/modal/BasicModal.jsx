import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useGetData } from "../../hooks/useGetData";
import { Input } from "../input/Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign:'center'
};

export const BasicModal = ({ counter, setCounter }) => {
  const { data } = useGetData(counter);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={data?.url} alt="response" />
          <br />
          <button onClick={() => setOpen(false)}>X</button>
          <Input setCounter={setCounter} counter={counter} />
        </Box>
      </Modal>
    </div>
  );
};
