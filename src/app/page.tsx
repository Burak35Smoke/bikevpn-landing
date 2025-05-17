// src/app/page.tsx

import TypewriterHeading from '@/components/TypewriterHeading';

export default function HomePage() {
  const typewriterTexts = [
    "Çok Yakında!",
    "Açılıyor!",
    "Sizinle!",
    "Bike VPN Geliyor...",
    "Hızlı ve Güvenli...",
    "Özgürce Pedal Çevirin!"
  ];

  return (
    <main className="bikevpn-gradient-bg min-h-screen text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Arka Plan Bisiklet Tekerleği Animasyonu (AKTİF EDİLDİ) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 md:opacity-15 z-10 pointer-events-none"> {/* opacity-5 yerine opacity-10 veya opacity-15 dene */}
        {/* Basit bir tekerlek SVG'si. Daha detaylı bir SVG kullanabilirsin. */}
        <svg 
          className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 animate-spin text-gray-500" // animate-spin-slow yerine animate-spin
          fill="none" 
          viewBox="0 0 100 100" // Daha simetrik bir viewBox
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" strokeWidth="3" /> {/* Dış Çember */}
          <circle cx="50" cy="50" r="5" fill="currentColor" strokeWidth="1" /> {/* Merkez Nokta */}
          {/* Jant Telleri (8 adet örnek) */}
          <line x1="50" y1="50" x2="50" y2="5" strokeWidth="2" />
          <line x1="50" y1="50" x2="95" y2="50" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="95" strokeWidth="2" />
          <line x1="50" y1="50" x2="5" y2="50" strokeWidth="2" />
          <line x1="50" y1="50" x2="82" y2="18" strokeWidth="2" /> {/* ~45 derece */}
          <line x1="50" y1="50" x2="18" y2="18" strokeWidth="2" /> {/* ~135 derece */}
          <line x1="50" y1="50" x2="18" y2="82" strokeWidth="2" /> {/* ~225 derece */}
          <line x1="50" y1="50" x2="82" y2="82" strokeWidth="2" /> {/* ~315 derece */}
        </svg>
      </div>

      {/* Logo Alanı */}
      <div className="mb-8 z-10">
        <h1 className="text-5xl font-bold text-orange-500">Bike VPN</h1>
      </div>

      {/* Ana Başlık ve Alt Başlık */}
      <div className="text-center mb-12 z-10">
        <TypewriterHeading
          texts={typewriterTexts}
          typingSpeed={120}
          deletingSpeed={80}
          pauseDuration={2000}
        />
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          İnternette hızlı, güvenli ve engelsiz bir sürüş deneyimine hazır olun! Bike VPN ile dijital dünyada özgürce pedal çevirin!
        </p>
      </div>

      {/* E-posta Formu */}
      <form className="w-full max-w-md space-y-4 z-10">
        <div>
          <label htmlFor="email" className="sr-only">
            E-posta Adresiniz
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 rounded-md bg-gray-800 bg-opacity-70 text-white border border-gray-700 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 backdrop-blur-sm"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Haberdar Ol!
        </button>
        <p className="text-xs text-gray-500 text-center">
          Lansmanımızdan ve özel indirimlerden ilk siz haberdar olun! Spam yok, söz.
        </p>
      </form>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center text-gray-500 text-sm w-full z-10">
        © {new Date().getFullYear()} Bike VPN. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}