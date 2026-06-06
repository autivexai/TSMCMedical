import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Shield, Clock, Settings, ChevronLeft, ChevronRight, AlertTriangle, Microscope, Clipboard, Server, X, Award, Users, Zap } from 'lucide-react';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const product = products.find(p => p.slug === slug);
  const productImages = product?.images || [product?.image || ''];

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const previousImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          setLightboxOpen(false);
          break;
        case 'ArrowLeft':
          previousImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  useEffect(() => {
    if (lightboxOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = 'auto';
      document.body.style.top = 'auto';
      window.scrollTo(0, scrollPosition);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = 'auto';
      document.body.style.top = 'auto';
    };
  }, [lightboxOpen, scrollPosition]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/tsmc"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get available tabs based on product data
  const getAvailableTabs = () => {
    const tabs = [
      { id: 'overview', label: 'Overview', icon: Microscope, show: true },
      { id: 'features', label: 'Features', icon: Zap, show: product.features?.length > 0 },
      { id: 'clinical', label: 'Clinical Info', icon: AlertTriangle, show: product.clinicalInfo !== undefined },
      { id: 'specs', label: 'Technical Specs', icon: Server, show: product.specifications || product.technicalSpecs || product.modelInfo },
      { id: 'certifications', label: 'Certifications', icon: Award, show: product.certifications?.length > 0 }
    ];
    return tabs.filter(tab => tab.show);
  };

  // Helper function to render performance metric values
  const renderPerformanceValue = (value: any) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div className="space-y-2">
          {Object.entries(value).map(([subKey, subValue]) => (
            <div key={subKey} className="text-right">
              <span className="font-medium">{subKey}:</span> {subValue}
            </div>
          ))}
        </div>
      );
    }
    return value;
  };

  return (
    <div className="bg-gray-50">
      <div ref={topRef} />
      
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/tsmc')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      {/* Product Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={productImages[currentImageIndex]}
                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-105"
                    onClick={() => setLightboxOpen(true)}
                  />
                </motion.div>
              </AnimatePresence>
              
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full z-10">
              {product.category}
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-700">
                <Shield className="h-6 w-6 mr-2 text-indigo-600" />
                <span>Certified Medical Equipment</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-6 w-6 mr-2 text-indigo-600" />
                <span>Fast Shipping Available</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Settings className="h-6 w-6 mr-2 text-indigo-600" />
                <span>Technical Support Included</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact?service=medical"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6 mr-2" />
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10000]"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={productImages[currentImageIndex]}
                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                    className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>

                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-8 w-8 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-8 w-8 text-white" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {getAvailableTabs().map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center px-6 py-3 rounded-lg transition-colors ${
                  activeTab === id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Overview Tab */}
            <div className={activeTab === 'overview' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <p className="text-gray-600 mb-8">{product.overview}</p>

              {product.testAdvantages && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Test Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.testAdvantages).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                        <dt className="font-medium text-gray-600">{key}</dt>
                        <dd className="text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.packageContents && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Package Contents</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {product.packageContents.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Features Tab */}
            <div className={activeTab === 'features' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features?.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Zap className="h-5 w-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Information Tab */}
            <div className={activeTab === 'clinical' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinical Information</h2>
              
              {product.clinicalInfo && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Impact</h3>
                    <p className="text-gray-600">{product.clinicalInfo.globalImpact}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Consequences</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {product.clinicalInfo.consequences?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Challenges</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {product.clinicalInfo.challenges?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {product.clinicalInfo.diseaseProfiles && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Disease Profiles</h3>
                      <div className="space-y-6">
                        {Object.entries(product.clinicalInfo.diseaseProfiles).map(([key, profile]) => (
                          <div key={key} className="bg-gray-50 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">{profile.name}</h4>
                            <div className="space-y-4">
                              {profile.symptoms.men && (
                                <div>
                                  <h5 className="font-medium text-gray-900 mb-2">Male Symptoms:</h5>
                                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                                    {profile.symptoms.men.map((symptom, index) => (
                                      <li key={index}>{symptom}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {profile.symptoms.women && (
                                <div>
                                  <h5 className="font-medium text-gray-900 mb-2">Female Symptoms:</h5>
                                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                                    {profile.symptoms.women.map((symptom, index) => (
                                      <li key={index}>{symptom}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {profile.symptoms.general && (
                                <div>
                                  <h5 className="font-medium text-gray-900 mb-2">General Symptoms:</h5>
                                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                                    {profile.symptoms.general.map((symptom, index) => (
                                      <li key={index}>{symptom}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Technical Specifications Tab */}
            <div className={activeTab === 'specs' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              
              {product.specifications && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">General Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 pb-4">
                        <dt className="font-medium text-gray-600">{key}</dt>
                        <dd className="text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.storage && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage Requirements</h3>
                  <p className="text-gray-600">{product.storage}</p>
                </div>
              )}

              {product.shelfLife && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Shelf Life</h3>
                  <p className="text-gray-600">{product.shelfLife}</p>
                </div>
              )}
            </div>

            {/* Certifications Tab */}
            <div className={activeTab === 'certifications' ? 'block' : 'hidden'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Performance</h2>
              
              {product.certifications && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                        <Award className="h-5 w-5 text-indigo-600 mr-3" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.performance && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.performance).map(([key, value], index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                        <dt className="font-medium text-gray-600">{key}</dt>
                        <dd className="text-gray-900">{renderPerformanceValue(value)}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;