import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'description', title: 'Description of Service' },
    { id: 'user-accounts', title: 'User Accounts' },
    { id: 'acceptable-use', title: 'Acceptable Use Policy' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'privacy', title: 'Privacy and Data Protection' },
    { id: 'payment', title: 'Payment and Billing' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimers', title: 'Disclaimers' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600 mb-2">Last updated: January 1, 2024</p>
            <p className="text-gray-500">
              Please read these terms and conditions carefully before using UPNELO
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
              
              <section id="acceptance">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    By accessing and using UPNELO ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our website located at upnelo.com (the "Service") operated by UPNELO ("us", "we", or "our").
                  </p>
                </div>
              </section>

              <section id="description">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    UPNELO is an AI-powered business intelligence platform that provides:
                  </p>
                  <ul>
                    <li>AI-assisted DAX formula generation</li>
                    <li>Excel formula recommendations</li>
                    <li>Power BI dashboard optimization</li>
                    <li>Business intelligence consulting and insights</li>
                    <li>Data analysis and visualization tools</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                  </p>
                </div>
              </section>

              <section id="user-accounts">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                  <p>
                    You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </div>
              </section>

              <section id="acceptable-use">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                <div className="prose prose-gray max-w-none">
                  <p>You agree not to use the Service:</p>
                  <ul>
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </div>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of UPNELO and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                  <p>
                    You retain ownership of any data, information, or content that you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content solely for the purpose of providing the Service.
                  </p>
                </div>
              </section>

              <section id="privacy">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                  </p>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </section>

              <section id="payment">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment and Billing</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Some aspects of the Service are provided for a fee. You will be charged in advance on a recurring basis for subscription plans. Billing cycles are monthly or annual, depending on your selected plan.
                  </p>
                  <p>
                    All fees are non-refundable except as required by law or as specifically permitted in these Terms. We reserve the right to change our pricing at any time with 30 days' notice.
                  </p>
                </div>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
                  </p>
                  <p>
                    You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will cease immediately.
                  </p>
                </div>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions, and terms.
                  </p>
                  <p>
                    We do not warrant that the Service will be uninterrupted, timely, secure, or error-free. The AI-generated content is for informational purposes only and should be verified before implementation.
                  </p>
                </div>
              </section>

              <section id="limitation">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    In no event shall UPNELO, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                </div>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  </p>
                  <p>
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <ul>
                    <li>By email: legal@upnelo.com</li>
                    <li>By phone: +1 (555) 123-4567</li>
                    <li>By mail: UPNELO Legal Department, 123 Business Ave, Suite 100, San Francisco, CA 94105</li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions