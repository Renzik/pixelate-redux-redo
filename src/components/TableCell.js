import React from "react";

const TableCell = ({ handleDrawing, color }) => {
  return <td onClick={handleDrawing} className={color}></td>;
};
export default TableCell;
