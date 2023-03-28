import "./styles.css";

export default function App() {
  function changeColor(event) {
    document.body.style.background = event.target.value;
  }

  return (
    <div className="App">
      <h1>Background colour change</h1>
      <input type="color" onChange={changeColor} />
    </div>
  );
}
