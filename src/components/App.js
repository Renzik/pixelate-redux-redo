import React, { Component } from "react";
import store, { addRow, selectedColor, drawingColor } from "../store";
import Table from "./Table";

export default class App extends Component {
  constructor(props) {
    super(props);
    // sets state to default initial state in store;
    this.state = store.getState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDrawing = this.handleDrawing.bind(this);
  }

  componentDidMount() {
    // we are subscribing to the state, meaning that every change in the store state will be replected in this.state(app state);
    // execute the function inside subscribe every time store state updates.
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit() {
    store.dispatch(addRow());
  }

  handleChange(e) {
    // console.dir(e.target);
    store.dispatch(selectedColor(e.target.value));
  }

  handleDrawing(e) {
    const rowIdx = e.target.parentNode.rowIndex;
    const columnIdx = e.target.cellIndex;
    store.dispatch(drawingColor(rowIdx, columnIdx));
  }

  render() {
    const grid = this.state.grid;

    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button onClick={this.handleSubmit} id="add-row">
            Add a row
          </button>
          <select onChange={this.handleChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <Table grid={this.state.grid} handleDrawing={this.handleDrawing} />
      </div>
    );
  }
}
