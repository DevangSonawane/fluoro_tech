import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/animations/FadeIn';

const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{title}</h2>
    <div className="text-slate-700">{children}</div>
  </div>
);

const IndustryTemplate = ({
  h1,
  challenges,
  exposure,
  recommendations,
  applications,
  reasons,
  consultationCtaHref = '/contact',
  formHeading = 'Request Technical Consultation',
}) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <FadeIn>
          <header className="mb-6">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {h1}
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Engineering-focused overview for selecting fluoropolymer coatings and linings tailored to this industry’s operating conditions.
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <SectionCard title="Industry Challenges">
            <ul className="list-disc pl-6 space-y-2">
              {challenges.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <SectionCard title="Corrosion & Chemical Exposure Issues">
            <ul className="list-disc pl-6 space-y-2">
              {exposure.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <SectionCard title="Recommended Coatings">
            <div className="flex flex-wrap gap-3">
              {recommendations.map((rec, idx) => (
                <Link
                  key={idx}
                  to={rec.href}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 hover:bg-blue-50 hover:text-blue-700 font-medium"
                >
                  {rec.label}
                </Link>
              ))}
            </div>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <SectionCard title="Application Areas">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">{app.title}</div>
                  <div className="mt-1 text-slate-700 text-sm">{app.desc}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <SectionCard title="Why Our Coating Solutions">
            <ul className="list-disc pl-6 space-y-2">
              {reasons.map((r, idx) => <li key={idx}>{r}</li>)}
            </ul>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-2xl font-black">Request Technical Consultation</div>
                <div className="mt-2 text-blue-100">
                  Discuss process conditions, chemicals, temperature cycles, and mechanical loads with a coating engineer.
                </div>
              </div>
              <Link
                to={consultationCtaHref}
                className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50"
              >
                Speak to a Coating Engineer
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{formHeading}</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Name</label>
                <input className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Company</label>
                <input className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Company name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input type="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Phone</label>
                <input className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 ..." />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Process Details</label>
                <textarea rows={5} className="px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="List chemicals, concentrations, temperatures, equipment, and any corrosion/abrasion issues"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="button" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default IndustryTemplate;

