import { useState } from 'react';
import ContactForm from './components/ContactForm';

const ContactUsPage = () => {
  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
    visible: false,
  });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  };

  const hideSpotlight = () => {
    setSpotlight((currentSpotlight) => ({
      ...currentSpotlight,
      visible: false,
    }));
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={hideSpotlight}
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(
            500px circle at ${spotlight.x}% ${spotlight.y}%,
            rgba(0, 132, 209, 0.26) 0%,
            rgba(0, 132, 209, 0.10) 38%,
            transparent 72%
          )`,
        }}
      />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-12 py-4 lg:py-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold tracking-[0.18em] text-white/55 uppercase">
            Contact Us
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s build something together.
          </h1>

          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Curious about joining, collaborating on an event, or sponsoring a
            project? Reach out—our student board reads every message.
          </p>
        </div>

        <div className="w-full max-w-3xl">
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default ContactUsPage;