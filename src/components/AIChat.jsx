import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const AIChat = ({ projectId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load previous messages if projectId is provided
  useEffect(() => {
    if (projectId) {
      loadMessages();
    }
  }, [projectId]);

  const loadMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/conversations/${projectId}/messages`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      content: input,
      sender_type: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Determine the type of request based on content
      let endpoint = '/api/ai/analyze-data';
      let payload = { dataDescription: input };

      if (input.toLowerCase().includes('dax') || input.toLowerCase().includes('power bi')) {
        endpoint = '/api/ai/generate-dax';
        payload = { requirement: input };
      } else if (input.toLowerCase().includes('excel') || input.toLowerCase().includes('formula')) {
        endpoint = '/api/ai/generate-excel';
        payload = { requirement: input };
      }

      // Send request to AI service
      const response = await axios.post(endpoint, payload);

      // Format AI response based on endpoint
      let aiResponseContent = '';
      
      if (endpoint === '/api/ai/generate-dax') {
        aiResponseContent = `**DAX Formula:**\n\`\`\`\n${response.data.formula}\n\`\`\`\n\n**Explanation:**\n${response.data.explanation}\n\n**Complexity:** ${response.data.complexity}`;
        
        if (response.data.suggestions && response.data.suggestions.length > 0) {
          aiResponseContent += '\n\n**Suggestions:**\n' + response.data.suggestions.map(s => `- ${s}`).join('\n');
        }
      } else if (endpoint === '/api/ai/generate-excel') {
        aiResponseContent = `**Excel Formula:**\n\`\`\`\n${response.data.formula}\n\`\`\`\n\n**Explanation:**\n${response.data.explanation}`;
        
        if (response.data.alternativeFormulas && response.data.alternativeFormulas.length > 0) {
          aiResponseContent += '\n\n**Alternative Formulas:**\n' + response.data.alternativeFormulas.map(a => `- ${a}`).join('\n');
        }
        
        if (response.data.examples && response.data.examples.length > 0) {
          aiResponseContent += '\n\n**Examples:**\n' + response.data.examples.map(e => `- ${e}`).join('\n');
        }
      } else {
        // Data analysis response
        aiResponseContent = '**Data Analysis Results:**\n\n';
        
        if (response.data.recommendations && response.data.recommendations.length > 0) {
          aiResponseContent += '**Recommendations:**\n' + response.data.recommendations.map(r => `- ${r}`).join('\n') + '\n\n';
        }
        
        if (response.data.kpis && response.data.kpis.length > 0) {
          aiResponseContent += '**Suggested KPIs:**\n' + response.data.kpis.map(k => `- ${k}`).join('\n') + '\n\n';
        }
        
        if (response.data.visualizations && response.data.visualizations.length > 0) {
          aiResponseContent += '**Recommended Visualizations:**\n' + response.data.visualizations.map(v => `- ${v}`).join('\n');
        }
      }

      // Add AI response to chat
      const aiMessage = {
        id: Date.now() + 1,
        content: aiResponseContent,
        sender_type: 'ai',
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, aiMessage]);

      // Save conversation if projectId is provided
      if (projectId) {
        await axios.post(`/api/conversations/${projectId}/messages`, {
          messages: [userMessage, aiMessage]
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        content: `Sorry, I encountered an error: ${error.response?.data?.message || error.message}`,
        sender_type: 'ai',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-dark-bg rounded-lg shadow-md overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg-light">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-dark-text">AI Assistant</h2>
        <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
          Ask about Power BI, Excel formulas, or dashboard design
        </p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-dark-text-secondary">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-lg font-medium">How can I help you today?</p>
            <p className="mt-2 max-w-md">
              Ask me about DAX formulas, Excel functions, or data visualization best practices.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3/4 rounded-lg p-3 ${message.sender_type === 'user'
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
                    : 'bg-gray-100 dark:bg-dark-bg-light text-gray-800 dark:text-dark-text'
                    }`}
                >
                  <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br>') }} />
                  <div className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1 text-right">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-dark-border">
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Power BI, Excel formulas, or dashboard design..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;