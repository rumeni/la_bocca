export type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    title: "Kafe",
    items: [
      { name: "Espresso", price: 170 },
      { name: "Espresso sa mlekom", price: 190 },
      { name: "Cappuccino", price: 190 },
      { name: "Americano", price: 170 },
      { name: "Macchiato", price: 180 },
      { name: "Mocha", price: 250 },
      { name: "Cafe Latte", price: 210 },
      { name: "Irish Coffee", price: 390 },
      { name: "Nescafe", price: 200 },
      { name: "Domaća kafa", price: 130 },
      { name: "Domaća kafa sa mlekom", price: 150 },
      { name: "Dodatak — sojino mleko", price: 60 },
    ],
  },
  {
    title: "Topli napici",
    items: [
      { name: "Topla čokolada crna", price: 250 },
      { name: "Topla čokolada bela", price: 250 },
      { name: "Topla čokolada mlečna", price: 250 },
      { name: "Topla čokolada pistaći", price: 250 },
      { name: "Čajevi", price: 180 },
      { name: "Kuvano vino", description: "0.20l", price: 250 },
      { name: "Topla limunada sa medom", price: 250 },
      { name: "Plazma šejk", price: 350 },
      { name: "Frappe", price: 250 },
    ],
  },
  {
    title: "Vode",
    items: [
      { name: "Gazirana voda", description: "0.33l", price: 160 },
      { name: "Rosa negazirana", description: "0.33l", price: 160 },
      { name: "Limunska trava", description: "0.33l", price: 230 },
    ],
  },
  {
    title: "Ceđeno voće",
    items: [
      { name: "Limunada", description: "0.2l", price: 200 },
      { name: "Ceđena pomorandža", description: "0.2l", price: 330 },
      { name: "Ceđeni miks", description: "0.2l", price: 320 },
      { name: "Limunada sa ukusom", description: "0.2l", price: 260 },
    ],
  },
  {
    title: "Prirodni sokovi",
    items: [
      { name: "Malina", description: "Kap po Kap — 100% prirodan, ceđen", price: 320 },
      { name: "Jabuka", description: "Kap po Kap — 100% prirodan, ceđen", price: 190 },
    ],
  },
  {
    title: "Detox sokovi",
    items: [
      { name: "Zeleni Detox", description: "Celer, jabuka, limun, đumbir", price: 340 },
      { name: "Crveni Detox", description: "Cvekla, sargarepa, jabuka, limun, đumbir", price: 320 },
    ],
  },
  {
    title: "Negazirani sokovi",
    items: [
      { name: "Next jabuka", description: "0.2l", price: 250 },
      { name: "Next jagoda", description: "0.2l", price: 250 },
      { name: "Next borovnica", description: "0.2l", price: 250 },
      { name: "Next breskva", description: "0.2l", price: 250 },
      { name: "Next narandža", description: "0.2l", price: 250 },
      { name: "Cedevita", price: 200 },
    ],
  },
  {
    title: "Gazirani sokovi",
    items: [
      { name: "Coca Cola", description: "0.25l", price: 240 },
      { name: "Coca Cola Zero", description: "0.25l", price: 240 },
      { name: "Fanta", description: "0.25l", price: 240 },
      { name: "Sprite", description: "0.25l", price: 240 },
      { name: "Bitter", description: "0.25l", price: 250 },
      { name: "Tonic", description: "0.25l", price: 250 },
      { name: "Tangerine", description: "0.25l", price: 250 },
    ],
  },
  {
    title: "Energetska pića",
    items: [
      { name: "Red Bull", description: "0.25l", price: 420 },
      { name: "Ultra", description: "0.25l", price: 240 },
      { name: "Guarana", description: "0.25l", price: 240 },
    ],
  },
  {
    title: "Piva",
    items: [
      { name: "San Miguel", description: "0.33l", price: 450 },
      { name: "Erdinger", description: "0.33l", price: 490 },
      { name: "Budweiser", description: "0.33l", price: 350 },
      { name: "Budweiser Dark", description: "0.33l", price: 360 },
      { name: "Carlsberg", description: "0.25l", price: 330 },
      { name: "Carlsberg", description: "0.40l", price: 290 },
      { name: "Kronenbourg Blanc", description: "0.33l", price: 330 },
      { name: "Tuborg", description: "0.33l", price: 290 },
      { name: "Lav Premium", description: "0.33l", price: 280 },
    ],
  },
  {
    title: "Točena piva",
    items: [
      { name: "Carlsberg", description: "0.33l", price: 280 },
      { name: "Carlsberg", description: "0.50l", price: 350 },
    ],
  },
  {
    title: "Sajderi",
    items: [
      { name: "Somersby", description: "0.33l", price: 350 },
    ],
  },
  {
    title: "Kokteli",
    items: [
      { name: "Long Island", description: "Vodka, gin, beli rum, tekila, triple sec, sok od limuna, sirup, coca-cola", price: 790 },
      { name: "Mai Tai", description: "Tamni rum, svetli rum, sok od limete, ananas, grenadin", price: 710 },
      { name: "Cosmopolitan", description: "Vodka, triple sec, sok od brusnice, sok od limuna", price: 690 },
      { name: "Devil Ice Tea", description: "Vodka, gin, tekila, triple sec, sok od limuna, pushkin vodka", price: 790 },
      { name: "Cuba Libre", description: "Beli rum, sok od limuna, coca-cola", price: 560 },
      { name: "Margarita", description: "Tekila, triple sec, sok od limuna", price: 690 },
      { name: "Blue Lagoon", description: "Vodka, blue curacao, sprite", price: 560 },
      { name: "Aperol Spritz", description: "Prosecco, aperol, kisela voda", price: 520 },
    ],
  },
  {
    title: "Alkoholna pića",
    items: [
      { name: "Jack Daniels", description: "0.03l", price: 370 },
      { name: "Jameson", description: "0.03l", price: 320 },
      { name: "Chivas", description: "0.03l", price: 450 },
      { name: "Vodka Absolut", description: "0.03l", price: 230 },
      { name: "Vodka Grey Goose", description: "0.03l", price: 610 },
      { name: "Gin", description: "0.03l", price: 240 },
      { name: "Tekila", description: "0.03l", price: 230 },
      { name: "Jeger", description: "0.03l", price: 230 },
      { name: "Gorki list", description: "0.03l", price: 230 },
      { name: "Baileys", description: "0.03l", price: 290 },
      { name: "Martini", description: "0.03l", price: 260 },
      { name: "Vermut", description: "0.03l", price: 230 },
      { name: "Pushkin Black", description: "0.03l", price: 220 },
      { name: "Vinjak 5", description: "0.03l", price: 240 },
    ],
  },
  {
    title: "Rakije",
    items: [
      { name: "Gružanska Nit", description: "0.03l", price: 250 },
      { name: "Dremina šljiva", description: "0.03l", price: 190 },
      { name: "Dremina dunja", description: "0.03l", price: 230 },
      { name: "Dremina kajsija", description: "0.03l", price: 200 },
      { name: "Dremina viljamovka", description: "0.03l", price: 200 },
      { name: "Meduška", description: "0.03l", price: 200 },
    ],
  },
  {
    title: "Vina — čaša",
    items: [
      { name: "Dremina Tamjanika", description: "0.15l", price: 450 },
      { name: "Dremina Chardonnay", description: "0.15l", price: 450 },
      { name: "Dremina Rosé", description: "0.15l", price: 420 },
      { name: "Dremina Prokupac", description: "0.15l", price: 480 },
      { name: "Žuti Cvet", description: "0.187l", price: 430 },
    ],
  },
  {
    title: "Buteljke Vina",
    items: [
      { name: "Dremina Tamjanika", description: "0.75l", price: 2250 },
      { name: "Dremina Chardonnay", description: "0.75l", price: 2250 },
      { name: "Dremina Rosé", description: "0.75l", price: 2100 },
      { name: "Dremina Prokupac", description: "0.75l", price: 2400 },
      { name: "Dremina Žuti Cvet", description: "0.75l", price: 2200 },
    ],
  },
];
