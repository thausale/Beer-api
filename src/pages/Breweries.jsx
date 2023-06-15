import React from 'react';
import { useState } from 'react';
import BeerNavBar from '../components/BeerNavbar';
import { breweries } from '../../public/breweryData';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState(breweries);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <BeerNavBar />
      <div className="container mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {breweriesData.map((brewery) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  />
                  <Card.Body>
                    <Card.Title>{brewery.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {/* Location: {brewery.Location} */}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {/* Type: {brewery.type} */}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default Breweries;
