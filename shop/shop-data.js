// Improo Shop — product catalog data.
// Single source of truth for prices/sizes/colors/images, read by the
// apparel catalog, every product page, and the cart.

window.SHOP_CONSTANTS = {
  PAGE_SIZE: 10,
  TYPES: [
    { id: 'tshirt', label: 'T-Shirts' },
    { id: 'hoodie', label: 'Hoodies' },
    { id: 'tank', label: 'Tanks' }
  ],
  SIZES: ['S', 'M', 'L', 'XL', '2XL'],
  SORTS: [
    { id: 'newest', label: 'Newest' },
    { id: 'price-asc', label: 'Price ↑' },
    { id: 'price-desc', label: 'Price ↓' }
  ]
};

window.SHOP_PRODUCTS = [
  {
    id: 'apparel-001',
    slug: 'small-steps-tee',
    category: 'apparel',
    type: 'tshirt',
    name: 'Small Steps Tee',
    tagline: 'Every step counts.',
    price: 29.00,
    currency: 'EUR',
    description: 'A soft, everyday tee with a quiet reminder of what Improo is about: progress made of small, repeatable steps. Made to be worn on the days you show up and the days you almost didn’t.',
    materials: '100% combed cotton, 180gsm, unisex regular fit. Pre-shrunk.',
    colors: [
      { name: 'Black', swatch: '#161616' },
      { name: 'Bone', swatch: '#e9e3d6' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: {
      thumb: '/images/shop/placeholder/thumb-a.svg',
      gallery: ['/images/shop/placeholder/gallery-a.svg', '/images/shop/placeholder/gallery-b.svg']
    },
    isPlaceholder: true,
    dateAdded: '2026-08-15',
    href: '/shop/apparel/small-steps-tee.html',
    badge: 'New',
    printfulVariantId: null
  },
  {
    id: 'apparel-002',
    slug: 'consistency-hoodie',
    category: 'apparel',
    type: 'hoodie',
    name: 'Consistency Hoodie',
    tagline: 'Show up anyway.',
    price: 54.00,
    currency: 'EUR',
    description: 'A heavyweight hoodie for the early mornings, the walks, the days that need a little more warmth and a little more resolve. Built to last through a lot of small steps.',
    materials: '80% cotton / 20% polyester, 320gsm brushed fleece interior, unisex fit.',
    colors: [
      { name: 'Charcoal', swatch: '#3a3835' },
      { name: 'Sand', swatch: '#cbbfa8' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: {
      thumb: '/images/shop/placeholder/thumb-b.svg',
      gallery: ['/images/shop/placeholder/gallery-b.svg', '/images/shop/placeholder/gallery-a.svg']
    },
    isPlaceholder: true,
    dateAdded: '2026-08-10',
    href: '/shop/apparel/consistency-hoodie.html',
    badge: null,
    printfulVariantId: null
  },
  {
    id: 'apparel-003',
    slug: 'one-step-at-a-time-tank',
    category: 'apparel',
    type: 'tank',
    name: 'One Step at a Time Tank',
    tagline: 'Made to move in.',
    price: 25.00,
    currency: 'EUR',
    description: 'A lightweight tank for training days, walks and everything in between — with a simple line that says what Improo is all about.',
    materials: '100% combed cotton, 160gsm, unisex fit.',
    colors: [
      { name: 'Black', swatch: '#161616' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: {
      thumb: '/images/shop/placeholder/thumb-a.svg',
      gallery: ['/images/shop/placeholder/gallery-a.svg']
    },
    isPlaceholder: true,
    dateAdded: '2026-08-05',
    href: '/shop/apparel/one-step-at-a-time-tank.html',
    badge: null,
    printfulVariantId: null
  }
];

function shopFormatPrice(n, currency) {
  var symbol = currency === 'USD' ? '$' : '€';
  return symbol + n.toFixed(2);
}

function shopGetProductBySlug(slug) {
  return window.SHOP_PRODUCTS.filter(function (p) { return p.slug === slug; })[0] || null;
}
