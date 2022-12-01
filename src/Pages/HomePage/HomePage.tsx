import * as React from "react";
import { useState } from "react";
import BreedSelect from "./Components/BreedSelect";
import BreedView from "./Components/BreedView";
import LoadMoreButton from "./Components/LoadMoreButton";
import ErrorModal from "@Components/ErrorModal";

function HomePage() {
  const [filteredList, setFilteredList] = useState([]);
  const [hideLoadMore, setHideLoadMore] = useState(false);

  return (
    <div className="container">
      <BreedSelect
        setFilteredList={setFilteredList}
        setHideLoadMore={setHideLoadMore}
      />
      <BreedView
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <LoadMoreButton
        filteredList={filteredList}
        setFilteredList={setFilteredList}
        hideLoadMore={hideLoadMore}
        setHideLoadMore={setHideLoadMore}
      />
      <ErrorModal />
    </div>
  );
}

export default HomePage;
