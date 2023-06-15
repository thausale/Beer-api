import React from "react";
import { useEffect, useState } from "react";
import { beerData } from "../../public/beerData";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  //   TODO: once we have API, set default to true, uncomment useEffect and remove beerData
  const [beers, setBeers] = useState(beerData);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const fetchBeers = async () => {
  //       try {
  //         const response = await fetch(`http://localhost/beers`);
  //         if (response) {
  //           const beersData = await response.json();
  //           setBeers(beersData);
  //         } else {
  //           // Handle error response
  //           console.error("Error fetching beers:", response.status);
  //         }
  //       } catch (error) {
  //         // Handle network or other errors
  //         console.error("Error fetching beers:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchBeers();
  //   }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {beers.map((beer) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>{beer.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Alcohol: {beer.alcohol}%
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Type: {beer.type}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
