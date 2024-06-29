import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ color: "white", backgroundColor: "green" }}
    >
      {" "}
      Currency{" "}
      {
        <select
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="£">£ Pound</option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Europe</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};
export default Currency;
