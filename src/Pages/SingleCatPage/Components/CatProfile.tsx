import * as React from "react";
import { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { fetchBreedProfile } from "@Services/CatServices";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { ReducerTypes } from "@Contexts/Reducer";
import { GlobalContext } from "@Contexts/Context";

function BreedView() {
  const { dispatch } = useContext(GlobalContext);
  const [breedAttributes, setBreedAttributes] = useState({
    url: null,
    breeds: [],
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const filterBreedList = async () => {
      try {
        const response = await fetchBreedProfile(id);
        setBreedAttributes(response.data);
      } catch (error) {
        console.error({ error });
        dispatch({
          type: ReducerTypes.ShowError,
          payload: true,
        });
      }
    };

    filterBreedList();
  }, []);

  return (
    <Container fluid>
      {breedAttributes.breeds.length ? (
        <Card>
          <Card.Body className="p-0">
            <Card.Title className="mb-0">
              <Button
                variant="primary"
                onClick={() =>
                  navigate({
                    pathname: "/",
                    search: `${breedAttributes.breeds[0].id}`,
                  })
                }
                className="m-3"
              >
                Go Back
              </Button>
            </Card.Title>
            <Card.Img variant="top" src={breedAttributes.url} />
            <Card.Text className="p-3">
              <h4>{breedAttributes.breeds[0].name}</h4>
              <h5>Origin: {breedAttributes.breeds[0].origin}</h5>
              <h6>{breedAttributes.breeds[0].temperament}</h6>
              <p>{breedAttributes.breeds[0].description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <h3>Loading ...</h3>
      )}
    </Container>
  );
}

export default BreedView;
