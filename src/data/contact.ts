import type { ContactInfo } from "@/types";

export const contactInfo: ContactInfo[] = [
  {
    label: "address point",
    value: "123 Street New York City, United States Of America 750065.",
    icon: "fa-map-marker",
  },
  {
    label: "mail me",
    value: "steve@mail.com",
    icon: "fa-envelope-open",
    href: "mailto:steve@mail.com",
  },
  {
    label: "call me",
    value: "+216 21 184 010",
    icon: "fa-phone-square",
    href: "tel:+21621184010",
  },
];
