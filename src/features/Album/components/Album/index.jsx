import PropTypes from "prop-types";
import React from "react";

Album.propTypes = { album: PropTypes.object.isRequired };

function Album({ album }) {
  return (
    <li key={album.id}>
      <img src={album.src} alt={album.name} />
      <h3>{album.title}</h3>
    </li>
  );
}

export default Album;
