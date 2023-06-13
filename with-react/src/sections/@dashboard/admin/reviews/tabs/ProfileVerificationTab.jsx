import { filter } from "lodash";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Popover,
  MenuItem,
  Divider,
} from "@mui/material";
// components
// sections
import axios from "axios";
import Iconify from "components/iconify/Iconify";
import { UserListHead } from "sections/@dashboard/user";
import ReviewerSelect from "../../ReviewerSelect";
import UserDisplay from "sections/@dashboard/user/UserDisplay";
import { Cancel, Check, CheckCircle, Launch, Link } from "@mui/icons-material";
import { getStatus } from "pages/VerificationRequestPage";
// mock

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "professionalTitle", label: "Professional Title", alignRight: false },
  { id: "creator", label: "Creator", alignRight: false },
  { id: "address", label: "Address", alignRight: false },
  { id: "governmentIdLink", label: "Government Id", alignRight: false },
  { id: "proofDocumentLink", label: "Proof Document", alignRight: false },
  { id: "", label: "Status", alignRight: false },
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

export default function ProfileVerificationTab() {
  const [openPopOver, setOpenPopOver] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [requests, setRequests] = useState([]);

  const handleOpenPopOverMenu = (value) => {
    setOpenPopOver(value);
  };

  const handleCloseMenu = () => {
    setOpenPopOver(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = requests.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - requests.length) : 0;

  const filteredUsers = applySortFilter(
    requests,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const fetchRequests = () => {
    axios.get("/users/profile-verification").then((res) => {
      setRequests(res.data);
    });
  };

  const handleApprove = () => {
    axios
      .put("/users/profile-verification/" + openPopOver.id + "/approve")
      .then((res) => {
        fetchRequests();
        setOpenPopOver(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = () => {
    axios
      .put("/users/profile-verification/" + openPopOver.id + "/reject")
      .then((res) => {
        fetchRequests();
        setOpenPopOver(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Profile Verification Requests
          </Typography>
        </Stack>

        <Card>
          {/* <Scrollbar> */}
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={requests.length}
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
                      professionalTitle,
                      creator,
                      address,
                      governmentIdLink,
                      proofDocumentLink,
                    } = row;
                    const selectedUser =
                      selected.indexOf(professionalTitle) !== -1;

                    creator.name = creator.firstName + " " + creator.lastName;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={selectedUser}
                      >
                        <TableCell component="th" scope="row" padding="normal">
                          <Typography variant="subtitle2" noWrap>
                            {professionalTitle}
                          </Typography>
                        </TableCell>

                        <TableCell align="left">{creator.name}</TableCell>

                        <TableCell align="left">{address}</TableCell>

                        <TableCell align="left">
                          <a href={governmentIdLink} target="_blank">
                            <Launch color="primary" />
                          </a>
                        </TableCell>

                        <TableCell align="left">
                          <a href={proofDocumentLink} target="_blank">
                            <Launch color="primary" />
                          </a>
                        </TableCell>

                        <TableCell align="left">{getStatus(row)}</TableCell>

                        {getStatus(row) === "Pending" && (
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
                        )}
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
                    Not found
                  </Typography>

                  <Typography variant="body2">
                    No results found for &nbsp;
                    <strong>&quot;{filterName}&quot;</strong>.
                    <br /> Try checking for typos or using complete words.
                  </Typography>
                </EmptyTable>
              )}
              {!isNotFound && requests.length === 0 && (
                <EmptyTable>
                  <Typography variant="h6" paragraph>
                    No Course Review Requests
                  </Typography>
                </EmptyTable>
              )}
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={requests.length}
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
        <MenuItem sx={{ color: "success.main" }} onClick={handleApprove}>
          <CheckCircle sx={{ mr: 2 }} />
          Approve
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: "error.main" }} onClick={handleReject}>
          <Cancel sx={{ mr: 2 }} />
          Reject
        </MenuItem>
      </Popover>
    </>
  );
}
