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
                      src="/images/book-front.png" 
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
      <section className="py-24 bg-white px-6 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="bg-[#f5f5f5] aspect-[4/5] rounded-lg overflow-hidden relative shadow-inner">
                <Image 
                  src="/images/author.png" 
                  alt="Dr. Elizabeth Barika" 
                  fill
                  className="object-cover"
                />
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Dr. Elizabeth Barika</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                    Inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards – especially in the workplace. That's why it's crucial that, as women.
                </p>
                <p>
                    Inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards – especially in the workplace. That's why it's crucial that, as women. inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards – especially in the workplace. That's why it's crucial that, as women.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Counter Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden px-6 md:px-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
        <div className="container mx-auto relative z-10 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Some Features that Made us Unique</h2>
            <p className="text-gray-400">Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Happy Clients", value: "2536" },
              { label: "Total Projects", value: "6784" },
              { label: "Cups Coffee", value: "1059" },
              { label: "Tickets Submitted", value: "12239" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-lg shadow-2xl space-y-2">
                <h3 className="text-4xl font-bold text-red-500">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
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
                  <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-md flex items-center justify-center relative overflow-hidden">
                     <Image src="/images/book-front.png" alt="Digital Edition" fill className="object-contain" />
                  </div>
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
                  <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-md flex items-center justify-center relative overflow-hidden">
                     <Image src="/images/book-front.png" alt="Paperback Edition" fill className="object-contain" />
                  </div>
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
                  <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-md flex items-center justify-center relative overflow-hidden">
                     <Image src="/images/book-back.png" alt="Hardcover Edition" fill className="object-contain" />
                  </div>
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
