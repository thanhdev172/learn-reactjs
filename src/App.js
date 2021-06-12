import "./App.css";

function App() {
  const name = "Nguyen Cong Thanh";
  const myObj = { id: 1, name: "Doan" };
  const colorList = ["green", "red", "gray"];
  return (
    <div className="App">
      Hello {name}. My love is {myObj.name}
      <ul>
        {colorList.map((color) => (
          <li>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
