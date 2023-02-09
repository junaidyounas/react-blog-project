import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoginScreen from '../pages/auth/login'
import { pages } from './pages.constants'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages.auth.login} element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes