import { useState } from 'react'
import SearchBar from './components/Searchbar/Searchbar'
import WorkOrder from './components/Ticket/Ticket'

function App() {
    return(
        <div>
            <SearchBar />
            <WorkOrder />
        </div>
    )

}

export default App
