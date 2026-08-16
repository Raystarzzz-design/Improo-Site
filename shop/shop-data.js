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
  ],
  ACCESSORY_TYPES: [
    { id: 'mug', label: 'Mugs' }
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
            '/images/shop/apparel/some-lift-people-tee/heather-brown-lifestyle.webp',
            '/images/shop/apparel/some-lift-people-tee/heather-brown-lifestyle-2.webp',
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
    slug: 'dont-give-up-hoodie',
    category: 'apparel',
    type: 'hoodie',
    name: "Don't Give Up Hoodie",
    tagline: 'Every step counts.',
    price: 40.99,
    currency: 'EUR',
    description: "“Don’t give up. You can do this. Every step counts.” A heavyweight hoodie for the early mornings, the walks, the days that need a little more warmth and a little more resolve.",
    materials: 'Unisex Heavy Blend Hoodie (Gildan 18500), back print, unisex fit.',
    printLocation: 'back',
    colors: [
      { name: 'Orange', swatch: '#d7742a' },
      { name: 'Military Green', swatch: '#5c6444' },
      { name: 'Sport Grey', swatch: '#9a9a9a' },
      { name: 'Carolina Blue', swatch: '#7bafd4' },
      { name: 'Azalea', swatch: '#e389a3' },
      { name: 'Gold', swatch: '#c9a536' },
      { name: 'Light Blue', swatch: '#a9c8e0' },
      { name: 'Sand', swatch: '#cbbfa8' },
      { name: 'Light Pink', swatch: '#f2c6d3' },
      { name: 'Ash', swatch: '#b2b0ab' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    images: {
      thumb: '/images/shop/apparel/dont-give-up-hoodie/orange-thumb.webp',
      gallery: [
        '/images/shop/apparel/dont-give-up-hoodie/orange-1.webp',
        '/images/shop/apparel/dont-give-up-hoodie/orange-2.webp'
      ],
      byColor: {
        'Orange': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/orange-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/orange-1.webp', '/images/shop/apparel/dont-give-up-hoodie/orange-2.webp']
        },
        'Military Green': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/military-green-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/military-green-1.webp', '/images/shop/apparel/dont-give-up-hoodie/military-green-2.webp']
        },
        'Sport Grey': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/sport-grey-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/sport-grey-1.webp']
        },
        'Carolina Blue': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/carolina-blue-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/carolina-blue-1.webp', '/images/shop/apparel/dont-give-up-hoodie/carolina-blue-2.webp']
        },
        'Azalea': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/azalea-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/azalea-1.webp', '/images/shop/apparel/dont-give-up-hoodie/azalea-2.webp']
        },
        'Gold': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/gold-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/gold-1.webp', '/images/shop/apparel/dont-give-up-hoodie/gold-2.webp']
        },
        'Light Blue': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/light-blue-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/light-blue-1.webp', '/images/shop/apparel/dont-give-up-hoodie/light-blue-2.webp']
        },
        'Sand': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/sand-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/sand-1.webp', '/images/shop/apparel/dont-give-up-hoodie/sand-2.webp']
        },
        'Light Pink': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/light-pink-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/light-pink-1.webp', '/images/shop/apparel/dont-give-up-hoodie/light-pink-2.webp']
        },
        'Ash': {
          thumb: '/images/shop/apparel/dont-give-up-hoodie/ash-thumb.webp',
          gallery: ['/images/shop/apparel/dont-give-up-hoodie/ash-1.webp', '/images/shop/apparel/dont-give-up-hoodie/ash-2.webp']
        }
      }
    },
    isPlaceholder: false,
    dateAdded: '2026-08-16',
    href: '/shop/apparel/dont-give-up-hoodie.html',
    badge: 'New',
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
  },
  {
    id: 'accessories-001',
    slug: 'todays-goals-mug',
    category: 'accessories',
    type: 'mug',
    name: "Today's Goals Mug",
    tagline: "Show up. Do the work. Don't quit.",
    price: 9.49,
    currency: 'EUR',
    description: "A little checklist for the days you need it: Show up. Do the work. Don't quit. Repeat tomorrow.",
    materials: 'White glossy ceramic mug, 11 oz (325 ml), dishwasher and microwave safe.',
    colors: [
      { name: 'White', swatch: '#ffffff' }
    ],
    sizes: ['11 oz (325 ml)'],
    images: {
      thumb: '/images/shop/accessories/todays-goals-mug/thumb.webp',
      gallery: [
        '/images/shop/accessories/todays-goals-mug/1.webp',
        '/images/shop/accessories/todays-goals-mug/2.webp',
        '/images/shop/accessories/todays-goals-mug/3.webp'
      ]
    },
    isPlaceholder: false,
    dateAdded: '2026-08-16',
    href: '/shop/accessories/todays-goals-mug.html',
    badge: 'New',
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
