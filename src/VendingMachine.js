import React from "react";
import { Link } from "react-router-dom"

function VendingMachine() {
  return (
    <ul>
      <li>
        <Link to="/chips">Chips</Link>
      </li>
      <li>
        <Link to="/soda">Soda</Link>
      </li>
      <li>
        <Link to="/hotdog">Hot Dog</Link>
      </li>
    </ul>
  )
}

export default VendingMachine;