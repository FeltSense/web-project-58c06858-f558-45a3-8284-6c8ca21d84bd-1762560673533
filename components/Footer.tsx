'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Brand Section */}
      <div className="flex flex-col">
        <div className="text-white text-xl font-bold mb-2 font-poppins">Individuals and</div>
        <p className="text-gray-400 text-sm mb-6">Empowering professionals with modern solutions for growth and success.</p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-6 h-6 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-6 h-6 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856.175 10 10 0 00-7.737-4.247 10 10 0 00-10 10 10 10 0 00.019.209 14.328 14.328 0 01-10.457-5.287 10 10 0 003.479 5.908 10 10 0 01-4.537-1.236v.124a10 10 0 008.032 9.8 10 10 0 01-4.533.191 10 10 0 009.356 6.946 10.328 10.328 0 01-6.117 2.11 14.34 14.34 0 002.066.134 14.328 14.328 0 0014.192-14.188 10.063 10.063 0 002.063-.263z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-6 h-6 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 w-6 h-6 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.915.76 1.915 1.715 0 .953-.728 1.715-1.958 1.715zm1.6 11.597H3.738V9.579h3.199v10.873zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/></svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6 font-poppins">Services</h3>
        <ul className="space-y-2 flex flex-col">
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Professional Development</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Career Coaching</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Skill Training</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Consulting</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Resources</a></li>
        </ul>
      </div>

      {/* Company Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6 font-poppins">Company</h3>
        <ul className="space-y-2 flex flex-col">
          <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Home</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Blog</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Careers</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6 font-poppins">Get in Touch</h3>
        <div className="space-y-4 flex flex-col">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:hello@individualsand.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">hello@individualsand.com</a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
            <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">+1 (234) 567-890</a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Location</p>
            <p className="text-gray-300 text-sm">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p className="text-gray-400 text-sm">© 2025 Individuals and. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}