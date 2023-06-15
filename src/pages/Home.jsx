import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch(`http://localhost/beers`);
        if (response) {
          const beersData = await response.json();
          setBeers(beersData);
        } else {
          // Handle error response
          console.error("Error fetching beers:", response.status);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error fetching beers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {beers.map((beer) => (
            <Col>
              <Card>
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
