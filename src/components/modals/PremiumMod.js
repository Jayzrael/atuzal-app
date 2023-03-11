import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "55px",
  border: "none",
};

const PremiumMod = ({ openPremiumMod, ClosePremium }) => {
  return (
    <Modal
      open={openPremiumMod}
      onClose={ClosePremium}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Premum Package
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p>SERVICE IN DESCRIPTION</p>
          <ul className="ml-3">
            <li className="font-bold">2 Photographer.</li>
            <li className="font-bold">1 Photographer</li>
          </ul>
          <p className="mt-7">DELIVERY</p>
          <ul className="ml-3">
            <li className="font-bold">Full Video.</li>
            <li className="font-bold">Table Frame</li>
            <li className="font-bold">1 Calendar</li>
            <li className="font-bold">Two Wall Frames 12x16inches</li>
            <li className="font-bold">
              1 Photo Book (Non Tearable Synthetic) <br /> 12x24 inches and 1
              mini Photo Book.
            </li>
            <li className="font-bold">
              Highlight Video and soft copies of pictures on a flash drive.
            </li>
          </ul>
        </Typography>
        <Typography>
          <div className="flex gap-5 mt-5">
            <h1 className="font-bold text-red-600">1 Day: NGN380,000</h1>
            <h1 className="font-bold text-red-600">2 Days: NGN430,000</h1>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default PremiumMod;
