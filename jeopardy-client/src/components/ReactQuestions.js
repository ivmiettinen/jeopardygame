import React, { Component } from 'react';
import ReactQuestionItem from './ScienceQuestionItem';



class ReactQuestions extends Component {

    state = {
        scienceQuestions: []
    }

    componentDidMount(){
        fetch("api/questions/tiede")
        .then(res => res.json())
        .then(res => this.setState({scienceQuestions: res}))
        .catch(()=> this.setState({hasErrors: true}));
    }
    render() {
        const scienceItem = this.state.scienceQuestions
        .map((question) =>{
            return <ReactQuestionItem data = {question} key={question.id}/>
        } )
        return (
            <div className="MainDiv">
                {scienceItem}
            </div>
        );
    }
}

export default ReactQuestions;