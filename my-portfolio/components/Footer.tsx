const Footer = () => (
  <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Bryan Chora. All rights reserved.</p>
      <p className="text-slate-500">
        Built with Next.js, Tailwind CSS, Framer Motion, and a serverless API.
      </p>
    </div>
  </footer>
);

export default Footer;
