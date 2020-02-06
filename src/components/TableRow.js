import React from "react";
import TableCell from "./TableCell";

const TableRow = props => {
  const { row, handleDrawing } = props;
  return (
    <tr>
      {row.map((color, cellIdx) => {
        return (
          <TableCell
            key={cellIdx}
            handleDrawing={handleDrawing}
            color={color}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
