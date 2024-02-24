import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '../Pages/AuthPage/AuthPage'
import DashboardPage from '../Pages/DashBoardPage/DashboardPage'

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path='/' element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
      <Route path='/auth' element={<AuthPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/dashboard' element={isLoggedIn ? <DashboardPage /> : <Navigate to="/auth" />} />
    </Routes>
  )
}

export default Router
