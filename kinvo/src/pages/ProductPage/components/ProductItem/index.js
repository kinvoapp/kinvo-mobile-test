import React from "react";
import Presentational from "./presentational";


listProductItem = props => { 
  return React.createElement(Presentational, {
    ...props
  });
};

export default listProductItem;
