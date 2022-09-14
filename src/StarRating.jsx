import { useState } from "react";
import Star from './Star';
const createArray = length => [...Array(length)];

function StarRating({totalStars = 5, selectedStars = 0, onRate = f => f}) {


  return (
    <div>
      {createArray(totalStars).map((n, i) => (
      <Star key={i} 
        selected = {selectedStars > i}
        onSelect = {()=>onRate(i + 1)}
        />
    )
    )}
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
    );
}

export default StarRating;