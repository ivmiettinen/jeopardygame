import React, { Component } from 'react';
import GitQuestionItem from './GitQuestionItem';


class GitQuestions extends Component {
  state = {
    animalQuestions: []
  };

  componentDidMount() {
    fetch('api/questions/elaimet')
      .then(res => res.json())
      .then(res => this.setState({ animalQuestions: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const animalItem = this.state.animalQuestions.map(question => {
      return <GitQuestionItem data={question} key={question.id} />;
    });

    return <div className='MainDiv'>{animalItem}</div>;
  }
}

export default GitQuestions;
