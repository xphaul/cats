import * as React from "react";
import { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { GlobalContext } from "@Contexts/Context";
import { ReducerTypes } from "@Contexts/Reducer";
import { filterBreeds } from "@Services/CatServices";
import { Link, useLocation } from "react-router-dom";

function BreedView({ filteredList, setFilteredList }) {
  const { dispatch, contextState } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    const breedID =
      contextState.breedDetails.id || location.search.replace(/\?/g, "");
    if (breedID) {
      const filterBreedList = async () => {
        try {
          const response = await filterBreeds(breedID);
          setFilteredList([...filteredList, ...response.data]);
          dispatch({
            type: ReducerTypes.FilteredBreed,
            payload: response.data,
          });
        } catch (error) {
          console.error({ error });
          dispatch({
            type: ReducerTypes.ShowError,
            payload: true,
          });
        }
      };

      filterBreedList();
    }
  }, [contextState.breedDetails]);

  return (
    <Container fluid>
      {filteredList.length ? (
        <Row>
          {filteredList.map((item) => (
            <Col key={item.id} lg={4}>
              <Card className="m-2">
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Link to={`/${item.id}`}>
                    <Button variant="primary" className="w-100">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        "No Cats Available"
      )}
    </Container>
  );
}

export default BreedView;
