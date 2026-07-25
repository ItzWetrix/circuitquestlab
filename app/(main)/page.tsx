import Image from "next/image";

export default function Home() {
  return (
    // Main container – establishes 3D space
    <div 
      className="h-screen overflow-y-auto overflow-x-hidden bg-[#0d0e12] font-sans text-gray-200 antialiased"
      style={{ perspective: "2px" }}
    >
      {/* 3D Parallax Space Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-15 bg-repeat min-h-[200vh]"
        style={{
          backgroundImage: "url('/images/bg-stars.svg')",
          backgroundSize: "500px 500px",
          transform: "translateZ(-2px) scale(2)",
          transformOrigin: "center center",
        }}
      />
      
      <div 
        className="relative z-10 flex flex-col items-center w-full"
        style={{ transform: "translateZ(0)" }}
      >
        
        {/* HERO SECTION */}
        <main className="flex w-full flex-col items-center justify-center text-center px-6 py-32 sm:py-48 h-[100vh]">
          
          <div className="relative mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/icon.svg"
              alt="Circuit Quest Lab Logo"
              width={80}
              height={80}
              priority
            />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight uppercase">
            Welcome to <br /> 
            <span className="text-[#A855F7] drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">Circuit Quest Lab</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-medium px-4 leading-relaxed">
            Documenting hardware builds, DIY engineering, and exploring physics. Follow my journey from the first prototype to the final product.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center px-8 sm:px-0 max-w-sm sm:max-w-none">
            <a 
              href="https://www.youtube.com/@CircuitQuestLab?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#B80710] text-white font-bold py-3.5 px-8 rounded-full border border-red-400/20 transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-red-500/10 active:scale-[0.98]"
            >
              <Image
                src="/images/youtube-logo-icon_filled.svg"
                alt="YouTube Logo"
                width={24}
                height={24}
                className="invert"
              />
              WATCH ON YOUTUBE
            </a>

            {/* Links page */}
            <a 
              href="https://www.links.circuitquestlab.cz" 
              className="flex items-center justify-center gap-2 bg-[#A855F7] hover:bg-[#b56bf8] text-white font-bold py-3.5 px-8 rounded-full border border-purple-400/20 transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-purple-500/10 active:scale-[0.98]"
            >
              FOLLOW ME
            </a>

            {/* Scroll Anchor Link */}
            <a 
              href="#projects"
              className="flex items-center justify-center gap-2 bg-[#1c1e24] hover:bg-[#252830] text-[#A855F7] hover:text-[#b56bf8] font-bold py-3.5 px-8 rounded-full border border-zinc-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              EXPLORE PROJECTS
            </a>
          </div>

        </main>

        {/* CONTENT SECTION */}
        <section id="projects" className="w-full max-w-5xl px-6 py-40 text-center border-t border-zinc-900/50 bg-[#0d0e12] rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">
          <h2 className="text-3xl font-extrabold text-white">What's Inside the Lab?</h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            This website acts as an open log for my engineering experiments. Everything featured in the videos is shared here for your inspiration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto text-left">
            {/* Box 1: Documentation */}
            <div className="p-6 bg-[#13141c] border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors">
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-white mb-2">Project Logs</h3>
              <p className="text-sm text-zinc-400">In-depth analysis of hardware issues, dead ends, and deep-dive troubleshooting that cuts from the main videos.</p>
            </div>
            
            {/* Box 2: Schematics & Code */}
            <div className="p-6 bg-[#13141c] border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors">
              <div className="text-2xl mb-3">📐</div>
              <h3 className="text-lg font-bold text-white mb-2">Schematics & Code</h3>
              <p className="text-sm text-zinc-400">Downloadable CAD schematics, 3D printable files, and code repositories for Arduino, ESP32, and Raspberry Pi builds.</p>
            </div>
            
            {/* Box 3: Gear Setup */}
            <div className="p-6 bg-[#13141c] border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors">
              <div className="text-2xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-white mb-2">My Gear</h3>
              <p className="text-sm text-zinc-400">A curated, transparent list of the test bench instruments, soldering equipment, and tools I use on a daily basis.</p>
            </div>
          </div>

          {/* LATEST FEATURED PROJECT CONTEXT */}
          <div className="mt-32 max-w-4xl mx-auto text-left bg-[#13141c] border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-zinc-900 rounded-xl overflow-hidden relative border border-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bold text-sm bg-gradient-to-br from-purple-950/20 to-black">
                [ Latest Project Video Thumbnail / Image Here ]
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-xs font-bold text-[#A855F7] tracking-wider uppercase">Latest Project</span>
              <h3 className="text-2xl font-bold text-white mt-2">Building a Giant CNC Foam Cutter from Scratch</h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                In this project, I designed and built a large-scale CNC foam cutter capable of cutting intricate shapes for cosplay and prop-making. The build process involved custom electronics, stepper motors, and a unique hot wire cutting mechanism.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {/* New Watch Button with Inverted Logo */}
                <button className="flex items-center justify-center gap-2 text-xs bg-[#E50914] hover:bg-[#B80710] text-white font-bold py-2.5 px-4 rounded-xl transition-colors">
                  <Image
                    src="/images/youtube-logo-icon_filled.svg"
                    alt="YouTube Logo"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  Watch
                </button>
                <button className="text-xs bg-[#A855F7] hover:bg-[#9333EA] text-white font-bold py-2.5 px-4 rounded-xl transition-colors">
                  Read Full Docs
                </button>
                <button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors">
                  Get Gerber/STL Files
                </button>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}