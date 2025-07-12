
import React from 'react';
import { Pill } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/281ba982-2dc8-4315-aae3-5c79a50e15da.png" 
                alt="Serve You Pharma Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Serve You Pharma</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted neighborhood pharmacy providing quality medicines, healthcare products, 
              and professional pharmaceutical services to our community with care and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>+91 7559002727</p>
              <p>serveyoupharma@gmail.com</p>
              <p>MADATHIL BUILDING, 26TH MILE<br />Kanjirappally, Kerala 686518</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Serve You Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
