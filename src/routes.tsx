import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@Pages/HomePage/HomePage";
import SingleCat from "@Pages/SingleCatPage/SingleCatPage";

export default class RouteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container body-padding">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleCat />} />
        </Routes>
      </div>
    );
  }
}
