import React, { useState, useCallback, useEffect } from "react";
import moment from "moment";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import AddBoxIcon from "@material-ui/icons/AddBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PageFade from "components/blocks/PageFade";
import SideMenu from "components/blocks/SideMenu";
import Table from "components/blocks/Table";
import Background from "components/blocks/Background";
import Container from "components/blocks/Container";
import Footer from "components/blocks/Footer";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import MovieForm from "components/forms/MovieForm";

import useStyles from "./styles";
import { TTabsNames, TProps } from "./types";
import { IOrder } from "types/orders";
import { IUser } from "types/user";

const moviesTableHead = ["movieName", "tags", "startDate", "endDate", "price"];
const usersTableHead = ["avatar", "fullName", "email", "accountStatus"];
const ordersTableHead = ["avatar", "email", "movieName", "startDate", "price"];

const DashboardPage: React.FC<TProps> = ({
  movies,
  users,
  orders,
  fetchMovies,
  fetchUsers,
  fetchOrders,
  removeMovie,
  removeUsers,
}) => {
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState<TTabsNames>("movies");
  const [sideMenuIsVisible, setSideMenuIsVisible] = useState<boolean>(true);
  const [moviesData, setMoviesData] = useState<any[] | []>([]);
  const [usersData, setUsersData] = useState<IUser[] | []>([]);
  const [ordersData, setOrdersData] = useState<IOrder[] | []>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleRemoveMovie = useCallback(
    (movieIdToDelete: string) => removeMovie(movieIdToDelete),
    [removeMovie]
  );

  const handleToggle = useCallback(
    () => setSideMenuIsVisible((visible) => !visible),
    [setSideMenuIsVisible]
  );

  const handleTabChange = useCallback(
    (tabName: TTabsNames) => {
      setCurrentTab(tabName);

      if (window.innerWidth <= 1366) {
        setSideMenuIsVisible(false);
      }
    },
    [setCurrentTab, setSideMenuIsVisible]
  );

  const handleRemoveUsers = useCallback(() => removeUsers(), [removeUsers]);

  const handleOpenModal = useCallback(() => setModalIsOpen(true), [
    setModalIsOpen,
  ]);

  const handleCloseModal = useCallback(() => setModalIsOpen(false), [
    setModalIsOpen,
  ]);

  useEffect(() => {
    if (!movies.movies) fetchMovies("0");
  }, [fetchMovies, movies.movies]);

  useEffect(() => {
    if (!users.length) fetchUsers();
  }, [fetchUsers, users.length]);

  useEffect(() => {
    if (!orders.length) fetchOrders();
  }, [fetchOrders, orders.length]);

  useEffect(() => {
    if (movies.movies) {
      setMoviesData(
        movies.movies?.map((movie) => ({
          _id: movie._id,
          movieName: movie.movieName,
          tags: movie.tags.map((tag, index) => {
            if (movie.tags.length === index + 1) {
              return tag.name.toLowerCase();
            } else {
              return `${tag.name.toLowerCase()}, `;
            }
          }),
          startDate: moment(movie.startDate).format("YYYY.MM.DD"),
          endDate: moment(movie.endDate).format("YYYY.MM.DD"),
          price: movie.ticketPrice,
          remove: handleRemoveMovie,
        }))
      );
    }
  }, [movies, setMoviesData, handleRemoveMovie]);

  useEffect(() => {
    if (users.length) {
      setUsersData(
        users.map((user) => ({
          _id: user._id,
          avatar: user.avatar,
          fullName: user.fullName,
          email: user.email,
          accountStatus: user.accountStatus,
        }))
      );
    }
  }, [users, setUsersData]);

  useEffect(() => {
    if (orders.length) {
      const arr: any[] = [];

      orders.forEach((order) =>
        order.tickets.forEach((ticket) => {
          arr.push({
            _id: ticket._id,
            avatar: order.avatar,
            email: order.email,
            movieName: ticket.movieName,
            startDate: moment(ticket.startDate).format("YYYY.MM.DD"),
            price: ticket.ticketPrice,
          });
        })
      );

      setOrdersData(arr);
    }
  }, [orders, setOrdersData]);

  return (
    <PageFade>
      <SideMenu
        sideMenuIsVisible={sideMenuIsVisible}
        currentTab={currentTab}
        handleToggle={handleToggle}
        handleTabChange={handleTabChange}
      />
      <Background heightElementsAbove={0.1} footerHeight={100}>
        <Container>
          {currentTab === "movies" && (
            <Fade in={currentTab === "movies"}>
              <div>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>Movies</h2>
                  <Button
                    variant="outlined"
                    className={styles.button}
                    onClick={handleOpenModal}
                  >
                    <AddBoxIcon />
                    <span className={styles.btnText}>New movie</span>
                  </Button>
                </div>
                <Table
                  tableHead={moviesTableHead}
                  tableData={moviesData}
                  withEdit
                  withRemove
                />
              </div>
            </Fade>
          )}
          {currentTab === "users" && (
            <Fade in={currentTab === "users"}>
              <div>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>Users</h2>
                  <Button
                    variant="outlined"
                    className={classNames(styles.button, styles.buttonRemove)}
                    onClick={handleRemoveUsers}
                  >
                    <HighlightOffIcon />
                    <span className={styles.btnText}>Remove all</span>
                  </Button>
                </div>
                <Table tableHead={usersTableHead} tableData={usersData} />
              </div>
            </Fade>
          )}
          {currentTab === "orders" && (
            <Fade in={currentTab === "orders"}>
              <div>
                <div className={styles.wrapper}>
                  <h2 className={styles.title}>Orders</h2>
                </div>
                <Table tableHead={ordersTableHead} tableData={ordersData} />
              </div>
            </Fade>
          )}
        </Container>
      </Background>
      <Footer />
      <Modal
        open={modalIsOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={styles.modal}
      >
        <Fade in={modalIsOpen}>
          <Paper className={styles.modalBody}>
            <MovieForm handleCloseModal={handleCloseModal} />
          </Paper>
        </Fade>
      </Modal>
    </PageFade>
  );
};

export default DashboardPage;
