import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  ArrowRight,
  Award,
  Phone,
  Mail,
  Microscope,
  FlaskConical,
  Activity,
} from 'lucide-react';
import { BRAND } from '../data/brand';
import { CONTACT } from '../data/contact';
import { featuredClients } from '../data/clients';
import { products, productCategories } from '../data/products';

const proofMetrics = [
  { value: '10,000+', label: 'Diagnostic tests performed monthly' },
  { value: '13+ Years', label: 'Of trusted partnership' },
  { value: '95%+', label: 'Client satisfaction rate' },
  { value: '3 Islands', label: 'Nationwide coverage' },
] as const;

const categoryIcons: Record<string, React.ElementType> = {
  Diagnostic: Microscope,
  'Diabetes Care': Activity,
  Laboratory: FlaskConical,
};

const featuredQuote = {
  text: 'Since implementing our point-of-care testing solutions, healthcare facilities across the Philippines have dramatically reduced patient wait times while improving diagnostic accuracy.',
  impact: 'Faster Results, Better Care',
};

const Home = () => {
  const previewProducts = products.slice(0, 3);

  const categoryCounts = productCategories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1600"
            alt=""
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchPriority="high"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center progressive-load max-w-3xl mx-auto">
            <img
              src={BRAND.logoUrl}
              alt={`${BRAND.tradeName} logo`}
              className="h-20 sm:h-28 w-auto mx-auto mb-6 object-contain"
              width={160}
              height={160}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              <span className="block text-indigo-600">{BRAND.tradeName}</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">
              {BRAND.heroSubline}
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-500">{BRAND.tagline}</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/tsmc"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <MessageSquare className="mr-2 h-5 w-5" aria-hidden />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip — static, scannable */}
      <section className="bg-indigo-600 py-12" aria-labelledby="proof-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="proof-heading" className="sr-only">
            Our impact at a glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {proofMetrics.map((item) => (
              <div key={item.label} className="text-center text-white">
                <div className="text-2xl sm:text-3xl font-bold">{item.value}</div>
                <div className="mt-1 text-sm sm:text-base text-indigo-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category entry */}
      <section className="py-16" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="categories-heading" className="text-3xl font-extrabold text-gray-900">
              Browse by category
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Explore our catalog of medical equipment and diagnostic solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {productCategories.map((category) => {
              const Icon = categoryIcons[category] ?? Microscope;
              return (
                <Link
                  key={category}
                  to={`/tsmc?category=${encodeURIComponent(category)}`}
                  className="group bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Icon
                    className="h-10 w-10 text-indigo-600 mb-4 group-hover:scale-105 transition-transform"
                    aria-hidden
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {categoryCounts[category]} product{categoryCounts[category] !== 1 ? 's' : ''}
                  </p>
                  <span className="mt-4 inline-flex items-center text-indigo-600 font-medium text-sm">
                    View products
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products — static grid, no carousel */}
      <section className="bg-white py-16" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="featured-heading" className="text-3xl font-extrabold text-gray-900">
              Featured products
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              A selection from our medical equipment catalog
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewProducts.map((product) => (
              <article
                key={product.id}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                    width={320}
                    height={192}
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <Link
                    to={`/tsmc/products/${product.slug}`}
                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/tsmc"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg"
            >
              View all products
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust — one quote + logos */}
      <section className="py-16 bg-gray-50" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="trust-heading" className="text-3xl font-extrabold text-gray-900">
              Trusted across the Philippines
            </h2>
          </div>
          <blockquote className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
            <div className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              <Award className="h-4 w-4 mr-2" aria-hidden />
              {featuredQuote.impact}
            </div>
            <p className="text-lg text-gray-700 italic leading-relaxed">&ldquo;{featuredQuote.text}&rdquo;</p>
            <footer className="mt-4 text-sm text-gray-500">
              — Healthcare partners nationwide
            </footer>
          </blockquote>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
            {featuredClients.map((client) => (
              <div
                key={client.url}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center min-h-[6rem]"
              >
                <img
                  src={client.url}
                  alt={client.alt}
                  className="max-w-full max-h-20 w-auto h-auto object-contain"
                  width={160}
                  height={80}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-indigo-700 py-14" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-white">
            Ready to equip your facility?
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Speak with our team about products, training, and support for your healthcare institution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact?service=medical"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Request a quote
            </Link>
            <a
              href={CONTACT.phone.href}
              className="inline-flex items-center text-white hover:text-indigo-100 font-medium"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden />
              {CONTACT.phone.display}
            </a>
            <a
              href={CONTACT.email.href}
              className="inline-flex items-center text-white hover:text-indigo-100 font-medium"
            >
              <Mail className="h-5 w-5 mr-2" aria-hidden />
              {CONTACT.email.display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
