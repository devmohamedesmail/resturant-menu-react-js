import { useState } from 'react'
import Meal from './components/Meals/Meal'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categorymeal from './pages/Categorymeal'
import { DataProvider } from './context/DataProvider'


const queryClient = new QueryClient()
function App() {

 
  return (
    <>

      <QueryClientProvider client={queryClient}>
        <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/:id?" element={<Home />} />
            <Route path="/category/meals/:id/:title" element={<Categorymeal />} />
          </Routes>
        </BrowserRouter>
        </DataProvider>
       
      </QueryClientProvider>
    </>



  )
}

export default App
