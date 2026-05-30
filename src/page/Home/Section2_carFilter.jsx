import { FaCarSide } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";


function Section2_carFilter() {
  function filterDetails() {
    let details = document.getElementById("details");
    if (details) {
      details.style.display =
        details.style.display === "block" ? "none" : "block";
    }
  }
  return (
<section className="w-full py-6 md:py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        
        {/* ƏSAS FİLTER FORMU */}
        <form className="bg-white rounded-2xl md:rounded-3xl border border-slate-100 p-4 md:p-8 shadow-md space-y-6">
          
          {/* AXTARIŞ SƏTRİ VƏ RESPONSIVE DÜYMƏLƏR */}
          <div className="flex flex-col lg:flex-row gap-3 items-stretch">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Maşın, marka və model axtar..."
                className="w-full pl-4 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Düymələr qrupu mobildə alt-alta, sm-dən etibarən yan-yana düzülür */}
            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm shadow-orange-200"
              >
                Axtar
              </button>
              <button
                type="button"
                onClick={filterDetails}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors bg-white select-none"
              >
                Filter
              </button>
              <button
                type="reset"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors bg-white"
              >
                Sıfırla
              </button>
            </div>
          </div>

          {/* SÜRƏTLİ FİLTER TAG-LƏRİ */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Sürətli seçimlər
            </p>
            {/* Mobildə sürüşdürüb baxmaq üçün daşma funksiyası (X-Overflow) və ya bükülmə */}
            <div className="flex flex-wrap gap-2">
              {[
                "Avtomat",
                "Mexanika",
                "Kredit",
                "Barter",
                "SUV",
                "Sedan",
                "Hibrid",
                "Elektrik",
              ].map((tag, index) => (
                <div key={tag}>
                  <input
                    type="checkbox"
                    id={`tag-${index}`}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={`tag-${index}`}
                    className="block px-3.5 py-2 text-xs rounded-full border bg-white border-slate-200 text-slate-600 cursor-pointer select-none transition-all whitespace-nowrap
                               hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600
                               peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:text-white peer-checked:font-medium peer-checked:shadow-md"
                  >
                    {tag}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* DETALLI FİLTER PANELİ (Tam responsive grid yapısı ilə) */}
          <div id="details" className="space-y-6 hidden">
            <hr className="border-slate-100" />

            {/* Əsas filtrlər: Mobildə 1, kiçik ekranlarda 2, planşet/kompüterdə 4 sütun */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Əsas filtrlər
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Brend</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Toyota</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Model</option>
                  <option>X5</option>
                  <option>C-Class</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">İl (dan)</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2015</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">İl (a qədər)</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
            </div>

            {/* Texniki Göstəricilər: Mobildə 1, planşetdə 3 sütun */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Texniki göstəricilər
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Yanacaq növü</option>
                  <option>Benzin</option>
                  <option>Dizel</option>
                  <option>Hibrid</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Ötürücü</option>
                  <option>Ön</option>
                  <option>Arxa</option>
                  <option>4x4</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Karobka</option>
                  <option>Avtomat</option>
                  <option>Mexanika</option>
                  <option>Robot</option>
                </select>
              </div>
            </div>

            {/* Əlavə Filtrlər: Mobildə 1, planşetdə 3 sütun */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Əlavə məlumatlar
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Ban növü</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Hatchback</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Şəhər</option>
                  <option>Bakı</option>
                  <option>Gəncə</option>
                  <option>Sumqayıt</option>
                </select>
                <select className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all">
                  <option value="">Rəng</option>
                  <option>Ağ</option>
                  <option>Qara</option>
                  <option>Boz</option>
                </select>
              </div>
            </div>

            {/* Qiymət Aralığı */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row justify-between text-xs font-bold text-slate-500 gap-1 mb-3">
                <span className="uppercase tracking-wider">Qiymət aralığı</span>
                <span className="text-orange-500 font-extrabold text-sm">
                  Maksimum: 100,000 ₼
                </span>
              </div>
              <div className="w-full">
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={1000}
                  defaultValue={100000}
                  className="accent-orange-500 w-full cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
              </div>
            </div>
          </div>
        </form>

        {/* RESPONSIVE STATİSTİKA BLOKU */}
        {/* Mobildə grid-cols-2 (yan-yana iki dənə), md-dən etibarən grid-cols-4 olur */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-100 p-5 md:p-6 shadow-md">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-4 divide-y-0 md:divide-x divide-slate-100">
            
            {/* Aktiv Elan */}
            <li className="flex flex-col items-center justify-center text-center">
              <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">12,400<span className="text-orange-500">+</span></span>
              <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Aktiv elan</span>
            </li>
            
            {/* Satıcı */}
            <li className="flex flex-col items-center justify-center text-center md:pl-4">
              <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">3,200<span className="text-orange-500">+</span></span>
              <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Satıcı</span>
            </li>
            
            {/* Bu ay satıldı */}
            <li className="flex flex-col items-center justify-center text-center md:pl-4 border-t border-slate-50 pt-4 md:pt-0 md:border-t-0">
              <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">850<span className="text-orange-500">+</span></span>
              <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Bu ay satıldı</span>
            </li>
            
            {/* İstifadəçi */}
            <li className="flex flex-col items-center justify-center text-center md:pl-4 border-t border-slate-50 pt-4 md:pt-0 md:border-t-0">
              <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">48,000<span className="text-orange-500">+</span></span>
              <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">İstifadəçi</span>
            </li>

          </ul>
        </div>

      <div className="w-full bg-white rounded-3xl border border-slate-100 p-6 shadow-md space-y-6 mt-6">
      
      {/* BAŞLIQ HİSSƏSİ */}
      <div className="">
        <h4 className="font-extrabold text-xl md:text-2xl text-slate-800 tracking-tight">
          Kateqoriyalar
        </h4> 
      </div>

      {/* KATEGORİYA KARTLARI GRID SİSTEMİ */}
      {/* Mobildə 2 sütun (2-2), planşet və kompüterdə yan-yana 4 sütun olur */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Yeni Maşınlar */}
        <div className="group border border-slate-100 bg-slate-50/50 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-2xl group-hover:bg-orange-500 group-hover:text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
            <FaCarSide />
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm md:text-base">Yeni maşınlar</p>
            <span className="text-xs font-medium text-slate-400 mt-0.5 block">890 elan</span>
          </div>
        </div>

        {/* Salon Maşınları */}
        <div className="group border border-slate-100 bg-slate-50/50 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/20 group-hover:scale-110 transition-all">
            <FaStore />
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm md:text-base">Salon maşınları</p>
            <span className="text-xs font-medium text-slate-400 mt-0.5 block">890 elan</span>
          </div>
        </div>

        {/* İşlənmiş */}
        <div className="group border border-slate-100 bg-slate-50/50 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/20 group-hover:scale-110 transition-all">
            <LuRefreshCcw />
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm md:text-base">İşlənmiş</p>
            <span className="text-xs font-medium text-slate-400 mt-0.5 block">890 elan</span>
          </div>
        </div>

        {/* Klassik */}
        <div className="group border border-slate-100 bg-slate-50/50 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/20 group-hover:scale-110 transition-all">
            <TfiCup />
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm md:text-base">Klassik</p>
            <span className="text-xs font-medium text-slate-400 mt-0.5 block">890 elan</span>
          </div>
        </div>

      </div>
    </div>
      </div>
    </section>
  );
}

export default Section2_carFilter;
