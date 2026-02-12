import React, { useState } from 'react';

const AccordionItem = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  return (
    <div className="border border-slate-200 rounded-xl bg-white">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full text-left px-5 py-4 flex items-center justify-between"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-900">{item.q}</span>
        <span className={`ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-slate-700 border-t border-slate-100">
          {item.a}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          item={item}
          index={idx}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default Accordion;

