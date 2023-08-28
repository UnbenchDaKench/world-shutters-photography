import React, { useState } from "react";
import './ImageSlider.scss'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import SliderItem from "./sliderItem/SliderItem";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const style = {
  position: "absolute",
  top: "50%",
  left: {
    xs:"20%",
    md: '35%'
  },
  transform: "translate(0%, -50%)",
  width: {
    xs: '60vw',
    md: '45vw',
    lg: '35vw'
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ImageSlider({ handleImageClick, isClicked, sliderImages, index }) {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [open, setOpen] = useState(isClicked);
  const handleClose = () => {
    setOpen(false);
    handleImageClick();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Paper
              elevation={24}
              sx={{ position: "relative", overflow: "hidden" }}
            >
              {sliderImages.map((image, index) => (
                <SliderItem
                  key={index}
                  image={image.photo}
                  isActive={index === currentIndex}
                />
              ))}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  color: "white",
                }}
              >
                <ArrowCircleLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  color: "white",
                }}
              >
                <ArrowCircleRightIcon />
              </IconButton>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ImageSlider;
