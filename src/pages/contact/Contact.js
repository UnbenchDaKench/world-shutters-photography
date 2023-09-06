import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { Typography, Box, TextField, Button } from "@mui/material";

function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow="auto"
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to backend)
  };
  return (
    <div className="Contact">
      <Box
        sx={{
          width: {
            xs: "70vw",
            sm: "60vw",
          },
          mt: {
            xs: "20%",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: {
              xs: "100%",
            },
            ml: {
              xs: "8%",
              md: "10%",
            },
            mr: {
              //sm: "4%",
            },
          }}
        >
          Looking for a photographer?
        </Typography>
      </Box>
      <Box
      className='contact-box'
        sx={{
          width: {
            xs: "85%",
            //sm: ''
          },
          mt: {
            xs: "8%",
          },
          ml: {
            xs: "6%",
            sm: "4%",
          },
        }}
      >
        <form className="contact-form">
          <TextField
            label="Firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              width: "45%",
            }}
          />
          <TextField
            label="Lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              width: "45%",
            }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={4}
            fullWidth
            margin="normal"
            sx={{
              width: "100%",
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Contact;
