import { sort } from "fast-sort";
import React, { useState } from "react";

const Product = ({ data }) => {
  const sortedData = sort(data).asc((el) => el.title);
  const [sorted, setSorted] = useState(false);

  return (
    <div>
      <button className="btn btn-info" onClick={() => setSorted(!sorted)}>
        {sorted ? "Sort by Name" : "No sort"}
      </button>

      {sorted
        ? sortedData.map((el) => <li key={el.id}>{el.title}</li>)
        : data.map((el) => <li key={el.id}>{el.title}</li>)}
    </div>
  );
};

export default Product;
