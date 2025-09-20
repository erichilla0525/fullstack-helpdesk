import "./App.css";
import Header from "../Header/Header";
import Nav from "../Navigation/Nav";
import StatusList from "../status-list/StatusList";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <StatusList />
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
