const A = () => {
  const [count, setCount] = React.useState(0);
  console.log("Inside A");
  return <div>
    <h1>Inside A!</h1>
    <button onClick={() => {setCount(count+1)}}>+</button>
    <B />
  </div>
};

const B = () => {
  console.log("Inside B");
  return <div><h1>Inside A!</h1><C /></div>
};

const C = () => {
  console.log("Inside C");
  return <h1>Inside C!</h1>
};

const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(<A />);

/*
  Here, we create functional components A, B & C and call them in the heirarchy A -> B -> C
  By default React re-render a component when its props or state changes and 
  it also triggers the re-render for its child components
*/