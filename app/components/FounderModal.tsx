'use client';
import { useState } from 'react';
import { submitFounderApplication } from '@/app/actions';

export default function FounderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'Meta Quest 3' // default вредност
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const result = await submitFounderApplication(formData);

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/40 backdrop-blur-sm p-4">
      {/* Затворање при клик надвор */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="bg-primary/80 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl p-8 overflow-hidden transition-all">
        {/* Суптилно сино/тиркизно светло во позадина */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <button onClick={onClose} className="absolute top-4 right-4 text-teal-300 hover:text-white transition-colors">✕</button>

        {!submitted ? (
          <div>
            <h3 className="text-xl font-extrabold leading-7 text-white">Claim Your Founder Status</h3>
            <p className="block text-sm font-bold text-white mt-1 uppercase tracking-widest border-b-4 border-teal-300 pb-4 mb-6">
              You are applying for one of the <span className="text-teal-300 font-bold">100 slots!</span> 
              <br/> Please provide your details to lock in.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-widest mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full px-4 py-4 bg-dark border border-secondary-800 rounded-full text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-widest mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@company.com" 
                  className="w-full px-4 py-4 bg-dark border border-secondary-800 rounded-full text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-widest mb-1.5">Primary XR/VR Device</label>
                <select 
                  value={formData.device}
                  onChange={(e) => setFormData({...formData, device: e.target.value})}
                  className="w-full px-4 py-4 bg-dark border border-secondary-800 rounded-full text-white text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="Meta Quest 3">Meta Quest 3</option>
                  <option value="Meta Quest Pro / 2">Meta Quest Pro / 2</option>
                  <option value="Apple Vision Pro">Apple Vision Pro</option>
                  <option value="PCVR (HTC Vive, Index, etc.)">PCVR (Valve Index, HTC, etc.)</option>
                  <option value="Mobile AR / No Device Yet">Mobile AR / No Device Yet</option>
                </select>
              </div>

              {errorMsg && <p className="text-red-500 text-xs font-medium">{errorMsg}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="block w-full rounded-full bg-white px-8 py-3 mt-7 text-xl font-extrabold text-primary shadow-2xl hover:bg-gray-100 transition-all hover:scale-105 uppercase tracking-tighter"
              >
                {loading ? 'Processing Legacy...' : 'Submit Application'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="text-4xl shadow-[0_0_30px_rgba(34,211,238,0.3)] w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto border border-teal-500/30">💎</div>
            <h3 className="text-2xl font-extrabold text-white tracking-tighter">Application Received!</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your spot is temporarily reserved. We have sent a notification directly to our development sanctuary. 
            </p>
            <p className="text-zinc-400 text-sm">
              To complete your verification and meet the team, jump into our Discord immediately.
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "#"}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-white px-8 py-3 text-xl font-extrabold text-primary shadow-2xl hover:bg-gray-100 transition-all hover:scale-105 uppercase tracking-tighter"
            >
              Enter Founder Discord
            </a>
          </div>
        )}
      </div>
    </div>
  );
}