import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Layouts
import MainLayout from './components/layouts/MainLayout'

// Pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Projects from './pages/Projects'
import Conversations from './pages/Conversations'
import Settings from './pages/Settings'
import AIAssistant from './pages/AIAssistant'
import NotFound from './pages/NotFound'

// Context
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

export default App