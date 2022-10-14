const Parent = () => {
  return <div className="parent"><h1>Parent</h1></div>
}

const ParentWithChildren = (props) => {
  return <div className="parent">
    <h1>Parent</h1>
    {props.children}
  </div>
}

const ParentWithRenderProps = (props) => {
  return <div className="parent">
    <h1>Parent</h1>
    {props.render()}
  </div>
}

const Child = () => {
  return <div className="child"><h1>Child</h1></div>
}



const App = () => {
  return <>
    <section>
    <h1>Scenario 1: Parent and child as 2 self closing components</h1>
    <p>Both renders as individual components</p>
    <Parent />
    <Child />
    </section>
    <section>
    <h1>Scenario 2: Parent and child as 2 components with closing tags</h1>
    <p>Both renders as individual components</p>
    <Parent></Parent>
    <Child></Child>
    </section>
    <section>
    <h1>Scenario 3: Parent with the child nested inside its opening and closing tag</h1>
    <p>Only parent renders since we are not explicitly rendering the children inside parent</p>
    <Parent><Child /></Parent>
    </section>
    <section>
    <h1>Scenario 4: Parent (children prop in its render) and child that is nested inside</h1>
    <p>The parent and child renders properly</p>
    <ParentWithChildren><Child /></ParentWithChildren>
    </section>
    <section>
    <h1>Scenario 4: Parent (with render() in its render) and child that is passed as renderProp</h1>
    <p>The parent and child renders properly</p>
    <ParentWithRenderProps render={() => <Child />} />
    </section>
  </>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)