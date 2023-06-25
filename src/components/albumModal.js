import React from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";

export default function AlbumModal({
  showModal,
  handleCloseModal,
  selectedUser,
  userAlbums,
}) {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className='d-flex justify-content-center text-center'
    >
      <Modal.Header closeButton>
        <Modal.Title>{selectedUser.name}'s Albums</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {userAlbums.length > 0 ? (
          userAlbums.map((album) => (
            <ListGroup key={album.id}>
              <ListGroup.Item style={{ margin: "2px" }}>
                {album.title.toUpperCase()}
              </ListGroup.Item>
            </ListGroup>
          ))
        ) : (
          <p>No albums found.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onAnimationEnd={true}
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
