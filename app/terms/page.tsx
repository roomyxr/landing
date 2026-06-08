'use client';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 py-20 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Terms & Conditions</h1>
          <p className="text-zinc-500 text-sm">Last updated: June 2026</p>
        </div>

        <p className="text-zinc-400 leading-relaxed">
          These Terms and Conditions govern your relationship with Roomy regarding our website, waitlists, pre-orders, and early access alpha/beta software. By browsing this site or submitting an application, you agree to these terms.
        </p>

        <hr className="border-zinc-800" />

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. The Founder’s Legacy Drop & Pre-orders</h2>
          <p className="text-zinc-400 leading-relaxed">
            Roomy is currently in its active development phase. The "Founder’s Legacy" tier is a limited, exclusive pre-release program restricted to the first 100 users. 
          </p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>The $29 price point is a one-time, lifetime access fee valid for early backers.</li>
            <li>By submitting your application, you understand that the full software is not yet commercially launched and that you are backing an Alpha/Beta-stage project.</li>
            <li>Perks such as the "Founders Wall" and unique Discord roles are granted manually upon successful processing of your application.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Community Conduct & Content Rights</h2>
          <p className="text-zinc-400 leading-relaxed">
            We maintain a strict zero-tolerance policy for harassment, hate speech, or toxic behavior within our private Discord Sanctuary, community calls, and live development streams. We reserve the absolute right to revoke access and terminate the Founder status of any user who violates community guidelines.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Intellectual Property & Feature Feedback</h2>
          <p className="text-zinc-400 leading-relaxed">
            We encourage our Founding Members to co-create Roomy by sharing feature requests and feedback in our private channels. By submitting ideas, designs, or suggestions, you grant Roomy the unrestricted, perpetual right to implement these features into the software architecture without financial compensation, ensuring clean intellectual property rights for the platform's future growth.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Health, Safety & VR Disclaimer</h2>
          <p className="text-zinc-400 leading-relaxed">
            Roomy is a spatial computing and virtual reality workspace application. Extended use of XR hardware can cause motion sickness, eye strain, or physical disorientation. 
          </p>
          <p className="text-zinc-400 leading-relaxed">
            You agree that Roomy and its developers (including our Unity design and frontend engineering teams) are not legally liable for any physical discomfort, hardware damage, or health issues resulting from testing early-stage development builds of our software.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Changes to the Terms</h2>
          <p>
            As Roomy matures from an Alpha project to full publication on Meta Horizon and Steam, we reserve the right to modify these terms. Continued interaction with our platforms implies agreement with updated policies.
          </p>
        </section>
      </div>
    </main>
  );
}