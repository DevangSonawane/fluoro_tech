import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/animations/FadeIn';

const FluoropolymerGuide = () => {
  useEffect(() => {
    const title = 'Fluoropolymer Coating Selection Guide: PTFE vs PFA vs PVDF vs ECTFE vs ETFE';
    document.title = title;
    const desc =
      'Authoritative guide to selecting fluoropolymer coatings. Compare PTFE, PFA, PVDF, ECTFE (Halar), and ETFE across temperature, chemical resistance, mechanical strength, cost, and industry applications. Includes practical recommendations and FAQs.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Which fluoropolymer has the highest temperature resistance?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'PTFE and PFA offer the highest continuous temperature resistance (~260°C / 500°F). ETFE and ECTFE typically operate up to ~150°C, while PVDF up to ~200°C.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is PTFE chemically resistant to most industrial acids and solvents?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. PTFE exhibits near-universal chemical inertness. PFA is similarly resistant with better fabrication capability. ECTFE and ETFE are excellent across many acids/solvents; PVDF is very good with superior mechanical strength.'
        }
      },
      {
        '@type': 'Question',
        'name': 'When should PVDF be selected over PTFE?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Select PVDF when mechanical strength, abrasion resistance, and weldability are critical, such as for piping systems and structural components, with moderate high-temperature requirements.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the difference between ECTFE (Halar) and ETFE (Tefzel)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ECTFE (Halar) provides excellent chemical resistance and balanced mechanical properties, often used for corrosion protection in harsh chemicals. ETFE (Tefzel) offers higher mechanical toughness, abrasion resistance, and strong electrical properties.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I choose the right fluoropolymer coating for my application?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Define temperature range, chemicals, mechanical loads and abrasion, purity needs, fabrication constraints, and inspection/maintenance conditions. Use the comparison tables and industry recommendations to narrow selection.'
        }
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Fluoropolymer Coating Selection Guide
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Use this engineering guide to compare PTFE, PFA, PVDF, ECTFE (Halar), and ETFE for corrosion protection, chemical resistance, and high-performance industrial applications.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/ptfe" className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">PTFE</Link>
              <Link to="/pfa" className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">PFA</Link>
              <Link to="/pvdf" className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">PVDF</Link>
              <Link to="/halar-ectfe" className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">Halar ECTFE</Link>
              <Link to="/etfe" className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">ETFE (Tefzel)</Link>
            </div>
          </header>
        </FadeIn>

        <section className="space-y-8 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">What Are Fluoropolymer Coatings</h2>
            <p className="text-slate-700 text-lg">
              Fluoropolymers are high-performance materials with strong carbon–fluorine bonds that deliver exceptional chemical inertness, low surface energy (non-stick), electrical insulation, and thermal stability. They are applied as coatings and linings to protect process equipment, tanks, piping, and rotating machinery against corrosion, fouling, and aggressive chemicals.
            </p>
            <p className="text-slate-700">
              Common industrial fluoropolymers include <Link to="/ptfe" className="text-blue-700 hover:text-blue-900">PTFE</Link>, <Link to="/pfa" className="text-blue-700 hover:text-blue-900">PFA</Link>, <Link to="/pvdf" className="text-blue-700 hover:text-blue-900">PVDF</Link>, <Link to="/halar-ectfe" className="text-blue-700 hover:text-blue-900">ECTFE (Halar)</Link>, and <Link to="/etfe" className="text-blue-700 hover:text-blue-900">ETFE (Tefzel)</Link>. Selection depends on temperature, chemical environment, mechanical loads, purity, and fabrication constraints.
            </p>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Temperature Resistance Comparison</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
              <table className="min-w-full text-left text-slate-800">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-3 font-bold">Coating</th>
                    <th className="px-6 py-3 font-bold">Continuous Max (°F)</th>
                    <th className="px-6 py-3 font-bold">Continuous Max (°C)</th>
                    <th className="px-6 py-3 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/ptfe" className="text-blue-700 hover:text-blue-900">PTFE</Link></td>
                    <td className="px-6 py-3">500</td>
                    <td className="px-6 py-3">260</td>
                    <td className="px-6 py-3">Near-universal chemical inertness at high temperatures</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/pfa" className="text-blue-700 hover:text-blue-900">PFA</Link></td>
                    <td className="px-6 py-3">500</td>
                    <td className="px-6 py-3">260</td>
                    <td className="px-6 py-3">High-purity; melt-processable for complex linings</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/pvdf" className="text-blue-700 hover:text-blue-900">PVDF</Link></td>
                    <td className="px-6 py-3">390–400</td>
                    <td className="px-6 py-3">200–205</td>
                    <td className="px-6 py-3">Superior mechanical strength; good for piping</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/halar-ectfe" className="text-blue-700 hover:text-blue-900">ECTFE (Halar)</Link></td>
                    <td className="px-6 py-3">300</td>
                    <td className="px-6 py-3">150</td>
                    <td className="px-6 py-3">Excellent chemical resistance; balanced properties</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3"><Link to="/etfe" className="text-blue-700 hover:text-blue-900">ETFE (Tefzel)</Link></td>
                    <td className="px-6 py-3">300–350</td>
                    <td className="px-6 py-3">150–175</td>
                    <td className="px-6 py-3">High toughness and abrasion resistance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Chemical Resistance Comparison</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
              <table className="min-w-full text-left text-slate-800">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-3 font-bold">Coating</th>
                    <th className="px-6 py-3 font-bold">Overall Resistance</th>
                    <th className="px-6 py-3 font-bold">Typical Strengths</th>
                    <th className="px-6 py-3 font-bold">Limitations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/ptfe" className="text-blue-700 hover:text-blue-900">PTFE</Link></td>
                    <td className="px-6 py-3">Near-universal</td>
                    <td className="px-6 py-3">Strong against acids, bases, solvents; ultra-low surface energy</td>
                    <td className="px-6 py-3">Low mechanical strength; requires careful support</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/pfa" className="text-blue-700 hover:text-blue-900">PFA</Link></td>
                    <td className="px-6 py-3">Near-universal</td>
                    <td className="px-6 py-3">High purity; excellent against strong acids/solvents</td>
                    <td className="px-6 py-3">Lower abrasion resistance vs ETFE/PVDF</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/pvdf" className="text-blue-700 hover:text-blue-900">PVDF</Link></td>
                    <td className="px-6 py-3">Very good</td>
                    <td className="px-6 py-3">Strong vs many acids/solvents; excellent UV stability</td>
                    <td className="px-6 py-3">Lower upper temperature than PTFE/PFA</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/halar-ectfe" className="text-blue-700 hover:text-blue-900">ECTFE (Halar)</Link></td>
                    <td className="px-6 py-3">Excellent</td>
                    <td className="px-6 py-3">Strong vs chlorinated solvents, acids; permeation resistance</td>
                    <td className="px-6 py-3">Lower max temp vs PTFE/PFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3"><Link to="/etfe" className="text-blue-700 hover:text-blue-900">ETFE (Tefzel)</Link></td>
                    <td className="px-6 py-3">Very good</td>
                    <td className="px-6 py-3">Broad chemical compatibility; good dielectric strength</td>
                    <td className="px-6 py-3">Less inert than PTFE/PFA in extreme media</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Mechanical Strength Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'PTFE', link: '/ptfe', rating: 'Low', notes: 'Lowest friction; softer; needs mechanical backing' },
                { name: 'PFA', link: '/pfa', rating: 'Low–Moderate', notes: 'Better than PTFE; still lower abrasion resistance' },
                { name: 'PVDF', link: '/pvdf', rating: 'High', notes: 'High strength and abrasion resistance; weldable' },
                { name: 'ECTFE (Halar)', link: '/halar-ectfe', rating: 'Moderate–High', notes: 'Balanced mechanical toughness and chemical durability' },
                { name: 'ETFE (Tefzel)', link: '/etfe', rating: 'High', notes: 'High impact and abrasion resistance; strong dielectric properties' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <Link to={item.link} className="text-xl font-bold text-slate-900 hover:text-blue-700">{item.name}</Link>
                  <div className="mt-2 text-slate-700"><span className="font-bold">Relative Strength:</span> {item.rating}</div>
                  <div className="mt-1 text-slate-700">{item.notes}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Cost Comparison Overview</h2>
            <p className="text-slate-700">
              Relative cost can vary by region, grade, and application complexity. As a broad directional guide:
            </p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
              <table className="min-w-full text-left text-slate-800">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-3 font-bold">Coating</th>
                    <th className="px-6 py-3 font-bold">Relative Cost</th>
                    <th className="px-6 py-3 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/ptfe" className="text-blue-700 hover:text-blue-900">PTFE</Link></td>
                    <td className="px-6 py-3">High</td>
                    <td className="px-6 py-3">Premium performance; lower mechanical toughness</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/pfa" className="text-blue-700 hover:text-blue-900">PFA</Link></td>
                    <td className="px-6 py-3">High</td>
                    <td className="px-6 py-3">High purity; complex fabrication raises cost</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/pvdf" className="text-blue-700 hover:text-blue-900">PVDF</Link></td>
                    <td className="px-6 py-3">Medium</td>
                    <td className="px-6 py-3">Strong mechanical properties with good chemical resistance</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-3"><Link to="/halar-ectfe" className="text-blue-700 hover:text-blue-900">ECTFE (Halar)</Link></td>
                    <td className="px-6 py-3">Medium–High</td>
                    <td className="px-6 py-3">Excellent corrosion protection; specialized application processes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3"><Link to="/etfe" className="text-blue-700 hover:text-blue-900">ETFE (Tefzel)</Link></td>
                    <td className="px-6 py-3">Medium</td>
                    <td className="px-6 py-3">High toughness and versatile use cases</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Industry-wise Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { industry: 'Chemical Processing', reco: ['ECTFE (Halar)', 'ETFE', 'PTFE'], links: ['/halar-ectfe', '/etfe', '/ptfe'] },
                { industry: 'Pharmaceutical & Biopharma', reco: ['PFA', 'PTFE'], links: ['/pfa', '/ptfe'] },
                { industry: 'Semiconductor', reco: ['PFA', 'PTFE', 'ETFE'], links: ['/pfa', '/ptfe', '/etfe'] },
                { industry: 'Wastewater & Chlor-Alkali', reco: ['ECTFE (Halar)', 'PVDF'], links: ['/halar-ectfe', '/pvdf'] },
                { industry: 'High-Purity Water Systems', reco: ['PVDF', 'PFA'], links: ['/pvdf', '/pfa'] },
                { industry: 'Rotating Machinery & Anti-stick', reco: ['PTFE', 'ETFE'], links: ['/ptfe', '/etfe'] }
              ].map((row, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="text-xl font-bold text-slate-900">{row.industry}</div>
                  <div className="mt-2 text-slate-700">Recommended coatings:</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {row.reco.map((name, i) => (
                      <Link key={i} to={row.links[i]} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 hover:bg-blue-50 hover:text-blue-700">
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">How to Select the Right Coating</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Define continuous and peak temperatures; include thermal cycling.',
                'List all chemicals, concentrations, and exposure durations.',
                'Estimate mechanical loads, impact/abrasion, and required dielectric properties.',
                'Determine purity requirements and extractables constraints.',
                'Assess fabrication geometry, weldability, and surface finish needs.',
                'Consider inspection access, maintenance, and repair approaches.',
                'Validate permeation risk and pressure/temperature safety margins.',
                'Use sample coupons or pilot lining for critical services.'
              ].map((tip, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-700">
                  {tip}
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="space-y-6 mb-24">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">FAQ Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: 'Is PTFE better than PVDF for high temperatures?', a: 'Yes. PTFE supports up to ~260°C, while PVDF is typically limited to ~200°C. Choose PVDF when mechanical strength and abrasion resistance are more critical.' },
                { q: 'When should I choose PFA over PTFE?', a: 'Select PFA when high purity, complex geometry, and melt-processability are required, with temperature capability similar to PTFE.' },
                { q: 'Is ECTFE suitable for aggressive chemical environments?', a: 'Yes. ECTFE (Halar) offers excellent resistance to strong acids and chlorinated solvents with good permeation resistance.' },
                { q: 'Where is ETFE preferred?', a: 'Use ETFE (Tefzel) for high mechanical toughness, abrasion resistance, electrical insulation, and radiation stability.' },
                { q: 'Can fluoropolymer linings be repaired?', a: 'Yes. Many systems can be repaired depending on damage type and access. Consult engineering guidelines and consider sample testing.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="font-bold text-slate-900 mb-2">{item.q}</div>
                  <div className="text-slate-700">{item.a}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </div>
  );
};

export default FluoropolymerGuide;

