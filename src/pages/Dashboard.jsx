import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import TailwindTest from '../components/TailwindTest'

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    projects: 0,
    conversations: 0,
    messages: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/dashboard')
        setStats(response.data)
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }
    
    fetchDashboardData()
  }, [])
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <h3 className="text-sm font-medium text-red-800">{error}</h3>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <TailwindTest />
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome back, {user?.name || 'User'}!</h2>
        <p className="text-gray-600 mb-6">Here's an overview of your UPNELO activity</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-blue-800">Projects</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{stats.projects}</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-green-800">Conversations</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.conversations}</p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-purple-800">Messages</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{stats.messages}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="border rounded-md p-4 text-center text-gray-500">
          <p>No recent activity to display</p>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Power BI Dashboards</h2>
        <div className="border rounded-md p-4 text-center text-gray-500">
          <p>No Power BI dashboards connected yet</p>
          <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Connect Power BI
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard