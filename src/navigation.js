import React, { useState } from 'react';
import './index.css';
import {ReactComponent as InfoIcon} from './images/info.svg'
import {ReactComponent as CaretIcon} from './images/caret.svg'
import {ReactComponent as CheckIcon} from './images/check.svg'

// create components with a button grid for selection what is being placed onto the board and an algorithm select dropdown
class Navigation extends React.Component {
    render() {
        return (
            <div className='parent nav-master'>
                <nav className='navbar'>
                    <ul className='navbar-nav-left'>
                        <NavItem icon={<CaretIcon/>}>
                            <DropDown
                                algoHandler = {(algo) => this.props.algoHandler(algo)}
                            />
                        </NavItem>
                        <AlgorithmSelected
                            selectedAlgorithm = {this.props.selectedAlgorithm}
                        />
                            
                    </ul>
                </nav>
                <nav className='navbar'>
                <ul className='navbar-nav-right'>
                        <NavItem
                            icon={<CheckIcon/>}
                            toolHandler={(tool) => this.props.toolHandler(tool)}
                            navInfo="Run"
                        />
                        <NavItem
                            icon="S"
                            toolHandler={(tool) => this.props.toolHandler(tool)}
                            navInfo="Start"
                        />
                        <NavItem
                            icon="E"
                            toolHandler={(tool) => this.props.toolHandler(tool)}
                            navInfo="End"
                        />
                        <NavItem
                            icon="W"
                            toolHandler={(tool) => this.props.toolHandler(tool)}
                            navInfo="Wall"
                        />
                        <NavItem
                            icon={<InfoIcon/>}
                            toolHandler={(tool) => this.props.toolHandler(tool)}
                            navInfo="Info"
                        />
                    </ul>
                </nav>
            </div>
        )
    }
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button' onClick={() => {
                setOpen(!open);
                props.toolHandler && props.toolHandler(props.navInfo)
            }}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function AlgorithmSelected(props) {
    return (
        <div>
            <p className='algo-text'>{"Selected Algorithm --- " + props.selectedAlgorithm}</p>
        </div>
    )
}

function DropDown(props) {
    const algoHandler = props.algoHandler;
    function DropDownItem(props) {
        return (
            <a href='#' className='menu-item' onClick={() => algoHandler(props.children)}>
                {props.children}
            </a>
        )
    }

    return (
        <div className='dropdown'>
            <DropDownItem>Breadth-first Search</DropDownItem>
            <DropDownItem>Depth-first Search</DropDownItem>
            <DropDownItem>Dijstra's Search</DropDownItem>
            <DropDownItem>A Star Search</DropDownItem>
        </div>
    )
}

export default Navigation;