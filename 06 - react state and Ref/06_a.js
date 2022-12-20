const App = () => {
  const [name, setName] = React.useState('');
  const ageRef = React.useRef();
  const onNameChange = e => {
    setName(e.target.value);
  }
  return <div>
    <h1>Test</h1>
    <label htmlFor="name-input">Name: </label>
    <input type="text" value={name} onChange={onNameChange} id="name-input" />
    
    <label htmlFor="age-input">Age: </label>
    <input type="text" ref={ageRef} id="age-input"/>

    <button onClick={() => {console.log(`name is ${name} and age is ${ageRef.current.value}`)}}>Click me</button>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);