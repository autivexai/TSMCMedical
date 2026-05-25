import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, MessageSquare, ArrowRight, Award, Shield, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgressiveImage } from '../components/ProgressiveImage';
import { products } from '../data/products';

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [impactSlide, setImpactSlide] = React.useState(0);
  const [isImpactAutoPlaying, setIsImpactAutoPlaying] = React.useState(true);

  // Get first 6 products for carousel
  const carouselProducts = products.slice(0, 6);

  // Clinical Impact Stories
  const impactStories = [
    {
      image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKy2BJBkNwZEpRsMUj5qXLae318nQHPTmYrhdl',
      metric: '10,000+',
      metricLabel: 'Diagnostic Tests Performed Monthly',
      testimonial: 'Since implementing our point-of-care testing solutions, healthcare facilities across the Philippines have dramatically reduced patient wait times while improving diagnostic accuracy.',
      impact: 'Faster Results, Better Care'
    },
    {
      image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKt3AtC9KS9GUMC3KB5IlJoirhTYROxj4EQL7W',
      metric: '13+ Years',
      metricLabel: 'Of Trusted Partnership',
      testimonial: 'Our long-term partnerships with healthcare institutions demonstrate our commitment to reliability, quality, and continuous support. We grow alongside our clients, adapting to their evolving needs.',
      impact: 'Proven Track Record'
    },
    {
      image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKMm0ATDoXp96Eu3lD1bFUhPcd8SAj2VMKf7os',
      metric: '95%+',
      metricLabel: 'Client Satisfaction Rate',
      testimonial: 'Healthcare professionals trust our solutions because we deliver more than equipment—we provide comprehensive training, responsive support, and genuine partnership every step of the way.',
      impact: 'Excellence in Service'
    },
    {
      image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKHfWkTj9K17E9sMxUtcbXNFwf3gL6QR58WJhT',
      metric: '3 Islands',
      metricLabel: 'Nationwide Coverage',
      testimonial: 'From Luzon to Mindanao, our dedicated teams ensure that quality healthcare solutions reach every corner of the Philippines. No facility is too remote for our commitment to excellence.',
      impact: 'Accessibility for All'
    }
  ];

  // Auto-play functionality for products
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselProducts.length]);

  // Auto-play functionality for impact stories
  React.useEffect(() => {
    if (!isImpactAutoPlaying) return;

    const interval = setInterval(() => {
      setImpactSlide((prev) => (prev + 1) % impactStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isImpactAutoPlaying, impactStories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselProducts.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextImpactSlide = () => {
    setImpactSlide((prev) => (prev + 1) % impactStories.length);
    setIsImpactAutoPlaying(false);
  };

  const prevImpactSlide = () => {
    setImpactSlide((prev) => (prev - 1 + impactStories.length) % impactStories.length);
    setIsImpactAutoPlaying(false);
  };

  const goToImpactSlide = (index: number) => {
    setImpactSlide(index);
    setIsImpactAutoPlaying(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="text-center progressive-load">
                <img
                  src="https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK70xwvWBSNsqOeLk5coblmpRAZg4t8K6yrT1X"
                  alt="TSMC Logo"
                  className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto mx-auto mb-6 object-scale-down transition-all duration-300 hover:scale-105 border-2 border-indigo-600 rounded-md"
                  width="160"
                  height="160"
                />
                <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                  <span className="block text-indigo-600">TwinJ3 Sales and Marketing Corp.</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-sm sm:text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Your trusted partner in medical equipment and supplies for healthcare professionals.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Link 
                    to="/tsmc" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                  >
                    View Our Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-xl text-gray-600">Discover our advanced medical equipment and diagnostic solutions</p>
          </div>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselProducts.map((product, index) => (
                  <div key={product.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      {/* Product Image */}
                      <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-8">
                        <div className="relative w-full max-w-md">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-80 object-contain rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {product.category}
                          </div>
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex flex-col justify-center p-8 lg:p-12">
                        <div className="max-w-lg">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {product.description}
                          </p>
                          
                          {/* Key Features */}
                          {product.features && product.features.length > 0 && (
                            <div className="mb-8">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                              <ul className="space-y-2">
                                {product.features.slice(0, 3).map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                              to={`/tsmc/products/${product.slug}`}
                              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                              to="/contact?service=medical"
                              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                            >
                              <MessageSquare className="mr-2 h-5 w-5" />
                              Get Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next product"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {carouselProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-indigo-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
            
            {/* View All Products Link */}
            <div className="text-center mt-8">
              <Link
                to="/tsmc"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg transition-colors duration-300"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Impact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Proven Clinical Impact</h2>
            <p className="mt-4 text-xl text-gray-600">Real results from healthcare partnerships across the Philippines</p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${impactSlide * 100}%)` }}
              >
                {impactStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      {/* Image Section */}
                      <div className="relative overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.impact}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">{story.metric}</div>
                            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{story.metricLabel}</div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col justify-center p-8 lg:p-12">
                        <div className="max-w-lg">
                          <div className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold mb-6">
                            <Award className="h-4 w-4 mr-2" />
                            {story.impact}
                          </div>

                          <blockquote className="text-xl text-gray-800 leading-relaxed mb-8 italic">
                            "{story.testimonial}"
                          </blockquote>

                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                                <Shield className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Healthcare Partner</div>
                              <div className="text-sm text-gray-600">Leading Medical Institution</div>
                            </div>
                          </div>

                          <div className="mt-8 pt-8 border-t border-gray-200">
                            <Link
                              to="/about"
                              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300"
                            >
                              Learn More About Our Impact
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImpactSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextImpactSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next story"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {impactStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImpactSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === impactSlide
                      ? 'bg-indigo-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose TSMC Medical Supply?</h2>
            <p className="mt-4 text-xl text-gray-600">Trusted by healthcare professionals nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <Stethoscope className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
              <p className="text-gray-600">State-of-the-art medical equipment from trusted manufacturers worldwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
              <p className="text-gray-600">All products meet or exceed industry standards and certifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated technical support and training for all our products.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Clients Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Featured Clients</h2>
            <p className="mt-4 text-xl text-gray-600">Trusted by leading healthcare institutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {[
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKBiHwwwG0RprZaE2csh7WNi9UelLJkbYy3XHt', name: 'Client 1' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKteO0HNKS9GUMC3KB5IlJoirhTYROxj4EQL7W', name: 'Client 2' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKHF2zXU9K17E9sMxUtcbXNFwf3gL6QR58WJhT', name: 'Client 3' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK2j9V3BzOKEmAGgquJTfLUawhvDzeWIsp7d5F', name: 'Client 4' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKq8TkPVdoFG4DTcYmfVvX3ClS8JLZbMhBknrI', name: 'Client 5' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKyUBYwPNwZEpRsMUj5qXLae318nQHPTmYrhdl', name: 'Client 6' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKoDr2TeMYbCqy8PWAm4dn10VT2XMBzrw6vLZh', name: 'Client 7' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK3rWQZoIIEPbBu5VMyegXxTf6QdKl4W2vL7RA', name: 'Client 8' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKQfk7JEU8OqpB458JKrEtl6AZVC39dIocexGh', name: 'Client 9' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK2MFZAYzOKEmAGgquJTfLUawhvDzeWIsp7d5F', name: 'Client 10' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKAwvhgkm23diFVCauQYGZX7EOvepoDrsmTt0M', name: 'Client 11' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKVQeAK5aSWdCeHAhQbGXFPJMgu30Em1wnxRUt', name: 'Client 12' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKHBwJmT9K17E9sMxUtcbXNFwf3gL6QR58WJhT', name: 'Client 14' },
              { url: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKccj1mu5J4XAFx0m6YQiWLHrg3z5GZfKBswbM', name: 'Client 15' }
            ].map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={client.url}
                  alt={client.name}
                  className="max-w-full max-h-24 object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;