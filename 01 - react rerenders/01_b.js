class X extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("Inside X");
    return <div>
      <h1>Inside X!</h1>
      <p>Component created by extending React.Component class gets rerendered everytime its own props or state updates and it also causes a re-render for all its child components. This can be controlled by using the lifecycle method shouldComponentUpdate. We can write logic to check the upcoming new prop and state value and decide if we need to trigger the rerender logic again.</p>
      <button onClick={() => {this.setState({ count: this.state.count+1})}}>+</button>
      <Y />
    </div>
  }
}

class Y extends React.Component {
  render() {
    console.log("Inside Y");
    return <div><h1>Inside Y!</h1><Z /></div>
  }
}

class Z extends React.Component {
  shouldComponentUpdate(newProps, newState) {
    return false;
  };

  render() {
    console.log("Inside Z");
    return <div><h1>Inside Z!</h1></div>
  }
}


const root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(<X />);

/*
  Here, we class functional components A, B & C and call them in the heirarchy A -> B -> C
  By default React re-render a component when its props or state changes and 
  it also triggers the re-render for its child components.

  We can avoid this by using the lifecycle method shouldComponentUpdate, which gives us the 
  new props that comes from the parent component. We can write own own logic to check if we 
  really need to re-render and return true/false accordingly.
*/