import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
import i18next from "i18next";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/assets/icons/ic_flag_en.svg",
  },
  {
    value: "am",
    label: "Amharic",
    icon: "/assets/icons/Flag_of_Ethiopia.svg",
  },
];

// ----------------------------------------------------------------------

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const fetchLangFromCookie = () => {
  const lang = getCookie("i18next");

  if (lang !== null) {
    return LANGS.find((o) => o.value === lang);
  }

  return null;
};

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);
  const [selected, setSelected] = useState(fetchLangFromCookie() ?? LANGS[0]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const changeLang = (lang) => {
    i18next.changeLanguage(lang.value);
    setSelected(lang);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img src={selected.icon} alt={selected.label} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selected.value}
              onClick={() => changeLang(option)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
