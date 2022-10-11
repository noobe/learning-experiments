class S extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("Inside S");
    return <div>
      <h1>Inside S!</h1>
      <p>Components created by extending the React.PureComponent class will have the shouldComponentUpdate method default set to return false so unless the components own state or props updates, it wont rerender</p>
      <button onClick={() => {this.setState({ count: this.state.count+1})}}>+</button>
      <T val={this.state.count}/>
    </div>
  }
}

class T extends React.PureComponent {
  render() {
    console.log("Inside T");
    return <div><h1>Inside T!</h1><U /></div>
  }
}

class U extends React.PureComponent {
  render() {
    console.log("Inside U");
    return <div><h1>Inside U!</h1></div>
  }
}


const root = ReactDOM.createRoot(document.getElementById('root3'));
root.render(<S />);

/*
  Here, we class functional components A, B & C and call them in the heirarchy A -> B -> C
  By default React re-render a component when its props or state changes and 
  it also triggers the re-render for its child components.

  We can also avoid this by creating the component from React.PureComponent which has the lifecycle method shouldComponentUpdate,set to false by default.
*/