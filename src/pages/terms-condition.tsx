import React from 'react';
import { Scale, FileText, Shield, Users, CreditCard, AlertTriangle, Lock, Gavel, ArrowLeft, ScrollText, Database, Bot } from 'lucide-react';

const TermsConditions = () => {
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
              <Scale className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
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
              <ScrollText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service Agreement</h2>
              <p className="text-sm text-gray-500">Last updated: July 2025</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <p className="text-gray-800 font-medium">
              By subscribing to or using Aura 300's services, you ("Client") agree to these Terms and any future updates. 
              Continued use constitutes ongoing acceptance of all terms outlined below.
            </p>
          </div>
        </div>

        {/* Services Provided */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Services Provided</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Aura 300 offers AI-powered voice and messaging assistants for salons and beauty businesses. Core features include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Automated call handling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">WhatsApp communication</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Smart scheduling</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Automated rebooking & reminders</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Intelligent upselling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">CRM integrations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Responsibilities */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Client Responsibilities</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Data Compliance</h4>
              <p className="text-gray-700 text-sm">
                Ensure all data uploaded, integrated, or synced to Aura (client names, phone numbers, preferences) 
                is lawfully obtained with required client consent under applicable laws (GDPR, CCPA, etc.).
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-gray-900 mb-2">System Integration</h4>
              <p className="text-gray-700 text-sm">
                Configure and maintain integrations with third-party services such as Fresha, Square, or WhatsApp Business.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Account Maintenance</h4>
              <p className="text-gray-700 text-sm">
                Maintain accurate business data and payment methods.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-red-50 p-4 rounded-lg">
            <p className="text-red-800 font-semibold text-sm">
              ⚠️ Aura 300 assumes zero responsibility for data legality, source, or accuracy.
            </p>
          </div>
        </div>

        {/* Data & Privacy Liability */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Data & Privacy Liability</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Our Role</h4>
                <p className="text-gray-700 text-sm">Aura 300 is a data processor, not a controller.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Your Role</h4>
                <p className="text-gray-700 text-sm">You are solely responsible for all customer data uploaded or connected.</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Critical Requirements</h4>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• You confirm you have secured client opt-in and consent for automated communications</li>
                <li>• Aura will not verify the legality or compliance of data integrations</li>
                <li>• Use of the platform confirms your liability as the data controller</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acceptable Use Policy */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Acceptable Use Policy</h2>
          </div>
          <p className="text-gray-700 mb-4">Clients may not use the service to:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-red-800 font-medium text-sm">Violate laws, spam, or harass</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <Lock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-red-800 font-medium text-sm">Upload malicious code or attempt unauthorized access</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <FileText className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-red-800 font-medium text-sm">Reproduce, reverse-engineer, or resell the platform</p>
            </div>
          </div>
        </div>

        {/* AI Automation Disclaimer */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">AI Automation Disclaimer</h2>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg mb-4">
            <h4 className="font-semibold text-yellow-900 mb-3">⚡ Aura AI is built for efficiency — not infallibility.</h4>
            <p className="text-yellow-800 text-sm mb-3">The AI system may occasionally:</p>
            <div className="space-y-2 text-yellow-800 text-sm">
              <p>• Misinterpret or mishandle rare phrasing</p>
              <p>• Book inaccurately if configurations are incorrect</p>
              <p>• Deliver marketing content that is not reviewed by humans</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium text-sm">
              Clients agree to monitor initial performance and take responsibility for oversight.
            </p>
          </div>
        </div>

        {/* Payments & Billing */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Payments & Billing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Auto-Renewal</h4>
              <p className="text-gray-700 text-sm">Monthly or annual subscriptions are auto-renewed</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Payment Failure</h4>
              <p className="text-gray-700 text-sm">Non-payment results in suspension or termination</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Commission</h4>
              <p className="text-gray-700 text-sm">Upsell revenue-shares invoiced monthly (if applicable)</p>
            </div>
          </div>
        </div>

        {/* Cancellation & Termination */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cancellation & Termination</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Client Cancellation</h4>
                <p className="text-gray-700 text-sm">May cancel at any time via dashboard or written notice</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Aura Termination</h4>
                <p className="text-gray-700 text-sm">May terminate for abuse, non-payment, or violation of terms</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-semibold text-sm">
                ⚠️ No refunds will be issued for prepaid plans unless otherwise agreed.
              </p>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Aura 300 Ownership</h4>
              <p className="text-gray-700 text-sm">
                All IP — including AI models, UI/UX, codebase, and training data — is owned by Aura 300 Inc.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Client License</h4>
              <p className="text-gray-700 text-sm">
                You receive a limited, revocable license during active subscriptions only.
              </p>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
          </div>
          <div className="bg-red-50 p-6 rounded-lg mb-4">
            <h4 className="font-semibold text-red-900 mb-3">Aura 300 is NOT liable for:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Lost bookings or revenue</li>
                <li>• Customer complaints due to AI outputs</li>
              </ul>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Data breach or legal claims from Client-provided data</li>
                <li>• Service outages or 3rd party API failures</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <p className="text-yellow-900 font-semibold text-sm">
              💰 Total cumulative liability is limited to the most recent 30 days of subscription fees paid.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Gavel className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Governing Law & Dispute Resolution</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Governing Law</h4>
              <p className="text-purple-100 text-sm">This agreement is governed by the laws of Delaware, USA.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Dispute Resolution</h4>
              <p className="text-purple-100 text-sm">Any disputes resolved through binding arbitration in Wilmington, Delaware.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
            <p className="text-gray-600 mb-4">
              Contact our legal team for clarification on any terms or conditions.
            </p>
            <a 
              href="mailto:legal@aura300.ai?subject=Terms%20and%20Conditions%20Inquiry"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Contact Legal Team
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center">
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

export default TermsConditions;