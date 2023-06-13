import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const roles = [
  {
    name: "Admin",
    value: "admin",
  },
  {
    name: "Reviewer",
    value: "reviewer",
  },
];

const PasswordInput = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      label={label}
      type={showPassword ? "text" : "password"}
      variant="outlined"
      fullWidth
      sx={{ mb: 3 }}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePassword}
              onMouseDown={togglePassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const UserFormModal = ({ open, onClose, onSubmit }) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState(null);

  const handleFormSubmit = () => {
    onSubmit({
      firstName,
      lastName,
      email,
      role: role.value,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    // setPassword("");
    setRole(null);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          New User
        </Typography>
        <Box
          component="form"
          style={{
            padding: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="text"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {/* <PasswordInput
            label="Password"
            value={password}
            onChange={setPassword}
          /> */}

          <Autocomplete
            sx={{ mb: 3 }}
            id="tags-outlined"
            options={roles}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) => setRole(value)}
            renderInput={(params) => (
              <TextField {...params} label="Role" placeholder="Role" />
            )}
          />

          <Button variant="outlined" sx={{ mt: 3 }} onClick={handleFormSubmit}>
            Create User
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UserFormModal;
