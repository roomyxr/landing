'use client';
import { useState } from 'react';
import { addToWaitlist } from '@/app/actions';

export default function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const result = await addToWaitlist(email);

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/40 backdrop-blur-sm p-4">
      {/* Заднина која овозможува затворање при клик надвор од прозорецот */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Главниот прозорец */}
      <div className="bg-primary/80 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl p-8 overflow-hidden transition-all">
        <button onClick={onClose} className="absolute top-4 right-4 text-teal-300 hover:text-white transition-colors">
          ✕
        </button>
        
        {!submitted ? (
          <div>
            <h3 className="text-xl font-extrabold leading-7 text-white">Join Roomy Waitlist</h3>
            <p className="block text-sm font-bold text-white mt-1 uppercase tracking-widest border-b-4 border-teal-300 pb-4 mb-6">
              Get early access before we launch publicly.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-4 py-4 bg-dark border border-secondary-800 rounded-full text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
                disabled={loading}
              />
              <button 
                type="submit" 
                disabled={loading}
                className="w-full rounded-full bg-transparent border-2 border-white px-8 py-3 mt-5 text-base font-bold text-white shadow-sm hover:bg-white/10 transition-all hover:scale-105 uppercase"
              >
                {loading ? 'Securing your spot...' : 'Get Early Access'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-4 border border-emerald-500/20 text-2xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-zinc-400 text-sm mb-8">
              We’ve reserved your spot. Join our builder community on Discord.
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full rounded-full bg-transparent border-2 border-white px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-white/10 transition-all hover:scale-105 uppercase"
            >
              Enter Roomy Discord
            </a>
          </div>
        )}
      </div>
    </div>
  );
}