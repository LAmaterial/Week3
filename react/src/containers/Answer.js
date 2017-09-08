import React from 'react';

const Answer = props => {
  let handleClick = () => {
    props.setSelectedAnswer(props.id),
    props.setCorrectState(props.correct)
  }

  return(
    <div className="item">
      <p onClick={handleClick} className={props.className}>{props.body}</p>
    </div>
  )
}

export default Answer
