
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import OnBoarding from './pages/onboard'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Home} />
          <Route path="/onboarding" Component={OnBoarding} />
        </Routes>
      </BrowserRouter>
    </>
  )
}