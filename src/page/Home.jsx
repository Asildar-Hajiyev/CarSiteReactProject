import Section1 from "./Home/Section1"
import Section2_carFilter from "./Home/Section2_carFilter"
import Section3_Category from "./Home/Section3_Category"

function Home() {
  return (
    <main className="w-full py-6 md:py-10 bg-slate-50">
        <Section1/>
        <Section2_carFilter/>
        <Section3_Category/>
      
    </main>
  )
}

export default Home
