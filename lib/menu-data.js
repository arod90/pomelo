// Full Pomelo menu — three tabs, each with a featured "hero" dish and grouped
// sections. Images point at the optimized files under public/assets/menu.
export const MENU = {
  "Brunch": {
    tint: "var(--coral-500)",
    hero: {
      name: "Tabla brunch para compartir",
      price: "24,00 €",
      image: "/assets/menu/brunch-board-w.jpg",
      badge: "El favorito de la casa",
      description:
        "Gofres y tortitas esponjosas, pollo crujiente, bacon ahumado, fruta fresca y sirope de arce puro — con una copa de cava para brindar. Pensada para dos… o para no compartir con nadie.",
      note: "Para 2 · incluye una copa de cava",
    },
    sections: [
      { g: "Para empezar el día", items: [
        { name: "Tostada de aguacate", price: "9,50 €", description: "Masa madre de fermentación lenta, aguacate machacado con lima, huevo poché, dukkah crujiente y brotes tiernos.", tags: ["Vegetariano"] },
        { name: "Shakshuka del casco antiguo", price: "11,50 €", description: "Huevos al horno en salsa de tomate especiada con comino y pimentón, feta desmenuzado, cilantro y pan de pita caliente.", tags: ["Vegetariano"] },
        { name: "Croque madame", price: "11,00 €", description: "Nuestro clásico francés: jamón, bechamel de comté gratinada y huevo frito de corral por encima." },
        { name: "Huevos Benedict", price: "13,00 €", description: "Muffin inglés, jamón, huevos poché y holandesa cítrica al pomelo con pimentón ahumado." },
      ]},
      { g: "Tostas & bocados", items: [
        { name: "Tosta de salmón & ricotta", price: "12,00 €", description: "Salmón ahumado en casa, ricotta batida al limón, alcaparras, eneldo y aceite de oliva virgen extra." },
        { name: "Tosta de burrata & melocotón", price: "12,50 €", description: "Burrata cremosa, melocotón de viña a la brasa, albahaca, almendra tostada y reducción balsámica.", tags: ["Vegetariano", "De temporada"] },
        { name: "Tosta de burrata & tomate", price: "11,50 €", description: "Burrata cremosa, tomate de temporada, pesto de albahaca y pan de cristal.", tags: ["Vegetariano"] },
        { name: "Pan bao de pollo crujiente", price: "10,00 €", description: "Pollo marinado, mayonesa de kimchi, pepino encurtido y cacahuete." },
        { name: "Molletes de pulled pork", price: "11,00 €", description: "Cerdo deshilachado a baja temperatura, salsa barbacoa de café y col crujiente." },
      ]},
      { g: "Frescos de primavera", items: [
        { name: "Gazpacho de fresa & tomate", price: "6,50 €", description: "Sorprendente y refrescante, con aceite de albahaca y picatostes.", tags: ["Vegano", "De temporada"] },
        { name: "Ensalada de espárragos", price: "10,50 €", description: "Espárrago verde a la brasa, huevo poché, avellana y vinagreta de limón.", tags: ["Vegetariano", "De temporada"] },
        { name: "Guisantes con jamón & menta", price: "9,50 €", description: "Guisantes lágrima salteados, jamón ibérico, menta y huevo frito.", tags: ["De temporada"] },
      ]},
      { g: "Bowls & bien", items: [
        { name: "Bowl de salmón & quinoa", price: "13,50 €", description: "Salmón a baja temperatura, quinoa tricolor, aguacate, edamame, encurtidos rápidos y aliño de sésamo y jengibre." },
        { name: "Açaí de la mañana", price: "9,80 €", description: "Base helada de açaí, plátano y frutos rojos, con granola de la casa, coco y semillas.", tags: ["Vegano"] },
        { name: "Bowl verde", price: "10,50 €", description: "Kale masajeado, aguacate, garbanzos crujientes, huevo mollet y tahini de limón.", tags: ["Vegetariano"] },
        { name: "Porridge de avena & manzana", price: "7,50 €", description: "Avena cremosa cocida a fuego lento, manzana asada, canela y nueces.", tags: ["Vegetariano"] },
      ]},
    ],
  },
  "Dulce": {
    tint: "var(--espresso-900)",
    hero: {
      name: "Cheesecake de higos y frutos rojos",
      price: "6,80 €",
      image: "/assets/menu/cheesecake-w.jpg",
      badge: "Imprescindible",
      description:
        "Tarta de queso cremosa al horno sobre base de galleta, bañada en coulis de frutos rojos, con higo fresco y menta. Densa y sedosa, nada empalagosa — nuestro fin de fiesta favorito.",
      note: "Postre de la casa",
    },
    sections: [
      { g: "De la sartén", items: [
        { name: "Torrija de brioche", price: "9,00 €", description: "Brioche empapado en crema de vainilla, dorado a la plancha, con ruibarbo asado, mascarpone y crema de saúco.", tags: ["Vegetariano"] },
        { name: "French toast de temporada", price: "9,50 €", description: "Pan de masa madre caramelizado, fruta del momento, sirope de arce puro y mantequilla batida." },
        { name: "Gofre de Lieja", price: "8,50 €", description: "Masa perlada con azúcar, chocolate 70 % fundido y avellana tostada." },
      ]},
      { g: "Pastelería del obrador", items: [
        { name: "Croissant de mantequilla", price: "2,80 €", description: "Hojaldre de fermentación lenta, 72 horas de reposo. Crujiente por fuera, tierno por dentro." },
        { name: "Pain au chocolat", price: "3,20 €", description: "Doble barra de chocolate negro envuelta en hojaldre dorado." },
        { name: "Banana bread tostado", price: "4,20 €", description: "Con nueces pecanas, canela y una nube de mantequilla salada." },
        { name: "Tarta de zanahoria", price: "5,20 €", description: "Bizcocho húmedo especiado, frosting de queso crema y nuez garrapiñada.", tags: ["Vegetariano"] },
        { name: "Cookie de chocolate & sal", price: "3,40 €", description: "Recién horneada, chocolate 70 % y escamas de sal Maldon." },
      ]},
      { g: "Dulces fríos", items: [
        { name: "Cheesecake al horno", price: "5,80 €", description: "Estilo vasco, corazón cremoso y superficie caramelizada." },
        { name: "Affogato", price: "4,50 €", description: "Helado de vainilla bourbon ahogado en un espresso doble." },
        { name: "Helado de albahaca & limón", price: "4,20 €", description: "Artesano, herbáceo y cítrico. Sorprendentemente adictivo.", tags: ["Vegetariano", "De temporada"] },
      ]},
      { g: "Dulces de estación", items: [
        { name: "Tarta de fresas & nata", price: "5,80 €", description: "Masa quebrada, crema pastelera de vainilla y fresas de temporada.", tags: ["Vegetariano", "De temporada"] },
        { name: "Cláfoutis de cerezas", price: "5,40 €", description: "Bizcocho flan horneado con cerezas enteras y azúcar glas.", tags: ["Vegetariano", "De temporada"] },
      ]},
    ],
  },
  "Café & bebidas": {
    tint: "var(--coral-600)",
    hero: {
      name: "Flat white de origen",
      price: "3,80 €",
      image: "/assets/menu/flat-white-w.jpg",
      badge: "Nuestro orgullo",
      description:
        "Al estilo aussie no: al estilo Pomelo. Doble ristretto de nuestro café invitado de tueste artesano y microespuma sedosa vertida a mano. Cuerpo redondo, dulzor natural y un latte art que da pena romper.",
      note: "Pregunta por el origen de esta semana",
    },
    sections: [
      { g: "Espresso bar", items: [
        { name: "Espresso", price: "2,20 €", description: "Doble ristretto, notas de cacao y caramelo." },
        { name: "Cortado", price: "2,60 €", description: "Espresso equilibrado con un toque de leche texturizada." },
        { name: "Capuchino", price: "3,60 €", description: "Cremoso y aterciopelado, con cacao de la casa." },
        { name: "Latte especiado", price: "4,00 €", description: "Espresso, leche sedosa y jarabe de especias de temporada." },
        { name: "Mocha de la casa", price: "4,20 €", description: "Espresso, chocolate 70 % fundido y leche texturizada." },
      ]},
      { g: "Filtro & fríos", items: [
        { name: "V60 de origen único", price: "4,20 €", description: "Filtro de especialidad, rotación semanal de fincas. Limpio y floral.", tags: ["Vegano"] },
        { name: "Cold brew de 18 horas", price: "4,00 €", description: "Extracción en frío lenta, notas de cacao y sin amargor.", tags: ["Vegano"] },
        { name: "Espresso tónic", price: "4,50 €", description: "Espresso sobre tónica y hielo, con una rodaja de pomelo.", tags: ["Vegano"] },
      ]},
      { g: "Sin café", items: [
        { name: "Matcha latte ceremonial", price: "4,50 €", description: "Matcha grado ceremonia y leche de avena barista.", tags: ["Vegano"] },
        { name: "Chai casero", price: "4,20 €", description: "Especias infusionadas a fuego lento, leche texturizada." },
        { name: "Chocolate caliente", price: "4,00 €", description: "Chocolate belga fundido, denso y reconfortante." },
      ]},
      { g: "Zumos & refrescos", items: [
        { name: "Zumo prensado del día", price: "4,50 €", description: "Pomelo, naranja y jengibre, exprimido al momento.", tags: ["Vegano"] },
        { name: "Limonada de hibisco", price: "4,00 €", description: "Casera, floral y poco dulce, con menta fresca.", tags: ["Vegano"] },
        { name: "Kombucha de temporada", price: "4,50 €", description: "Fermentada en casa, sabor rotativo.", tags: ["Vegano"] },
      ]},
    ],
  },
};
export const TABS = Object.keys(MENU);
