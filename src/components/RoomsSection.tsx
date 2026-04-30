import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { Users, Wifi, Coffee, BedDouble, Check } from "lucide-react";

// Ensure you have all 5 images matching these imports!
import room1 from "@/assets/gallery-1.jpg";
import room2 from "@/assets/gallery-2.jpg";
import room3 from "@/assets/gallery-3.jpg";
import room4 from "@/assets/gallery-4.jpg";
import room5 from "@/assets/gallery-5.jpg";

const RoomsSection = () => {
  const { lang } = useLanguage();

  const rooms = [
    {
      img: room1,
      name: "Karlchen Suite",
      price: 250,
      guests: 6,
      bed: lang === "de" ? "3 Schlafzimmer" : "3 Bedrooms",
      desc: lang === "de" ? "110 m² Dachgeschoss mit Terrasse" : "110 m² Top Floor with Terrace",
      features: {
        de: ["110 m² Wohnfläche", "3 Schlafzimmer (2m Betten)", "2 Balkone / Dachterrassen", "Voll ausgestattete Küche", "Smart-TV & Wohnbereich"],
        en: ["110 m² living space", "3 bedrooms (2m beds)", "2 balconies / terraces", "Fully equipped kitchen", "Smart TV & living area"]
      }
    },
    {
      img: room2,
      name: "Paulchen Suite",
      price: 160,
      guests: 2,
      bed: "King Size Bed",
      desc: lang === "de" ? "Dachgeschoss – hell & gemütlich" : "Top Floor – Bright & Cozy",
      features: {
        de: ["King Size Bett (2m)", "Voll ausgestattete Küche", "Essbereich & Sofa", "Modernes Badezimmer", "Smart-TV"],
        en: ["King-size bed (2m)", "Fully equipped kitchen", "Dining area & sofa", "Modern bathroom", "Smart TV"]
      }
    },
    {
      img: room3,
      name: "Karlchen Apartment I",
      price: 150,
      guests: 2,
      bed: lang === "de" ? "1 Schlafzimmer" : "1 Bedroom",
      desc: lang === "de" ? "Perfekt für Paare" : "Perfect for couples",
      features: {
        de: ["1 Schlafzimmer mit großem Bett", "Wohnbereich mit Sofa", "Voll ausgestattete Küche", "Essbereich", "Smart-TV"],
        en: ["1 bedroom with large bed", "Living area with sofa", "Fully equipped kitchen", "Dining area", "Smart TV"]
      }
    },
    {
      img: room4,
      name: "Karlchen Apartment II",
      price: 190,
      guests: 4,
      bed: lang === "de" ? "2 Schlafzimmer" : "2 Bedrooms",
      desc: lang === "de" ? "Großzügiger Wohnbereich" : "Spacious living area",
      features: {
        de: ["2 Schlafzimmer", "Wohnbereich mit Sofa & TV", "Voll ausgestattete Küche", "Essbereich", "Modernes Badezimmer"],
        en: ["2 bedrooms", "Living area with sofa & TV", "Fully equipped kitchen", "Dining area", "Modern bathroom"]
      }
    },
    {
      img: room5,
      name: "Karlchen Apartment III",
      price: 190,
      guests: 4,
      bed: lang === "de" ? "2 Schlafzimmer" : "2 Bedrooms",
      desc: lang === "de" ? "Stilvolle Einrichtung" : "Stylish interior",
      features: {
        de: ["2 Schlafzimmer", "Stilvolle Einrichtung", "Smart-TV & Wohnbereich", "Komplett ausgestattete Küche", "Badezimmer mit Dusche"],
        en: ["2 bedrooms", "Stylish interior", "Smart TV & living area", "Fully equipped kitchen", "Bathroom with shower"]
      }
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
        
        {/* Section Header with the Client's Custom Description */}
        <div className="text-center mb-20 animate-fade-in-up max-w-3xl mx-auto">
          <h2 className="font-heading font-normal text-4xl md:text-5xl text-foreground mb-4">
            {t(translations.rooms.title, lang)}
          </h2>
          <p className="font-heading italic text-xl md:text-2xl text-foreground/90 font-light tracking-wide mb-6">
            {lang === "de" 
              ? "Stilvoll wohnen mit Wohlfühlatmosphäre." 
              : "Stylish living with a cozy atmosphere."}
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {lang === "de"
              ? "Unsere Apartments und Suiten vereinen modernes Design mit einer warmen, gemütlichen Beleuchtung, die sofort ein Gefühl von Zuhause schafft. Sanfte Lichtquellen, stilvolle Möbel und harmonische Farben sorgen für eine entspannte Atmosphäre – ideal für kurze Aufenthalte oder längere Zeit."
              : "Our apartments and suites combine modern design with warm, cozy lighting that instantly creates a feeling of home. Soft light sources, stylish furniture, and harmonious colors ensure a relaxed atmosphere – perfect for both short stays and longer visits."}
          </p>
        </div>

        {/* The Flexbox Layout: Automatically centers the last two items on big screens */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {rooms.map((room, index) => (
            <div 
              key={room.name} 
              // Width calculations to mimic a 3-column grid, but centered using flex
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex flex-col group animate-fade-in-up bg-card/50 border border-border/50 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* Image with extreme slow-pan zoom effect */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8">
                
                <h3 className="font-heading font-normal text-2xl md:text-[1.75rem] text-foreground mb-1 tracking-wide">
                  {room.name}
                </h3>
                
                <p className="font-body text-[0.65rem] text-muted-foreground/80 uppercase tracking-widest mb-6">
                  {room.desc}
                </p>

                {/* The Client's Detailed Bullet Points */}
                <ul className="flex-grow space-y-2 mb-8">
                  {room.features[lang].map((feature, i) => (
                    <li key={i} className="flex items-start text-sm font-body text-muted-foreground/90 leading-tight">
                      <Check size={14} className="mr-2 mt-0.5 text-foreground/50 shrink-0" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price */}
                <p className="font-heading text-muted-foreground text-sm mb-6 border-t border-border/50 pt-6">
                  {t(translations.rooms.from, lang)} <span className="font-semibold text-foreground text-xl italic">€{room.price}</span> {t(translations.rooms.perNight, lang)}
                </p>

                {/* Footer Icons */}
                <div className="space-y-3 mb-8 text-[0.8rem] font-body text-muted-foreground/90 tracking-wide bg-background/50 p-4 rounded-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5"><Users size={14} strokeWidth={1.5} /> {room.guests} {t(translations.rooms.guests, lang)}</span>
                    <span className="flex items-center gap-1.5"><BedDouble size={14} strokeWidth={1.5} /> {room.bed}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5"><Wifi size={14} strokeWidth={1.5} /> {t(translations.rooms.freeWifi, lang)}</span>
                    <span className="flex items-center gap-1.5"><Coffee size={14} strokeWidth={1.5} /> {t(translations.rooms.breakfast, lang)}</span>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="w-full mt-auto block text-center bg-[#362D28] hover:bg-[#251f1b] text-white font-body py-4 tracking-[0.15em] transition-colors uppercase text-xs rounded-sm"
                >
                  {t(translations.rooms.checkAvailability, lang)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;