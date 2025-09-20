import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

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
            <StatusList />
            <FAQ/>
            <Footer/>
        </div>
  );
}

export default App;

