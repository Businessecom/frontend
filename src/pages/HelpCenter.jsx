import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon,
  BookOpenIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  PlayIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpenIcon },
    { id: 'getting-started', name: 'Getting Started', icon: PlayIcon },
    { id: 'ai-assistant', name: 'AI Assistant', icon: ChatBubbleLeftRightIcon },
    { id: 'power-bi', name: 'Power BI', icon: DocumentTextIcon },
    { id: 'formulas', name: 'Formulas', icon: QuestionMarkCircleIcon },
    { id: 'account', name: 'Account & Billing', icon: BookOpenIcon }
  ]

  const articles = [
    {
      id: 1,
      title: 'Getting Started with UPNELO',
      category: 'getting-started',
      description: 'Learn the basics of using UPNELO for your business intelligence needs',
      readTime: '5 min read',
      popular: true
    },
    {
      id: 2,
      title: 'How to Use the AI Assistant',
      category: 'ai-assistant',
      description: 'Master the AI assistant to generate formulas and get insights',
      readTime: '8 min read',
      popular: true
    },
    {
      id: 3,
      title: 'Connecting Power BI Dashboards',
      category: 'power-bi',
      description: 'Step-by-step guide to integrate your Power BI dashboards',
      readTime: '10 min read',
      popular: false
    },
    {
      id: 4,
      title: 'DAX Formula Best Practices',
      category: 'formulas',
      description: 'Tips and tricks for writing efficient DAX formulas',
      readTime: '12 min read',
      popular: true
    },
    {
      id: 5,
      title: 'Managing Your Subscription',
      category: 'account',
      description: 'How to upgrade, downgrade, or cancel your subscription',
      readTime: '3 min read',
      popular: false
    },
    {
      id: 6,
      title: 'Excel Integration Guide',
      category: 'formulas',
      description: 'Learn how to use UPNELO with Excel for better productivity',
      readTime: '7 min read',
      popular: false
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'UPNELO Overview - 2024',
      duration: '3:45',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete overview of UPNELO features and capabilities'
    },
    {
      id: 2,
      title: 'AI Assistant Deep Dive',
      duration: '8:20',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced techniques for using the AI assistant effectively'
    },
    {
      id: 3,
      title: 'Power BI Integration Tutorial',
      duration: '12:15',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete tutorial on connecting and optimizing Power BI dashboards'
    }
  ]

  const faqs = [
    {
      question: 'How does the AI assistant work?',
      answer: 'Our AI assistant uses advanced natural language processing to understand your requirements and generate accurate DAX formulas, Excel functions, and dashboard recommendations based on your specific needs.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Is my data secure with UPNELO?',
      answer: 'Absolutely. We use enterprise-grade security measures including encryption at rest and in transit. We never store your sensitive business data and comply with all major data protection regulations.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.'
    },
    {
      question: 'What Power BI versions are supported?',
      answer: 'UPNELO supports Power BI Desktop, Power BI Service, and Power BI Premium. We regularly update our integration to support the latest Power BI features.'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers, tutorials, and resources to get the most out of UPNELO
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/contact"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Support</h3>
                <p className="text-gray-600">Get help from our support team</p>
              </div>
            </div>
          </Link>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                <VideoCameraIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Video Tutorials</h3>
                <p className="text-gray-600">Watch step-by-step guides</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                <BookOpenIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Documentation</h3>
                <p className="text-gray-600">Browse our complete docs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Popular Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.filter(article => article.popular).map((article) => (
                  <div key={article.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Tutorials */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 group cursor-pointer">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <PlayIcon className="h-8 w-8 text-blue-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* All Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{article.description}</p>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 ml-4 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter