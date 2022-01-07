import React from 'react';
import './index.css';

// individual cell in graph
function Cell(props) {
    return (
        <button className="cell" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// collection of cells to be rendered
class Board extends React.Component {
    // render a cell
    renderCell(i) {
        return (
            <Cell
                key={i}
                value={this.props.cells[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        // create 20x45 grid
        let cellArray = [];
        for (let i = 0; i < 30 * 60; i++) {
            cellArray.push(this.renderCell(i))
        } 

        return <div className='cellArray'>{cellArray}</div>
    }
}

export default Board;