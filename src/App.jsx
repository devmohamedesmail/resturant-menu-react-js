import { useState } from 'react'
import Meal from './components/Meals/Meal'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categorymeal from './pages/Categorymeal'



function App() {

  const queryClient = new QueryClient()
  return (
    <>

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/meals/:id" element={<Categorymeal />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>



  )
}

export default App
