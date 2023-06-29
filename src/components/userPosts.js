import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../actions/postActions";
import { useParams } from "react-router-dom";
import { Card, Container, Spinner } from "react-bootstrap";

const UserPosts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

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
      <h1 style={{ margin: "20px" }}>User Posts</h1>
      {posts.map((post) => (
        <Card
          key={post.id}
          border='primary'
          className='mx-auto'
          style={{
            width: "70%",
            margin: "10px",
            backgroundColor: "#fffdfa",
          }}
        >
          <Card.Title>{post.title.toUpperCase()}</Card.Title>
          <Card.Text>{post.body.toUpperCase()}</Card.Text>
        </Card>
      ))}
    </Container>
  );
};

export default UserPosts;
