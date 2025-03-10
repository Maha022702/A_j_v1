import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Youtube from "../../assets/images/youtube.png";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // console.log("location?.pathname", location?.pathname);
  // bg-gradient-to-b from-slate-700 to-slate-100

  return (
    <footer className="bg-gray-200 text-black py-8 px-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Company Name */}
        <div className="text-center text-2xl font-bold mb-6">
          The Great Bulls
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white text-2xl sm:text-xl border-2 p-2 rounded-md"
          >
            <img src={Facebook} alt="Facebook" className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white text-2xl sm:text-xl border-2 p-2 rounded-md"
          >
            <img src={Twitter} alt="Twitter" className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white text-2xl sm:text-xl border-2 p-2 rounded-md"
          >
            <img src={Instagram} alt="Instagram" className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white text-2xl sm:text-xl border-2 p-2 rounded-md"
          >
            <img src={Linkedin} alt="Linkedin" className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white text-2xl sm:text-xl border-2 p-2 rounded-md"
          >
            <img src={Youtube} alt="Youtube" className="h-5 w-5" />
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm">
          <a
            href="/contactForm"
            className={`hover:underline hover:text-blue-600 ${
              location?.pathname === "/contactForm"
                ? "text-blue-600 underline pointer-events-none cursor-default"
                : "text-black"
            }`}
          >
            Contact
          </a>
          <a
            href="/privacyPolicy"
            className={`hover:underline hover:text-blue-600 ${
              location?.pathname === "/privacyPolicy"
                ? "text-blue-600 underline pointer-events-none cursor-default"
                : "text-black"
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="/refundPolicy"
            className={`hover:underline hover:text-blue-600 ${
              location?.pathname === "/refundPolicy"
                ? "text-blue-600 underline pointer-events-none cursor-default"
                : "text-black"
            }`}
          >
            Refund Policy
          </a>
          <a
            href="/termsOfService"
            className={`hover:underline hover:text-blue-600 ${
              location?.pathname === "/termsOfService"
                ? "text-blue-600 underline pointer-events-none cursor-default"
                : "text-black"
            }`}
          >
            Terms of Service
          </a>
          <a
            href="/showFaqList"
            className={`hover:underline hover:text-blue-600 ${
              location?.pathname === "/showFaqList"
                ? "text-blue-600 underline pointer-events-none cursor-default"
                : "text-black"
            }`}
          >
            FAQ
          </a>
          <a href="/support" className="hover:underline hover:text-blue-600">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
