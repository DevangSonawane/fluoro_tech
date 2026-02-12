import React, { useState, useMemo, useEffect } from 'react';
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
import Accordion from '../components/ui/Accordion';

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

  useEffect(() => {
    if (product?.id === 'halar-ectfe') {
      const title = 'Halar® ECTFE Coating (Ethylene Chlorotrifluoroethylene)';
      document.title = title;
      const desc =
        'Fluoro Tech offers high-performance Halar ECTFE coating services in India for chemical tanks, centrifugal machines, semiconductor equipment, and corrosion-resistant industrial applications.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    } else if (product?.id === 'antistatic-halar') {
      const title = 'Antistatic Halar® ECTFE Coating';
      document.title = title;
      const desc =
        'Antistatic Halar® ECTFE is a specialized static-dissipative fluoropolymer coating designed for environments where electrostatic charge buildup can create safety risks. It maintains the full chemical and mechanical performance of standard Halar ECTFE while providing controlled conductivity for hazardous applications.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    } else if (product?.id === 'ptfe') {
      const title = 'PTFE Coating (Polytetrafluoroethylene Fluoropolymer Lining)';
      document.title = title;
      const desc =
        'PTFE provides exceptional chemical inertness, ultra-low friction, and high temperature resistance; ideal for corrosion-resistant, non-stick, and durable industrial applications.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    } else if (product?.id === 'teflon-pfa') {
      const title = 'PFA Coating (Perfluoroalkoxy Fluoropolymer Lining)';
      document.title = title;
      const desc =
        'PFA is a melt-processable fluoropolymer with near-universal chemical resistance, high purity, and excellent flex life—ideal for high-temperature and corrosion-critical environments.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    } else if (product?.id === 'tefzel-etfe') {
      const title = 'Tefzel® ETFE Coating (Ethylene Tetrafluoroethylene Fluoropolymer Lining)';
      document.title = title;
      const desc =
        'Tefzel® ETFE combines superior mechanical toughness with excellent chemical resistance and electrical properties for demanding industrial environments.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    } else if (product?.id === 'pvdf') {
      const title = 'PVDF Coating (Polyvinylidene Fluoride Fluoropolymer Lining)';
      document.title = title;
      const desc =
        'PVDF offers excellent chemical resistance, high mechanical strength, abrasion resistance, and UV stability—ideal for structural and high-purity industrial systems.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    } else if (product?.id === 'fluon-etfe') {
      const title = 'Fluon® ETFE Coating (Ethylene Tetrafluoroethylene Fluoropolymer Lining)';
      document.title = title;
      const desc =
        'Fluon® ETFE is a tough, high-performance fluoropolymer with exceptional heat resistance, chemical durability, electrical insulation, and outdoor weatherability for demanding industrial and structural applications.';
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc);
    }
  }, [product]);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              'name': product?.name,
              'description': product?.description,
              'brand': { '@type': 'Organization', 'name': 'Fluoro Tech Engineering Works' },
              'category': 'Industrial Coatings',
              'material': 'Fluoropolymer',
              'url': `https://fluorotech.in/products/${product?.id}`,
              'image': product?.image,
              'additionalProperty': [
                product?.details?.max_use_temp ? { '@type': 'PropertyValue', 'name': 'Max use temperature', 'value': product.details.max_use_temp } : undefined,
                product?.details?.melting_point ? { '@type': 'PropertyValue', 'name': 'Melting point', 'value': product.details.melting_point } : undefined
              ].filter(Boolean)
            })
          }}
        />

        {/* Hero Banner */}
        <FadeIn>
          <ProductMarqueeBanner productId={product.id} productName={product.name} fallback={product.image} />
        </FadeIn>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <FadeIn>
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6">
                Product Series
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight break-words max-w-[48ch]">
                {product.id === 'halar-ectfe'
                  ? 'Halar® ECTFE Coating (Ethylene Chlorotrifluoroethylene)'
                  : product.id === 'antistatic-halar'
                  ? 'Antistatic Halar® ECTFE Coating'
                  : product.id === 'ptfe'
                  ? 'PTFE Coating (Polytetrafluoroethylene Fluoropolymer Lining)'
                  : product.id === 'teflon-pfa'
                  ? 'PFA Coating (Perfluoroalkoxy Fluoropolymer Lining)'
                  : product.id === 'tefzel-etfe'
                  ? 'Tefzel® ETFE Coating (Ethylene Tetrafluoroethylene Fluoropolymer Lining)'
                  : product.id === 'pvdf'
                  ? 'PVDF Coating (Polyvinylidene Fluoride Fluoropolymer Lining)'
                  : product.id === 'fluon-etfe'
                  ? 'Fluon® ETFE Coating (Ethylene Tetrafluoroethylene Fluoropolymer Lining)'
                  : product.name}
              </h1>
              {product.id === 'halar-ectfe' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    Halar® ECTFE (Ethylene Chlorotrifluoroethylene) is a high-performance fluoropolymer coating engineered for extreme chemical resistance, long-term corrosion protection, and demanding industrial environments.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It is an alternating copolymer of ethylene and chlorotrifluoroethylene, offering a unique balance of chemical resistance, mechanical strength, electrical insulation, and weather stability.
                  </p>
                </>
              ) : product.id === 'antistatic-halar' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    Antistatic Halar® ECTFE is a specialized static-dissipative fluoropolymer coating designed for environments where electrostatic charge buildup can create safety risks.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It maintains the full chemical and mechanical performance of standard Halar ECTFE while providing controlled conductivity for hazardous applications.
                  </p>
                </>
              ) : product.id === 'ptfe' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    PTFE (Polytetrafluoroethylene) is a high-performance fluoropolymer known for its exceptional chemical inertness, ultra-low friction properties, and high temperature resistance.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It is widely used in demanding industrial applications requiring corrosion resistance, non-stick performance, and long-term durability under extreme thermal conditions.
                  </p>
                </>
              ) : product.id === 'teflon-pfa' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    PFA (Perfluoroalkoxy) is a high-performance melt-processable fluoropolymer offering chemical resistance comparable to PTFE with improved flexibility and fabrication capability.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It is widely used in high-purity, high-temperature, and corrosion-critical industrial environments.
                  </p>
                </>
              ) : product.id === 'tefzel-etfe' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    Tefzel® ETFE (Ethylene Tetrafluoroethylene) is a high-performance fluoropolymer combining superior mechanical toughness with excellent chemical resistance and electrical properties.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It is widely used in demanding industrial environments where abrasion resistance, impact strength, and long-term chemical durability are required.
                  </p>
                </>
              ) : product.id === 'pvdf' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    PVDF (Polyvinylidene Fluoride) is a high-performance thermoplastic fluoropolymer known for its excellent chemical resistance, high mechanical strength, and long-term durability.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It is widely used in chemical processing, high-purity systems, and industrial applications requiring abrasion resistance and structural integrity.
                  </p>
                </>
              ) : product.id === 'fluon-etfe' ? (
                <>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    Fluon® ETFE (Ethylene Tetrafluoroethylene) is a high-performance fluoropolymer known for its exceptional heat resistance, chemical durability, and electrical insulation properties.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    It is a tough, impact-resistant material designed for demanding industrial and structural applications requiring long-term performance.
                  </p>
                </>
              ) : (
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              )}
              
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
                    {(product.id === 'antistatic-halar'
                      ? [
                          'Static dissipative surface',
                          'Reduces electrostatic charge accumulation',
                          'Maintains excellent chemical resistance',
                          'High impact strength',
                          'Durable and smooth finish',
                          'Suitable for hazardous and explosive zones',
                        ]
                      : product.id === 'ptfe'
                      ? [
                          'Outstanding chemical inertness',
                          'Excellent resistance to acids, alkalis, and solvents',
                          'Extremely low friction surface',
                          'Superior non-stick performance',
                          'High temperature resistance (up to 260°C continuous use)',
                          'Excellent electrical insulation properties',
                          'Resistant to stress cracking',
                        ]
                      : product.id === 'teflon-pfa'
                      ? [
                          'Melt-processable fluoropolymer',
                          'Near-universal chemical resistance',
                          'Excellent flex life',
                          'High purity and low extractables',
                          'Smooth, non-stick surface',
                          'High temperature stability (up to 260°C)',
                          'Excellent dielectric properties',
                        ]
                      : product.id === 'tefzel-etfe'
                      ? [
                          'Superior mechanical toughness',
                          'High abrasion and impact resistance',
                          'Excellent resistance to acids and solvents',
                          'Strong dielectric properties',
                          'Good radiation resistance',
                          'Weather and UV stability',
                          'Low permeability to gases',
                        ]
                      : product.id === 'pvdf'
                      ? [
                          'High mechanical strength',
                          'Excellent abrasion resistance',
                          'Strong resistance to acids, bases, and solvents',
                          'UV and radiation stability',
                          'Good impact resistance',
                          'High dielectric performance',
                          'Easy fabrication and weldability',
                        ]
                      : product.id === 'fluon-etfe'
                      ? [
                          'High heat resistance',
                          'Excellent resistance to acids and solvents',
                          'Superior electrical insulation',
                          'Outstanding weatherability and UV stability',
                          'High impact and abrasion resistance',
                          'Smooth, low-friction surface',
                        ]
                      : product.features
                    ).map((feature, idx) => (
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
                    {(product.id === 'antistatic-halar'
                      ? [
                          'Solvent handling equipment',
                          'Flammable liquid storage systems',
                          'Powder coating systems',
                          'Chemical processing equipment',
                          'Electronic component handling areas',
                          'ATEX-sensitive environments',
                        ]
                      : product.id === 'ptfe'
                      ? [
                          'Chemical valve linings',
                          'Pump components and impellers',
                          'High-performance seals and gaskets',
                          'Reactor vessels',
                          'Heat exchangers',
                          'Electrical insulation components',
                          'Anti-stick process equipment',
                        ]
                      : product.id === 'teflon-pfa'
                      ? [
                          'Pharmaceutical process vessels',
                          'Biopharmaceutical equipment',
                          'Semiconductor fluid handling systems',
                          'High-purity chemical storage tanks',
                          'Heat exchangers',
                          'Reactor vessels',
                          'Ultra-clean piping systems',
                        ]
                      : product.id === 'tefzel-etfe'
                      ? [
                          'Chemical processing pumps and components',
                          'Wire and cable insulation',
                          'Semiconductor systems',
                          'Nuclear industry components',
                          'Architectural membrane structures',
                          'Corrosion-resistant linings for aggressive chemicals',
                        ]
                      : product.id === 'pvdf'
                      ? [
                          'Chemical piping systems',
                          'High-purity water treatment systems',
                          'Semiconductor utilities',
                          'Battery and lithium-ion components',
                          'Architectural protective coatings',
                          'Pump and valve components',
                        ]
                      : product.id === 'fluon-etfe'
                      ? [
                          'Chemical processing linings',
                          'Wire and cable insulation',
                          'Solar panel and photovoltaic protection',
                          'Greenhouse and architectural films',
                          'Pump and valve components',
                          'Structural protective coatings',
                        ]
                      : product.applications
                    ).map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          </FadeIn>
        </div>

        {product.id === 'halar-ectfe' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is Halar ECTFE?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  Halar ECTFE is an alternating copolymer of ethylene and chlorotrifluoroethylene. It offers a unique combination of:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Excellent chemical resistance',
                    'Broad temperature range',
                    'High dielectric strength',
                    'Outstanding weatherability',
                    'Superior mechanical toughness',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-slate-600">
                  This makes it ideal for harsh industrial applications.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">1.68 – 1.69 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">460 – 464°F</span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">300°F</span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Dielectric Strength
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Excellent</span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Layers className="w-3 h-3" /> Surface Finish
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Smooth, non-stick</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Key Benefits of Halar Coating</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Exceptional resistance to acids and solvents',
                    'Long service life in corrosive environments',
                    'High impact and abrasion resistance',
                    'Suitable for cleanroom applications',
                    'Excellent electrical insulation',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Industrial Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Chemical storage tanks',
                    'Centrifugal machines',
                    'Semiconductor process equipment',
                    'Cleanroom exhaust systems',
                    'Industrial pipelines',
                    'Protective linings for reactors',
                  ].map((app, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Why Choose Fluoro Tech for Halar Coating?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Precision application',
                    'Uniform thickness control',
                    'Strict quality inspection',
                    'Reliable turnaround time',
                    'Competitive pricing',
                    'Located in Vasai, Maharashtra; serving clients across India',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

           
          </div>
        )}

        {product.id === 'antistatic-halar' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is Antistatic Halar ECTFE?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  Antistatic Halar is an alternating copolymer of ethylene and chlorotrifluoroethylene modified to provide static dissipative properties while retaining:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    'High chemical resistance',
                    'Impact strength',
                    'Thermal stability',
                    'Corrosion protection',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-slate-600">
                  It is specifically used in environments where flammable vapors, explosive dust, or solvent handling operations require electrostatic discharge control.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Properties</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">1.68 – 1.69 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">460 – 464°F <span className="text-sm text-slate-400">(238 – 240°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">300°F <span className="text-sm text-slate-400">(150°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Surface Resistivity
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Static dissipative grade</span>
                    <span className="text-sm text-slate-500">Customized per application</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Key Features of Antistatic Halar</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Static dissipative surface properties',
                    'Reduces electrostatic charge buildup',
                    'Excellent resistance to acids, alkalis, and solvents',
                    'High mechanical strength and abrasion resistance',
                    'Smooth, durable finish',
                    'Suitable for hazardous zones and ATEX-sensitive environments',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Industrial Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Solvent handling equipment',
                    'Flammable liquid storage tanks',
                    'Powder transfer and coating systems',
                    'Chemical processing vessels',
                    'Semiconductor exhaust systems',
                    'Electronic component handling environments',
                    'Explosion-prone industrial zones',
                  ].map((app, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Why Choose Fluoro Tech for Antistatic Halar Coating?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Precision application',
                    'Uniform thickness control',
                    'Strict quality inspection',
                    'Reliable turnaround time',
                    'Competitive pricing',
                    'Located in Vasai, Maharashtra; serving clients across India',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {product.id === 'ptfe' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is PTFE?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  PTFE is a fully fluorinated polymer composed of carbon and fluorine atoms, providing one of the highest levels of chemical resistance available among industrial polymers.
                </p>
                <p className="text-slate-700 text-lg mb-4">
                  Due to its strong molecular bonds, PTFE offers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {[
                    'Near-universal chemical resistance',
                    'Extremely low coefficient of friction',
                    'Excellent dielectric properties',
                    'High thermal stability',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Properties</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">2.13 – 2.20 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">621°F <span className="text-sm text-slate-400">(327°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">500°F <span className="text-sm text-slate-400">(260°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Coefficient of Friction
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Among the lowest</span>
                    <span className="text-sm text-slate-500">Solid materials</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Why Choose PTFE Coating?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Highest temperature capability among fluoropolymers',
                    'Near-universal chemical resistance',
                    'Lowest friction surface available',
                    'Long service life in aggressive environments',
                    'Reduced maintenance and downtime',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Industrial Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Chemical valve linings',
                    'Pump components and impellers',
                    'High-performance seals and gaskets',
                    'Reactor vessels',
                    'Heat exchangers',
                    'Electrical insulation components',
                    'Anti-stick process equipment',
                  ].map((app, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

           
          </div>
        )}

        {product.id === 'teflon-pfa' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is PFA?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  PFA is a fully fluorinated thermoplastic fluoropolymer that combines:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {[
                    'Near-universal chemical resistance',
                    'High temperature capability',
                    'Superior purity levels',
                    'Excellent flex life',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-slate-600">
                  Unlike PTFE, PFA is melt-processable, making it suitable for complex linings and precision applications requiring smooth, defect-free finishes.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Properties</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">2.12 – 2.17 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">575 – 590°F <span className="text-sm text-slate-400">(302 – 310°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">500°F <span className="text-sm text-slate-400">(260°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Purity Level
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">High-purity grade</span>
                    <span className="text-sm text-slate-500">Semiconductor and pharma</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Why Choose PFA Coating?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Similar chemical resistance to PTFE',
                    'Better processability and fabrication flexibility',
                    'Higher purity for critical industries',
                    'Smooth, pinhole-free lining capability',
                    'Excellent performance in high-temperature environments',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">PFA vs PTFE – Quick Comparison</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { p: 'Melt Processable', pfa: 'Yes', ptfe: 'No' },
                    { p: 'Temperature Resistance', pfa: 'Up to 260°C', ptfe: 'Up to 260°C' },
                    { p: 'Chemical Resistance', pfa: 'Near universal', ptfe: 'Near universal' },
                    { p: 'Flex Life', pfa: 'Excellent', ptfe: 'Moderate' },
                    { p: 'Surface Finish', pfa: 'Smooth, uniform', ptfe: 'Slightly less uniform' },
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 items-center bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="p-4 text-slate-700 font-semibold">{row.p}</div>
                      <div className="p-4 text-slate-900">{row.pfa}</div>
                      <div className="p-4 text-slate-900">{row.ptfe}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-slate-600">
                  PFA is typically selected for high-purity or complex lining applications.
                </div>
              </div>
            </FadeIn>

           
          </div>
        )}

        {product.id === 'pvdf' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is PVDF?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  PVDF is a partially fluorinated polymer offering a strong balance between:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {[
                    'Chemical resistance',
                    'Mechanical strength',
                    'Abrasion resistance',
                    'Thermal stability',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-slate-600">
                  Compared to fully fluorinated polymers like PTFE and PFA, PVDF provides superior structural rigidity while maintaining excellent corrosion resistance.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Properties</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">2.11 – 2.15 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">410 – 420°F <span className="text-sm text-slate-400">(210 – 215°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">390 – 400°F <span className="text-sm text-slate-400">(≈200°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Dielectric Strength
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">High</span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> UV Stability
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Excellent</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Why Choose PVDF Coating?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Higher mechanical strength than PTFE',
                    'Better abrasion resistance',
                    'Easier fabrication and welding',
                    'Good balance of cost and performance',
                    'Suitable for structural and piping applications',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">PVDF vs PTFE – Quick Comparison</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { p: 'Mechanical Strength', pvdf: 'Higher', ptfe: 'Moderate' },
                    { p: 'Abrasion Resistance', pvdf: 'Excellent', ptfe: 'Lower' },
                    { p: 'Temperature Resistance', pvdf: 'Up to 200°C', ptfe: 'Up to 260°C' },
                    { p: 'Chemical Resistance', pvdf: 'Excellent', ptfe: 'Near universal' },
                    { p: 'Fabrication', pvdf: 'Easy', ptfe: 'Difficult' },
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 items-center bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="p-4 text-slate-700 font-semibold">{row.p}</div>
                      <div className="p-4 text-slate-900">{row.pvdf}</div>
                      <div className="p-4 text-slate-900">{row.ptfe}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-slate-600">
                  PVDF is often selected when structural rigidity and abrasion resistance are required.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Industrial Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Chemical piping systems',
                    'High-purity water treatment systems',
                    'Semiconductor utilities',
                    'Battery and lithium-ion components',
                    'Architectural protective coatings',
                    'Pump and valve components',
                  ].map((app, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

           
          </div>
        )}

        {product.id === 'tefzel-etfe' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is ETFE (Tefzel®)?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  ETFE is a partially fluorinated copolymer designed to offer:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {[
                    'Higher mechanical strength than PTFE',
                    'Better abrasion resistance',
                    'Excellent dielectric performance',
                    'Strong resistance to radiation exposure',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-slate-600">
                  It provides a balance between toughness and chemical inertness, making it suitable for both structural and corrosion-resistant applications.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Properties</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">~1.7 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">520°F <span className="text-sm text-slate-400">(271°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">300–350°F <span className="text-sm text-slate-400">(150–175°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Dielectric Strength
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Excellent</span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Radiation Resistance
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">High</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Why Choose ETFE Coating?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Stronger and tougher than PTFE',
                    'Better abrasion resistance than many fluoropolymers',
                    'Good balance between chemical resistance and mechanical durability',
                    'Suitable for both structural and corrosion applications',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">ETFE vs PTFE – Quick Comparison</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { p: 'Mechanical Strength', etfe: 'Higher', ptfe: 'Moderate' },
                    { p: 'Abrasion Resistance', etfe: 'High', ptfe: 'Lower' },
                    { p: 'Temperature Resistance', etfe: 'Up to 175°C', ptfe: 'Up to 260°C' },
                    { p: 'Chemical Resistance', etfe: 'Excellent', ptfe: 'Near universal' },
                    { p: 'Flexibility', etfe: 'Good', ptfe: 'Excellent' },
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 items-center bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="p-4 text-slate-700 font-semibold">{row.p}</div>
                      <div className="p-4 text-slate-900">{row.etfe}</div>
                      <div className="p-4 text-slate-900">{row.ptfe}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-slate-600">
                  Selection depends on mechanical load, temperature range, and chemical environment.
                </div>
              </div>
            </FadeIn>

           
          </div>
        )}

        {product.id === 'fluon-etfe' && (
          <div className="space-y-12 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">What is ETFE (Fluon®)?</h2>
                <p className="text-slate-700 text-lg mb-6">
                  ETFE is a partially fluorinated thermoplastic that offers a balance of:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {[
                    'Mechanical toughness',
                    'Chemical resistance',
                    'High dielectric strength',
                    'Weather and UV stability',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-slate-600">
                  It provides superior structural durability compared to many conventional fluoropolymers while maintaining strong corrosion resistance.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Technical Properties</h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Scale className="w-3 h-3" /> Density
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">~1.7 <span className="text-sm text-slate-400 font-sans font-normal">g/cm³</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Melting Point
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">520°F <span className="text-sm text-slate-400">(271°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Thermometer className="w-3 h-3" /> Max Service Temp
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">300–350°F <span className="text-sm text-slate-400">(150–175°C)</span></span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Dielectric Strength
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Excellent</span>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Weatherability
                    </span>
                    <span className="text-2xl font-mono font-bold text-slate-900">Outstanding</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Why Choose ETFE Coating?</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Higher mechanical strength than PTFE',
                    'Better abrasion resistance',
                    'Excellent outdoor weather durability',
                    'Strong electrical insulation properties',
                    'Good balance of chemical resistance and toughness',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

           
          </div>
        )}

        

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
                                {product.id === 'antistatic-halar' && (
                                  <div className="mt-6 space-y-4">
                                    <h3 className="text-lg font-bold text-white/90">Chemical Resistance</h3>
                                    <p className="text-slate-300">
                                      Antistatic Halar ECTFE retains the broad chemical compatibility of standard Halar, covering 600+ chemicals including:
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                      {['Acetone','Acetic Acid','Acetonitrile','Industrial solvents'].map((chem, idx) => (
                                        <span key={idx} className="px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 text-white text-sm">
                                          {chem}
                                        </span>
                                      ))}
                                    </div>
                                    <p className="text-slate-300">
                                      Compatibility Ratings: A – Excellent · B – Good · C – Fair · NR – Not Recommended
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                      Refer to technical documentation for detailed chemical resistance data.
                                    </p>
                                  </div>
                                )}
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
        
        <FadeIn delay={0.5}>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mt-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
            <Accordion
              items={
                (product.id === 'ptfe'
                  ? [
                      { q: 'Where is PTFE preferred?', a: 'Corrosive environments requiring non-stick and ultra-low friction with continuous service up to ~260°C.' },
                      { q: 'Is PTFE suitable for sliding surfaces?', a: 'Yes. PTFE has extremely low friction and is ideal for anti-stick, seals, and sliding applications.' },
                      { q: 'How does PTFE compare with ECTFE?', a: 'PTFE has higher temperature resistance; ECTFE offers greater mechanical toughness and abrasion resistance.' },
                      { q: 'Can PTFE be used for electrical insulation?', a: 'Yes. PTFE provides excellent dielectric properties in demanding conditions.' },
                      { q: 'Is PTFE universally chemically resistant?', a: 'PTFE shows near-universal chemical inertness for common industrial acids, bases, and solvents.' },
                    ]
                  : product.id === 'teflon-pfa'
                  ? [
                      { q: 'Why choose PFA over PTFE?', a: 'Choose PFA for melt-processability, high purity, and complex lining geometry while retaining PTFE-like resistance.' },
                      { q: 'Is PFA suitable for high-purity systems?', a: 'Yes. PFA is widely used in semiconductor and pharmaceutical applications due to low extractables.' },
                      { q: 'What is PFA’s temperature capability?', a: 'PFA supports continuous service up to ~260°C, similar to PTFE.' },
                      { q: 'How is surface finish with PFA?', a: 'PFA provides smooth internal finishes, aiding cleanability and reduced fouling.' },
                      { q: 'Does PFA resist aggressive chemicals?', a: 'Yes. PFA exhibits near-universal resistance to acids, bases, and solvents.' },
                    ]
                  : product.id === 'pvdf'
                  ? [
                      { q: 'When select PVDF over PTFE?', a: 'Select PVDF when mechanical strength, abrasion resistance, weldability, and UV stability are critical.' },
                      { q: 'Is PVDF suitable for outdoor exposure?', a: 'Yes. PVDF has excellent UV stability and is used in architectural applications.' },
                      { q: 'What is PVDF’s temperature range?', a: 'PVDF typically supports ~200°C continuous service depending on conditions.' },
                      { q: 'Can PVDF be fabricated or welded?', a: 'Yes. PVDF is weldable and commonly used in piping systems.' },
                      { q: 'How does PVDF’s chemical resistance compare?', a: 'Very good across many acids and solvents, though upper temperature is lower than PTFE/PFA.' },
                    ]
                  : product.id === 'tefzel-etfe'
                  ? [
                      { q: 'Where is ETFE preferred?', a: 'Use ETFE for high mechanical toughness, abrasion resistance, dielectric strength, and radiation stability.' },
                      { q: 'How does ETFE compare to PTFE?', a: 'ETFE has greater toughness and abrasion resistance; PTFE has higher temperature resistance.' },
                      { q: 'Is ETFE chemically resistant?', a: 'Yes. ETFE covers a broad range of acids and solvents with good durability.' },
                      { q: 'Is ETFE suitable for high-radiation environments?', a: 'Yes. ETFE has strong resistance to radiation and is used in specialized industries.' },
                      { q: 'What is ETFE’s temperature capability?', a: 'ETFE typically supports 150–175°C continuous service depending on application.' },
                    ]
                  : product.id === 'halar-ectfe'
                  ? [
                      { q: 'Where is ECTFE preferred?', a: 'Aggressive chemical environments needing permeation resistance, balanced mechanical properties, and reliable corrosion protection.' },
                      { q: 'Is ECTFE suitable for chlorinated solvents?', a: 'Yes. ECTFE offers excellent resistance to chlorinated solvents and many industrial chemicals.' },
                      { q: 'What is ECTFE’s temperature envelope?', a: 'ECTFE typically supports continuous service up to ~150°C.' },
                      { q: 'Does ECTFE have good dielectric properties?', a: 'Yes. ECTFE provides strong electrical insulation characteristics.' },
                      { q: 'Can ECTFE be used in clean environments?', a: 'Yes. ECTFE’s smooth finish and chemical durability suit cleanroom and process equipment.' },
                    ]
                  : product.id === 'fluon-etfe'
                  ? [
                      { q: 'What are Fluon ETFE’s strengths?', a: 'Heat resistance, chemical durability, electrical insulation, weatherability, and mechanical toughness.' },
                      { q: 'Is Fluon ETFE suitable outdoors?', a: 'Yes. It offers excellent UV and weather stability for architectural and solar uses.' },
                      { q: 'How does Fluon ETFE compare to PTFE?', a: 'Higher mechanical toughness than PTFE, with lower upper temperature capability.' },
                      { q: 'Is Fluon ETFE resistant to acids and solvents?', a: 'Yes. Broad resistance suitable for many industrial environments.' },
                      { q: 'Where to use Fluon ETFE?', a: 'Chemical linings, wire insulation, photovoltaic protection, greenhouse films, and structural coatings.' },
                    ]
                  : [
                      { q: 'What are typical use cases?', a: 'Industrial linings, corrosion protection, and high-performance applications involving aggressive chemicals.' },
                      { q: 'How do I select the right coating?', a: 'Define chemicals, temperatures, mechanical loads, purity needs, and fabrication constraints; then compare PTFE/PFA/PVDF/ECTFE/ETFE.' },
                      { q: 'Is repair feasible?', a: 'Many systems can be repaired depending on damage type and access; evaluate case-by-case.' },
                      { q: 'Do coatings affect cleanliness?', a: 'Smooth fluoropolymer finishes generally reduce fouling and support cleanability.' },
                      { q: 'Is electrical insulation supported?', a: 'Most fluoropolymers provide strong dielectric properties for industrial components.' },
                    ])
              }
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ProductDetail;
