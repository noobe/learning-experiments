const matrix = [[null, null, null],[null, null, null],[null, null, null]]

const Title = ({ gameState }) => {
  switch(gameState) {
    case 'idle':
      return <h1>Start the game!</h1>;
    case 'ongoing':
      return <h1>Game has started!</h1>;
    case 'completed':
      return <h1>And thats it!</h1>
    case 'draw':
      return <h1>Rematch!</h1>
  } 
}

const App = () => {
  const [boardState, setBoardState] = React.useState(matrix);
  const [stepCount, setStepCount] = React.useState(0);
  // idle | ongoing | completed | draw
  const [gameState, setGameState] = React.useState('idle');

  const handleCellClick = (rowIndex, cellIndex) => {
    if (boardState[rowIndex][cellIndex]) {
      alert('Unselectable');
    } else {
      const newBoardState = structuredClone(boardState);
      newBoardState[rowIndex][cellIndex] = stepCount%2 === 0 ? 'X' : 'O';
      setBoardState(newBoardState);
      setStepCount(stepCount+1);
    }
  };

  return <>
    <Title />
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
  </>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);