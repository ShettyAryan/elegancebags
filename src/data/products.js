/* ─────────────────────────────────────────────────────────────────────────
   ELEGANCE — Centralized data layer
   All product images, collection info, archive seasons, and marquee items
   live here so pages stay clean and data is easy to update.
───────────────────────────────────────────────────────────────────────── */

export const CAROUSEL_PRODUCTS = [
  {
    id: 1,
    name: "The Silk Satchel",
    subtitle: "Matte Finish Edition",
    badge: "NEW",
    bg: "var(--powder)",
    textColor: "var(--cornflower)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXqXEiMITSzY-QpeYKhMOroK_iWCReFDEV6qrBiZMvC8d85NlENmDmWX81Z8wXFUOE66Dqd7LMBhSktaTqUytuXAWpFyO3F8YxXLgW7EwU28ppapOSaykwtHsQxg-rGZddPz7_A2NDn7ri4-dtst8G1dNNQbTxz8KtN6a_UoZABZ3tmop1CM86ZzHQnbJ6eb7PV_FyxtgcYH_usPDl898_V98Krzxx7M0R7gx5OHMdfiXTX1WunG1aunHJakkVmekg_xylxoOI6amH",
  },
  {
    id: 2,
    name: "Azure Tote XL",
    subtitle: "Editorial Choice",
    badge: "LIMITED",
    bg: "white",
    textColor: "var(--slate-900)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQkNIksvhLI25XplWvleCjB7oWaeyZ9IQEsnS9qVEjIxajg7RqDNR1i0FWH9kZ323vkrZ5Oe4PINgKTyvuZHr_rXo-f857kZZQq-j8wOLH2gl7QkWn9GVxiRbzrBQyldftLd02Ct4Ce1_YiXuZpuWjon3Zja9uHSgoo8UOIi66qZRQROPpCWSSAnaPFlwtejAJSMcfm-RP4z7wp5P92vQKPQiqOgtzClnGRAE5VJmRbK9LaaDHyaucaKBA5HANjaeqNHpVzZpYO7W",
  },
  {
    id: 3,
    name: "Midnight Mini",
    subtitle: "Night Out Essential",
    badge: "NEW",
    bg: "var(--powder)",
    textColor: "var(--cornflower)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTi6zZ0njvRpFI9Gv_1yfPCihwPtInWkDhEo9XJ70lKVILTnL7yam3Y86WqxO5iJAB_d74XRdWbjpgOv1wociR-LBLon2VOkWuNiAS3Q9LK0Ec4fIUY3cGMYJt3SPJdaed0wsbkYJGHBTXoorfYNbJZqtaSYC7H12j9TUfbM6BZmC2MEOxB68DlSxR7rsKTsIleJXKJlGgsQ5FwXcHVoFDqkZMEpoCoRBgKN2dtXGUrQNlgnpOoZKZ_nJDHpILQ90u8QikOcq9jFPL",
  },
  {
    id: 4,
    name: "Cobalt Clutch",
    subtitle: "Structured Form",
    badge: "ECO",
    bg: "white",
    textColor: "var(--slate-900)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyI-WV_pIknJHDayCqArTt-v9FCne2WVa8g0t7j7_q1PUzdbK7ewma0-_zoGT9k3_XIEvFVdGbVek-Hthoch5djUPxurbJDVZQAAh-A8SV_PCv6ix2NE15r6HNgzRLXI191oNs3WWpx8vkXQEwcgtIHk7D4THdXagh6U7B75TJPKezg8y-yccZbXZrJT75LzPF55MLNte2rqwLFwx9W0Tv1Ag6uw4_vK6epVp5qzVnVTpYpkCBjpse3CnXWr7rUw5AFoYYkx-OwfZg",
  },
];

export const COLLECTIONS = [
  {
    id: "01",
    slug: "azure-series",
    label: "Collection 01",
    name: "Fluidity & Form",
    title: "The Azure Series",
    desc: "Inspired by the movement of Mediterranean tides — soft-grained leathers and chrome hardware.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyI-WV_pIknJHDayCqArTt-v9FCne2WVa8g0t7j7_q1PUzdbK7ewma0-_zoGT9k3_XIEvFVdGbVek-Hthoch5djUPxurbJDVZQAAh-A8SV_PCv6ix2NE15r6HNgzRLXI191oNs3WWpx8vkXQEwcgtIHk7D4THdXagh6U7B75TJPKezg8y-yccZbXZrJT75LzPF55MLNte2rqwLFwx9W0Tv1Ag6uw4_vK6epVp5qzVnVTpYpkCBjpse3CnXWr7rUw5AFoYYkx-OwfZg",
    size: "large",
    heroTitle: "The Azure Series",
    heroStyle: "italic-center",
  },
  {
    id: "02",
    slug: "onyx-chrome",
    label: "Collection 02",
    name: "Onyx & Chrome",
    title: "Midnight",
    desc: "",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw6nGs48TApjhUKppVyvlu6RDZGtwU39ZM3L6g58qDyGI5QM2hucmvRoHMKc-M1b3jwCTMuaik9_S3GClzOEWV1aI3cbDirTW7l18Ih-9klR9L479USphp7jhlGihHQemu7LniBz1DgIXCPdRV1i1Tj48pgmdfXt_8MKSqeE8kQ6NKhuhnLi1Yp2fcxNRu-UCD1INo7kor3ooMBUJLZROIzJhfjIXhM1aaHqLLbciNfP4CCpp_Up5O9mKi23os_tAVmHNkclWdo2tb",
    size: "small",
    heroStyle: "bottom-center",
  },
  {
    id: "03",
    slug: "everyday-luxury",
    label: "Collection 03",
    name: "Everyday Luxury",
    title: "Daylight Essentials",
    desc: "",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6luR6CYBPDxdApEPU6cza_vAqHIGn5-gwF867gikD8ah5yFE6uDHlgDF82jX3mB3mAW59GeYg61ohFTxe_rzyCl-ZxuMAL8cjRpHcmfqu2CfMuflxVTeFHrGBW5hlZXClhg8-bUEBMFxHzAigC91JPJqRgkLSk-Nk-JKRciF28kBShnrI9Iy669ANvvyuP2-LjBnLYFUsh7Rd6MVLgKoWcUJwWiBen4v6AswgVMCjACNqBmUno4-raM55b0HFAOu3__R6eOSyxzk9",
    size: "medium",
    heroStyle: "top-right-double",
  },
  {
    id: "SE",
    slug: "heritage-vault",
    label: "Special Edition",
    name: "The Heritage Vault",
    title: "Archives",
    desc: "Revisiting the 2012 Originals",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCt1VotPlStu8uvHLs8rK_yR0Wu0skKXCVMxGqI7OA8xxf_C5qggkPM2jXpyh03xgAK-Yt1BwBBs3CvXT8TxQQ9ZZsFjbWu68qqh00S_Mn0YVGUCXWPeBJ1WVXMY_BtZgK6C5QKosRltKFkCI7ZxvI5PI7rMN0Atq5NaH06IkEVZ4epkIAprYS6mT6OHMcWg0HAjCV0ZNaQyQSQQllOgT_16CJkltSWZhDClJPcOMjfkB1Je0vpxwVWA8zsvlv09nY50dvTlHdV3NU5",
    size: "wide",
    heroStyle: "gradient-bottom",
  },
];

export const ARCHIVE_SEASONS = [
  {
    id: 1,
    year: "22",
    season: "Spring Summer 2022",
    note: "SS22 explored the fragility of silk against rigid geometric structures. The first introduction of the 'Azure' hinge system.",
    num: "001",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXqXEiMITSzY-QpeYKhMOroK_iWCReFDEV6qrBiZMvC8d85NlENmDmWX81Z8wXFUOE66Dqd7LMBhSktaTqUytuXAWpFyO3F8YxXLgW7EwU28ppapOSaykwtHsQxg-rGZddPz7_A2NDn7ri4-dtst8G1dNNQbTxz8KtN6a_UoZABZ3tmop1CM86ZzHQnbJ6eb7PV_FyxtgcYH_usPDl898_V98Krzxx7M0R7gx5OHMdfiXTX1WunG1aunHJakkVmekg_xylxoOI6amH",
  },
  {
    id: 2,
    year: "22",
    season: "Fall Winter 2022",
    note: "FW22 transitioned into heavy-grain leathers. Inspired by the brutalist architecture of the northern coast.",
    num: "002",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQkNIksvhLI25XplWvleCjB7oWaeyZ9IQEsnS9qVEjIxajg7RqDNR1i0FWH9kZ323vkrZ5Oe4PINgKTyvuZHr_rXo-f857kZZQq-j8wOLH2gl7QkWn9GVxiRbzrBQyldftLd02Ct4Ce1_YiXuZpuWjon3Zja9uHSgoo8UOIi66qZRQROPpCWSSAnaPFlwtejAJSMcfm-RP4z7wp5P92vQKPQiqOgtzClnGRAE5VJmRbK9LaaDHyaucaKBA5HANjaeqNHpVzZpYO7W",
  },
  {
    id: 3,
    year: "23",
    season: "Spring Summer 2023",
    note: "A study on 'The Void'. Exploring translucent materials and internal frame visibility.",
    num: "003",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTi6zZ0njvRpFI9Gv_1yfPCihwPtInWkDhEo9XJ70lKVILTnL7yam3Y86WqxO5iJAB_d74XRdWbjpgOv1wociR-LBLon2VOkWuNiAS3Q9LK0Ec4fIUY3cGMYJt3SPJdaed0wsbkYJGHBTXoorfYNbJZqtaSYC7H12j9TUfbM6BZmC2MEOxB68DlSxR7rsKTsIleJXKJlGgsQ5FwXcHVoFDqkZMEpoCoRBgKN2dtXGUrQNlgnpOoZKZ_nJDHpILQ90u8QikOcq9jFPL",
  },
  {
    id: 4,
    year: "23",
    season: "Fall Winter 2023",
    note: "Crimson saturated leathers. A pivot towards high-fashion editorial presence and extreme silhouette.",
    num: "004",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYGzigmQvU6DmOC1PD5b2QgowDOVsOkBdmFARGcD2yaG0z39wkvIegbgyYPbCRizrzu5X9HPBIIYiWCUOITyzXw-HYveeb9Enc5W00oaNjH3shB_67iX9z-FA7oRlM4I2EtA-4PFR9XrkVnJEvH-9rcfLdHGSZAxqjyMGJGH6PVcv_udkv6mI3oiIe2R3lIMqBRlBgUZpQ8YAZLhLUhHlZSbVXoZZrRz59wpIFApO2KGcJlSSvFYCFdKdH7SxoH-p9eGz8WoSf5brp",
  },
];

export const SEASON_REGISTRY = [
  { season: "SS19 / Origin", availability: "[Out of Stock]" },
  { season: "FW19 / Earth",  availability: "[Out of Stock]" },
  { season: "SS20 / Liquid", availability: "[Enquire]" },
  { season: "FW20 / Chrome", availability: "[Vault Only]" },
  { season: "SS21 / Bloom",  availability: "[Limited Units]" },
  { season: "FW21 / Void",   availability: "[Out of Stock]" },
];

export const MARQUEE_ITEMS = [
  "New Arrivals", "·", "Limited Editions", "·",
  "SS 2024", "·", "Crafted Luxury", "·", "Azure Series", "·",
];

export const FOOTER_LINKS = [
  {
    label: "Shop",
    links: ["All Collections", "New Arrivals", "Limited Editions"],
  },
  {
    label: "Company",
    links: ["About Elegance", "Craftsmanship", "Contact"],
  },
  {
    label: "Support",
    links: ["Shipping", "Returns", "FAQ"],
  },
  {
    label: "Follow",
    links: ["Instagram", "Pinterest", "TikTok"],
  },
];

export const BRAND_VALUES = [
  {
    icon: "◈",
    label: "Restraint",
    desc: "The power of saying exactly what is needed, and nothing more.",
  },
  {
    icon: "◆",
    label: "Opulence",
    desc: "Rarity is our standard. Every material is curated for its soul.",
  },
  {
    icon: "⬡",
    label: "Precision",
    desc: "Mathematical perfection meeting human intuition.",
  },
];

export const COLLECTION_FILTERS = {
  material: ["Full Grain Leather", "Suede & Velvet", "Exotic Textures", "Metal Hardware"],
  silhouette: ["Tote Bags", "Mini & Micro", "Shoulder Bags", "Clutches"],
};

export const CHROME_CIRCLE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9b9sWVKJA6ZU71vES3OMsAJwXCeZeAat7fMzKdS4XbHKk0CigfjiJg34LkIN9FNKo1Agp7bYE7wJ-8C1b5MSlco-JBbqNiMC9AdFDCZvIF1G60idfkBHR3ZiqwIm6YdKWwH2BGU8WzHYg8H6RR1bL57e_Iy81HU6fse0Oxaxi7X8ziRxq6DJhkAXhWQ1SB644bXY5Wq_r2rlhekCN27ZmlugCdfTSt5i_uLuv2nz5bmGz8HXXRQRYkniXhDH9ApGkd2zVG5lKmERt";

export const HERO_PURSE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXBDQdsH3w3ta77lZYHAFjzthmrFtY1s_SL_8ZHtS8TMckN_1yJk1LcAJpdHekm2hxVBJtm4xv78hV8j1-X04DXYb6HlcP7fQNZF9o15k-1sTWIFUBmgjYPK41WsrHDuwwebk_q0YS0mhHKeD95uMxCtJOB1QNG13-wA2Vh73q_kgeRuE_8lY1hpbiTl9LRjYXfdGbbInQoBefjTVL6Jkcw61A9SmjclFAuzMPpO-j_S5AdrvuP8Bm8_Cwutts3zY_3GMHgD4KLcYy";

export const COLLAGE_IMAGES = {
  editorial:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyI-WV_pIknJHDayCqArTt-v9FCne2WVa8g0t7j7_q1PUzdbK7ewma0-_zoGT9k3_XIEvFVdGbVek-Hthoch5djUPxurbJDVZQAAh-A8SV_PCv6ix2NE15r6HNgzRLXI191oNs3WWpx8vkXQEwcgtIHk7D4THdXagh6U7B75TJPKezg8y-yccZbXZrJT75LzPF55MLNte2rqwLFwx9W0Tv1Ag6uw4_vK6epVp5qzVnVTpYpkCBjpse3CnXWr7rUw5AFoYYkx-OwfZg",
  chrome:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmyWvKrk8ELO04GM9_AU-q6QMqsDHreWDVIMbACjffYxHGq-NDTKZSEzXKsmfU2z-48LmL4Pjs4BTL23diDDFMHk7ZKCwuNQswbXsa_EKi8Uf5sdVWfBplWXR9zBpW8qJpsqOen8eClhTYqL_yGFxs1qqG8aAgH3ROw_3-FSvSaZpW5j8Kk5MVYAUJJoAwWr28qwKzGkAd2pcQTR0WowDihAfuxSM82n76vYzi0A6isU5wyRJCyhi0aoJlbLrKTff-TmjEgKGk-Kda",
  hardware:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAw6nGs48TApjhUKppVyvlu6RDZGtwU39ZM3L6g58qDyGI5QM2hucmvRoHMKc-M1b3jwCTMuaik9_S3GClzOEWV1aI3cbDirTW7l18Ih-9klR9L479USphp7jhlGihHQemu7LniBz1DgIXCPdRV1i1Tj48pgmdfXt_8MKSqeE8kQ6NKhuhnLi1Yp2fcxNRu-UCD1INo7kor3ooMBUJLZROIzJhfjIXhM1aaHqLLbciNfP4CCpp_Up5O9mKi23os_tAVmHNkclWdo2tb",
  craftsmanship:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCt1VotPlStu8uvHLs8rK_yR0Wu0skKXCVMxGqI7OA8xxf_C5qggkPM2jXpyh03xgAK-Yt1BwBBs3CvXT8TxQQ9ZZsFjbWu68qqh00S_Mn0YVGUCXWPeBJ1WVXMY_BtZgK6C5QKosRltKFkCI7ZxvI5PI7rMN0Atq5NaH06IkEVZ4epkIAprYS6mT6OHMcWg0HAjCV0ZNaQyQSQQllOgT_16CJkltSWZhDClJPcOMjfkB1Je0vpxwVWA8zsvlv09nY50dvTlHdV3NU5",
};
