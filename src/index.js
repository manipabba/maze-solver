import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board.js'
import Navigation from './navigation.js'


// main component that consists of board and menu bar for graph controls
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null), // cells in graph
            selectedAlgorithm: "Breadth-first Search", // currently selected algorithm
            selectedTool: null, // tool selected for marking graph
        };
    }

    // handler for when a cell is clicked
    handleClick(i) {
        const cells = this.state.cells.slice();
        cells[i] = 'P';

        // update state of cells
        this.setState({
            cells: cells,
            selectedAlgorithm: this.state.selectedAlgorithm,
            selectedTool: this.state.selectedTool,
        });
    }

    // handler for when an algorithm is selected
    handleSelectedAlgo(algo) {
        this.setState({
            cells: this.state.cells,
            selectedAlgorithm: algo,
            selectedTool: this.state.selectedTool,
        });
    }

    // handler for selected tool from navbar
    handleSelectedTool(tool) {
        this.setState({
            cells: this.state.cells,
            selectedAlgorithm: this.state.selectedAlgorithm,
            selectedTool: tool,
        });
    }

    render() {
        return (
            <div id='main'>
                <div className='navigation'>
                    <Navigation
                        selectedAlgorithm={this.state.selectedAlgorithm}
                        algoHandler={(algo) => this.handleSelectedAlgo(algo)}
                        toolHandler={(tool) => this.handleSelectedTool(tool)}
                    />
                </div>
                <div className='board'>
                    <Board
                        cells={this.state.cells}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
            </div>
            
        )
    }
}

// render MainPage
ReactDOM.render(<MainPage />, document.getElementById("root"));
