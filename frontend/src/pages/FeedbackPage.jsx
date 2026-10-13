import React, { useState } from 'react';
import { MessageSquareHeart, Send, CheckCircle2, Star } from 'lucide-react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00629b]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0084d1]/20 bg-[#00629b]/10 px-3.5 py-1 text-xs font-semibold text-[#00a3ff]">
            <MessageSquareHeart size={14} />
            <span>Student Feedback</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Share Your <span className="text-[#0084d1]">Feedback</span>
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Help us improve SAC GBPIET activities, workshops, facilities, and campus initiatives.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center backdrop-blur-md">
            <CheckCircle2 size={40} className="mx-auto text-emerald-400" />
            <h3 className="mt-4 text-xl font-bold text-white">Thank You for Your Feedback!</h3>
            <p className="mt-2 text-sm text-white/70">
              Your voice helps us make SAC GBPIET better for every student.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-xl bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              Submit Additional Feedback
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <div className="text-center">
              <label className="block text-xs font-medium uppercase tracking-wider text-white/70 mb-2">
                Overall Experience Rating
              </label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      size={28}
                      className={star <= rating ? 'fill-amber-400 text-amber-400' : 'text-white/20'}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Your Name (Optional)</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Anonymous or Name"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Suggestions & Feedback</label>
              <textarea
                rows={4}
                required
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                placeholder="What can we do to improve events and activities?"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00629b] py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,98,155,0.4)] transition-all hover:bg-[#0084d1]"
            >
              <Send size={16} />
              <span>Send Feedback</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
