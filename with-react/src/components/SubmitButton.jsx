import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  marginRight: "40px",
  padding: "10px 40px 10px 40px",
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));
export default SubmitButton;
