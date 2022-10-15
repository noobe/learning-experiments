const matrix = [[null, null, null],[null, null, null],[null, null, null]]

const Title = ({ gameState }) => {
  switch(gameState) {
    case 'idle':
      return <h1>Start the game!</h1>;
    case 'ongoing':
      return <h1>Game has started!</h1>;
    case 'completed':
      return <h1>And thats it!</h1>;
    case 'tie':
      return <h1>This calls for a re-match!</h1>;
  } 
}

const checkBoardState = boardState => {
  // Check if any horizontal spaces are filled.
  if (boardState[0][0] !== null && boardState[0][0] === boardState[0][1] && boardState[0][1] === boardState[0][2]) {
    return {
      winner: boardState[0][0],
      positions: [[0][0], [0][1], [0][2]]
    };
  } else if (boardState[1][0] !== null && boardState[1][0] === boardState[1][1] && boardState[0][1] === boardState[1][2]) {
    return {
      winner: boardState[1][0],
      positions: [[1][0], [1][1], [1][2]]
    };
  } else if (boardState[2][0] !== null && boardState[2][0] === boardState[2][1] && boardState[0][1] === boardState[2][2]) {
    return {
      winner: boardState[2][0],
      positions: [[2][0], [2][1], [2][2]]
    };
  }
  // Check vertical positions
  else if (boardState[0][0] !== null && boardState[0][0] === boardState[1][0] && boardState[1][0] === boardState[2][0]) {
    return {
      winner: boardState[0][0],
      positions: [[0][0], [1][0], [2][0]]
    };
  }
  else if (boardState[0][0] !== null && boardState[0][0] === boardState[1][0] && boardState[1][0] === boardState[2][0]) {
    return {
      winner: boardState[0][0],
      positions: [[1][1], [1][1], [2][1]]
    };
  }
  else if (boardState[0][0] !== null && boardState[0][0] === boardState[1][0] && boardState[1][0] === boardState[2][0]) {
    return {
      winner: boardState[0][0],
      positions: [[0][2], [1][2], [2][2]]
    };
  }
  // Check diogonal positions
  else if (boardState[0][0] !== null && boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) {
    return {
      winner: boardState[0][0],
      positions: [[0][0], [1][1], [2][2]]
    };
  } else if (boardState[0][2] !== null && boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0]) {
    return {
      winner: boardState[0][0],
      positions: [[0][2], [1][1], [2][0]]
    };
  } else {
    return false;
  }
};

const App = () => {
  const [boardState, setBoardState] = React.useState(matrix);
  const [stepCount, setStepCount] = React.useState(0);
  // idle | ongoing | completed
  const [gameState, setGameState] = React.useState('idle');
  const [winner, setWinner] = React.useState(null);

  const handleCellClick = (rowIndex, cellIndex) => {
    if (stepCount === 0){
      setGameState('ongoing');
    } else if (stepCount === 8) {
      setGameState('tie');
    }
    if (winner) {
      return;
    }
    if (boardState[rowIndex][cellIndex]) {
      alert('Unselectable');
    } else {
      const newBoardState = structuredClone(boardState);
      newBoardState[rowIndex][cellIndex] = stepCount%2 === 0 ? 'X' : 'O';
      const res = checkBoardState(newBoardState);
      if (res) {
        setGameState('completed');
        setWinner(res.winner);
      }
      setBoardState(newBoardState);
      setStepCount(stepCount+1);
    }
  };

  return <>
    <Title gameState={gameState}/>
    <div className="board">
      {boardState.map((item, rowIndex) => <div key="rowIndex" className="row">
        {item.map((cellItem, cellIndex) => (
          <div 
            className="cell"
            key="cellIndex"
            onClick={() => {handleCellClick(rowIndex, cellIndex)}}
          >
            {cellItem ? cellItem : ''}
          </div>
        ))}
      </div>)}
    </div>
    {winner && <h3>The winner is {winner}</h3>}
  </>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);