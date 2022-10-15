const BasicComp = () => <h1>Basic comp</h1>

const CompWithState = () => {
 const [ value, setValue ] = React.useState('Alice');
 // console.log('rendered');
 return <div>
  <h1>Hi {value}</h1>
 </div>
};

const CompWithStateUpdate = () => {
  const [ value, setValue ] = React.useState('Alice');

  const handleclick = () => {
    setValue('Bob')
  }

  // Placing a state update outside any callback functions would lead to an infinite loop.
  // SetState triggers a re-render which triggers setState again
  // setValue('Jack');

  return <div>
   <h1>Hi {value}</h1>
   <button onClick={handleclick}>Change Value</button>
  </div>
 };

 const CompWithStateUpdateFromUserInput = () => {
  const [ value, setValue ] = React.useState('Alice');

  const handleChange = e => {
    setValue(e.target.value)
  }

  return <div>
   <h1>Hi {value}</h1>
   <label htmlFor="fname">name:</label>
   <input type="text" id="fname" name="fname" value={value} onChange={handleChange}></input>
  </div>
 };

 const CompWithStateUpdateFromUserInputAndDependentStates = () => {
  const [ value, setValue ] = React.useState('Alice');
  const [ name, setName ] = React.useState('Miss Alice');

  const handleChange = e => {
    setValue(e.target.value);
    setName(`Miss./Mr. ${value}`);
  }

  // console.log('rendered');

  return <div>
   <h1>Hi {name}</h1>
   <label htmlFor="lname">name:</label>
   <input type="text" id="lname" name="lname" value={value} onChange={handleChange}></input>
  </div>
 };

 const CompWithStateUpdateFromUserInputAndDependentStates2 = () => {
  const [ value, setValue ] = React.useState('Alice');
  const [ name, setName ] = React.useState('Miss Alice');

  const handleChange = e => {
    setValue(value => e.target.value);
    setName(name => `Miss./Mr. ${value}`);
  }

  console.log('rendered');

  return <div>
   <h1>Hi {name}</h1>
   <label htmlFor="gname">name:</label>
   <input type="text" id="gname" name="gname" value={value} onChange={handleChange}></input>
  </div>
 };

 const CompWithStateUpdateWithAsync = () => {
  const [ value, setValue ] = React.useState('Alice');
  const [ name, setName ] = React.useState('Miss Alice');

  const handleChange = e => {
    setValue(e.target.value);
    Promise.resolve().then(() => setName('val: '+value));
  }

  // console.log('rendered');

  return <div>
   <h1>Hi {name}</h1>
   <label htmlFor="fname">name:</label>
   <input type="text" id="fname" name="fname" value={value} onChange={handleChange}></input>
  </div>
 };



const App = () => <div>
  <BasicComp />
  <CompWithState />
  <CompWithStateUpdate />
  <CompWithStateUpdateFromUserInput />
  <CompWithStateUpdateFromUserInputAndDependentStates />
  <CompWithStateUpdateFromUserInputAndDependentStates2 />
  <CompWithStateUpdateWithAsync />
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)