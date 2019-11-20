import React, { Component } from 'react';
import './AnimalQuestionItem.css';

class AnimalQuestionItem extends Component {
    render() {
        const {id, title, difficulty} = this.props.data

        return (
            <div className="ItemCard" id={id}>
                <h3>{title}</h3>
                <p>{difficulty}</p>
            </div>
        );
    }
}

export default AnimalQuestionItem;