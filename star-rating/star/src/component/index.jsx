import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

function Star({ numberOfStars = 5 }) {
  const [starRating, setStarRating] = useState(0);
  const [starHovering, setStarHovering] = useState(0);

  function handleMouseClick(getIndex) {
    setStarRating(getIndex);
  }

  function handleMouseMove(getIndex) {
    setStarHovering(getIndex);
  }

  function handleMouseLeave() {
    setStarHovering(starRating);
  }
  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (starHovering || starRating) ? "active" : "inactive"
            }
            onClick={() => handleMouseClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Star;
