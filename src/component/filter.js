import React, {useState} from "react";




export default function Filter( {onFilterChange }) {
    const [gender, setGender] = useState(null);
  const [color, setColor] = useState(null);
  const [priceRange, setPriceRange] = useState(null);
  const [type, setType] = useState(null);
  
    const categories = [
        {
          name: "Gender",
          options: ["Male", "Female"],
          state: [gender, setGender],
        },
        {
          name: "Colour",
          options: ["Black", "Pink", "Blue", "Green", "Grey", "White", "Yellow", "Purple", "Red"],
          state: [color, setColor],
        },
        {
          name: "Price Range",
          options: ["INR 200 to INR 300","INR 300 to INR 350", "Above 350"],
          state: [priceRange, setPriceRange],
        },
        {
          name: "Type",
          options: ["Polo", "Hoodie", "Round"],
          state: [type, setType],
        },
      ];
      const handleFilterChange = () => {
        // Pass the selected filter options to the parent component
        onFilterChange({
          gender,
          color,
          priceRange,
          type,
        });
      };

      const handleClearFilter = () => {
        setGender(null);
        setColor(null);
        setPriceRange(null);
        setType(null);
        handleFilterChange();
      };

    return (
            <div className="d-flex  justify-content-around">
                <hr className="hr" />
                <h4 className="px-4">Categories</h4>
              {categories.map((category) => (
                <div key={category.name} className="m-2">
                  <h5 className="list-unstyled">{category.name}</h5>
                  {category.options.map((option) => (
                    <li key={option} className="list-unstyled">
                      <label className="px-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={category.name}
                          value={option}
                          checked={category.state[0] === option}
                          onChange={() => category.state[1](option)}
                          onClick={handleFilterChange}
                        />
                        {option}
                      </label>
                    </li>
                    // <ul>
                  ))}
                </div>
              ))}
              <div className="d-flex align-items-start">
              <button type="button" class="btn btn-dark" onClick={handleClearFilter}>Clear</button>
              </div>
              <hr className="hr" />
            </div>
          );
}