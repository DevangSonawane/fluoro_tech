import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideUp } from '../components/animations/SlideUp';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20corporate%20office%20reception%20area%2C%20clean%20and%20minimalist%20design%2C%20bright%20lighting&image_size=landscape_16_9"
            alt="Office Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
              Have a question about our coatings? Need a quote? We're here to help.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SlideUp className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900">Our Location</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    Office and Works<br />
                    Plot No. 89, Survey No. 66,<br />
                    Village Valiv, Vasai (E),<br />
                    Dist.: Thane - 401 208
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900">Phone</h3>
                  <p className="mt-2 text-slate-600 font-medium text-lg">
                    (0250) 2480202 / 2480220
                  </p>
                  <p className="mt-1 text-slate-600 font-medium text-lg">
                    9820326754 / 9820643819
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail className="h-7 w-7" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-slate-900">Email</h3>
                  <p className="mt-2 text-slate-600 font-medium text-lg">
                    ft_coat@yahoo.com
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group h-64 mt-8">
                <iframe 
                  width="100%" 
                  height="100%" 
                  id="gmap_canvas" 
                  src="https://maps.google.com/maps?q=Fluoro%20Tech%20Engineering%20Works%20Plot%20No%2089%20Survey%20No%2066%20Village%20Valiv%20Vasai%20E&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0"
                  title="Location Map"
                  className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Fluoro+Tech+Engineering+Works+Plot+No+89+Survey+No+66+Village+Valiv+Vasai+E" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors"
                  aria-label="Open in Google Maps"
                >
                  <span className="sr-only">Open in Google Maps</span>
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={0.2} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form 
              className="space-y-6" 
              action="mailto:ft_coat@yahoo.com" 
              method="post" 
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full px-4 py-3 rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-3 rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 rounded-xl border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                icon={Send}
                className="w-full rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </SlideUp>
        </div>
      </div>
    </div>
  );
};

export default Contact;
