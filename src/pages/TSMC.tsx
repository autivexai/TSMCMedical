import React, { useEffect, useRef } from 'react';
import { Stethoscope, Heart, ShieldCheck, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const TSMC = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50">
      {/* Reference for scrolling to top */}
      <div ref={topRef} />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2000"
            alt="Medical background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-indigo-800/80 to-indigo-700/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              TSMC Medical Supply
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your trusted partner in medical equipment and supplies
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Stethoscope className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
            <p className="text-gray-600">State-of-the-art medical equipment from trusted manufacturers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Heart className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patient Care</h3>
            <p className="text-gray-600">Supporting healthcare professionals in delivering excellent patient care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ShieldCheck className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
            <p className="text-gray-600">All products meet or exceed industry standards and certifications.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
            <p className="mt-4 text-xl text-gray-600">Discover our comprehensive range of medical equipment</p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to={`/tsmc/products/${product.slug}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
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

export default TSMC;