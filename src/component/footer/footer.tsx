export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Kolom 1 - Logo dan Deskripsi */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">PT Centra Energy Optima</h2>
          <p className="text-sm leading-relaxed mb-6">
            Become a leading gold company from the region that has national network and international brand
          </p>

          {/* Tombol Download */}
          <a
            href="/documents/compro-ceo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-[#0B1120] font-semibold px-5 py-2 rounded-full transition-all shadow-md hover:shadow-yellow-300/30"          
          >
            Download Company Profile
          </a>
        </div>

        {/* Kolom 2 - Profil */}
        <div>
          <h3 className="text-white font-semibold mb-4">Profil</h3>
          <ul className="space-y-2">
            <li><a href="/profil/perusahaan" className="hover:text-yellow-400 transition-colors">Profil Perusahaan</a></li>
            <li><a href="/direksi" className="hover:text-yellow-400 transition-colors">Profil Direksi</a></li>
            <li><a href="/komisaris" className="hover:text-yellow-400 transition-colors">Profil Komisaris</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Business Line */}
        <div>
          <h3 className="text-white font-semibold mb-4">Business Line</h3>
          <ul className="space-y-2">
            <li><a href="/business/refinery" className="hover:text-yellow-400 transition-colors">Refinery</a></li>
            <li><a href="/business/trading" className="hover:text-yellow-400 transition-colors">Trading</a></li>
          </ul>
        </div>

        {/* Kolom 4 - Lainnya */}
        <div>
          <h3 className="text-white font-semibold mb-4">Lainnya</h3>
          <ul className="space-y-2">
            <li><a href="/galeri" className="hover:text-yellow-400 transition-colors">Galeri</a></li>
            <li><a href="/news" className="hover:text-yellow-400 transition-colors">News</a></li>
            <li><a href="/kontak" className="hover:text-yellow-400 transition-colors">Kontak</a></li>
          </ul>
        </div>

      </div>

      {/* Garis pemisah */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} PT Centra Energy Optima. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition-colors">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
