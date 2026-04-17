import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/i18n";
import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";
import { CalendarIcon, Users, ChevronDown, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// THE CORRECTED 5-ROOM ARRAY
// Mapped perfectly to your original guest capacities
const rooms = [
  { id: "deluxe-201", label: { de: "Deluxe Zimmer 201", en: "Deluxe Room 201" }, maxGuests: 2 },
  { id: "deluxe-202", label: { de: "Deluxe Zimmer 202", en: "Deluxe Room 202" }, maxGuests: 2 },
  { id: "junior-301", label: { de: "Junior Suite 301", en: "Junior Suite 301" }, maxGuests: 4 },
  { id: "junior-302", label: { de: "Junior Suite 302", en: "Junior Suite 302" }, maxGuests: 4 },
  { id: "executive-401", label: { de: "Executive Suite 401", en: "Executive Suite 401" }, maxGuests: 6 },
];

const BookingSection = () => {
  const { lang } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);

  const locale = lang === "de" ? de : enUS;
  
  // Find the selected room based on the ID
  const selectedRoom = rooms.find((r) => r.id === selectedRoomId);
  // Default to 6 max guests if nothing is selected yet, 
  // but clamps immediately once a room is picked
  const maxGuests = selectedRoom?.maxGuests ?? 6;

  const handleInquire = () => {
    const room = selectedRoom;
    const dateRange = checkIn && checkOut
      ? `${format(checkIn, "dd.MM.yyyy")} - ${format(checkOut, "dd.MM.yyyy")}`
      : "";
    const subject = lang === "de" ? "Buchungsanfrage: The Karlchen" : "Booking Inquiry: The Karlchen";
    const body = lang === "de"
      ? `Hallo,%0A%0AIch möchte gerne folgendes Zimmer anfragen:%0A%0AZimmer: ${room?.label.de ?? ""}%0AZeitraum: ${dateRange}%0AGäste: ${guests}%0A%0AMit freundlichen Grüßen`
      : `Hello,%0A%0AI would like to inquire about the following room:%0A%0ARoom: ${room?.label.en ?? ""}%0APeriod: ${dateRange}%0AGuests: ${guests}%0A%0ABest regards`;

    window.location.href = `mailto:info@fewolieblingsplatz.de?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-normal text-4xl md:text-5xl text-foreground mb-4">
            {t(translations.booking.title, lang)}
          </h2>
          <p className="font-heading italic text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            {t(translations.booking.subtitle, lang)}
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          
          <div className="bg-card/50 border border-border/50 p-8 md:p-12 rounded-sm shadow-sm">
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Check-in */}
              <div>
                <label className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/80 mb-3 block">
                  {t(translations.booking.checkIn, lang)}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-body h-14 border-border/50 bg-background/50",
                        !checkIn && "text-muted-foreground/70"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-4 w-4 opacity-70" strokeWidth={1.5} />
                      {checkIn
                        ? format(checkIn, "PPP", { locale })
                        : t(translations.booking.selectDate, lang)}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 border-border/50" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto font-body"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out */}
              <div>
                <label className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/80 mb-3 block">
                  {t(translations.booking.checkOut, lang)}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-body h-14 border-border/50 bg-background/50",
                        !checkOut && "text-muted-foreground/70"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-4 w-4 opacity-70" strokeWidth={1.5} />
                      {checkOut
                        ? format(checkOut, "PPP", { locale })
                        : t(translations.booking.selectDate, lang)}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 border-border/50" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) =>
                        date < new Date() || (checkIn ? date <= checkIn : false)
                      }
                      initialFocus
                      className="p-3 pointer-events-auto font-body"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              
              {/* Room selector */}
              <div>
                <label className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/80 mb-3 block">
                  {lang === "de" ? "Zimmer" : "Room"}
                </label>
                <Popover open={roomDropdownOpen} onOpenChange={setRoomDropdownOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-between text-left font-body h-14 border-border/50 bg-background/50",
                        !selectedRoomId && "text-muted-foreground/70"
                      )}
                    >
                      {selectedRoom
                        ? selectedRoom.label[lang]
                        : (lang === "de" ? "Zimmer Auswählen" : "Select Room")}
                      <ChevronDown className="h-4 w-4 opacity-50" strokeWidth={1.5} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border-border/50" align="start">
                    <div className="flex flex-col max-h-[300px] overflow-y-auto">
                      {rooms.map((room) => (
                        <button
                          key={room.id}
                          onClick={() => {
                            setSelectedRoomId(room.id);
                            setRoomDropdownOpen(false);
                            // If they had 6 guests selected and switch to a Deluxe, it automatically drops to 2!
                            if (guests > room.maxGuests) setGuests(room.maxGuests);
                          }}
                          className={cn(
                            "px-4 py-3.5 text-left font-body text-sm hover:bg-accent/50 transition-colors border-b border-border/50 last:border-0",
                            selectedRoomId === room.id && "bg-accent/50 text-accent-foreground"
                          )}
                        >
                          <span className="block">{room.label[lang]}</span>
                          {/* Added a tiny visual helper to show max guests in the dropdown list */}
                          <span className="text-[0.65rem] text-muted-foreground/70 tracking-widest uppercase mt-0.5 block">
                            Max {room.maxGuests} {t(translations.booking.guestPlural, lang)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guest count */}
              <div>
                <label className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/80 mb-3 block">
                  {t(translations.booking.guestCount, lang)}
                </label>
                <div className="flex items-center border border-border/50 bg-background/50 rounded-md h-14 px-4">
                  <Users className="h-4 w-4 text-muted-foreground/70 mr-3" strokeWidth={1.5} />
                  <span className="font-body text-sm flex-1 text-foreground/90">
                    {guests} {guests === 1 ? t(translations.booking.guest, lang) : t(translations.booking.guestPlural, lang)}
                  </span>
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus size={14} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors ml-1"
                    // Optionally fade out the Plus button when they hit the room limit
                    disabled={guests >= maxGuests}
                    style={{ opacity: guests >= maxGuests ? 0.3 : 1 }}
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleInquire}
              className="w-full bg-[#362D28] hover:bg-[#251f1b] text-white py-4 font-body text-sm tracking-[0.15em] uppercase transition-colors rounded-sm"
            >
              {t(translations.booking.inquire, lang)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;