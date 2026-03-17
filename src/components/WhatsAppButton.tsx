const WhatsAppButton = () => (
  <a
    href="https://wa.me/5585987244622?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20a%20respeito%20do%20Pr%C3%A1tice%20Hub"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
    aria-label="Falar no WhatsApp"
  >
    <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center">
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958a15.907 15.907 0 008.832 2.666C24.826 31.998 32 24.822 32 16.004 32 7.176 24.826 0 16.004 0zm9.314 22.606c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.826-6.794-8.064-7.11-.23-.316-1.906-2.54-1.906-4.844s1.204-3.436 1.632-3.908c.428-.472.936-.59 1.248-.59.312 0 .624.002.898.016.288.014.674-.11 1.054.804.39.938 1.326 3.242 1.444 3.478.116.234.194.508.038.824-.156.316-.234.512-.468.79-.234.274-.492.614-.702.824-.234.234-.478.488-.206.96.274.468 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.774 2.328.468.234.742.196 1.016-.118.274-.316 1.17-1.366 1.482-1.836.312-.468.624-.39 1.054-.234.428.156 2.734 1.29 3.202 1.524.468.234.78.352.898.546.116.196.116 1.12-.274 2.232z" />
      </svg>
      <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#25D366] animate-pulse" />
    </div>
  </a>
);

export default WhatsAppButton;
