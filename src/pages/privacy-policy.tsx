import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Globe, Clock, Mail, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              <p className="text-sm text-gray-500">Last updated: July 2025</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Aura 300 Inc. ("Aura", "we", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data of:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Clients who use our AI assistant</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Salon customers who interact with Aura via phone, WhatsApp, or integrated tools</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Visitors to our website or dashboard</span>
            </li>
          </ul>
        </div>

        {/* Data Control */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Who Controls Your Data?</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>• <strong>Aura acts as a data processor</strong> on behalf of salon clients ("Controllers").</p>
            <p>• <strong>Salon owners are responsible</strong> for collecting consent from their customers.</p>
            <p>• If you're a salon customer and have questions about how your data is used, please <strong>contact your salon directly</strong>.</p>
          </div>
        </div>

        {/* Data Collection */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What Data We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">From Salon Clients (our customers)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Name, email, phone number</li>
                <li>• Business details (name, CRM integration, address)</li>
                <li>• Booking system preferences, schedule settings</li>
                <li>• Payment method (processed via Stripe or other PCI-compliant providers)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">From Salon Customers (end users of AI)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Name, phone number, appointment details</li>
                <li>• Call recordings (for quality and training purposes)</li>
                <li>• WhatsApp message content and metadata</li>
                <li>• Booking history and preferences (via CRM sync)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• IP address, device type, browser info</li>
                <li>• Activity logs, page views, and usage patterns (via analytics tools)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Usage */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Data</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>To operate our AI assistant and booking automation</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>To send appointment confirmations or reminders via WhatsApp or SMS</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>To improve our AI's natural language processing and accuracy</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>For internal analytics and product optimization</span>
            </li>
          </ul>
        </div>

        {/* Legal Grounds */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Legal Grounds for Processing</h2>
          </div>
          <p className="text-gray-700 mb-4">We rely on the following lawful bases:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Consent</h4>
              <p className="text-sm text-gray-600">Customer opts into WhatsApp or SMS</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Contract</h4>
              <p className="text-sm text-gray-600">Providing Aura services to the salon</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Legitimate Interests</h4>
              <p className="text-sm text-gray-600">Improving service performance, fraud prevention</p>
            </div>
          </div>
        </div>

        {/* AI & Automation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">AI & Automated Decision-Making</h2>
          </div>
          <p className="text-gray-700 mb-4">Aura uses AI and automation to handle calls and messages. This may include:</p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Booking or rescheduling appointments</li>
            <li>• Recommending services or products</li>
            <li>• Retargeting no-shows or past clients</li>
          </ul>
          <p className="text-gray-700">All outputs are based on AI rules, not human intervention. Salon owners can review and customize AI behavior.</p>
        </div>

        {/* Data Sharing */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Data Sharing</h2>
          </div>
          <p className="text-gray-700 mb-4">We may share data with:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2 text-gray-700">
              <p>• CRM & booking providers (e.g. Fresha, Treatwell)</p>
              <p>• Messaging platforms (e.g. Twilio, Meta/WhatsApp Business)</p>
              <p>• Payment processors (e.g. Stripe)</p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>• Cloud infrastructure (e.g. AWS)</p>
              <p>• Our vetted technical service providers and sub-processors</p>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-800 font-semibold">We do not sell or rent your personal data.</p>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Security Measures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2 text-gray-700">
                <li>• Data encryption in transit and at rest</li>
                <li>• Role-based access control</li>
                <li>• Audit logs and breach monitoring</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                If a breach occurs, we will notify affected users and authorities within 72 hours, as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <p className="text-gray-700 mb-4">If you are located in the EU/UK/California, you have the right to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Access your data</li>
              <li>• Correct or delete your data</li>
              <li>• Object to processing</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>• Request data portability</li>
              <li>• Lodge a complaint with your data protection authority</li>
            </ul>
          </div>
          <p className="text-gray-700">To exercise these rights, contact us at <a href="mailto:privacy@aura300.ai" className="text-purple-600 hover:text-purple-700 underline">privacy@aura300.ai</a>.</p>
        </div>

        {/* Data Retention */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>• <strong>Client account data:</strong> kept during the subscription + 2 years</p>
            <p>• <strong>Call/chat data:</strong> kept for 180 days (unless extended for quality tracking)</p>
            <p>• <strong>Aggregated, anonymized data</strong> may be retained for analytics</p>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cookies & Analytics</h2>
          </div>
          <p className="text-gray-700 mb-4">Our website uses cookies and tracking technologies for:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-700">Functionality and performance</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-700">Analytics (Google Analytics, Hotjar)</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-700">Retargeting and advertising</p>
            </div>
          </div>
          <p className="text-gray-700">You can control cookies through your browser settings.</p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <p>Questions or concerns? Email us at <a href="mailto:privacy@aura300.ai" className="underline hover:text-purple-200">privacy@aura300.ai</a></p>
            <p className="text-purple-100">
              <strong>Data controller (for end-user queries):</strong> Your salon or service provider
            </p>
            <p className="text-sm text-purple-200">
              We may update this policy as needed. Clients will be notified via email and/or dashboard notices.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button 
            onClick={scrollToTop}
            className="bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300 px-6 py-3 rounded-full shadow-lg text-purple-600 font-medium"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;