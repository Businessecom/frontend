import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'information-use', title: 'How We Use Information' },
    { id: 'information-sharing', title: 'Information Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'cookies', title: 'Cookies and Tracking' },
    { id: 'user-rights', title: 'Your Rights and Choices' },
    { id: 'children', title: 'Children\'s Privacy' },
    { id: 'international', title: 'International Transfers' },
    { id: 'changes', title: 'Changes to Privacy Policy' },
    { id: 'contact', title: 'Contact Us' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-lg text-gray-600 mb-2">Last updated: January 1, 2024</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              This Privacy Policy describes how UPNELO collects, uses, and protects your personal information when you use our service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-sm py-2 px-3 rounded-md transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-12">
              
              <section id="introduction">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Welcome to UPNELO ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered business intelligence services.
                  </p>
                  <p>
                    By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
                  </p>
                </div>
              </section>

              <section id="information-collection">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p>We may collect the following personal information:</p>
                  <ul>
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Professional information (job title, company name)</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Usage Information</h3>
                  <p>We automatically collect certain information about your use of our Service:</p>
                  <ul>
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and preferences</li>
                    <li>Log files and analytics data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Business Data</h3>
                  <p>When using our AI services, you may provide:</p>
                  <ul>
                    <li>Data descriptions and requirements</li>
                    <li>Dashboard configurations</li>
                    <li>Formula requests and specifications</li>
                    <li>Business intelligence queries</li>
                  </ul>
                </div>
              </section>

              <section id="information-use">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We use the collected information for the following purposes:</p>
                  <ul>
                    <li><strong>Service Provision:</strong> To provide, maintain, and improve our AI-powered business intelligence services</li>
                    <li><strong>Account Management:</strong> To create and manage your account, process payments, and provide customer support</li>
                    <li><strong>Communication:</strong> To send you service-related notifications, updates, and marketing communications (with your consent)</li>
                    <li><strong>Personalization:</strong> To customize your experience and provide relevant recommendations</li>
                    <li><strong>Analytics:</strong> To analyze usage patterns and improve our Service</li>
                    <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Providers</h3>
                  <p>We may share information with trusted third-party service providers who assist us in:</p>
                  <ul>
                    <li>Payment processing</li>
                    <li>Cloud hosting and data storage</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer support services</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Legal Requirements</h3>
                  <p>We may disclose information when required by law or to:</p>
                  <ul>
                    <li>Comply with legal processes or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Prevent fraud or security threats</li>
                    <li>Enforce our Terms of Service</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Business Transfers</h3>
                  <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                </div>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We implement industry-standard security measures to protect your information:</p>
                  <ul>
                    <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using advanced encryption standards</li>
                    <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                    <li><strong>Regular Audits:</strong> Regular security audits and vulnerability assessments</li>
                    <li><strong>Secure Infrastructure:</strong> Use of secure cloud infrastructure with enterprise-grade security</li>
                    <li><strong>Employee Training:</strong> Regular security training for all employees</li>
                  </ul>
                  <p>
                    While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data using reasonable security measures.
                  </p>
                </div>
              </section>

              <section id="data-retention">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We retain your information for as long as necessary to:</p>
                  <ul>
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Improve our services</li>
                  </ul>
                  <p>
                    When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal or regulatory purposes.
                  </p>
                </div>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our Service.
                  </p>
                </div>
              </section>

              <section id="user-rights">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
                <div className="prose prose-gray max-w-none">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul>
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                  </p>
                </div>
              </section>

              <section id="children">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              <section id="international">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> privacy@upnelo.com</li>
                      <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                      <li><strong>Address:</strong> UPNELO Privacy Team<br />123 Business Ave, Suite 100<br />San Francisco, CA 94105</li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy