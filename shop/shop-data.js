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
  SIZES: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
  SORTS: [
    { id: 'newest', label: 'Newest' },
    { id: 'price-asc', label: 'Price ↑' },
    { id: 'price-desc', label: 'Price ↓' }
  ]
};

window.SHOP_PRODUCTS = [
  {
    id: 'apparel-001',
    slug: 'some-lift-people-tee',
    category: 'apparel',
    type: 'tshirt',
    name: 'Some Lift People Tee',
    tagline: 'For the ones who show up for everyone else.',
    price: 29.99,
    currency: 'EUR',
    description: 'Not everyone lifts weights. Some lift people — and we don’t mind being that person. A soft, everyday tee for the friend who always answers the phone, shows up without being asked, and carries more than their fair share.',
    materials: '100% cotton (Bella+Canvas 3001), back print, unisex fit.',
    printLocation: 'back',
    colors: [
      { name: 'Black Heather', swatch: '#1c1b1a' },
      { name: 'Navy', swatch: '#1e2340' },
      { name: 'Heather Brown', swatch: '#5c4a3d' },
      { name: 'Heather Slate', swatch: '#52616f' },
      { name: 'Autumn', swatch: '#b5502a' },
      { name: 'Leaf', swatch: '#5a8f3c' },
      { name: 'Heather Natural', swatch: '#d9cdb8' },
      { name: 'Vintage White', swatch: '#f3ede1' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    images: {
      thumb: '/images/shop/apparel/some-lift-people-tee/black-heather-thumb.webp',
      gallery: [
        '/images/shop/apparel/some-lift-people-tee/black-heather-1.webp',
        '/images/shop/apparel/some-lift-people-tee/black-heather-2.webp'
      ],
      byColor: {
        'Black Heather': {
          thumb: '/images/shop/apparel/some-lift-people-tee/black-heather-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/black-heather-1.webp',
            '/images/shop/apparel/some-lift-people-tee/black-heather-2.webp'
          ]
        },
        'Navy': {
          thumb: '/images/shop/apparel/some-lift-people-tee/navy-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/navy-1.webp',
            '/images/shop/apparel/some-lift-people-tee/navy-2.webp'
          ]
        },
        'Heather Brown': {
          thumb: '/images/shop/apparel/some-lift-people-tee/heather-brown-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/heather-brown-1.webp',
            '/images/shop/apparel/some-lift-people-tee/heather-brown-2.webp'
          ]
        },
        'Heather Slate': {
          thumb: '/images/shop/apparel/some-lift-people-tee/heather-slate-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/heather-slate-1.webp',
            '/images/shop/apparel/some-lift-people-tee/heather-slate-2.webp'
          ]
        },
        'Autumn': {
          thumb: '/images/shop/apparel/some-lift-people-tee/autumn-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/autumn-1.webp',
            '/images/shop/apparel/some-lift-people-tee/autumn-2.webp'
          ]
        },
        'Leaf': {
          thumb: '/images/shop/apparel/some-lift-people-tee/leaf-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/leaf-1.webp',
            '/images/shop/apparel/some-lift-people-tee/leaf-2.webp'
          ]
        },
        'Heather Natural': {
          thumb: '/images/shop/apparel/some-lift-people-tee/heather-natural-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/heather-natural-1.webp',
            '/images/shop/apparel/some-lift-people-tee/heather-natural-2.webp'
          ]
        },
        'Vintage White': {
          thumb: '/images/shop/apparel/some-lift-people-tee/vintage-white-thumb.webp',
          gallery: [
            '/images/shop/apparel/some-lift-people-tee/vintage-white-1.webp',
            '/images/shop/apparel/some-lift-people-tee/vintage-white-2.webp'
          ]
        }
      }
    },
    isPlaceholder: false,
    dateAdded: '2026-08-15',
    href: '/shop/apparel/some-lift-people-tee.html',
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
