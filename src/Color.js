import React, { useState } from "react";

function Color() {
  const [colors, setColors] = useState({
    diffcolors: [],
    color: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { diffcolors } = colors;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setColors({
        diffcolors: [...diffcolors, value],
        color: [...diffcolors, value],
      });
    } else {
      setColors({
        diffcolors: diffcolors.filter((e) => e !== value),
        color: diffcolors.filter((e) => e !== value),
      });
    }
  };

  return (
    <>
      <div className="checkbox_parent">
        <div className="checbox_item">
          <div className="checkbox_parent">
            <input
              type="checkbox"
              name="yellow"
              value="yellow"
              onChange={handleChange}
              id="one"
            />
          </div>
          <div className="checkbox_parent">
            <input
              type="checkbox"
              name="yellow"
              value="yellow"
              onChange={handleChange}
              id="two"
            />
          </div>
          <div className="checkbox_parent">
            <input
              type="checkbox"
              name="yellow"
              value="yellow"
              onChange={handleChange}
              id="three"
            />
          </div>
          <div className="checkbox_parent">
            <input
              type="checkbox"
              name="yellow"
              value="yellow"
              onChange={handleChange}
              id="four"
            />
          </div>
          <div className="checkbox_parent">
            <input
              type="checkbox"
              name="yellow"
              value="yellow"
              onChange={handleChange}
              id="five"
            />
          </div>
        </div>
        <div
          className="color_div"
          style={{ backgroundColor: colors.color }}
        ></div>
      </div>
    </>
  );
}

export default Color;
