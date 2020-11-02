import React, { Component } from 'react';
import ScrumQuestionItem from './ScrumQuestionItem';


class ScrumQuestions extends Component {

    state = {
        historyQuestions: []

    }

    componentDidMount(){
        fetch("api/questions/historia")
        .then(res => res.json())
        .then(res => this.setState({historyQuestions: res}))
        .catch(()=> this.setState({hasErrors: true}));
    }

    
    render() {
        const historyItem = this.state.historyQuestions
        .map((question) =>{
            return <ScrumQuestionItem data = {question} key = {question.id}/>
        } )
        return (
            <div className="MainDiv">
                 {historyItem}
            </div>
        );
    }
}

export default ScrumQuestions;