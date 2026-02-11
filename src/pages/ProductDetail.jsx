import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { List } from 'react-window';
import { AutoSizer } from 'react-virtualized-auto-sizer';
import { 
  Search,
  ArrowLeft,Thermometer, 
  Scale, 
  Droplets, 
  Shield, 
  Check, 
  Layers, 
  CheckCircle, 
  AlertTriangle, 
  XCircle 
} from 'lucide-react';
import products from '../data/products.json';
import chemicalData from '../data/chemical_resistance_full.json';
import { FadeIn } from '../components/animations/FadeIn';
import ProductMarqueeBanner from '../components/ProductMarqueeBanner';

const getRatingColor = (rating) => {
    if (!rating || typeof rating !== 'string') return 'text-gray-400';
    if (rating.startsWith('A')) return 'text-green-600 bg-green-50 border-green-100';
    if (rating.startsWith('B')) return 'text-yellow-600 bg-yellow-50 border-yellow-100';
    if (rating.startsWith('C')) return 'text-orange-600 bg-orange-50 border-orange-100';
    if (rating.includes('NR')) return 'text-red-600 bg-red-50 border-red-100';
    return 'text-gray-500 bg-gray-50 border-gray-100';
};

const getRatingIcon = (rating) => {
    if (!rating || typeof rating !== 'string') return <AlertTriangle className="w-4 h-4" />;
    if (rating.startsWith('A')) return <CheckCircle className="w-4 h-4" />;
    if (rating.startsWith('B')) return <CheckCircle className="w-4 h-4" />;
    if (rating.startsWith('C')) return <AlertTriangle className="w-4 h-4" />;
    if (rating.includes('NR')) return <XCircle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
};

const Row = (props) => {
    const { index, style, data } = props;
    const chemicals = props.chemicals || data?.chemicals;
    const resistanceId = props.resistanceId || data?.resistanceId;

    // console.log('Row rendering:', index, chemicals?.length, resistanceId);
    if (!chemicals || !chemicals[index]) {
        console.warn('Row missing data:', index);
        return <div style={style}>Row {index} - Missing Data</div>;
    }
    const chem = chemicals[index];
    
    let rating = 'N/A';
    if (resistanceId !== undefined && resistanceId !== null && chem?.ratings) {
         rating = chem.ratings[resistanceId];
         if (typeof rating !== 'string') rating = 'N/A';
    }
    
    return (
      <div style={style}>
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center h-full">
            <div className="col-span-8 md:col-span-9 font-medium text-slate-700 truncate pr-4">
                {chem.name}
            </div>
            <div className="col-span-4 md:col-span-3 flex justify-center">
                <span className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold w-full md:w-auto justify-center ${getRatingColor(rating)}`}>
                    {getRatingIcon(rating)}
                    {rating}
                </span>
            </div>
        </div>
      </div>
    );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const product = products.find(p => p.id === id);
  const resistanceId = product?.details?.chemical_resistance_id;

  const filteredChemicals = useMemo(() => {
    if (resistanceId === undefined || resistanceId === null) return [];
    
    if (!chemicalData || !chemicalData.chemicals) {
      return [];
    }

    try {
        let results = chemicalData.chemicals;
        
        console.log('ProductDetail: Filtering chemicals. Search:', searchTerm, 'Total:', results?.length);

        if (searchTerm) {
           results = results.filter(chem => 
             chem.name && typeof chem.name === 'string' && chem.name.toLowerCase().includes(searchTerm.toLowerCase())
           );
        }
        
        console.log('ProductDetail: Filtered count:', results.length);
        return results; 
    } catch (e) {
        console.error("Error filtering chemicals", e);
        return [];
    }
  }, [searchTerm, resistanceId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  // console.log('ProductDetail: Rendering. resistanceId:', resistanceId, 'filteredChemicals:', filteredChemicals?.length);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Hero Banner */}
        <FadeIn>
          <ProductMarqueeBanner productId={product.id} productName={product.name} fallback={product.image} />
        </FadeIn>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <FadeIn>
            <div className="relative">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6">
                Product Series
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                 {product.details && (
                    <>
                        <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Scale className="w-3 h-3" /> Density
                            </span>
                            <span className="text-2xl font-mono font-bold text-slate-900">{product.details.density} <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Thermometer className="w-3 h-3" /> Melting Point
                            </span>
                            <span className="text-2xl font-mono font-bold text-slate-900">{product.details.melting_point}</span>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Thermometer className="w-3 h-3" /> Max Temp
                            </span>
                            <span className="text-2xl font-mono font-bold text-slate-900">{product.details.max_use_temp}</span>
                        </div>
                    </>
                 )}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
               <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Key Features
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </span>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Ideal Applications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          </FadeIn>
        </div>

        

        {/* Chemical Resistance Section */}
        {resistanceId !== undefined && resistanceId !== null && (
            <FadeIn delay={0.4}>
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 bg-slate-900 text-white">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
                                    <Droplets className="w-8 h-8 text-blue-400" />
                                    Chemical Resistance Guide
                                </h2>
                                <p className="text-slate-400 max-w-2xl text-lg">
                                    Search our comprehensive database to check {product.name}'s compatibility with over 600 chemicals.
                                </p>
                            </div>
                            
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input 
                                  type="text" 
                                  placeholder="Search chemicals..."
                                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all backdrop-blur-sm"
                                  value={searchTerm}
                                  onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-50 min-h-[600px]">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[600px] flex flex-col">
                            <div className="grid grid-cols-12 gap-4 p-4 bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider flex-none z-10">
                                <div className="col-span-8 md:col-span-9">Chemical Name</div>
                                <div className="col-span-4 md:col-span-3 text-center">Compatibility Rating</div>
                            </div>
                            
                            <div className="text-xs text-slate-400 px-4 py-2 bg-slate-50 border-b border-slate-100 flex-none">
                                Results: {filteredChemicals.length} chemicals found
                            </div>

                            <div className="flex-1 w-full relative" style={{ minHeight: 0 }}>
                                {filteredChemicals.length > 0 ? (
                                    <AutoSizer className="w-full h-full" renderProp={({ height, width }) => (
                                        <List
                                            style={{ height, width }}
                                            rowCount={filteredChemicals.length}
                                            rowHeight={72}
                                            rowComponent={Row}
                                            rowProps={{ chemicals: filteredChemicals, resistanceId }}
                                        />
                                    )} />
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-slate-400">
                                        <Search className="w-12 h-12 mb-4 opacity-20" />
                                        <p>No chemicals found matching "{searchTerm}"</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-green-900">A: Excellent</div>
                                    <div className="text-xs text-green-700">No effect</div>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-yellow-900">B: Good</div>
                                    <div className="text-xs text-yellow-700">Minor effect</div>
                                </div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-orange-900">C: Fair</div>
                                    <div className="text-xs text-orange-700">Moderate effect</div>
                                </div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                    <XCircle className="w-4 h-4 text-red-600" />
                                </div>
                                <div>
                                    <div className="font-bold text-red-900">NR: Not Rec.</div>
                                    <div className="text-xs text-red-700">Severe effect</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
