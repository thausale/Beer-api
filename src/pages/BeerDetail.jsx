import React from "react";
import { useState, useEffect } from "react";
import { beerData } from "../../public/beerData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BeerDetail = (props) => {
  // const id = props.id;

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchBeer = async () => {
  //     try {
  //       const response = await fetch(`http://localhost/beers/${id}`);
  //       if (response.ok) {
  //         const beerData = await response.json();
  //         setBeer(beerData);
  //       } else {
  //         // Handle error response
  //         console.error("Error fetching beer:", response.status);
  //       }
  //     } catch (error) {
  //       // Handle network or other errors
  //       console.error("Error fetching beer:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBeer();
  // }, [id]);

  const beer = beerData[0];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      {loading ? (
        <p>Loading...</p>
      ) : beer ? (
        <Card style={{ width: "18rem" }}>
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
            <Card.Text>{beer.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>No beer found.</p>
      )}
    </div>
  );
};

export default BeerDetail;
