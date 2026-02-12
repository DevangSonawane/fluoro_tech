import React, { useEffect } from 'react';
import IndustryTemplate from '../IndustryTemplate';

const ChemicalProcessing = () => {
  useEffect(() => {
    document.title = 'Fluoropolymer Coatings for Chemical Processing Industry';
  }, []);

  return (
    <IndustryTemplate
      h1="Fluoropolymer Coatings for Chemical Processing Industry"
      challenges={[
        'Aggressive acids, bases, chlorinated solvents, and oxidizers across varied concentrations',
        'Thermal cycles, steam cleaning, and peak temperatures during upset conditions',
        'Permeation and stress cracking under continuous pressure/temperature exposure',
        'Abrasion and impact in slurry handling, rotating equipment, and solids transfer',
        'Stringent reliability and uptime requirements with limited access for maintenance',
      ]}
      exposure={[
        'Corrosion in storage tanks, reactors, heat exchangers, and transfer lines',
        'Chemical attack at elevated temperatures leading to rapid substrate degradation',
        'Permeation-driven blistering or delamination in long-term service',
        'Erosion from solids/particulates causing premature wear of coating surfaces',
      ]}
      recommendations={[
        { label: 'ECTFE (Halar)', href: '/halar-ectfe' },
        { label: 'ETFE (Tefzel)', href: '/etfe' },
        { label: 'PTFE', href: '/ptfe' },
        { label: 'PFA', href: '/pfa' },
        { label: 'PVDF', href: '/pvdf' },
      ]}
      applications={[
        { title: 'Chemical Storage Tanks', desc: 'Internal linings for corrosive media, minimising permeation and ensuring long service life.' },
        { title: 'Reactors & Vessels', desc: 'High chemical resistance with stable performance under temperature cycles.' },
        { title: 'Heat Exchangers', desc: 'Coatings resisting fouling and chemical attack with good thermal stability.' },
        { title: 'Piping & Fittings', desc: 'Transport of aggressive chemicals with abrasion and permeation considerations.' },
        { title: 'Valve & Pump Components', desc: 'Sealing surfaces and wetted parts protected against chemical attack and wear.' },
        { title: 'Centrifugal Machines', desc: 'ECTFE/ETFE for mechanical durability and chemical resistance in solid-liquid separation.' },
      ]}
      reasons={[
        'Material selection guided by chemical compatibility charts and temperature envelopes',
        'Application processes tailored to substrate, geometry, and required surface finish',
        'Focus on permeation control, thickness specification, and QA inspection criteria',
        'Support for repair strategies and lifecycle maintenance planning',
      ]}
      consultationCtaHref="/contact"
      formHeading="Request Technical Consultation"
    />
  );
};

export default ChemicalProcessing;

