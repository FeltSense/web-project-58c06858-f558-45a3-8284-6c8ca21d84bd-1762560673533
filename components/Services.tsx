import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-block mb-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
          </svg>
          Our Services
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
        Personalized Solutions for
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
          Your Success
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Comprehensive services designed to empower individuals with the tools, guidance, and support needed to thrive
      </p>
    </div>

    {/* Services Grid - Creative Staggered Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
      
      {/* Featured Service - Large Card (Spans 2 columns) */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 opacity-10 rounded-bl-full"></div>
          
          <div className="relative">
            <Image 
              src="https://picsum.photos/seed/individuals-career-coaching/800/600" 
              alt="One-on-one career coaching session" 
              width={800} 
              height={600} 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg">
                ⭐ Most Popular
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                Career Coaching & Development
              </h3>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Transform your professional journey with personalized one-on-one coaching sessions. We help you identify your strengths, set achievable goals, and create actionable strategies for career advancement and fulfillment.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Personalized career roadmap with milestone tracking</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Resume optimization and LinkedIn profile enhancement</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Interview preparation and salary negotiation strategies</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Ongoing support with bi-weekly check-ins and accountability</span>
              </div>
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Get Started Today
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 2 - Smaller Card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/individuals-financial-planning/800/600" 
            alt="Personal financial planning consultation" 
            width={800} 
            height={600} 
            className="w-full h-48 md:h-64 object-cover"
          />

          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                Financial Planning & Wellness
              </h3>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Build a secure financial future with expert guidance on budgeting, investing, and wealth management tailored to your unique goals and lifestyle.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Comprehensive budget analysis and optimization</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Investment strategy and portfolio review</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Retirement and long-term goal planning</span>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
              Learn More
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 3 - Smaller Card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/individuals-wellness-coaching/800/600" 
            alt="Health and wellness coaching session" 
            width={800} 
            height={600} 
            className="w-full h-48 md:h-64 object-cover"
          />

          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
                Health & Wellness Coaching
              </h3>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Achieve optimal well-being through personalized fitness plans, nutrition guidance, and mindfulness practices designed for sustainable lifestyle transformation.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Custom fitness and nutrition programs</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Stress management and mindfulness training</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Habit formation and accountability support</span>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
              Start Your Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 4 - Larger Card */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="relative">
            <Image 
              src="https://picsum.photos/seed/individuals-skill-development/800/600" 
              alt="Professional skill development workshop" 
              width={800} 
              height={600} 
              className="w-full h-64 md:h-72 object-cover"
            />
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold shadow-lg">
                🚀 New
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                Skill Development & Training
              </h3>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Unlock your potential with targeted skill-building programs in leadership, communication, digital literacy, and emerging technologies. Stay competitive in today's evolving marketplace.
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Leadership and management training</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Digital skills and tech literacy</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Communication and presentation skills</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-600">Industry certifications and credentials</span>
              </div>
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Explore Programs
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-block p-8 md:p-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
          Ready to Transform Your Life?
        </h3>
        <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
          Schedule a free consultation to discover which services are right for you
        </p>
        <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group">
          Book Free Consultation
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
  );
}