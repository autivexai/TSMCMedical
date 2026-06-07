import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Filter, Search, Tag, Users, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: 'product-launch' | 'industry-news' | 'company-update' | 'training';
  author: string;
  readTime: number;
  featured?: boolean;
}

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  type: 'conference' | 'webinar' | 'training' | 'exhibition';
  registrationUrl?: string;
  capacity?: number;
  registered?: number;
  featured?: boolean;
}

const News = () => {
  useSEO({
    title: 'News & Events',
    description: 'Stay updated with the latest news, product launches, and upcoming healthcare events from TSMC Medical Supply.',
  });

  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample news data
  const newsItems: NewsItem[] = [
    {
      id: '5',
      title: 'Pink Run 2017 and TSMC',
      excerpt: 'TSMC supported the 7th edition of Pink Run by providing high-tech digital Electroimpedance mammography machines to screen participants at this breast cancer awareness event.',
      content: `
        <p>Pink Run October 15, 2017 at Filinvest City/Festival Mall Alabang, Muntinlupa City</p>
        
        <p>Now on its 7th edition, this is a running activity aimed at raising funds and raising awareness against breast cancer. The objective is to gather funds for the treatment of indigent patients suffering from this dreaded disease as well as focus attention on breast cancer during and after the event through educational campaigns, information drives and lay fora.</p>
        
        <h3>TSMC's Contribution</h3>
        <p>TSMC supported the event by providing high tech digital Electroimpedance mammography machines to screen participants. This initiative demonstrates our commitment to community health and our dedication to supporting important healthcare causes.</p>
        
        <h3>About Pink Run</h3>
        <p>The Pink Run is more than just a running event - it's a movement that brings together the community to fight against breast cancer. Through this annual event, participants not only engage in physical activity but also contribute to a meaningful cause that affects thousands of families.</p>
        
        <h3>Community Impact</h3>
        <p>By providing advanced screening technology at the event, TSMC helped ensure that participants had access to important health screenings. Early detection is crucial in the fight against breast cancer, and events like Pink Run provide an excellent opportunity to reach people who might not otherwise have access to such screenings.</p>
        
        <p>We are proud to have been part of this important community initiative and look forward to continuing our support for healthcare awareness events in the future.</p>
      `,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
      date: '2017-11-06',
      category: 'company-update',
      author: 'TSMC Team',
      readTime: 3,
      featured: false
    },
    {
      id: '1',
      title: 'TSMC Introduces Advanced HbA1c Testing Solutions',
      excerpt: 'New point-of-care testing technology delivers lab-quality results in under 6 minutes, revolutionizing diabetes management.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
      date: '2024-03-15',
      category: 'product-launch',
      author: 'Dr. Maria Santos',
      readTime: 5,
      featured: true
    },
    {
      id: '2',
      title: 'Partnership with Leading Healthcare Institutions',
      excerpt: 'TSMC expands its network with major hospitals across Luzon, Visayas, and Mindanao to improve healthcare accessibility.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800',
      date: '2024-03-10',
      category: 'company-update',
      author: 'Stephen Bulseco',
      readTime: 3,
      featured: true
    },
    {
      id: '3',
      title: 'Latest Advances in Point-of-Care Diagnostics',
      excerpt: 'Industry report highlights the growing importance of rapid diagnostic testing in modern healthcare delivery.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
      date: '2024-03-05',
      category: 'industry-news',
      author: 'Medical Team',
      readTime: 7
    },
    {
      id: '4',
      title: 'Comprehensive Training Program Launch',
      excerpt: 'New certification program for healthcare professionals on advanced diagnostic equipment operation and maintenance.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
      date: '2024-02-28',
      category: 'training',
      author: 'Training Department',
      readTime: 4
    }
  ];

  // Sample events data
  const events: Event[] = [
    {
      id: '1',
      title: 'Philippine Medical Technology Summit 2024',
      description: 'Join us at the premier medical technology conference featuring the latest innovations in diagnostic equipment and healthcare solutions.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      date: '2024-04-15',
      time: '9:00 AM - 5:00 PM',
      location: 'SMX Convention Center, Manila',
      type: 'conference',
      registrationUrl: '/contact',
      capacity: 500,
      registered: 342,
      featured: true
    },
    {
      id: '2',
      title: 'Advanced HbA1c Testing Webinar',
      description: 'Learn about the latest developments in HbA1c testing technology and best practices for diabetes management.',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
      date: '2024-03-25',
      time: '2:00 PM - 3:30 PM',
      location: 'Online Webinar',
      type: 'webinar',
      registrationUrl: '/contact',
      capacity: 200,
      registered: 156,
      featured: true
    },
    {
      id: '3',
      title: 'Hands-on Training: FORA Care Systems',
      description: 'Comprehensive training session on FORA Care diagnostic systems, including setup, operation, and maintenance.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800',
      date: '2024-04-08',
      time: '10:00 AM - 4:00 PM',
      location: 'TSMC Training Center, Quezon City',
      type: 'training',
      registrationUrl: '/contact',
      capacity: 25,
      registered: 18
    },
    {
      id: '4',
      title: 'Healthcare Innovation Exhibition',
      description: 'Discover cutting-edge medical devices and diagnostic solutions at the largest healthcare exhibition in Southeast Asia.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      date: '2024-05-20',
      time: '9:00 AM - 6:00 PM',
      location: 'World Trade Center, Pasay City',
      type: 'exhibition',
      registrationUrl: '/contact'
    }
  ];

  const categoryLabels = {
    'all': 'All Categories',
    'product-launch': 'Product Launches',
    'industry-news': 'Industry News',
    'company-update': 'Company Updates',
    'training': 'Training & Education',
    'conference': 'Conferences',
    'webinar': 'Webinars',
    'exhibition': 'Exhibitions'
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'product-launch': 'bg-blue-100 text-blue-800',
      'industry-news': 'bg-green-100 text-green-800',
      'company-update': 'bg-purple-100 text-purple-800',
      'training': 'bg-orange-100 text-orange-800',
      'conference': 'bg-indigo-100 text-indigo-800',
      'webinar': 'bg-teal-100 text-teal-800',
      'exhibition': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.type === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) > new Date();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=2000"
            alt="Medical background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              News & Events
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Stay updated with the latest developments in medical technology and join our upcoming events
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <nav className="flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('news')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'news'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Latest News
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'events'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Events
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Categories</option>
                {activeTab === 'news' ? (
                  <>
                    <option value="product-launch">Product Launches</option>
                    <option value="industry-news">Industry News</option>
                    <option value="company-update">Company Updates</option>
                    <option value="training">Training & Education</option>
                  </>
                ) : (
                  <>
                    <option value="conference">Conferences</option>
                    <option value="webinar">Webinars</option>
                    <option value="training">Training</option>
                    <option value="exhibition">Exhibitions</option>
                  </>
                )}
              </select>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'news' ? (
          <div className="space-y-12">
            {/* Featured News */}
            {filteredNews.filter(item => item.featured).length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Stories</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredNews.filter(item => item.featured).map((item) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-64">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {categoryLabels[item.category as keyof typeof categoryLabels]}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(item.date)}
                          <Clock className="h-4 w-4 ml-4 mr-1" />
                          {item.readTime} min read
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {item.author}</span>
                          <Link
                            to={`/news/${item.id}`}
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* All News */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.filter(item => !item.featured).map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {categoryLabels[item.category as keyof typeof categoryLabels]}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(item.date)}
                        <Clock className="h-4 w-4 ml-4 mr-1" />
                        {item.readTime} min read
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {item.author}</span>
                        <Link
                          to={`/news/${item.id}`}
                          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Events */}
            {filteredEvents.filter(event => event.featured).length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Events</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredEvents.filter(event => event.featured).map((event) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-64">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.type)}`}>
                            {categoryLabels[event.type as keyof typeof categoryLabels]}
                          </span>
                        </div>
                        {isUpcoming(event.date) && (
                          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Upcoming
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(event.date)}
                          <Clock className="h-4 w-4 ml-4 mr-1" />
                          {event.time}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                        {event.capacity && event.registered && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Registration</span>
                              <span>{event.registered}/{event.capacity}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="h-4 w-4 mr-1" />
                            {event.registered || 0} registered
                          </div>
                          <div className="flex gap-2">
                            <Link
                              to={`/news/${event.id}`}
                              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                              Learn More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                            {event.registrationUrl && (
                              <Link
                                to={event.registrationUrl}
                                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                              >
                                Register Now
                                <ExternalLink className="ml-1 h-4 w-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* All Events */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">All Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.filter(event => !event.featured).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.type)}`}>
                          {categoryLabels[event.type as keyof typeof categoryLabels]}
                        </span>
                      </div>
                      {isUpcoming(event.date) && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Upcoming
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(event.date)}
                        <Clock className="h-4 w-4 ml-4 mr-1" />
                        {event.time}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          {event.registered || 0} registered
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={`/news/${event.id}`}
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                          >
                            Learn More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                          {event.registrationUrl && (
                            <Link
                              to={event.registrationUrl}
                              className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                            >
                              Register
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {((activeTab === 'news' && filteredNews.length === 0) || 
          (activeTab === 'events' && filteredEvents.length === 0)) && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Subscribe to our newsletter for the latest news and event announcements
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              />
              <button className="px-6 py-3 bg-indigo-800 text-white rounded-r-md hover:bg-indigo-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;