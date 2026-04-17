import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
// Importing the exact icons we need for the amenities list
import { Users, BedDouble, Wifi, Coffee } from "lucide-react"; 

// NOTE: Update these imports to point to your actual room photos!
import room1 from "@/assets/gallery-1.jpg"; 
import room2 from "@/assets/gallery-2.jpg";
import room3 from "@/assets/gallery-3.jpg";

const RoomsSection = () => {
  const { lang } = useLanguage();

  // We store the room data in an array so it's incredibly easy to edit later
  const rooms = [
    {
      name: "Deluxe Room",
      price: "150",
      image: room1,
    },
    {
      name: "Junior Suite",
      price: "220",
      image: room2,
    },
    {
      name: "Executive Suite",
      price: "290",
      image: room3,
    },
  ];

  return (
    <section id="stay" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
        
        {/* 1. Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Our Rooms
          </h2>
          <p className="font-heading italic text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Browse our elegant rooms & suites.
          </p>
        </div>

        {/* 2. Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {rooms.map((room, index) => (
            <div key={index} className="flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Room Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 rounded-sm">
                <img
                  src={room.image}
                  alt={room.name}
                  // This adds that luxury slow-zoom effect when you hover over the image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Room Content */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  {room.name}
                </h3>

                {/* Price */}
                <p className="font-body text-muted-foreground mb-6">
                  From <span className="font-semibold text-foreground text-lg">€{room.price}</span> per night
                </p>

                {/* Amenities Block */}
                <div className="space-y-3 mb-8 text-sm font-body text-muted-foreground">
                  {/* Top Line: Guests, Bed, Wifi */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="flex items-center gap-1.5">
                      <Users size={16} strokeWidth={1.5} /> 2 Guests
                    </span>
                    <span className="text-border/50">•</span>
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={16} strokeWidth={1.5} /> 1 King Bed
                    </span>
                    <span className="text-border/50">|</span>
                    <span className="flex items-center gap-1.5">
                      <Wifi size={16} strokeWidth={1.5} /> Free Wi-Fi
                    </span>
                  </div>
                  {/* Bottom Line: Breakfast */}
                  <div className="flex items-center gap-1.5">
                    <Coffee size={16} strokeWidth={1.5} /> Breakfast Included
                  </div>
                </div>

                {/* Button (Pushed to the bottom automatically by mt-auto) */}
                {/* The bg-[#362D28] is the exact dark espresso brown from your screenshot */}
                <button className="w-full mt-auto bg-[#362D28] hover:bg-[#251f1b] text-white font-body py-4 tracking-[0.1em] transition-colors uppercase text-sm rounded-sm">
                  Check Availability
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomsSection;