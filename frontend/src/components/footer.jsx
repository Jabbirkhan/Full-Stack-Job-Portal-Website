import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();
    if(location.pathname === '/user-login' || location.pathname === '/user-forget-password' || location.pathname === 'verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service'){
        return null;
    }

  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-blue-600">
            RiseWorks
          </h3>

          <p className="text-slate-500 mt-2">
            Empowering careers through technology.
          </p>
        </div>

        <div className="flex gap-6 text-slate-500">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>

        <p className="text-slate-500 text-sm">
          © 2026 RiseWorks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;