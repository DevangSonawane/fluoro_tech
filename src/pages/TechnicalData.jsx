import React, { useState, useMemo } from 'react';
import chemicalData from '../data/chemical_resistance.json';
import { Search, AlertTriangle } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { SlideUp } from '../components/animations/SlideUp';

const TechnicalData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(20);

  const filteredData = useMemo(() => {
    if (!searchTerm) return chemicalData;
    const lowerTerm = searchTerm.toLowerCase();
    return chemicalData.filter(item => 
      item.chemical.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  const visibleData = useMemo(() => {
    return filteredData.slice(0, displayCount);
  }, [filteredData, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 50, filteredData.length));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Scientific%20research%20laboratory%20with%20glassware%20and%20microscopes%2C%20blue%20lighting%2C%20high%20tech&image_size=landscape_16_9"
            alt="Technical Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
              Chemical Resistance Data
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
              Search our comprehensive database to check compatibility with over 400 chemicals.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <SlideUp className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                  placeholder="Search chemicals (e.g., Acetone)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
                <AlertTriangle className="h-4 w-4" />
                <span>Reference only. Contact us for specific advice.</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Chemical Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Max Temp (°F)
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Max Temp (°C)
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Compatibility
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {visibleData.length > 0 ? (
                  visibleData.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {item.chemical}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {item.max_temp_f}°F
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {item.max_temp_c}°C
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Resistant
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                      No matching chemicals found. Try a different search term.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {filteredData.length > displayCount && (
            <div className="p-4 flex justify-center bg-slate-50 border-t border-slate-200">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all font-medium shadow-sm"
              >
                Load More results ({filteredData.length - displayCount} remaining)
              </button>
            </div>
          )}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Showing {filteredData.length} results
            </p>
          </div>
        </SlideUp>
      </div>
    </div>
  );
};

export default TechnicalData;
