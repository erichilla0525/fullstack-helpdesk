import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

import { useState } from 'react'
import SearchBar from './components/Searchbar/Searchbar'
import WorkOrder from './components/Ticket/Ticket'

function App() {
    return(
        <div>
            <SearchBar />
            <WorkOrder />
            <FAQ/>
            <Footer/>
        </div>
  );
}

export default App;