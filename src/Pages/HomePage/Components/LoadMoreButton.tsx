import * as React from "react";
import { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { GlobalContext } from "@Contexts/Context";
import { ReducerTypes } from "@Contexts/Reducer";
import { loadMore } from "@Services/CatServices";
import { useLocation } from "react-router-dom";

function LoadMoreButton({
  filteredList,
  setFilteredList,
  hideLoadMore,
  setHideLoadMore,
}) {
  const { dispatch, contextState } = useContext(GlobalContext);
  const [pageCtr, setPageCtr] = useState(1);
  const location = useLocation();

  const onLoadMore = async () => {
    const breedID = contextState.breedDetails.id || location.search.replace(/\?/g, "");
    try {
      const response = await loadMore(breedID, pageCtr + 1);
      const isEqual = JSON.stringify(filteredList) === JSON.stringify(response.data);
      setPageCtr(pageCtr + 1);

      if (isEqual) {
        setHideLoadMore(true);
        return;
      }

      setFilteredList([...filteredList, ...response.data]);
    } catch (error) {
      console.error({ error });
      dispatch({
        type: ReducerTypes.ShowError,
        payload: true,
      });
    }
  };

  return (
    <Container fluid>
      {!hideLoadMore ? (
        <Button
          variant="success"
          onClick={() => onLoadMore()}
          disabled={!filteredList.length}
        >
          Load More
        </Button>
      ) : null}
    </Container>
  );
}

export default LoadMoreButton;
