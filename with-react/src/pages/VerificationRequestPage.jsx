import { Check, VerifiedUser } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Iconify from "components/iconify/Iconify";
import { useAuth } from "hooks/useAuth";
import React, { useEffect, useState } from "react";

const requirements = [
  "Your professional title",
  "Your address",
  "A government-issued ID",
  "Document to prove your profession",
];

export const getStatus = (request) => {
  if (!request.isReviewed) {
    return "Pending";
  } else if (request.isApproved) {
    return "Approved";
  } else if (!request.isApproved) {
    return "Rejected";
  }
};

const VerificationRequestPage = () => {
  const { user } = useAuth();
  const [governmentId, setGovernmentId] = React.useState(null);
  const [document, setDocument] = React.useState(null);
  const [professionalTitle, setProfessionalTitle] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMyRequest = () => {
    setLoading(true);
    axios
      .get("/users/profile-verification/me?creatorId=" + user.id)
      .then((res) => {
        setRequest(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("governmentId", governmentId);
    formData.append("proofDocument", document);
    formData.append("professionalTitle", professionalTitle);
    formData.append("address", address);

    axios
      .post("/users/profile-verification", formData)
      .then((res) => {
        setLoading(false);
        fetchMyRequest();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMyRequest();
  }, []);

  return (
    <Container>
      <Stack mb={5} spacing={3}>
        <Typography variant="h4" gutterBottom textAlign="left">
          Verify Your Profile
        </Typography>
        <Stack px={2} spacing={2}>
          <Typography variant="body2" textAlign="left">
            Verified profiles have a checkmark next to their name and verified
            title on their profile to show that Skill Learn has confirmed
            they've the required skills and certifications for the services they
            offer.
          </Typography>

          <Typography variant="body2" textAlign="left">
            To verify your profile, you'll need to provide the following
            information:
          </Typography>
          <List dense>
            {requirements.map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Typography variant="body2" textAlign="left">
            Once you've submitted your information, we'll review it and get back
            to you within 24 hours.
          </Typography>

          <Typography variant="body2" textAlign="left">
            <strong>Note:</strong> You can only submit your information once. If
            you need to make changes, please contact us.
          </Typography>
        </Stack>

        {!loading && request === null && (
          <>
            <Box
              component="form"
              style={{
                padding: "20px",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Professional Title"
                fullWidth
                sx={{ mb: 3 }}
                value={professionalTitle}
                onChange={(e) => setProfessionalTitle(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Address"
                fullWidth
                sx={{ mb: 3 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  mb: 3,
                }}
              >
                <Button
                  component="label"
                  variant="text"
                  startIcon={<Iconify icon="material-symbols:file-upload" />}
                  sx={{ marginRight: "1rem", width: "100%" }}
                >
                  Government-issued ID
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      setGovernmentId(e.target.files[0]);
                    }}
                  />
                </Button>
                {governmentId !== null && governmentId.name}
              </Box>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              >
                <Button
                  component="label"
                  variant="text"
                  startIcon={<Iconify icon="material-symbols:file-upload" />}
                  sx={{ marginRight: "1rem", width: "100%" }}
                >
                  Document to prove your profession
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      setDocument(e.target.files[0]);
                    }}
                  />
                </Button>
                {document !== null && document.name}
              </Box>
            </Box>

            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              <VerifiedUser />
              Submit for Verification
            </Button>
          </>
        )}

        {!loading && request !== null && (
          <Stack spacing={2}>
            <Typography variant="body2" textAlign="left">
              You have already submitted verification request for the{" "}
              <strong>Professional Title: {request.professionalTitle}</strong>
            </Typography>

            <Typography variant="body2" textAlign="left">
              <strong>Status:</strong> {getStatus(request)}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default VerificationRequestPage;
