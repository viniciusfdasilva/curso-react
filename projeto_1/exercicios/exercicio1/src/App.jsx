import './App.css';

function App() {
  return (
    <html>
      <body>
        <div className="App">
          <h1>Checkbox Customizado</h1>

          <label class="container">Um
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>

          <label class="container">Dois
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>

          <label class="container">Três
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>

          <label class="container">Quatro
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </div>
      </body>
    </html>
  );
}

export default App;
