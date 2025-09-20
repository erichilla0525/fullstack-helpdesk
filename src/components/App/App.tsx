import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Navigation/Nav";
import StatusList from "../status-list/StatusList";


import { useState } from 'react'
import SearchBar from './components/Searchbar/Searchbar'
import WorkOrder from './components/Ticket/Ticket'

function App() {
    return(
        <div>
            <Header />
            <Nav />
            <SearchBar />
            <WorkOrder />
            <FAQ/>
            <StatusList />
            <Footer/>
        </div>
  );
}

export default App;
