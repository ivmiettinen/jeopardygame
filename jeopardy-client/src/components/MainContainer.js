import React, { Component } from 'react';
import AnimalQuestions from './AnimalQuestions';
import './AnimalQuestions.css';
import NavBar from './NavBar';
import ScienceQuestions from './ScienceQuestions';


class MainContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ScienceQuestions />
                <AnimalQuestions />
            </div>
        );
    }
}

export default MainContainer;

/* <div className="animal">
</div>
                <div className="history"></div>
                <div className="science"></div> */