import React from 'react';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          Meet the Team
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Behind "Med With Fun" is a unique collaboration between medical expertise and modern technology, driven by a shared vision to make medical learning simple, engaging, and accessible for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Munkasif Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all group">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 group-hover:bg-green-500/20 transition-all">
              <span className="text-2xl text-green-400">🩺</span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-all mb-1">
              Munkasif
            </h3>
            <p className="text-green-400/80 font-medium text-sm mb-4">
              Founder & Medical Expert
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              A passionate medical student and FMGE aspirant who believes that medical education doesn't have to be boring. Munkasif is the brain behind all the high-yield notes, creative memory tricks, and E-books on this platform, aiming to help fellow students ace their exams with ease.
            </p>
          </div>

          {/* Arshiya Khan Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all group">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 group-hover:bg-green-500/20 transition-all">
              <span className="text-2xl text-green-400">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-all mb-1">
              Arshiya Khan
            </h3>
            <p className="text-green-400/80 font-medium text-sm mb-4">
              Lead Developer & Tech Architect
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              The tech magician who brought this vision to life. Arshiya is the developer behind the seamless design, fast performance, and secure architecture of "Med With Fun." From drafting the first line of code to ensuring a smooth user experience, Arshiya handles everything under the hood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
