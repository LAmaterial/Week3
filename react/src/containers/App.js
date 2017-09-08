import React from 'react';
import Answer from './Answer';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedId: null,
      correctState: null
    };
    this.setSelectedAnswer = this.setSelectedAnswer.bind(this)
    this.setCorrectState = this.setCorrectState.bind(this);

  }

  setSelectedAnswer(id){
    this.setState({selectedId: id})
  }
  setCorrectState(correct){
    this.setState({correctState: correct})
  }


  render() {
    let data = this.props.data
    let correct = ''


    let answers = data.answers.map(answer => {
      let className;
      if(this.state.correctState === null ){
        correct = ""
      } else if (this.state.correctState === true) {
        correct = "Correct!"
      } else {
        correct = "Incorrect"
      }

      if(this.state.selectedId === answer.id ){
        className = "selected"
      } else {
        className = ""
      }

      return (
        <Answer
        key={answer.id}
        body={answer.body}
        correct={answer.correct}
        id={answer.id}
        setSelectedAnswer={this.setSelectedAnswer}
        className={className}
        setCorrectState={this.setCorrectState}
        />
      )
    })
    return(
      <div className="question">
        <h1>React Quiz!</h1>
        <h3>{data.question.body}</h3>
        <ul>{answers}</ul>
        <h2 >{correct}</h2>
      </div>
    )
  }
}

export default App
