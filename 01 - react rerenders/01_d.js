const G = () => {
  const [count, setCount] = React.useState(0);
  console.log("Inside G");
  return <div>
    <h1>Inside G!</h1>
    <button onClick={() => {setCount(count+1)}}>+</button>
    <H />
  </div>
}

const H = React.memo(() => {
  const [count, setCount] = React.useState(0);
  const [val, setVal] = React.useState(0);
  console.log("Inside H");
  const doSomething = React.useCallback(() => {}, []);
  return <div>
    <h1>Inside H!</h1>
    <button onClick={() => {setCount(count+1)}}>+</button>
    <I val={val} action={doSomething}/>
  </div>
});

const I = React.memo(() => {
  console.log("Inside I");
  return <div>
    <h1>Inside I!</h1>
  </div>
});

const root = ReactDOM.createRoot(document.getElementById("root4"));
root.render(<G />);

/*
  Here, we create functional components A, B & C and call them in the heirarchy A -> B -> C
  By default React re-render a component when its props or state changes and 
  it also triggers the re-render for its child components.

  We can avoid this using React.memo - React.memo is a HOC which creates a memoized
  component hence its re-redered only if its props/state change.
*/