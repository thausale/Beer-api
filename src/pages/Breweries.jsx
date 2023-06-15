import React, { useState } from 'react';
import BeerNavBar from '../components/BeerNavbar';
import { breweries } from '../../public/breweryData';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState(breweries);
  const [loading, setLoading] = useState(false);
  const [selectedBrewery, setSelectedBrewery] = useState(null);

  const handleCardClick = (brewery) => {
    setSelectedBrewery(brewery);
  };

  const handleCloseModal = () => {
    setSelectedBrewery(null);
  };

  return (
    <>
      <BeerNavBar />
      <div className="container mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {breweriesData.map((brewery) => (
              <Col key={brewery.id} onClick={() => handleCardClick(brewery)}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  />
                  <Card.Body>
                    <Card.Title>
                      {brewery.id} - {brewery.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <b> Address: </b> {brewery.address} / {brewery.country}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Modal show={selectedBrewery !== null} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Brewery Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedBrewery && (
              <div className="d-flex flex-column">
                <h5 className="ms-auto me-auto">{selectedBrewery.name}</h5>
                <img
                  variant="top"
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <p>{selectedBrewery.Desc}</p>
                <h6>Comments:</h6>
                {selectedBrewery.comments.map((comment) => (
                  <div key={comment.id}>
                    <p>
                      <b>{comment.id}:</b> {comment.name}
                    </p>
                    <p> {comment.comment}</p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Breweries;
