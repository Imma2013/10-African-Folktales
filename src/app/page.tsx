import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-transparent flex items-center justify-between px-8 py-6 md:px-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center">
            <div className="-rotate-45 font-bold text-red-500 text-xl">B</div>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">Book</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white font-medium uppercase text-sm tracking-widest">
          <a href="#" className="hover:text-gray-200 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-200 transition-colors">About</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Fact</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Price</a>
          <a href="#" className="hover:text-gray-200 transition-colors">Course</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition-colors">
            Pages <span className="text-[10px]">▼</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#ff4d29] via-[#ff3131] to-[#ff2121] px-6 py-20 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h4 className="uppercase tracking-[0.3em] font-semibold text-sm">Author: Dr. Elizabeth Barika</h4>
            <h1 className="text-5xl md:text-8xl font-black uppercase leading-tight">
              New <br /> Adventure
            </h1>
            <p className="text-white/90 text-lg max-w-lg leading-relaxed">
              Discover the wisdom of ages with "10 African Folktales". Each story is a journey into the heart of African culture, filled with life lessons and ancient proverbs.
            </p>
            <div className="pt-8">
              <button className="bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl uppercase tracking-widest text-sm">
                Buy Now for $8.25
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* 3D Book Illustration Container */}
            <div className="relative w-full max-w-[400px] aspect-[3/4] preserve-3d">
                <div className="w-full h-full bg-[#1a1a1a] rounded-r-lg shadow-2xl relative overflow-hidden transform hover:scale-105 transition-transform duration-500 border-l-[12px] border-white/10">
                    <Image 
                      src="/images/new-hero.png" 
                      alt="10 African Folktales Book Front" 
                      fill
                      className="object-contain"
                    />
                </div>
                {/* Book Spine Shadow */}
                <div className="absolute -left-4 top-4 bottom-4 w-4 bg-black/20 blur-md rounded-l-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-32 bg-slate-50 px-6 md:px-20" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Editorial Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/images/author-new.png" 
                  alt="Dr. Elizabeth Barika" 
                  fill
                  className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-[0.2em] rounded-full">
                  The Visionary Author
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                  Dr. Elizabeth <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                    Barika
                  </span>
                </h2>
              </div>

              <div className="space-y-8 text-slate-600 text-xl leading-relaxed font-medium max-w-2xl">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-red-600 first-letter:mr-3 first-letter:float-left">
                  Dr. Elizabeth Barika is a celebrated storyteller and cultural custodian, dedicated to preserving the rich oral traditions of Africa. Through "10 African Folktales," she bridges the gap between generations, weaving wisdom and wonder into every page.
                </p>
                <div className="p-8 border-l-4 border-red-500 bg-white shadow-sm rounded-r-2xl italic text-slate-500 text-lg">
                  "Our stories are the heartbeat of our heritage. To tell them is to keep our ancestors alive and our children inspired."
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">10+</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Folktales</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">25k</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Readers</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">4.9/5</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-24 bg-gray-50 px-6 md:px-20" id="price">
         <div className="container mx-auto space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic">Choose your edition</h2>
               <p className="text-gray-500">Pick the format that best suits your reading style</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Digital Edition */}
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="space-y-2">
                     <h3 className="text-xl font-bold">Digital Edition</h3>
                     <p className="text-sm text-gray-500">Instant PDF Download</p>
                  </div>
                  <p className="text-3xl font-black text-blue-600">$8.25</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
                     <li className="flex items-center gap-2">✓ High-quality PDF</li>
                     <li className="flex items-center gap-2">✓ Read on any device</li>
                     <li className="flex items-center gap-2">✓ Instant delivery</li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors uppercase tracking-widest text-xs">
                    Get Digital
                  </button>
               </div>

               {/* Paperback Edition (Highlighted) */}
               <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-red-500 flex flex-col items-center text-center space-y-6 transform md:scale-105 relative z-10">
                  <div className="absolute -top-4 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
                  <div className="space-y-2">
                     <h3 className="text-xl font-bold">Paperback</h3>
                     <p className="text-sm text-gray-500">Premium Glossy Finish</p>
                  </div>
                  <p className="text-3xl font-black text-red-600">$15.99</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
                     <li className="flex items-center gap-2">✓ Beautifully printed</li>
                     <li className="flex items-center gap-2">✓ 70lb paper quality</li>
                     <li className="flex items-center gap-2">✓ Ships worldwide</li>
                  </ul>
                  <button className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-widest text-xs">
                    Order Paperback
                  </button>
               </div>

               {/* Hardcover Edition */}
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="space-y-2">
                     <h3 className="text-xl font-bold">Hardcover</h3>
                     <p className="text-sm text-gray-500">Deluxe Library Edition</p>
                  </div>
                  <p className="text-3xl font-black text-gray-900">$24.99</p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left w-full">
                     <li className="flex items-center gap-2">✓ Durable hard binding</li>
                     <li className="flex items-center gap-2">✓ Gold-leaf details</li>
                     <li className="flex items-center gap-2">✓ Perfect for gifting</li>
                  </ul>
                  <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors uppercase tracking-widest text-xs">
                    Get Hardcover
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-center text-gray-500 text-sm">
        <p>&copy; 2026 10 African Folktales Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
