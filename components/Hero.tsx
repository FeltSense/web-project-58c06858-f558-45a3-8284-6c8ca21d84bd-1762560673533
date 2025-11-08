export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-8 animate-fade-in">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
          </div>
          <span className="text-sm text-gray-300 font-medium">Trusted by 50,000+ professionals worldwide</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Empower Your
          <span className="block mt-2 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Access premium tools, resources, and insights designed to accelerate your career growth and unlock your full potential.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300 font-medium">Expert-Led Training</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300 font-medium">Personalized Roadmaps</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300 font-medium">Community Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Start Your Journey
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-white/10">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">50K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-72 h-72 bg-teal-500/20 rounded-3xl blur-2xl"></div>
        <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-500/20 rounded-3xl blur-2xl"></div>
        
        {/* Main image container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80" 
            alt="Professional team collaborating in modern workspace" 
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          
          {/* Floating card overlay */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-lg">Fast-Track Your Growth</div>
                <div className="text-gray-300 text-sm">Join thousands achieving their goals</div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Verified Platform</div>
              <div className="text-xs text-gray-600">Trusted & Secure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom gradient fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
</section>
  );
}