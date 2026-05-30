function Navbar() {
  return (
    <>
    <nav>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {/* Menyu Linkləri */}
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Katalog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Yeni Maşınlar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Kredit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Elanlar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Əlaqə
            </a>
          </li>

          {/* Gündüz/Gecə Rejimi Düyməsi */}
          <li>
            <button className="flex items-center justify-center p-1.5 rounded-lg dark:bg-gray-50 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 border border-gray-200/60 dark:border-gray-700/60 transition-all active:scale-95">
              {/* Gündüz ikonası */}
              <svg
                className="w-4 h-4 hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              {/* Gecə ikonası */}
              <svg
                className="w-4 h-4 block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-7.072 0z"
                />
              </svg>
            </button>
          </li>

          {/* Dil Seçimi (Dropdown) */}
          <li className="relative inline-block group">
            <button className="flex items-center gap-1.5 py-1 text-gray-600 hover:text-red-500 transition-colors duration-300 focus:outline-none select-none">
              <svg
                className="w-4 h-4 opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z"
                />
              </svg>
              <span className="uppercase tracking-wide">AZ</span>
              <svg
                className="w-3 h-3 opacity-60 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menyu */}
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform origin-top-right scale-95 group-hover:scale-100 z-50">
              <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-red-600 bg-red-50/60 rounded-lg transition-colors">
                <span>Azərbaycanca</span>
                <span className="text-[10px] bg-red-500 text-white px-1 rounded">AZ</span>
              </button>
              <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors mt-0.5">
                <span>English</span>
                <span className="text-[10px] text-gray-400">EN</span>
              </button>
              <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors mt-0.5">
                <span>Русский</span>
                <span className="text-[10px] text-gray-400">RU</span>
              </button>
            </div>
          </li>

          {/* Giriş və Qeydiyyat Düymələri (Sol tərəfdən bir az boşluq əlavə edildi) */}
          <li className="flex items-center gap-3 ml-4">
            <button className="px-4 py-2 text-gray-700 font-medium rounded-full hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out whitespace-nowrap">
              Daxil ol
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full shadow-md shadow-blue-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap">
              Qeydiyyatdan keç
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
