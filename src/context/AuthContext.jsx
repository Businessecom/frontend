import { createContext, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    // Check if user is logged in on page load
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem('token')
        
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          const response = await axios.get('/api/auth/me')
          setUser(response.data)
        }
      } catch (err) {
        console.error('Authentication error:', err)
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
      } finally {
        setLoading(false)
      }
    }
    
    checkLoggedIn()
  }, [])
  
  const login = async (email, password) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.post('/api/auth/login', { email, password })
      const { token, user } = response.data
      
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(user)
      navigate('/')
      
      return true
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      return false
    } finally {
      setLoading(false)
    }
  }
  
  const register = async (userData) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.post('/api/auth/register', userData)
      const { token, user } = response.data
      
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(user)
      navigate('/')
      
      return true
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
      return false
    } finally {
      setLoading(false)
    }
  }
  
  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
    navigate('/login')
  }
  
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext