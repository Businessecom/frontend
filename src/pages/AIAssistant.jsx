import { useState } from 'react';
import AIChat from '../components/AIChat';
import { useAuth } from '../context/AuthContext';

const AIAssistant = () => {
  const { user } = useAuth();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI Assistant</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Get help with Power BI, Excel formulas, and dashboard design
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chat Area */}
        <div className="lg:col-span-8 h-[calc(100vh-12rem)]">
          <AIChat projectId={selectedProject} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-dark-bg rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Tips</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100 mr-3 flex-shrink-0">
                  1
                </span>
                <span>Ask for DAX formulas for specific business scenarios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100 mr-3 flex-shrink-0">
                  2
                </span>
                <span>Get Excel formula recommendations with examples</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100 mr-3 flex-shrink-0">
                  3
                </span>
                <span>Describe your data to get dashboard layout suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100 mr-3 flex-shrink-0">
                  4
                </span>
                <span>Ask for KPI recommendations for your industry</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark-bg rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Example Prompts</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-dark-bg-light rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-bg-lighter transition-colors">
                "Create a DAX formula for year-over-year growth percentage"
              </div>
              <div className="p-3 bg-gray-50 dark:bg-dark-bg-light rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-bg-lighter transition-colors">
                "Excel formula to lookup values across multiple sheets"
              </div>
              <div className="p-3 bg-gray-50 dark:bg-dark-bg-light rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-bg-lighter transition-colors">
                "Suggest KPIs for an e-commerce sales dashboard"
              </div>
              <div className="p-3 bg-gray-50 dark:bg-dark-bg-light rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-bg-lighter transition-colors">
                "What's the best visualization for showing regional sales distribution?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;