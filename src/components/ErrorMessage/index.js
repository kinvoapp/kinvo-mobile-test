import React from "react";
import Layout from "./Layout";

export default function ErrorMessage({ ...otherErrorMessageProps }) {
  return <Layout {...otherErrorMessageProps} />;
}
