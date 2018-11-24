export default `\
import * as React from 'react'
import { render } from 'react-dom'

const users = [
  {
    name: 'Tom',
    imgSrc: 'https://img.com/Tom'
  },
  {
    name: 'Sandy',
    imgSrc: 'https://img.com/Sandy'
  }
]

const Avatars = (props) => {
  return (
    <div className="Avatars">
      {users.map(user => (
        <Circle>
          <img src={user.imgSrc} />
        </Circle>
      ))}
    </div>
  )
}

const rootElement = document.getElementById("EvalRoot");
ReactDOM.render(<App />, rootElement);
`;
