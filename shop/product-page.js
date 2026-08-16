// Improo Shop — shared interactivity for every product detail page
// (apparel and accessories alike). The page's own <script> tag carries
// data-slug so this one file can drive every product's gallery/color/
// size/qty/add-to-cart behavior.

(function () {
  var scriptTag = document.currentScript;
  var slug = scriptTag ? scriptTag.getAttribute('data-slug') : null;
  var product = slug && typeof shopGetProductBySlug === 'function' ? shopGetProductBySlug(slug) : null;

  var selectedColor = null;
  var selectedSize = null;
  var qty = 1;

  function init() {
    if (!product) return;

    var ribbon = document.getElementById('pdp-ribbon');
    if (ribbon && !product.isPlaceholder) ribbon.style.display = 'none';

    if (product.printLocation) {
      var galleryMain = document.querySelector('.shop-gallery-main');
      if (galleryMain) {
        var note = document.createElement('span');
        note.className = 'shop-badge-mini';
        note.textContent = product.printLocation.charAt(0).toUpperCase() + product.printLocation.slice(1) + ' print';
        galleryMain.appendChild(note);
      }
    }

    // Default color: the product's first listed color, overridden below if
    // the page actually has a color-swatch picker (products with just one
    // color/no real choice — like a single-colorway mug — skip the picker).
    if (product.colors && product.colors[0]) selectedColor = product.colors[0].name;
    var defaultColorBtn = document.querySelector('#pdp-colors .shop-swatch.is-active');
    if (defaultColorBtn) selectedColor = defaultColorBtn.getAttribute('data-color');

    // Products with real per-color photography (product.images.byColor) get their
    // gallery rebuilt from data whenever the color changes. Placeholder products
    // without byColor keep the static thumb buttons already in the HTML.
    if (product.images.byColor) renderGalleryForColor(selectedColor);

    document.querySelectorAll('#pdp-thumbs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setActiveThumb(btn);
      });
    });

    // "In the gym" strip stays visible regardless of selected color — clicking
    // one just swaps the main image, same as the color-driven thumbnail rail.
    document.querySelectorAll('#pdp-lifestyle-thumbs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setActiveThumb(btn);
      });
    });

    document.querySelectorAll('#pdp-colors .shop-swatch').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#pdp-colors .shop-swatch').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        selectedColor = btn.getAttribute('data-color');
        var label = document.getElementById('pdp-color-selected');
        if (label) label.textContent = selectedColor;
        if (product.images.byColor) renderGalleryForColor(selectedColor);
      });
    });

    var sizePills = document.querySelectorAll('#pdp-sizes .shop-size-pill');
    sizePills.forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#pdp-sizes .shop-size-pill').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        selectedSize = btn.getAttribute('data-size');
        updateAddToCartState();
      });
    });
    // A single-size product (e.g. one mug size) has nothing to choose —
    // select it automatically instead of making the shopper click it.
    if (sizePills.length === 1) sizePills[0].click();

    var qtyEl = document.getElementById('pdp-qty');
    var minusBtn = document.getElementById('pdp-qty-minus');
    var plusBtn = document.getElementById('pdp-qty-plus');
    if (minusBtn) minusBtn.addEventListener('click', function () {
      qty = Math.max(1, qty - 1);
      if (qtyEl) qtyEl.textContent = qty;
    });
    if (plusBtn) plusBtn.addEventListener('click', function () {
      qty = qty + 1;
      if (qtyEl) qtyEl.textContent = qty;
    });

    var addBtn = document.getElementById('pdp-add-to-cart');
    if (addBtn) addBtn.addEventListener('click', function () {
      if (!selectedSize) return;
      var colorImage = (product.images.byColor && product.images.byColor[selectedColor])
        ? product.images.byColor[selectedColor].thumb
        : product.images.thumb;
      cartAdd({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        currency: product.currency,
        image: colorImage,
        color: selectedColor,
        size: selectedSize,
        qty: qty
      });
    });
  }

  function setActiveThumb(btn) {
    document.querySelectorAll('#pdp-thumbs button, #pdp-lifestyle-thumbs button').forEach(function (b) { b.classList.remove('is-active'); });
    btn.classList.add('is-active');
    var mainImg = document.getElementById('pdp-main-img');
    if (mainImg) mainImg.src = btn.getAttribute('data-img');
    updatePrintBadge(btn.getAttribute('data-badge') !== 'hide');
  }

  // The "Back Print" badge only makes sense while the back-of-garment photo is
  // showing — front/side angles don't show the design, so the badge hides
  // itself rather than sitting on top of a photo that seems to contradict it.
  function updatePrintBadge(visible) {
    var badge = document.querySelector('.shop-gallery-main .shop-badge-mini');
    if (badge) badge.style.display = visible ? '' : 'none';
  }

  function renderGalleryForColor(colorName) {
    var colorImages = product.images.byColor[colorName];
    if (!colorImages) return;
    var thumbsEl = document.getElementById('pdp-thumbs');
    if (!thumbsEl) return;
    thumbsEl.innerHTML = colorImages.gallery.map(function (src, i) {
      return '<button type="button"' + (i === 0 ? ' class="is-active"' : '') + ' data-img="' + src + '"' + (i > 0 ? ' data-badge="hide"' : '') + '>' +
        '<img src="' + src + '" alt="" width="74" height="92" loading="lazy"></button>';
    }).join('');
    thumbsEl.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () { setActiveThumb(btn); });
    });
    var mainImg = document.getElementById('pdp-main-img');
    if (mainImg) mainImg.src = colorImages.gallery[0];
    updatePrintBadge(true);
  }

  function updateAddToCartState() {
    var addBtn = document.getElementById('pdp-add-to-cart');
    if (!addBtn) return;
    if (selectedSize) {
      addBtn.disabled = false;
      addBtn.textContent = 'Add to Cart';
    } else {
      addBtn.disabled = true;
      addBtn.textContent = 'Select a size';
    }
  }

  function initSeeMore() {
    document.querySelectorAll('.shop-see-more').forEach(function (btn) {
      var target = document.getElementById(btn.getAttribute('data-target'));
      if (!target) return;
      btn.addEventListener('click', function () {
        var open = target.classList.toggle('is-open');
        btn.textContent = open ? 'Show less' : 'See more';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    init();
    initSeeMore();
  });
})();
