// Dados completos do cardápio — Forja dos Burgers
// Todas as imagens mapeadas diretamente da pasta assets/, assets/combo_refri/ e assets/combo_batata_refri/.

const FORJA_CONFIG = {
  brand: 'Forja dos Burgers',
  // Deixe vazio para abrir o WhatsApp escolhendo o contato, ou preencha com DDI+DDD+Número (ex: '5511999999999')
  whatsappPhone: ''
};

const REFRI_LATA_SABORES = [
  'Coca-Cola',
  'Coca-Cola Zero',
  'Guaraná',
  'Fanta Laranja',
  'Pepsi',
  'Pepsi Black'
];

const REFRI_1L_SABORES = [
  'Coca-Cola',
  'Guaraná Antarctica'
];

const BATATA_OPCOES = [
  'Batata Chips M',
  'Batata Palito M'
];

const MENU_SECTIONS = [
  {
    id: 'simples',
    title: 'NÍVEL 1 - BURGERS CLÁSSICOS',
    subtitle: 'Pão + Carne + Queijo + Molho',
    sectionPrice: 24.90,
    layout: 'grid-4',
    items: [
      {
        id: 'cobre-classico',
        name: 'COBRE',
        accent: 'CLÁSSICO',
        mineral: 'Cobre',
        gemColor: '#D97706',
        price: 24.90,
        description: 'Pão, carne, cheddar e molho da Forja.',
        image: 'assets/01_Cobre_Classico.png',
        comboRefriImage: 'assets/combo_refri/01_Cobre_Classico.png',
        comboCompletoImage: 'assets/combo_batata_refri/01_Cobre_Classico.png',
        tags: ['cheddar', 'forja'],
        badges: ['Cheddar', 'Molho da Forja'],
        tier: 'simples'
      },
      {
        id: 'ferro-original',
        name: 'FERRO',
        accent: 'ORIGINAL',
        mineral: 'Ferro',
        gemColor: '#94A3B8',
        price: 24.90,
        description: 'Pão, carne, mussarela e molho da Forja.',
        image: 'assets/02_Ferro_Original.png',
        comboRefriImage: 'assets/combo_refri/02_Ferro_Original.png',
        comboCompletoImage: 'assets/combo_batata_refri/02_Ferro_Original.png',
        tags: ['mussarela', 'forja'],
        badges: ['Mussarela', 'Molho da Forja'],
        tier: 'simples'
      },
      {
        id: 'ouro-classico',
        name: 'BURGER OURO',
        accent: 'CLÁSSICO',
        mineral: 'Ouro',
        gemColor: '#FACC15',
        price: 24.90,
        description: 'Pão, carne, cheddar e molho defumado.',
        image: 'assets/03_Ouro_Classico.png',
        comboRefriImage: 'assets/combo_refri/03_Ouro_Supremo.png',
        comboCompletoImage: 'assets/combo_batata_refri/03_Ouro_Supremo.png',
        tags: ['cheddar', 'defumado'],
        badges: ['Cheddar', 'Molho Defumado'],
        tier: 'simples'
      },
      {
        id: 'ametista-cremoso',
        name: 'AMETISTA',
        accent: 'CREMOSO',
        mineral: 'Ametista',
        gemColor: '#A855F7',
        price: 24.90,
        description: 'Pão, carne, mussarela e molho defumado.',
        image: 'assets/04_Ametista_Cremoso.png',
        comboRefriImage: 'assets/combo_refri/04_Ametista_Cremoso.png',
        comboCompletoImage: 'assets/combo_batata_refri/04_Ametista_Cremoso.png',
        tags: ['mussarela', 'defumado'],
        badges: ['Mussarela', 'Molho Defumado'],
        tier: 'simples'
      }
    ]
  },
  {
    id: 'crispy',
    title: 'NÍVEL 2 - BURGERS PREMIUM',
    subtitle: 'Pão + Carne + Queijo + Cebola Crispy + Molho',
    sectionPrice: 29.90,
    layout: 'grid-4',
    items: [
      {
        id: 'quartzo-crispy',
        name: 'QUARTZO',
        accent: 'CRISPY',
        mineral: 'Quartzo',
        gemColor: '#E2E8F0',
        price: 29.90,
        description: 'Pão, carne, cheddar, cebola crispy e molho da Forja.',
        image: 'assets/05_Quartzo_Crispy.png',
        comboRefriImage: 'assets/combo_refri/05_Quartzo_Crispy.png',
        comboCompletoImage: 'assets/combo_batata_refri/05_Quartzo_Crispy.png',
        tags: ['cheddar', 'forja', 'crispy'],
        badges: ['Cheddar', 'Crispy', 'Molho da Forja'],
        tier: 'crispy'
      },
      {
        id: 'rubi-explosivo',
        name: 'RUBI',
        accent: 'EXPLOSIVO',
        mineral: 'Rubi',
        gemColor: '#EF4444',
        price: 29.90,
        description: 'Pão, carne, mussarela, cebola crispy e molho da Forja.',
        image: 'assets/06_Rubi_Explosivo.png',
        comboRefriImage: 'assets/combo_refri/06_Rubi_Explosivo.png',
        comboCompletoImage: 'assets/combo_batata_refri/06_Rubi_Explosivo.png',
        tags: ['mussarela', 'forja', 'crispy'],
        badges: ['Mussarela', 'Crispy', 'Molho da Forja'],
        tier: 'crispy'
      },
      {
        id: 'topazio-dourado',
        name: 'TOPÁZIO',
        accent: 'DOURADO',
        mineral: 'Topázio',
        gemColor: '#F59E0B',
        price: 29.90,
        description: 'Pão, carne, cheddar, cebola crispy e molho defumado.',
        image: 'assets/07_Topazio_Dourado.png',
        comboRefriImage: 'assets/combo_refri/07_Topazio_Dourado.png',
        comboCompletoImage: 'assets/combo_batata_refri/07_Topazio_Dourado.png',
        tags: ['cheddar', 'defumado', 'crispy'],
        badges: ['Cheddar', 'Crispy', 'Molho Defumado'],
        tier: 'crispy'
      },
      {
        id: 'esmeralda-suprema',
        name: 'ESMERALDA',
        accent: 'SUPREMA',
        mineral: 'Esmeralda',
        gemColor: '#10B981',
        price: 29.90,
        description: 'Pão, carne, mussarela, cebola crispy e molho defumado.',
        image: 'assets/08_Esmeralda_Suprema.png',
        comboRefriImage: 'assets/combo_refri/08_Esmeralda_Suprema.png',
        comboCompletoImage: 'assets/combo_batata_refri/08_Esmeralda_Suprema.png',
        tags: ['mussarela', 'defumado', 'crispy'],
        badges: ['Mussarela', 'Crispy', 'Molho Defumado'],
        tier: 'crispy'
      }
    ]
  },
  {
    id: 'duplos',
    title: 'NÍVEL 3 - BURGERS DUPLOS',
    subtitle: 'Pão + 2 Carnes + Queijo + Molho',
    sectionPrice: 34.90,
    layout: 'grid-4',
    items: [
      {
        id: 'carvao-bruto',
        name: 'CARVÃO',
        accent: 'BRUTO',
        mineral: 'Carvão',
        gemColor: '#71717A',
        price: 34.90,
        description: 'Pão, 2 carnes, cheddar e molho da Forja.',
        image: 'assets/09_Carvao_Duplo.png',
        comboRefriImage: 'assets/combo_refri/09_Carvao_Bruto.png',
        comboCompletoImage: 'assets/combo_batata_refri/09_Carvao_Bruto.png',
        tags: ['cheddar', 'forja'],
        badges: ['2 Carnes', 'Cheddar', 'Molho da Forja'],
        tier: 'duplos'
      },
      {
        id: 'ferro-duplo',
        name: 'FERRO',
        accent: 'DUPLO',
        mineral: 'Ferro',
        gemColor: '#94A3B8',
        price: 34.90,
        description: 'Pão, 2 carnes, mussarela e molho da Forja.',
        image: 'assets/10_Ferro_Duplo.png',
        comboRefriImage: 'assets/combo_refri/10_Ferro_Duplo.png',
        comboCompletoImage: 'assets/combo_batata_refri/10_Ferro_Duplo.png',
        tags: ['mussarela', 'forja'],
        badges: ['2 Carnes', 'Mussarela', 'Molho da Forja'],
        tier: 'duplos'
      },
      {
        id: 'ouro-em-dobro',
        name: 'OURO',
        accent: 'EM DOBRO',
        mineral: 'Ouro',
        gemColor: '#FACC15',
        price: 34.90,
        description: 'Pão, 2 carnes, cheddar e molho defumado.',
        image: 'assets/11_Ouro_Duplo.png',
        comboRefriImage: 'assets/combo_refri/11_Ouro_em_Dobro.png',
        comboCompletoImage: 'assets/combo_batata_refri/11_Ouro_em_Dobro.png',
        tags: ['cheddar', 'defumado'],
        badges: ['2 Carnes', 'Cheddar', 'Molho Defumado'],
        tier: 'duplos'
      },
      {
        id: 'diamante-raro',
        name: 'DIAMANTE',
        accent: 'RARO',
        mineral: 'Diamante',
        gemColor: '#38BDF8',
        price: 34.90,
        description: 'Pão, 2 carnes, mussarela e molho defumado.',
        image: 'assets/12_Diamante_Duplo.png',
        comboRefriImage: 'assets/combo_refri/12_Diamante_Raro.png',
        comboCompletoImage: 'assets/combo_batata_refri/12_Diamante_Raro.png',
        tags: ['mussarela', 'defumado'],
        badges: ['2 Carnes', 'Mussarela', 'Molho Defumado'],
        tier: 'duplos'
      }
    ]
  },
  {
    id: 'duplos-crispy',
    title: 'NÍVEL 4 - BURGERS DUPLOS PREMIUM',
    subtitle: 'Pão + 2 Carnes + Queijo + Cebola Crispy + Molho',
    sectionPrice: 39.90,
    layout: 'grid-4',
    items: [
      {
        id: 'mithril-lendario',
        name: 'MITHRIL',
        accent: 'LENDÁRIO',
        mineral: 'Mithril',
        gemColor: '#60A5FA',
        price: 39.90,
        description: 'Pão, 2 carnes, cheddar, cebola crispy e molho da Forja.',
        image: 'assets/13_Mithril.png',
        comboRefriImage: 'assets/combo_refri/13_Mithril_Lendario.png',
        comboCompletoImage: 'assets/combo_batata_refri/13_Mithril_Lendario.png',
        tags: ['cheddar', 'forja', 'crispy'],
        badges: ['2 Carnes', 'Cheddar', 'Crispy'],
        tier: 'duplos-crispy'
      },
      {
        id: 'adamantium-furioso',
        name: 'ADAMANTIUM',
        accent: 'FURIOSO',
        mineral: 'Adamantium',
        gemColor: '#CBD5E1',
        price: 39.90,
        description: 'Pão, 2 carnes, mussarela, cebola crispy e molho da Forja.',
        image: 'assets/14_Adamantium.png',
        comboRefriImage: 'assets/combo_refri/14_Adamantium_Furioso.png',
        comboCompletoImage: 'assets/combo_batata_refri/14_Adamantium_Furioso.png',
        tags: ['mussarela', 'forja', 'crispy'],
        badges: ['2 Carnes', 'Mussarela', 'Crispy'],
        tier: 'duplos-crispy'
      },
      {
        id: 'obsidiana-suprema',
        name: 'OBSIDIANA',
        accent: 'SUPREMA',
        mineral: 'Obsidiana',
        gemColor: '#6366F1',
        price: 39.90,
        description: 'Pão, 2 carnes, cheddar, cebola crispy e molho defumado.',
        image: 'assets/15_Obsidiana.png',
        comboRefriImage: 'assets/combo_refri/15_Obsidiana_Suprema.png',
        comboCompletoImage: 'assets/combo_batata_refri/15_Obsidiana_Suprema.png',
        tags: ['cheddar', 'defumado', 'crispy'],
        badges: ['2 Carnes', 'Cheddar', 'Crispy'],
        tier: 'duplos-crispy'
      },
      {
        id: 'dragao-cristalino',
        name: 'DRAGÃO',
        accent: 'CRISTALINO',
        mineral: 'Dragão',
        gemColor: '#D946EF',
        price: 39.90,
        description: 'Pão, 2 carnes, mussarela, cebola crispy e molho defumado.',
        image: 'assets/16_Dragao_Cristalino.png',
        comboRefriImage: 'assets/combo_refri/16_Dragao_Cristalino.png',
        comboCompletoImage: 'assets/combo_batata_refri/16_Dragao_Cristalino.png',
        tags: ['mussarela', 'defumado', 'crispy'],
        badges: ['2 Carnes', 'Mussarela', 'Crispy'],
        tier: 'duplos-crispy'
      }
    ]
  },
  {
    id: 'combos-refri',
    title: 'COMBOS BURGER + REFRI',
    subtitle: 'Escolha seu burger favorito + Refri Lata 350ml',
    layout: 'grid-4',
    items: [
      {
        id: 'combo-minerio',
        name: 'COMBO',
        accent: 'MINÉRIO',
        mineral: 'Combo I',
        gemColor: '#D97706',
        price: 33.90,
        description: 'Burger Clássico + Refri Lata 350ml.',
        image: 'assets/combo_refri/01_Cobre_Classico.png',
        tags: ['combo'],
        badges: ['Burger Clássico', 'Refri Lata'],
        comboConfig: { burgerTier: 'simples', includesFries: false }
      },
      {
        id: 'combo-cristal',
        name: 'COMBO',
        accent: 'CRISTAL',
        mineral: 'Combo II',
        gemColor: '#EF4444',
        price: 38.90,
        description: 'Burger Premium + Refri Lata 350ml.',
        image: 'assets/combo_refri/06_Rubi_Explosivo.png',
        tags: ['combo', 'crispy'],
        badges: ['Burger Premium', 'Refri Lata'],
        comboConfig: { burgerTier: 'crispy', includesFries: false }
      },
      {
        id: 'combo-forja',
        name: 'COMBO',
        accent: 'FORJA',
        mineral: 'Combo III',
        gemColor: '#FACC15',
        price: 43.90,
        description: 'Burger Duplo + Refri Lata 350ml.',
        image: 'assets/combo_refri/11_Ouro_em_Dobro.png',
        tags: ['combo'],
        badges: ['Burger Duplo', 'Refri Lata'],
        comboConfig: { burgerTier: 'duplos', includesFries: false }
      },
      {
        id: 'combo-lendario',
        name: 'COMBO',
        accent: 'LENDÁRIO',
        mineral: 'Combo IV',
        gemColor: '#D946EF',
        price: 48.90,
        description: 'Burger Duplo Premium + Refri Lata 350ml.',
        image: 'assets/combo_refri/16_Dragao_Cristalino.png',
        tags: ['combo', 'crispy'],
        badges: ['Duplo Premium', 'Refri Lata'],
        comboConfig: { burgerTier: 'duplos-crispy', includesFries: false }
      }
    ]
  },
  {
    id: 'combos-completos',
    title: 'COMBOS COMPLETOS',
    subtitle: 'Escolha seu burger favorito + Batata + Refri Lata 350ml',
    layout: 'grid-4',
    items: [
      {
        id: 'combo-exploracao',
        name: 'COMBO',
        accent: 'EXPLORAÇÃO',
        mineral: 'Completo I',
        gemColor: '#D97706',
        price: 51.80,
        description: 'Burger Clássico + Batata + Refri Lata 350ml.',
        image: 'assets/combo_batata_refri/01_Cobre_Classico.png',
        tags: ['combo'],
        badges: ['Clássico', 'Batata', 'Refri Lata'],
        comboConfig: { burgerTier: 'simples', includesFries: true }
      },
      {
        id: 'combo-raridade',
        name: 'COMBO',
        accent: 'RARIDADE',
        mineral: 'Completo II',
        gemColor: '#10B981',
        price: 56.80,
        description: 'Burger Premium + Batata + Refri Lata 350ml.',
        image: 'assets/combo_batata_refri/08_Esmeralda_Suprema.png',
        tags: ['combo', 'crispy'],
        badges: ['Premium', 'Batata', 'Refri Lata'],
        comboConfig: { burgerTier: 'crispy', includesFries: true }
      },
      {
        id: 'combo-tesouro',
        name: 'COMBO',
        accent: 'TESOURO',
        mineral: 'Completo III',
        gemColor: '#38BDF8',
        price: 61.80,
        description: 'Burger Duplo + Batata + Refri Lata 350ml.',
        image: 'assets/combo_batata_refri/12_Diamante_Raro.png',
        tags: ['combo'],
        badges: ['Duplo', 'Batata', 'Refri Lata'],
        comboConfig: { burgerTier: 'duplos', includesFries: true }
      },
      {
        id: 'combo-lendario-supremo',
        name: 'COMBO LENDÁRIO',
        accent: 'SUPREMO',
        mineral: 'Completo IV',
        gemColor: '#D946EF',
        price: 66.80,
        description: 'Burger Duplo Premium + Batata + Refri Lata 350ml.',
        image: 'assets/combo_batata_refri/16_Dragao_Cristalino.png',
        tags: ['combo', 'crispy'],
        badges: ['Duplo Premium', 'Batata', 'Refri Lata'],
        comboConfig: { burgerTier: 'duplos-crispy', includesFries: true }
      }
    ]
  },
  {
    id: 'acompanhamentos',
    title: 'ACOMPANHAMENTOS',
    subtitle: 'Porções crocantes para completar sua forja',
    layout: 'grid-2',
    isIconCard: true,
    items: [
      {
        id: 'batata-chips-m',
        name: 'BATATA CHIPS',
        accent: 'M',
        mineral: 'Porção M',
        gemColor: '#F59E0B',
        price: 16.90,
        description: 'Batata chips crocante servida na caixinha exclusiva Forja dos Burgers.',
        tags: ['acompanhamento'],
        badges: ['Crocante', 'Tamanho M'],
        cardIcon: 'chips'
      },
      {
        id: 'batata-palito-m',
        name: 'BATATA PALITO',
        accent: 'M',
        mineral: 'Porção M',
        gemColor: '#F59E0B',
        price: 16.90,
        description: 'Batata palito sequinha e dourada na caixinha exclusiva Forja dos Burgers.',
        tags: ['acompanhamento'],
        badges: ['Tradicional', 'Tamanho M'],
        cardIcon: 'fries'
      }
    ]
  },
  {
    id: 'bebidas',
    title: 'BEBIDAS',
    subtitle: 'Geladas para refrescar o calor da forja',
    layout: 'grid-2',
    isIconCard: true,
    items: [
      {
        id: 'refri-lata-350',
        name: 'REFRI LATA',
        accent: '350ML',
        price: 10.90,
        description: 'Coca-Cola, Coca-Cola Zero, Guaraná, Fanta Laranja, Pepsi ou Pepsi Black.',
        tags: ['bebida'],
        badges: ['6 sabores'],
        drinkOptions: REFRI_LATA_SABORES,
        cardIcon: 'can'
      },
      {
        id: 'refri-1-litro',
        name: 'REFRI',
        accent: '1 LITRO',
        price: 17.90,
        description: 'Coca-Cola ou Guaraná Antarctica — ideal para dividir.',
        tags: ['bebida'],
        badges: ['2 sabores'],
        drinkOptions: REFRI_1L_SABORES,
        cardIcon: 'bottle'
      }
    ]
  }
];
