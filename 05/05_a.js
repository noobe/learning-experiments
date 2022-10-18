const LanguageContext = React.createContext({
  lang: "en",
});

const MyComponent = () => {
  const { language, setLanguage } = React.useContext(LanguageContext);

  const handleClick = () => {
    setLanguage("sp");
  };

  console.log(language);

  return <div>
    <h1>Current Language is {language}</h1>
    <button onClick={handleClick}>Change lang</button>
  </div>;
}

const App = () => {
  const [lang, setLang] = React.useState("en");
  const value = {lang, setLang};

  console.log(value);

  return <LanguageContext.Provider value={value}>
    <MyComponent />
  </LanguageContext.Provider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);