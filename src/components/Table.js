import React from "react";
import TableRow from "./TableRow";

const Table = props => {
  const { grid, handleDrawing } = props;
  return (
    <table>
      <tbody>
        {grid.map((row, rowIdx) => {
          return (
            <TableRow key={rowIdx} row={row} handleDrawing={handleDrawing} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
