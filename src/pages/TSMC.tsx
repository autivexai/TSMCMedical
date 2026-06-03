import React, { useEffect, useRef, useMemo } from 'react';
import { Stethoscope, Heart, ShieldCheck, Search, ArrowRight, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, productCategories } from '../data/products';
import { featuredClients } from '../data/clients';
import { BRAND } from '../data/brand';

const TSMC = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = React.useState('');

  const activeCategory = searchParams.get('category') ?? '';

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        !activeCategory || product.category === activeCategory;
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const setCategory = (category: string) => {
    const next = new URLSearchParams(searchParams);
    if (category) {
      next.set('category', category);
    } else {
      next.delete('category');
    }
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSearchParams({}, { replace: true });
  };

  const hasActiveFilters = Boolean(activeCategory || searchTerm.trim());

  return (
    <div className="bg-gray-50">
      <div ref={topRef} />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2000"
            alt=""
            className="w-full h-full object-cover opacity-40"
            width={2000}
            height={600}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-800/80 to-indigo-700/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {BRAND.tradeName}
            </h1>
            <p className="mt-2 text-sm text-indigo-200">{BRAND.heroSubline}</p>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {BRAND.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Stethoscope className="h-12 w-12 text-indigo-600 mb-4" aria-hidden />
            <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
            <p className="text-gray-600">State-of-the-art medical equipment from trusted manufacturers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Heart className="h-12 w-12 text-indigo-600 mb-4" aria-hidden />
            <h3 className="text-xl font-semibold mb-2">Patient Care</h3>
            <p className="text-gray-600">Supporting healthcare professionals in delivering excellent patient care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ShieldCheck className="h-12 w-12 text-indigo-600 mb-4" aria-hidden />
            <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
            <p className="text-gray-600">All products meet or exceed industry standards and certifications.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
            <p className="mt-4 text-xl text-gray-600">Discover our comprehensive range of medical equipment</p>

            <div className="mt-8 max-w-md mx-auto">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5"
                  aria-hidden
                />
                <input
                  id="product-search"
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-describedby="product-results-count"
                />
              </div>
            </div>

            {/* Category chips */}
            <div
              className="mt-6 flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter by category"
            >
              <button
                type="button"
                onClick={() => setCategory('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  !activeCategory
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={!activeCategory}
              >
                All
              </button>
              {productCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <p
              id="product-results-count"
              className="mt-4 text-sm text-gray-600"
              aria-live="polite"
            >
              Showing {filteredProducts.length} of {products.length} products
              {activeCategory ? ` in ${activeCategory}` : ''}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 px-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-lg font-medium text-gray-900">No products match your filters</p>
              <p className="mt-2 text-gray-600">
                Try a different search term or category, or view the full catalog.
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <X className="h-4 w-4 mr-2" aria-hidden />
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2"
                      width={400}
                      height={192}
                      loading="lazy"
                    />
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    <Link
                      to={`/tsmc/products/${product.slug}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Clients */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Featured Clients</h2>
            <p className="mt-4 text-xl text-gray-600">Trusted by leading healthcare institutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {featuredClients.map((client) => (
              <div
                key={client.url}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-h-[6rem] hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={client.url}
                  alt={client.alt}
                  className="max-w-full max-h-24 w-auto h-auto object-contain"
                  width={160}
                  height={96}
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

export default TSMC;
