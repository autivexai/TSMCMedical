import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Eye, Award, Globe, Heart, Stethoscope, Building2, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=2000"
            alt="Medical professionals background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 to-white/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <img
              src="https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK70xwvWBSNsqOeLk5coblmpRAZg4t8K6yrT1X"
              alt="TSMC Logo"
              className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto mx-auto mb-8 object-scale-down transition-all duration-300 hover:scale-105 border-2 border-indigo-600 rounded-md"
              width="160"
              height="160"
            />
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-indigo-600">About TSMC</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your trusted partner in advancing healthcare through innovative medical solutions
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet the Experts Behind Your Success</h2>
            <p className="mt-4 text-xl text-gray-600">
              Backed by decades of combined medical expertise and an unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Team Leadership Photo */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKCS0ltdLD0zwm2tKTshdPenRB7NEMb9fyHAOi"
                  alt="TSMC Leadership Team"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Team Description */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Trusted Healthcare Partners Across the Philippines
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since 2011, our team has been united by a singular mission: <strong className="text-indigo-600">to transform Philippine healthcare through innovative medical solutions and unwavering partnership.</strong>
                </p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
                <p className="text-gray-700 leading-relaxed italic">
                  "We don't just supply medical equipment—we empower healthcare professionals with the tools, knowledge, and support they need to save lives and improve patient outcomes every single day."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">13+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Major Islands Covered</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Medical Background</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Expert Support</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Deep Medical Expertise:</strong> Our founders and team members bring proven experience from leading medical companies, ensuring you receive knowledgeable guidance at every step.
                  </p>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Nationwide Network:</strong> From Luzon to Mindanao, our dedicated sales and support teams are positioned to serve you wherever you are in the Philippines.
                  </p>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Patient-Centric Approach:</strong> Every product we recommend and every solution we provide is driven by one goal—improving patient care and clinical outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Team Photo */}
          <div className="mt-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKrU5oe3xl5TSwWQq6gtOBpfDoCGhc4KLPb1vM"
                alt="TSMC Team with Healthcare Partners at Exhibition"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Company Story */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <p className="mt-4 text-xl text-gray-600">From humble beginnings to nationwide healthcare solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">August 2011 - The Beginning</h3>
                  <p className="mt-2 text-base text-gray-500">
                    TSMC.ph TwinJ3 Enterprises started as a sole proprietorship, influenced by a group of individuals from various companies with strong Medical and Sales backgrounds. We began our journey in the distribution of Medical Products, Devices, Pharmaceuticals, Consumables, and other related products.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">December 2016 - Corporate Growth</h3>
                  <p className="mt-2 text-base text-gray-500">
                    After five successful years, we established our corporation and became known as <strong>TWINJ3 SALES AND MARKETING CORP. (TSMC) PHILIPPINES</strong>. With our past medical experience, our team expanded its network nationwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Nationwide Presence</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We have successfully expanded our network across the three major islands of the Philippines: <strong>Luzon, Visayas, and Mindanao</strong>, ensuring comprehensive healthcare coverage nationwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
              <p className="text-gray-600 mb-6">
                Our goal is to provide the latest products with innovative solutions to aid the Philippines' current and future medical challenges. The Philippines' aggressive approach to growth makes us more committed to only provide quality products and services to our customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Stethoscope className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Point of Care Tests (POCT) devices</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Radiology Devices</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Rapid Diagnostic Tests</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Consumer Diagnostic Tests</span>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Moving forward, our development team will continuously provide the latest Medical Technology with competitive and effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mr-4">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a corporation committed to provide the highest standards of quality healthcare Medicines, Equipment and Diagnostic Tools in the practice of:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Pathology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Radiology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Gastroenterology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Cardiology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Diabetology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Surgery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Endocrinology</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Through innovative research and community-based learning with close partnerships with other health care proponents.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                We help ensure fair and good quality practice of our Customers & in doing so, we uplift the standard of patient care given to the community.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mr-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our aim is to give the most advance and yet competitive technology in the field of Medical Diagnostics, Equipment, and Pharmaceutical. We influence our customers to provide quality healthcare by extending access to our evidence-based research products.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Population Health Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our goal is to solve the population's struggle of survival and to extend living through prevention by early and effective diagnosis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To confidently be acknowledged by our customers to be their <strong>PARTNER</strong> in serving the same goal in gaining local prominence from all our initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Discover how TSMC can help advance your healthcare practice with innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tsmc"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              View Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300"
            >
              Contact Us
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;