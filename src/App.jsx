import { useState } from "react";
import "./App.css";
import { BsCartFill } from "react-icons/Bs";
import { HiOutlineRefresh } from "react-icons/Hi";
import { RiRecycleFill, RiDeleteBin5Line } from "react-icons/Ri";
import Row from "./component/row";

function App() {
  const [itemCount, setItemCount] = useState(0);

  const updateItemCount = (action) => {
    if (action === "increment") {
      setItemCount((prevCount) => prevCount + 1);
    } else if (action === "decrement") {
      setItemCount((prevCount) => prevCount - 1);
    } else if (action === "delete") {
      if (itemCount > 0) {
        setItemCount((prevCount) => prevCount - 1);
      }
    }
  };

  return (
    <div className="container">
      <div className="first">
        <BsCartFill className="cart" />
        <h1>{itemCount}</h1>
        <p>Items</p>
      </div>

      <div className="icon">
        <HiOutlineRefresh className="refresh" />
        <RiRecycleFill className="recycle" />
      </div>

      <Row id={1} updateItemCount={updateItemCount} />
      <Row id={2} updateItemCount={updateItemCount} />
      <Row id={3} updateItemCount={updateItemCount} />
      <Row id={4} updateItemCount={updateItemCount} />
    </div>
  );
}

export default App;
