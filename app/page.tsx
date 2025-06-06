import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import SupportCard from "@/components/SupportCard";


export default function Home() {
  return (
    <main className="bg-[#f7f6f3] min-h-screen">
      <Header/>
      <ProductShowcase/>
      <SupportCard/>
      <Footer/>
    </main>
  );
}
