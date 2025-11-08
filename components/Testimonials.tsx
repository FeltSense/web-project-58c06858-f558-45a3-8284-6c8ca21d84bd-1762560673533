export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-block mb-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
          ⭐ TRUSTED BY THOUSANDS
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Real Stories, Real Results
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
        See how we've helped individuals and businesses transform their operations and achieve measurable success
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      
      {/* Testimonial 1 - Productivity Boost */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            alt="Michael Chen"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-500 font-medium">Verified Customer</p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          "After implementing their workflow automation system, our team saved 15 hours per week on repetitive tasks. We've redirected that time to strategic projects and saw a 40% increase in quarterly output. The ROI was evident within the first month."
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Michael Chen</p>
          <p className="text-sm text-gray-600 mt-1">Operations Manager</p>
          <p className="text-sm text-gray-500">TechFlow Solutions</p>
        </div>
      </div>

      {/* Testimonial 2 - Cost Savings */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            alt="Sarah Martinez"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-500 font-medium">Verified Customer</p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          "We were hemorrhaging money on inefficient processes. Their consultation identified $8,500 in monthly waste across three departments. Within 90 days, we'd recouped the investment and now save over $100K annually. The detailed analytics dashboard keeps us on track."
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Sarah Martinez</p>
          <p className="text-sm text-gray-600 mt-1">Financial Controller</p>
          <p className="text-sm text-gray-500">Horizon Enterprises</p>
        </div>
      </div>

      {/* Testimonial 3 - Customer Satisfaction */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/29/03/35/girl-1867092_1280.jpg"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-500 font-medium">Verified Customer</p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          "Our customer response time dropped from 48 hours to under 4 hours with their support system integration. Customer satisfaction scores jumped from 3.2 to 4.7 stars, and we've seen a 65% reduction in complaint escalations. Game-changing for our reputation."
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Emily Thompson</p>
          <p className="text-sm text-gray-600 mt-1">Customer Success Director</p>
          <p className="text-sm text-gray-500">BrightPath Services</p>
        </div>
      </div>

      {/* Testimonial 4 - Revenue Growth */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
            alt="David Park"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-500 font-medium">Verified Customer</p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          "The data-driven marketing strategy they developed increased our qualified leads by 210% in six months. Our conversion rate improved from 2.1% to 5.8%, and we closed $340K in new business directly attributed to their recommendations. Best investment we've made."
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>David Park</p>
          <p className="text-sm text-gray-600 mt-1">CEO & Founder</p>
          <p className="text-sm text-gray-500">Momentum Digital</p>
        </div>
      </div>

      {/* Testimonial 5 - Team Efficiency */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg"
            alt="James Wilson"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-500 font-medium">Verified Customer</p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          "Their project management training transformed our chaotic workflow into a streamlined operation. We went from missing 60% of deadlines to delivering 95% of projects on time. Team morale improved dramatically, and we're now taking on 30% more clients without adding staff."
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>James Wilson</p>
          <p className="text-sm text-gray-600 mt-1">Project Director</p>
          <p className="text-sm text-gray-500">BuildRight Construction</p>
        </div>
      </div>

      {/* Testimonial 6 - Digital Transformation */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg"
            alt="Rachel Kim"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-500 font-medium">Verified Customer</p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          "We were drowning in paper records and manual data entry. Their digital transformation roadmap eliminated 22 hours of weekly admin work, reduced errors by 89%, and gave us real-time insights we never had before. Our compliance audits now take days instead of weeks."
        </p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Rachel Kim</p>
          <p className="text-sm text-gray-600 mt-1">Practice Manager</p>
          <p className="text-sm text-gray-500">HealthFirst Medical Group</p>
        </div>
      </div>

    </div>

    {/* Trust Indicators */}
    <div className="mt-20 pt-12 border-t border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>2,500+</p>
          <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Happy Clients</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>98%</p>
          <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Satisfaction Rate</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>4.9/5</p>
          <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Average Rating</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>12+</p>
          <p className="text-sm md:text-base text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Years Experience</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}