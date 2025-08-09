
import CalculadoraRetorno from "@/components/Calculo";
import ContactSection from "@/components/Contact";
import NossaAtuacao from "@/components/NossaAtuacao";
import Services from "@/components/Services";
import SobrePage from "@/components/Sobre";
import { TeamCarousel } from "@/components/TeamCarousel";
import { VideoCarousel } from "@/components/VideoCarousel";
import WhatsAppButton from "@/components/WhatsButton";



export default function Home() {
  return (
    <>
    <SobrePage/>
    <NossaAtuacao/>
    <Services/>
    <VideoCarousel/>
    <TeamCarousel/>
    <ContactSection/>
    <CalculadoraRetorno/>
    <WhatsAppButton/>
    
    
    

    </>
  );
}
