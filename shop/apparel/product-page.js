// Improo Shop — shared interactivity for every product detail page.
// The page's own <script> tag carries data-slug so this one file can drive
// every product page's gallery/color/size/qty/add-to-cart behavior.

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

    var defaultColorBtn = document.querySelector('#pdp-colors .shop-swatch.is-active');
    if (defaultColorBtn) selectedColor = defaultColorBtn.getAttribute('data-color');

    document.querySelectorAll('#pdp-thumbs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#pdp-thumbs button').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var mainImg = document.getElementById('pdp-main-img');
        if (mainImg) mainImg.src = btn.getAttribute('data-img');
      });
    });

    document.querySelectorAll('#pdp-colors .shop-swatch').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#pdp-colors .shop-swatch').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        selectedColor = btn.getAttribute('data-color');
        var label = document.getElementById('pdp-color-selected');
        if (label) label.textContent = selectedColor;
      });
    });

    document.querySelectorAll('#pdp-sizes .shop-size-pill').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#pdp-sizes .shop-size-pill').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        selectedSize = btn.getAttribute('data-size');
        updateAddToCartState();
      });
    });

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
      cartAdd({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        currency: product.currency,
        image: product.images.thumb,
        color: selectedColor,
        size: selectedSize,
        qty: qty
      });
    });
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

  document.addEventListener('DOMContentLoaded', init);
})();
