import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Modal,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
// sections
import { UserListHead, UserListToolbar } from "../sections/@dashboard/user";
import axios from "axios";
import UserFormModal from "sections/@dashboard/user/UserFormModal";
// mock

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "roles", label: "Roles", alignRight: false },
  { id: "emailConfirmed", label: "Email Confirmed", alignRight: false },
  // { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => {
      const name = _user.firstName + " " + _user.lastName;
      return name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  return stabilizedThis.map((el) => el[0]);
}

function EmptyTable({ children }) {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
          <Paper
            sx={{
              textAlign: "center",
            }}
          >
            {children}
          </Paper>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default function UserPage() {
  const { t } = useTranslation();

  const [openPopOver, setOpenPopOver] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [usersList, setUsersList] = useState([]);

  const handleOpenPopOverMenu = (value) => {
    setOpenPopOver(value);
  };

  const handleCloseMenu = () => {
    setOpenPopOver(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = usersList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usersList.length) : 0;

  const filteredUsers = applySortFilter(
    usersList,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const fetchUsers = () => {
    axios
      .get("/users")
      .then((res) => {
        console.log(res.data);
        setUsersList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createUser = (user) => {
    axios
      .post("/users", user)
      .then((res) => {
        fetchUsers();
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = () => {
    axios
      .delete("/users/" + openPopOver.id)
      .then((res) => {
        fetchUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Helmet>
        <title> {t("User_Skill_Learn")} </title>
      </Helmet>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            {t("User")}
          </Typography>
          <Button
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleOpenModal}
          >
            {t("New_User")}
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          {/* <Scrollbar> */}
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={usersList.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const {
                      id,
                      firstName,
                      lastName,
                      roles,
                      emailConfirmed,
                      email,
                    } = row;
                    const name = `${firstName} ${lastName}`;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={selectedUser}
                      >
                        {/* <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedUser}
                            onChange={(event) => handleClick(event, name)}
                          />
                        </TableCell> */}

                        <TableCell component="th" scope="row" padding="normal">
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Avatar
                              alt={name}
                              src={"https://i.pravatar.cc/300" + id}
                            />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{email}</TableCell>

                        <TableCell align="left">
                          {roles.map((r) => r.role).join(", ")}
                        </TableCell>

                        <TableCell align="left">
                          {emailConfirmed ? "Yes" : "No"}
                        </TableCell>

                        {/* <TableCell align="left">
                            <Label
                              color={
                                (status === "banned" && "error") || "success"
                              }
                            >
                              {sentenceCase(status)}
                            </Label>
                          </TableCell> */}

                        <TableCell align="right">
                          <IconButton
                            size="large"
                            color="inherit"
                            onClick={(e) =>
                              handleOpenPopOverMenu({
                                id,
                                target: e.currentTarget,
                              })
                            }
                          >
                            <Iconify icon={"eva:more-vertical-fill"} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>

              {isNotFound && (
                <EmptyTable>
                  <Typography variant="h6" paragraph>
                    {t("Not_found")}
                  </Typography>

                  <Typography variant="body2">
                    {t("No_results_found_for")} &nbsp;
                    <strong>&quot;{filterName}&quot;</strong>.
                    <br />
                    {t("Try_checking_for_typos_or_using_complete_words")}
                  </Typography>
                </EmptyTable>
              )}
              {!isNotFound && usersList.length === 0 && (
                <EmptyTable>
                  <Typography variant="h6" paragraph>
                    {t("No_Users")}
                  </Typography>

                  <Typography variant="body2">
                    {t("No_results_found")}
                    <br /> {t("Be_the_first_person_create_user")}
                  </Typography>
                </EmptyTable>
              )}
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={usersList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
          {/* </Scrollbar> */}
        </Card>
      </Container>
      <Popover
        open={Boolean(openPopOver)}
        anchorEl={openPopOver?.target}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem sx={{ color: "error.main" }} onClick={deleteUser}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          {t("Delete")}
        </MenuItem>
      </Popover>

      {/* Add User Form Modal */}
      <UserFormModal
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={createUser}
      />
    </>
  );
}
