import React, { Component } from 'react';
import './HistoryQuestionItem.css';
import ReactCardFlip from 'react-card-flip';

class HistoryQuestionItem extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            answer: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    check(data) {
        this.setState({ answer: '' })
        if (data === true) {
            this.setState({ answer: 'Correct' })
        } else {
            this.setState({ answer: 'Incorrect' })
        }
    }


    render() {

        const { id, title, title1, title2, title3, result1, result2, result3 } = this.props.data

        function check() {
            if (result1 === true) {
                return <p>{title1}</p>
            } else if (result2 === true) {
                return <p>{title2}</p>
            } else if (result3 === true) {
                return <p>{title3}</p>
            }
        }

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className="Front2" id={id}>
                    <h3>{title}</h3>
                    <p onClick={() => this.check(result1)}>{title1} <button value={result1} onClick={this.handleClick}>Select</button></p>
                    <p onClick={() => this.check(result2)}>{title2} <button value={result2} onClick={this.handleClick}>Select</button></p>
                    <p onClick={() => this.check(result3)}>{title3} <button value={result3} onClick={this.handleClick}>Select</button></p>
                </div>
                <div className="Back" id={id}>
                    <p>Your answer was:</p>
                    <h2>{this.state.answer}</h2>
                    <p>The correct answer is:</p>
                    {check()}
                    <p><button onClick={this.handleClick}>Back</button></p>
                </div>

            </ReactCardFlip>
        );
    }
}

export default HistoryQuestionItem;