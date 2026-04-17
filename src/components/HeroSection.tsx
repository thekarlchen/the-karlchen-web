import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import heroCollage from "@/assets/gallery-2.jpg"; 

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="home" className="w-full bg-background pt-24 pb-4 px-4 md:pt-32 md:pb-12 md:px-12 lg:pt-36 lg:pb-16 lg:px-16 flex justify-center">
      
      <div className="relative w-full max-w-[1600px] h-[65vh] md:h-[80vh] overflow-hidden rounded-sm shadow-md">
        
        <div className="absolute inset-0 z-0">
          <img
            src={heroCollage}
            alt="The Karlchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay bg-black/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center animate-fade-in-up px-4">
          
          {/* SIZING FIX: Made "THE" much larger (text-lg to text-3xl) */}
          {/* Spacing Fix: Reduced the bottom margin (mb-2) so it sits closer to Karlchen */}
          <p className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.4em] text-primary-foreground/90 uppercase mb-2">
            {t(translations.hero.the, lang)}
          </p>
          
          <div className="flex flex-col items-center w-fit mx-auto mb-6">
            {/* SIZING FIX: Scaled "KARLCHEN" down (text-3xl to 4.5rem) so it balances perfectly with "THE" */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-semibold text-primary-foreground tracking-[0.15em] drop-shadow-lg mb-4 whitespace-nowrap">
              {t(translations.hero.name, lang)}
            </h1>
            
            <div className="w-full h-[1px] bg-white/70" />
          </div>

          <p className="font-heading text-base md:text-2xl italic text-white font-light tracking-[0.15em] drop-shadow-md">
            {t(translations.hero.tagline, lang)}
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;