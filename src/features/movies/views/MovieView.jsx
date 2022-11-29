import React from "react";
import { useLocation, useParams } from "react-router-dom";

const MovieView = () => {
  const location = useLocation();
  const { id } = useParams();

  // fetch trailer

  return <div>detalles, trailer, lo que sea</div>;
};

export default MovieView;
