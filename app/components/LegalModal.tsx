'use client';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/40 backdrop-blur-sm p-4 md:pt-20">
      {/* Затворање при клик на црната заднина */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Главниот прозорец со скрол за текстот */}
      <div className="bg-primary/80 border-t-2 border-r-2 border-primary/60 max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl z-20 text-zinc-300 selection:bg-teal-500/30">
        
        {/* Фиксно копче за затворање горе десно */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-teal-300 hover:text-white transition-colors"
        >
          ✕
        </button>

        {type === 'privacy' ? (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Privacy Policy</h1>
              <p className="text-xs font-bold text-white mt-1 uppercase tracking-widest border-b-4 border-teal-300 pb-4">Last updated: June 2026</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Welcome to Roomy. We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, process, and protect your information when you visit our landing page, join our Waitlist, or apply for our Founding Member program.
            </p>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">1. Information We Collect</h2>
              <p className="text-sm">We only collect information that you voluntarily provide to us directly through our forms:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/80 text-sm">
                <li><strong className="text-white">Identity & Contact Data:</strong> Your name and email address when you apply for early access or the Founding Circle.</li>
                <li><strong className="text-white">Technical & Hardware Preferences:</strong> Information regarding the primary XR/VR hardware device you use (e.g., Meta Quest, Apple Vision Pro).</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">2. How We Process Your Data</h2>
              <p className="text-sm text-white/80">
                To efficiently manage our community applications, the data you submit through our website forms is securely transmitted via encrypted Webhooks directly to our private, secure internal server on <strong className="text-white">Discord</strong>. We do not sell, rent, or distribute your email or personal information to third-party marketing companies.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">3. Public Appearances and "Build in Public" Streams</h2>
              <p className="text-sm text-white/80">
                Roomy operates under a "Build in Public" philosophy. We frequently host live-streamed development sessions on platforms like <strong className="text-white">YouTube and TikTok</strong>. By joining our public Discord or calls, you agree that your avatar, voice, or username may be broadcasted for educational or promotional content.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">4. Your Data Rights (GDPR)</h2>
              <p className="text-sm text-white/80">
                Regardless of your location, you have the right to request access to the personal data we hold about you, or request that your email and details be permanently deleted from our system at any time.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Terms & Conditions</h1>
              <p className="text-xs font-bold text-white mt-1 uppercase tracking-widest border-b-4 border-teal-300 pb-4">Last updated: June 2026</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              These Terms and Conditions govern your relationship with Roomy regarding our website, waitlists, pre-orders, and early access alpha/beta software. By browsing this site or submitting an application, you agree to these terms.
            </p>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">1. The Founder’s Legacy Drop & Pre-orders</h2>
              <p className="text-sm text-white/80">
                Roomy is currently in its active development phase. The "Founder’s Legacy" tier is a limited, exclusive pre-release program restricted to the first 100 users. The $29 price point is a one-time, lifetime access fee valid for early backers. By submitting your application, you understand that you are backing an Alpha/Beta-stage project.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">2. Community Conduct</h2>
              <p className="text-sm text-white/80">
                We maintain a strict zero-tolerance policy for harassment, hate speech, or toxic behavior within our private Discord Sanctuary, community calls, and live development streams. We reserve the right to revoke access of any user who violates community guidelines.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">3. Intellectual Property & Feature Feedback</h2>
              <p className="text-sm text-white/80">
                By submitting feedback, suggestions, or ideas, you grant Roomy the unrestricted, perpetual right to implement these features into the software architecture without financial compensation, ensuring clean intellectual property rights for the platform.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold leading-7 text-white">4. Health, Safety & VR Disclaimer</h2>
              <p className="text-sm text-white/80">
                Roomy is a spatial computing application. Extended use of XR hardware can cause motion sickness or eye strain. You agree that Roomy and its developers are not legally liable for any physical discomfort resulting from testing early-stage development builds of our software.
              </p>
            </div>
          </div>
        )}
        
        {/* Копче на дното за полесно затворање по читање */}
        <div className="mt-8 pt-4 border-t-4 border-teal-300 pb-4 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-5 py-2.5 bg-white text-primary font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all text-sm uppercase tracking-tight"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}