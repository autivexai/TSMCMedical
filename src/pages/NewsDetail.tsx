import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
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

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  // Sample news data (same as in News.tsx)
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
      content: `
        <p>TSMC Medical Supply is proud to announce the introduction of our latest advanced HbA1c testing solutions, marking a significant milestone in point-of-care diabetes management technology.</p>
        
        <h3>Revolutionary Technology</h3>
        <p>Our new HbA1c testing system utilizes cutting-edge immunoturbidimetry technology to deliver lab-quality results in under 6 minutes. This breakthrough represents a major advancement in diabetes care, allowing healthcare providers to make immediate treatment decisions during patient consultations.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>Rapid results in less than 6 minutes</li>
          <li>Lab-quality accuracy with minimal blood sample (0.2 µL)</li>
          <li>NGSP certified and IFCC standardized</li>
          <li>User-friendly operation with minimal training required</li>
          <li>Comprehensive data management and connectivity options</li>
        </ul>
        
        <h3>Clinical Impact</h3>
        <p>The ability to provide immediate HbA1c results during patient visits eliminates the need for follow-up appointments to discuss test results. This improvement in workflow efficiency leads to better patient compliance and more timely adjustments to diabetes management plans.</p>
        
        <h3>Healthcare Provider Benefits</h3>
        <p>Healthcare providers can now offer their patients the convenience of same-visit diabetes monitoring, improving patient satisfaction and clinical outcomes. The system's compact design makes it suitable for various healthcare settings, from large hospitals to small clinics.</p>
        
        <p>For more information about our HbA1c testing solutions or to schedule a demonstration, please contact our team.</p>
      `,
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
      content: `
        <p>TSMC Medical Supply is excited to announce strategic partnerships with leading healthcare institutions across the Philippines, significantly expanding our reach and impact in the medical community.</p>
        
        <h3>Nationwide Expansion</h3>
        <p>Our new partnerships span across the three major island groups of the Philippines:</p>
        <ul>
          <li><strong>Luzon:</strong> Partnerships with major medical centers in Metro Manila, Central Luzon, and Northern Luzon</li>
          <li><strong>Visayas:</strong> Collaborations with key hospitals in Cebu, Iloilo, and Bacolod</li>
          <li><strong>Mindanao:</strong> Strategic alliances with healthcare providers in Davao, Cagayan de Oro, and Zamboanga</li>
        </ul>
        
        <h3>Enhanced Healthcare Access</h3>
        <p>These partnerships will enable us to provide faster delivery of medical equipment and supplies to underserved areas, ensuring that quality healthcare technology reaches every corner of the Philippines.</p>
        
        <h3>Collaborative Benefits</h3>
        <p>Through these partnerships, we will:</p>
        <ul>
          <li>Provide comprehensive training programs for healthcare professionals</li>
          <li>Offer technical support and maintenance services</li>
          <li>Facilitate knowledge sharing and best practices</li>
          <li>Support research and development initiatives</li>
        </ul>
        
        <h3>Future Outlook</h3>
        <p>This expansion represents our commitment to improving healthcare outcomes across the Philippines. We look forward to working closely with our partner institutions to bring innovative medical solutions to more patients and healthcare providers.</p>
      `,
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
      content: `
        <p>The healthcare industry is experiencing a significant shift towards point-of-care (POC) diagnostics, with new technologies revolutionizing how medical testing is conducted and results are delivered.</p>
        
        <h3>Market Growth and Trends</h3>
        <p>The global point-of-care diagnostics market is experiencing unprecedented growth, driven by several key factors:</p>
        <ul>
          <li>Increasing demand for rapid diagnostic results</li>
          <li>Growing prevalence of chronic diseases</li>
          <li>Technological advancements in miniaturization</li>
          <li>Rising healthcare costs driving efficiency needs</li>
        </ul>
        
        <h3>Technological Innovations</h3>
        <p>Recent advances in POC diagnostics include:</p>
        <ul>
          <li>Microfluidic devices for multiple parameter testing</li>
          <li>Smartphone-integrated diagnostic platforms</li>
          <li>AI-powered result interpretation</li>
          <li>Cloud-based data management systems</li>
        </ul>
        
        <h3>Clinical Applications</h3>
        <p>Point-of-care testing is now widely used in:</p>
        <ul>
          <li>Emergency departments for rapid triage</li>
          <li>Primary care clinics for immediate diagnosis</li>
          <li>Remote healthcare settings</li>
          <li>Home healthcare monitoring</li>
        </ul>
        
        <h3>Future Implications</h3>
        <p>The continued advancement of POC diagnostics promises to transform healthcare delivery by enabling faster decision-making, reducing healthcare costs, and improving patient outcomes through timely interventions.</p>
      `,
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
      content: `
        <p>TSMC Medical Supply is launching a comprehensive training and certification program designed to enhance the skills of healthcare professionals in operating and maintaining advanced diagnostic equipment.</p>
        
        <h3>Program Overview</h3>
        <p>Our new training program covers:</p>
        <ul>
          <li>Equipment operation and best practices</li>
          <li>Quality control and calibration procedures</li>
          <li>Troubleshooting and basic maintenance</li>
          <li>Data interpretation and reporting</li>
          <li>Safety protocols and compliance</li>
        </ul>
        
        <h3>Certification Levels</h3>
        <p>The program offers three certification levels:</p>
        <ul>
          <li><strong>Basic Operator:</strong> Fundamental operation skills</li>
          <li><strong>Advanced Technician:</strong> Maintenance and troubleshooting</li>
          <li><strong>Expert Specialist:</strong> Training and supervision capabilities</li>
        </ul>
        
        <h3>Training Delivery Methods</h3>
        <p>We offer flexible training options to accommodate different schedules and preferences:</p>
        <ul>
          <li>On-site training at your facility</li>
          <li>Training center workshops</li>
          <li>Virtual training sessions</li>
          <li>Self-paced online modules</li>
        </ul>
        
        <h3>Benefits for Healthcare Institutions</h3>
        <p>Participating institutions will benefit from:</p>
        <ul>
          <li>Improved equipment utilization and efficiency</li>
          <li>Reduced downtime and maintenance costs</li>
          <li>Enhanced quality of diagnostic results</li>
          <li>Compliance with regulatory requirements</li>
          <li>Professional development for staff</li>
        </ul>
        
        <p>Registration for the first training cohort is now open. Contact us to learn more about enrollment and scheduling options.</p>
      `,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
      date: '2024-02-28',
      category: 'training',
      author: 'Training Department',
      readTime: 4
    }
  ];

  // Sample events data (same as in News.tsx)
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

  // Find the item (news or event)
  const newsItem = newsItems.find(item => item.id === id);
  const eventItem = events.find(event => event.id === id);
  const item = newsItem || eventItem;

  // Dynamic SEO
  useSEO({
    title: item ? item.title : 'Article Not Found',
    description: newsItem?.excerpt ?? eventItem?.description,
  });

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  const shareUrl = window.location.href;
  const shareTitle = item?.title || '';

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`
    };
    
    if (platform in shareUrls) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/news"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to News & Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div ref={topRef} />
      
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/news')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to News & Events
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(newsItem?.category || eventItem?.type || '')}`}>
                {newsItem?.category === 'product-launch' && 'Product Launch'}
                {newsItem?.category === 'industry-news' && 'Industry News'}
                {newsItem?.category === 'company-update' && 'Company Update'}
                {newsItem?.category === 'training' && 'Training & Education'}
                {eventItem?.type === 'conference' && 'Conference'}
                {eventItem?.type === 'webinar' && 'Webinar'}
                {eventItem?.type === 'training' && 'Training'}
                {eventItem?.type === 'exhibition' && 'Exhibition'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {item.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatDate(item.date)}</span>
              </div>
              
              {newsItem && (
                <>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{newsItem.readTime} min read</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span>By {newsItem.author}</span>
                  </div>
                </>
              )}

              {eventItem && (
                <>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{eventItem.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{eventItem.location}</span>
                  </div>
                </>
              )}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-8"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {newsItem && (
              <div 
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              />
            )}
            
            {eventItem && (
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">{eventItem.description}</p>
                </div>
                
                {eventItem.capacity && eventItem.registered && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Status</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Registered</span>
                      <span>{eventItem.registered}/{eventItem.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${(eventItem.registered / eventItem.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {eventItem.capacity - eventItem.registered} spots remaining
                    </p>
                  </div>
                )}
                
                {eventItem.registrationUrl && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">Ready to Join?</h3>
                    <p className="text-indigo-700 mb-4">
                      Don't miss this opportunity to learn about the latest in medical technology.
                    </p>
                    <Link
                      to={eventItem.registrationUrl}
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
                    >
                      Register Now
                    </Link>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems
              .filter(article => article.id !== id)
              .slice(0, 2)
              .map((article) => (
                <Link
                  key={article.id}
                  to={`/news/${article.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;