import * as React from "react";
import { useEffect, useContext, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { GlobalContext } from "@Contexts/Context";
import { ReducerTypes } from "@Contexts/Reducer";
import { fetchBreeds } from "@Services/CatServices";
import { useLocation } from "react-router-dom";

function BreedSelect({ setFilteredList, setHideLoadMore }) {
  const { dispatch, contextState } = useContext(GlobalContext);
  const [disableSelect, setDisableSelect] = useState(true);
  const [breedList, setBreedList] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [breedAttr, setBreedAttr] = useState({});
  const location = useLocation();

  useEffect(() => {
    const getBreedList = async () => {
      try {
        const response = await fetchBreeds();
        setBreedList(response.data);
        setDisableSelect(false);
      } catch (error) {
        console.error({ error });
        dispatch({
          type: ReducerTypes.ShowError,
          payload: true,
        });
      }
    };

    getBreedList();
  }, []);

  const onSelectBreed = (breedID, breedData) => {
    setSelectValue(breedID);
    setBreedAttr(JSON.parse(breedData));
    setHideLoadMore(false);
    setFilteredList([]);
  };

  useEffect(() => {
    dispatch({
      type: ReducerTypes.ChooseBreed,
      payload: breedAttr,
    });
  }, [selectValue]);

  return (
    <Container>
      <h1>Cat Browser</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Breed:</Form.Label>
          <Form.Select
            value={selectValue || location.search.replace(/\?/g, "")}
            onChange={(event) =>
              onSelectBreed(
                event.target.value,
                event.target.selectedOptions[0].getAttribute("data-value")
              )
            }
            disabled={disableSelect}
          >
            <option key="default">Select breed</option>
            {breedList.map((breed) => {
              return (
                <option
                  key={breed.id}
                  value={breed.id}
                  data-value={JSON.stringify(breed)}
                >
                  {breed.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default BreedSelect;
