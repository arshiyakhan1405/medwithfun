"use client";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white font-sans scroll-smooth">
      
      {/* PROFESSIONAL HEADER / NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="text-xl font-black tracking-wider text-green-400 uppercase">
          Med With Fun 🩺
        </div>
       {/* MOBILE NAVIGATION MENU */}
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4 font-medium text-base">
          <a href="#home" className="hover:text-green-400 transition py-2 border-b border-white/5">Home</a>
          <a href="#facts" className="hover:text-green-400 transition py-2 border-b border-white/5">MedFacts</a>
          <a href="#Ebooks" className="hover:text-green-400 transition py-2 border-b border-white/5">E-Books Store</a>
          <a href="#blog" className="hover:text-greeb-400 transition py-2 border-b border-white/5">Blog</a>
          <a href="#team" className="hover:text-green-400 transition py-2 border-b border-white/5">Meet the Team</a>
          <a href="#contact" className="hover:text-green-400 transition py-2">Contact</a>
        </div>
      </nav>

      {/* SECTION 1: CLEAN HERO AREA */}
      <section id="home" className="relative w-full h-screen overflow-hidden flex items-end p-8 md:p-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-2">
            Med With <span className="text-green-400">Fun</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mb-6 max-w-lg">
            High-Yield Medical Notes & Digital E-Books. Making medical revision absolutely badass. 🔥
          </p>
          <div className="flex gap-4">
            <a 
              href="#ebooks" 
              className="bg-green-500 hover:bg-green-600 text-black font-extrabold px-6 py-3 rounded-xl text-md transition inline-block text-center"
            >
              Explore E-Books 📚
            </a>
            <a 
              href="#facts" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-md border border-white/20 backdrop-blur-sm transition"
            >
              Learn Daily Facts 💡
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERESTING MEDICAL FACTS & PICTURES */}
      <section id="facts" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Area */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase bg-green-500/10 px-3 py-1 rounded-full">
              Did You Know? 🧠
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              The Human Body Is <br/>
              <span className="text-green-400">Pure Magic.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
             Medical science is not a subject to be memorized—its a subject to be understood and experienced. Here, we break down complex anatomical networks and physiological concepts into engaging visual stories🩺🧠📚✨
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-lg text-xl">🫀</div>
                <div>
                  <h4 className="font-bold text-white">The Non-Stop Pump</h4>
                  <p className="text-sm text-gray-400">Your heart beats approximately 2.5 billion times throughout your lifetime without ever stopping ❤️🫀</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-lg text-xl">⚡</div>
                <div>
                  <h4 className="font-bold text-white">Brain Power</h4>
                  <p className="text-sm text-gray-400">When you're awake, your brain generates enough electricity to power a small light bulb.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pictures & Video Gallery Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 relative overflow-hidden group shadow-xl">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <source src="/blood-flow.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-wider px-2 py-1 rounded text-green-400 font-bold">
                Anatomy (Blood Flow) 🩸
              </div>
            </div>

            <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 mt-8 relative overflow-hidden group shadow-xl">
              <img src="/histology.jpg" alt="Histology Study" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-wider px-2 py-1 rounded text-green-400 font-bold">
                Histology Labs 🔬
              </div>
            </div>

            <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 -mt-8 relative overflow-hidden group shadow-xl">
              <img src="/surgery.jpg" alt="Surgery Room" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-wider px-2 py-1 rounded text-green-400 font-bold">
                Surgery Gear 🩺
              </div>
            </div>

            <div className="h-64 bg-neutral-900 rounded-2xl border border-white/5 relative overflow-hidden group shadow-xl">
              <img src="/clinical.jpg" alt="Clinical Data" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <div className="absolute bottom-2 left-3 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-wider px-2 py-1 rounded text-green-400 font-bold">
                Clinical Cases 📋
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: E-BOOKS STORE (TWO BOOK CARDS - FREE SAMPLE & PAID COMPLETE) */}
      <section id="ebooks" className="py-24 bg-neutral-950 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase bg-green-500/10 px-3 py-1 rounded-full">
              Digital Store 📖
            </span>
            <h4 className="text-3xl md:text-5xl font-extrabold text-white mt-3">FMGE SUCCESS BLUEPRINT</h4>
            <p className="text-gray-400 mt-2 text-sm">Check out the sample first. If you like it, then purchase the complete book📚✨👍</p>
          </div>

          {/* TWO BOOK CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* BOOK 1: FREE SAMPLE BOOK CARD */}
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <span className="text-[10px] font-bold bg-white/10 text-white px-2 py-1 rounded uppercase tracking-wider">FREE PREVIEW</span>
                <h3 className="text-2xl font-black tracking-tight text-white mt-4 text-left">FMGE SUCCESS BLUEPRINT (SAMPLE)</h3>
                <p className="text-xs text-gray-400 text-left mt-2 leading-relaxed">
                  In this sample e-book, you will get free access to the introductory important chapters and high-yield charts📘✨📊
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono font-bold text-green-400 text-lg">₹0 (FREE)</span>
                <button 
                  onClick={() => {
                    
                    window.open('https://drive.google.com/file/d/1Rp298KckO6ZYBeWNI4pycl0UBt5naFe4/view?usp=sharing', '_blank');
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer"
                >
                  Read Sample PDF 📄
                </button>
              </div>
            </div>

            {/* BOOK 2: PAID COMPLETE E-BOOK CARD */}
            <div className="bg-gradient-to-br from-neutral-900 to-green-950/30 border border-green-500/20 p-6 rounded-2xl flex flex-col justify-between hover:border-green-500/40 transition-all shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-[9px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-wider">
                BESTSELLER
              </div>
              <div>
                <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded uppercase tracking-wider">FULL ACCESS</span>
                <h3 className="text-2xl font-black tracking-tight text-white mt-4 text-left">FMGE SUCCESS BLUEPRINT (COMPLETE E-BOOK)</h3>
                <p className="text-xs text-neutral-300 text-left mt-2 leading-relaxed">
                  Unlock full high-resolution diagrams, complex system shortcuts, animations link, and core revision tools.
                </p>

                {/* Billing Details Inputs */}
                <div className="space-y-2 mt-4 text-left">
                  <input 
                    id="rzp-email"
                    type="email" 
                    placeholder="Enter your Gmail" 
                    className="w-full bg-black/50 border border-white/10 focus:border-green-500 rounded-lg px-3 py-2 text-xs text-white outline-none transition"
                  />
                  <input 
                    id="rzp-phone"
                    type="tel" 
                    placeholder="Enter WhatsApp Number" 
                    className="w-full bg-black/50 border border-white/10 focus:border-green-500 rounded-lg px-3 py-2 text-xs text-white outline-none transition"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <span className="font-mono font-bold text-green-400 text-lg">₹149</span>
                <button 
                  onClick={() => {
                    const emailInput = (document.getElementById('rzp-email') as HTMLInputElement)?.value;
                    const phoneInput = (document.getElementById('rzp-phone') as HTMLInputElement)?.value;
                    
                    if (!emailInput || !phoneInput) {
                      alert("Please fill both Gmail and WhatsApp number first!");
                      return;
                    }

                    const script = document.createElement("script");
                    script.src = "https://checkout.razorpay.com/v1/checkout.js";
                    script.onload = () => {
                      const options = {
                        key: "rzp_live_SxdvyK271DgC5O", // Apna Razorpay Live Key yahan paste kar dena
                        amount: 14900, // ₹149.00 in paise
                        currency: "INR",
                        name: "Med With Fun Academy",
                        description: "FMGE SUCCESSS BLUEPRINT - Complete E-Book",
                        image: "/favicon.ico",
                        handler: function (response: any) {
                          alert("🎉 Payment Successful! Opening complete E-Book...");
                          // Apni Google Drive ki COMPLETE Book Link is niche wale link ki jagah copy-paste kar dena:
                          window.location.href = 'https://drive.google.com/file/d/1R6kRxP80LaHBWJX3jP_Nm6svQzTlq6Ok/view?usp=sharing';
                        }
                      };
                      const rzp = new (window as any).Razorpay(options);
                      rzp.open();
                    };
                    document.body.appendChild(script);
                  }
                }
                  className="bg-green-500 hover:bg-green-600 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs transition-all transform hover:scale-105 cursor-pointer flex-1 text-center"
                >
                  Buy Complete 💳
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* BLOG SECTION */}
<section id="blog" className="w-full py-20 px-6 max-w-5xl mx-auto border-t border-zinc-900">
  <div className="text-center mb-12">
    <div className="bg-[#FFE600] inline-block px-8 py-4 text-black font-black text-xl md:text-3xl rounded border-2 border-black uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transform -rotate-1">
      ➕ MEDWITHFUN
      <div className="text-[11px] font-extrabold tracking-[2px] mt-1 text-zinc-900">WE CAN MAKE A CHANGE</div>
    </div>
  </div>

  {/* Main Grid Wrapper for Layout */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800/80 shadow-2xl">
    
    {/* Text Side (Takes 7 columns on desktop) */}
    <div className="md:col-span-7 space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed">
      <p className="first-letter:text-5xl first-letter:font-black first-letter:text-green-400 first-letter:mr-3 first-letter:float-left">
        Blogging is one of the best things that can channel my creativity and be involved with a multitude of topics. 
        It is really an amazing platform to reflect on my thoughts, share knowledge, and analyze my learning as a medical student.
      </p>
      <p>
        I'm going to start this blog sharing my insights and information relating to entrance exams into medical school, 
        useful advice about MBBS, or simply because I'm always fascinated by the wonderful and exciting world of medicine. 
        I believe in making the complex simple, sharing experiences, and growing together with my readers.
      </p>
      <div className="pt-4 border-t border-zinc-900">
        <p className="text-base text-zinc-400">
          If you ever wish to get in touch or you have any questions whatsoever, feel free to reach me at:
        </p>
        <a href="mailto:khanmunkasif@gmail.com" className="inline-block mt-2 text-green-400 font-black hover:text-green-300 transition-colors hover:underline tracking-wide bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">
          ✉️ khanmunkasif@gmail.com
        </a>
      </div>
    </div>

    {/* Image Side (Takes 5 columns on desktop) */}
    <div className="md:col-span-5 flex justify-center relative group">
      {/* Decorative Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r range from-green-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <img 
        src="/doctor-pic.jpg" 
        alt="Medical Student Profile" 
        className="relative w-full max-w-sm rounded-2xl shadow-2xl border-2 border-zinc-800 object-cover aspect-[4/5] transform group-hover:scale-[1.02] transition duration-500"
      />
    </div>

  </div>
</section>

      {/* SECTION: MEET THE TEAM */}
<section id="team" className="py-20 bg-[#0a0a0a] border-t border-white/5">
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
      Meet the Team
    </h2>
    <p className="text-gray-400 text-base max-w-2xl mx-auto mb-12">
      Behind "Med With Fun" is a unique collaboration between medical expertise and modern technology, driven by a shared vision to make medical learning simple, engaging, and accessible for everyone.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      {/* Munkasif Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all group">
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20 group-hover:bg-green-500/20 transition-all">
          <span className="text-xl text-green-400">🩺</span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-all mb-1">
          Munkasif Khan
        </h3>
        <p className="text-green-400/80 font-medium text-xs mb-3">
          Founder & Medical Expert
        </p>
        <p className="text-gray-400 leading-relaxed text-sm">
          A passionate medical student and FMGE aspirant who believes that medical education doesn't have to be boring. Munkasif is the brain behind all the high-yield notes, creative memory tricks, and E-books on this platform, aiming to help fellow students ace their exams with ease.
        </p>
      </div>

      {/* Arshiya Khan Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all group">
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20 group-hover:bg-green-500/20 transition-all">
          <span className="text-xl text-green-400">💻</span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-all mb-1">
          Arshiya Khan
        </h3>
        <p className="text-green-400/80 font-medium text-xs mb-3">
          Lead Developer & Tech Architect
        </p>
        <p className="text-gray-400 leading-relaxed text-sm">
          The tech magician who brought this vision to life. Arshiya is the developer behind the seamless design, fast performance, and secure architecture of "Med With Fun." From drafting the first line of code to ensuring a smooth user experience, Arshiya handles everything under the hood.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="w-full py-20 px-6 max-w-3xl mx-auto border-t border-zinc-900">
  <div className="bg-gradient-to-b from-zinc-950 to-black p-8 md:p-12 rounded-3xl border border-zinc-800/80 shadow-2xl relative overflow-hidden">
    
    {/* Background accent glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <h2 className="text-3xl md:text-4xl font-black text-center text-green-400 mb-2 uppercase tracking-wide">
      Have Questions?
    </h2>
    <p className="text-center text-zinc-400 max-w-md mx-auto mb-10 text-base md:text-lg">
      Any doubts regarding the FMGE Blueprint, payment failures, or need access help? Drop a message instantly.
    </p>
    
    <form className="flex flex-col gap-5 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Name</label>
          <input type="text" placeholder="Dr. John Doe" required className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all placeholder-zinc-600" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Email</label>
          <input type="email" placeholder="john@gmail.com" required className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all placeholder-zinc-600" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Message</label>
        <textarea placeholder="Type your query here..." rows={4} required className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all placeholder-zinc-600 resize-none"></textarea>
      </div>
      
      <button type="submit" className="bg-green-500 hover:bg-green-400 text-black font-black p-4 rounded-xl transition-all uppercase tracking-wider shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:translate-y-[-2px]">
        Send Message 🚀
      </button>
    </form>

    <div className="mt-10 text-center text-zinc-500 text-sm border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
      <span>Direct Support Email:</span>
      <a href="mailto:khanmunkasif@gmail.com" className="text-green-400 font-bold hover:underline">
        khanmunkasif@gmail.com
      </a>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500 border-t border-white/5 bg-black">
        <p>© {new Date().getFullYear()} Med With Fun. Designed for future doctors. 🩺</p>
      </footer>

    </main>
  );
}
