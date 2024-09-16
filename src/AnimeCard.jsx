import React from 'react';

function AnimeCard({ anime }) {
  return (
    <>
      <img src={anime?.images?.jpg?.image_url || "default-image-url.jpg"} alt="Anime" />
    </>
  );
}

export default AnimeCard;
