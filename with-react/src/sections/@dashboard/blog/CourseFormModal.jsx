import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Iconify from "components/iconify/Iconify";

const CourseFormModal = ({ course, handleClose, edit }) => {
  console.log(course);

  const [categories, setCategories] = React.useState([]);
  const [title, setTitle] = React.useState(course.title);
  const [price, setPrice] = React.useState(course.price);
  const [description, setDescription] = React.useState(course.description);
  const [poster, setPoster] = React.useState(course.poster);
  const [courseCategories, setCourseCategories] = React.useState(
    course.categories
  );
  const [difficulty, setDifficulty] = React.useState(course.difficulty);
  const [language, setLanguage] = React.useState(course.language);
  const [estimatedCompletionTime, setEstimatedCompletionTime] = React.useState(
    course.estimatedCompletionTime.split(" ")[0]
  );
  const [unitOfTime, setUnitOfTime] = React.useState(
    course.estimatedCompletionTime.split(" ")[1]
  );

  useEffect(() => {
    axios.get("/categories/").then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    form.append("price", price);
    form.append("difficulty", difficulty);
    form.append("coursePoster", poster);
    form.append(
      "courseCategories",
      JSON.stringify(courseCategories.map((c) => c.category))
    );
    form.append("language", language);
    form.append(
      "estimatedCompletionTime",
      estimatedCompletionTime + " " + unitOfTime
    );

    if (edit) {
      axios
        .put(`/courses/${course.id}`, form)
        .then(function (response) {
          handleClose(true);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    } else {
      axios
        .post("/courses", form)
        .then(function (response) {
          handleClose(true);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <>
      <DialogTitle id="scroll-dialog-title">
        {" "}
        {edit ? "Edit Course" : "New Course"}
      </DialogTitle>
      <DialogContent dividers>
        <Box
          component="form"
          style={{
            padding: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Course Title"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <TextField
            id="outlined-basic"
            label="Course Slug"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            value={title.toLowerCase().replace(/ /g, "-")}
            disabled
          />

          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              mb: 3,
            }}
            fullWidth
          >
            <Button
              component="label"
              variant="text"
              startIcon={<Iconify icon="material-symbols:file-upload" />}
              sx={{ marginRight: "1rem" }}
            >
              Course Poster
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  console.log(e.target.files);
                  setPoster(e.target.files[0]);
                }}
              />
            </Button>
            {poster.name}
          </Box>

          <TextField
            id="outlined-basic"
            label="Course Price (ETB)"
            variant="outlined"
            type="number"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <TextField
            id="outlined-basic"
            label="Language"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          />

          <TextField
            id="standard-textarea"
            label="Course Description"
            placeholder="Type something..."
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <Autocomplete
            multiple
            sx={{ mb: 3 }}
            id="tags-outlined"
            options={categories}
            value={courseCategories}
            getOptionLabel={(option) => option.category}
            filterSelectedOptions
            onChange={(_, value) => {
              console.log(value);
              setCourseCategories(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categories"
                placeholder="Course Categories"
              />
            )}
          />

          <Stack direction="row" sx={{ mb: 3 }}>
            <TextField
              id="outlined-basic"
              label="Estimated Time To Complete"
              variant="outlined"
              sx={{ flex: 1 }}
              onChange={(e) => setEstimatedCompletionTime(e.target.value)}
              value={estimatedCompletionTime}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Unit</InputLabel>
              <Select
                value={unitOfTime}
                label="Unit"
                onChange={(e) => setUnitOfTime(e.target.value)}
              >
                <MenuItem value="hours">Hours</MenuItem>
                <MenuItem value="days">Days</MenuItem>
                <MenuItem value="weeks">Weeks</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Box sx={{ mb: 3 }}>
            <ToggleButtonGroup
              color="primary"
              value={difficulty}
              exclusive
              onChange={(e, value) => setDifficulty(value)}
              aria-label="Platform"
            >
              <ToggleButton value="Beginner">Beginner</ToggleButton>
              <ToggleButton value="Intermediate">Intermediate</ToggleButton>
              <ToggleButton value="Advanced">Advanced</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Button variant="outlined" sx={{ mt: 3 }} onClick={handleFormSubmit}>
            {edit ? "Update" : "Create"}
          </Button>
        </Box>
      </DialogContent>
    </>
  );
};

export default CourseFormModal;
