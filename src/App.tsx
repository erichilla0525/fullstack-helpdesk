import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import SearchBar from './components/Searchbar/Searchbar';
import WorkOrder from './components/Ticket/Ticket'
import StatusList from "./components/status-list/StatusList";

function App() {
    return(
        <div>
            <Header />
            <Nav />
            <SearchBar />
            <WorkOrder />
            <StatusList />
            <FAQ />
            <Footer />
        </div>
  );
}

export default App;

