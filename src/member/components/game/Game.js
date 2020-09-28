import React from 'react'
import Box from './Box'
class Game extends React.Component {
  render() {
    var temp = [];
    for (let i = 0; i < 5; i++) {
      temp.push(i);

    }
    return (
      <div className="divGame">
        {temp.map(ele =>
          (
            <Box inden={ele} />
          )
        )}
      </div>
    )
  }
}
export default Game