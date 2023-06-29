import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import { Link } from "react-router-dom";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { fetchUserAlbums } from "../actions/albumActions";
import AlbumModal from "./albumModal";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userAlbums, setUserAlbums] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handlePostsClick = (user) => {
    setSelectedUser(user);
  };

  const handleAlbumsClick = async (user) => {
    setSelectedUser(user);
    setShowModal(true);

    // Fetch user's albums
    try {
      const albums = await dispatch(fetchUserAlbums(user.id));
      setUserAlbums(albums);
    } catch (error) {
      console.log("Error fetching user albums:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
    setUserAlbums([]);
  };

  if (loading) {
    return (
      <div
        className='d-flex justify-content-center'
        style={{ marginTop: "200px" }}
      >
        <strong>Loading...</strong>
        <Spinner animation='border' />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className='text-center align-items-center'>
      <h2 style={{ margin: "20px" }}>User List</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {users.map((user) => (
          <Card
            key={user.id}
            border='primary'
            className='mx-auto'
            style={{
              width: "18rem",
              height: "8rem",
              margin: "25px",
              boxShadow: "0 4px 8px 0",
              backgroundColor: "#fffdfa",
            }}
          >
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Button
                variant='primary'
                style={{ margin: "15px" }}
                onClick={() => handlePostsClick(user)}
              >
                <Link
                  className='text-reset text-decoration-none'
                  to={`/users/${user.id}/posts`}
                >
                  Posts
                </Link>
              </Button>
              <Button variant='primary' onClick={() => handleAlbumsClick(user)}>
                Albums
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {selectedUser && (
        <AlbumModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          selectedUser={selectedUser}
          userAlbums={userAlbums}
        />
      )}
    </Container>
  );
};

export default UserList;
