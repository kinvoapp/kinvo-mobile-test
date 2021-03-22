import React from "react";
import Layout from "./Layout";

export default function ProductItem({ ...otherProductItemProps }) {
  return <Layout {...otherProductItemProps} />;
}
