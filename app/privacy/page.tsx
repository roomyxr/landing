'use client';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 py-20 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated: June 2026</p>
        </div>

        <p className="text-zinc-400 leading-relaxed">
          Welcome to Roomy. We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, process, and protect your information when you visit our landing page, join our Waitlist, or apply for our Founding Member program.
        </p>

        <hr className="border-zinc-800" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
          <p>We only collect information that you voluntarily provide to us directly through our forms:</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li><strong className="text-white">Identity & Contact Data:</strong> Your name and email address when you apply for early access or the Founding Circle.</li>
            <li><strong className="text-white">Technical & Hardware Preferences:</strong> Information regarding the primary XR/VR hardware device you use (e.g., Meta Quest, Apple Vision Pro).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. How We Process Your Data (Third-Party Integration)</h2>
          <p>
            To efficiently manage our community applications, the data you submit through our website forms is securely transmitted via encrypted Webhooks directly to our private, secure internal server on <strong className="text-white">Discord</strong>. We do not sell, rent, or distribute your email or personal information to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Public Appearances and "Build in Public" Streams</h2>
          <p className="text-zinc-400 leading-relaxed">
            Roomy operates under a "Build in Public" philosophy. We frequently host live-streamed development sessions, Q&As, and community feedback reviews on platforms like <strong className="text-white">YouTube and TikTok</strong>. 
          </p>
          <p className="text-zinc-400 leading-relaxed">
            By voluntarily joining our public Discord channels, participating in community voice/video calls, or joining us as a guest in live sessions, you acknowledge and agree that your Discord username, avatar, voice, or spatial presence may be broadcasted or recorded for educational and promotional content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Communications and Platform Access</h2>
          <p>We will use your email address exclusively to:</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>Send you onboarding details regarding your Founder application.</li>
            <li>Provide direct invite links to our private Discord Sanctuary and Calendly welcome sessions.</li>
            <li>Notify you when the application becomes available on the Meta Horizon Store, Steam, or other XR platforms.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Your Data Rights (GDPR Compliance)</h2>
          <p>
            Regardless of your location, you have the right to request access to the personal data we hold about you, or request that your email and details be permanently deleted from our system. To exercise this right, please contact us directly via our official community support channels.
          </p>
        </section>
      </div>
    </main>
  );
}