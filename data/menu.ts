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
      { name: "Espresso", price: 190 },
      { name: "Espresso sa mlekom", price: 210 },
      { name: "Cappuccino", price: 240 },
      { name: "Caffe Latte", price: 260 },
      { name: "Flat White", price: 290 },
      { name: "La Bocca Signature Kafa", description: "Espresso, krem od lešnika, mleko, posip od kakaa", price: 340 },
    ]
  },
  {
    title: "Topli napici",
    items: [
      { name: "Topla čokolada crna", price: 280 },
      { name: "Topla čokolada bela", price: 280 },
      { name: "Premium Čajevi", description: "Zeleni, crni, voćni, nana, kamilica", price: 220 },
      { name: "Kuvano vino", description: "Crveno vino, cimet, karanfilić, pomorandža", price: 350 },
    ]
  },
  {
    title: "Hladne kafe",
    items: [
      { name: "Freddo Espresso", price: 250 },
      { name: "Freddo Cappuccino", price: 280 },
      { name: "Ice Latte", price: 290 },
      { name: "Affogato", description: "Espresso preko kugle sladoleda od vanile", price: 350 },
    ]
  },
  {
    title: "Kokteli",
    items: [
      { name: "Aperol Spritz", description: "Aperol, Prosecco, soda, pomorandža", price: 650 },
      { name: "Negroni", description: "Gin, Campari, slatki vermut", price: 750 },
      { name: "Espresso Martini", description: "Vodka, kahlua, espresso, sirup", price: 720 },
      { name: "La Bocca Special", description: "Gin, pire od marakuje, limeta, prosecco", price: 850 },
      { name: "Old Fashioned", description: "Burbon, angostura bitter, šećer, kora pomorandže", price: 780 },
    ]
  },
  {
    title: "Žestina",
    items: [
      { name: "Rakija Šljiva Premium", price: 350 },
      { name: "Rakija Dunja Premium", price: 380 },
      { name: "Jack Daniel's", price: 450 },
      { name: "Hendrick's Gin", price: 550 },
      { name: "Diplomatico Rum", price: 650 },
    ]
  },
  {
    title: "Bezalkoholna pića",
    items: [
      { name: "Sveže ceđena pomorandža", price: 320 },
      { name: "Limunada", price: 250 },
      { name: "Coca Cola / Zero", price: 220 },
      { name: "Rosa negazirana 0.33l", price: 180 },
      { name: "Knjaz Miloš gazirana 0.33l", price: 180 },
    ]
  }
];
