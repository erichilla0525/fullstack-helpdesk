import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <h2>Welcome to Technical Help Desk</h2>
        <p>
          This application helps you manage IT support requests efficiently.
        </p>
      </main>
    </div>
  );
}

export default App;
