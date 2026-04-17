export type Lang = "de" | "en";

export const translations = {
  nav: {
    home: { de: "Home", en: "Home" },
    stay: { de: "Zimmer", en: "Stay" }, // Upgraded to 'Zimmer'
    contact: { de: "Kontakt", en: "Contact" },
  },
  hero: {
    the: { de: "THE", en: "THE" },
    name: { de: "KARLCHEN", en: "KARLCHEN" },
    tagline: { de: "Wohnen. Leben. Entspannen.", en: "Stay. Live. Relax." },
  },
  rooms: {
    title: { de: "Unsere Zimmer", en: "Our Rooms" }, // Upgraded from Apartments
    subtitle: {
      de: "Entdecken Sie unsere eleganten Zimmer & Suiten.",
      en: "Browse our elegant rooms & suites.",
    },
    // Removed the 1/2/3 bedroom keys since we handle specific room names in the component now
    available: { de: "verfügbar", en: "available" },
    perNight: { de: "pro Nacht", en: "per night" },
    from: { de: "Ab", en: "From" },
    guests: { de: "Gäste", en: "Guests" },
    freeWifi: { de: "Gratis WLAN", en: "Free Wi-Fi" },
    breakfast: { de: "Frühstück inklusive", en: "Breakfast Included" },
    checkAvailability: { de: "Verfügbarkeit prüfen", en: "Check Availability" },
  },
  booking: {
    title: { de: "Verfügbarkeit prüfen & Buchen", en: "Check Availability & Book" },
    subtitle: {
      de: "Wählen Sie Ihren Wunschzeitraum und prüfen Sie die Verfügbarkeit.",
      en: "Select your dates and check availability.",
    },
    checkIn: { de: "Anreise", en: "Check-in" },
    checkOut: { de: "Abreise", en: "Check-out" },
    selectDate: { de: "Datum wählen", en: "Select date" },
    room: { de: "Zimmer", en: "Room" }, // Replaced 'apartment'
    selectRoom: { de: "Zimmer wählen", en: "Select room" }, // Replaced 'selectApartment'
    guestCount: { de: "Anzahl Gäste", en: "Number of Guests" },
    guest: { de: "Gast", en: "Guest" },
    guestPlural: { de: "Gäste", en: "Guests" },
    bookNow: { de: "Jetzt buchen", en: "Book Now" },
    inquire: { de: "Jetzt Anfragen", en: "Inquire" },
  },
  gallery: {
    title: { de: "Galerie", en: "Gallery" },
    subtitle: {
      de: "Eindrücke aus unseren Zimmern & Suiten", // Upgraded from Ferienwohnungen
      en: "Impressions from our rooms & suites",
    },
  },
  contact: {
    title: { de: "Kontakt", en: "Contact" },
    subtitle: {
      de: "Wir freuen uns auf Ihre Anfrage",
      en: "We look forward to your inquiry",
    },
    property: { de: "Boutique Hotel", en: "Boutique Hotel" }, // Upgraded from Ferienwohnung
    owner: { de: "Inhaberin", en: "Owner" },
    phone: { de: "Telefon", en: "Phone" },
  },
  footer: {
    imprint: { de: "Impressum", en: "Imprint" },
    privacy: { de: "Datenschutz", en: "Privacy Policy" },
    rights: { de: "Alle Rechte vorbehalten", en: "All rights reserved" },
    location: { de: "Rheda-Wiedenbrück", en: "Rheda-Wiedenbrück" },
  },
} as const;

export function t(key: Record<Lang, string>, lang: Lang): string {
  return key[lang];
}