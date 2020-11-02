import React, { Component } from 'react';
import GitQuestions from './GitQuestions';

import ScrumQuestions from './ScrumQuestions';

import NavBar from './NavBar';
import ReactQuestions from './ReactQuestions';


class MainContainer extends Component {
    render() {
        return (
            <div>   
                <NavBar />
                <ReactQuestions />
                <ScrumQuestions />
                <GitQuestions />
            </div>
        );
    }
}

export default MainContainer;

