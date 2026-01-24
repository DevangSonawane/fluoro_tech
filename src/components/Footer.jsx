import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logonew.png" alt="Fluoro Tech Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Leading provider of high-performance fluoropolymer coatings and linings for industrial applications. Delivering excellence in corrosion protection and chemical resistance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Technical Data', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  FLUORO TECH ENGINEERING WORKS<br />
                  1st Floor, Survey No. 66. Plot No. 89,<br />
                  Valiv Phata, Sativali Road<br />
                  Opp. Jay Equipment Pvt. Ltd.<br />
                  Vasai – E, Thane – 401 208
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>8149060220 / 8149160220</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>9137311899 / 898 3351 989</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:ft_coat@yahoo.com" className="hover:text-white transition-colors">ft_coat@yahoo.com</a>
                  <a href="mailto:fluorocoat@gmail.com" className="hover:text-white transition-colors">fluorocoat@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-300 pt-2 border-t border-slate-800 mt-2">
                <div className="flex flex-col text-sm text-slate-400">
                  <span>GSTIN : 27AABFF2723J1ZL</span>
                  <span>PAN : AABFF2723J</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Fluoro Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
             {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
