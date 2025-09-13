import { useState } from 'react'
import './App.css'
import SearchBar from './components/Searchbar'
import WorkOrder from './components/Ticket'

function App() {
    return(
        <div>
            <SearchBar />
            <WorkOrder />
        </div>
    )

}

export default App
