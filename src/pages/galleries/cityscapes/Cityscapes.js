import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";
import ImageSlider from "../../../components/slider/ImageSlider";
import { CityscapePhotos } from "../../../data/cityscapePhotos/CityscapePhotos";

function Cityscapes() {
  const [imageClicked, setImageClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setImageClicked(!imageClicked);
    setImageIndex(index);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="Cityscapes-page">
      {imageClicked ? (
        <ImageSlider
          handleImageClick={handleImageClick}
          isClicked={imageClicked}
          sliderImages={CityscapePhotos}
          index={imageIndex}
        />
      ) : (
        <></>
      )}
      <Box
        sx={{
          width: "80vw",
          height: "95vh",
          overflowY: "inherit",
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          ml: "1%",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {CityscapePhotos.map((photo, index) => (
            <ImageListItem key={photo.photo}>
              <img
                onClick={() => handleImageClick(index)}
                src={`${photo.photo}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          width: "70vw",
          height: "95vh",
          overflowY: "inherit",
          display: { xs: "none", sm: "none", md: "block", lg: "none" },
          ml: "2%",
        }}
      >
        <ImageList variant="masonry" cols={2} gap={8}>
          {CityscapePhotos.map((photo, index) => (
            <ImageListItem key={photo.photo}>
              <img
                onClick={() => handleImageClick(index)}
                src={`${photo.photo}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          width: "60vw",
          height: "95vh",
          overflowY: "inherit",
          display: {
            xs: "none",
            sm: "block",
            md: "none",
            lg: "none",
          },
          ml: "2%",
        }}
      >
        <ImageList variant="masonry" cols={1} gap={8}>
          {CityscapePhotos.map((photo, index) => (
            <ImageListItem key={photo.photo}>
              <img
                onClick={() => handleImageClick(index)}
                src={`${photo.photo}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        sx={{
          width: "80vw",
          height: "95vh",
          overflowY: "inherit",
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
          },
          ml: "2%",
        }}
      >
        <ImageList variant="masonry" cols={1} gap={8}>
          {CityscapePhotos.map((photo, index) => (
            <ImageListItem key={photo.photo}>
              <img
                onClick={() => handleImageClick(index)}
                src={`${photo.photo}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default Cityscapes;
