// Improo Shop — anonymous, localStorage-only cart (guest checkout, no accounts).
// Included on every /shop/* page. Injects the drawer + header cart icon once,
// and exposes cartAdd/cartUpdateQty/cartRemove/etc. globally for pages to call.

(function () {
  var STORAGE_KEY = 'improo_shop_cart';

  function cartGet() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function cartSave(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    cartRenderBadge();
  }

  function cartAdd(line) {
    var items = cartGet();
    var existing = items.filter(function (i) {
      return i.id === line.id && i.color === line.color && i.size === line.size;
    })[0];
    if (existing) {
      existing.qty += line.qty;
    } else {
      items.push(line);
    }
    cartSave(items);
    cartRenderDrawer();
    cartOpenDrawer();
  }

  function cartUpdateQty(index, qty) {
    var items = cartGet();
    if (!items[index]) return;
    items[index].qty = Math.max(1, qty);
    cartSave(items);
    cartRenderDrawer();
    if (typeof window.cartRenderPage === 'function') window.cartRenderPage();
  }

  function cartRemove(index) {
    var items = cartGet();
    items.splice(index, 1);
    cartSave(items);
    cartRenderDrawer();
    if (typeof window.cartRenderPage === 'function') window.cartRenderPage();
  }

  function cartSubtotal() {
    return cartGet().reduce(function (sum, i) { return sum + i.price * i.qty; }, 0);
  }

  function cartCount() {
    return cartGet().reduce(function (sum, i) { return sum + i.qty; }, 0);
  }

  function shopEscapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function cartRenderBadge() {
    var count = cartCount();
    document.querySelectorAll('.shop-cart-badge').forEach(function (el) {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  function cartOpenDrawer() {
    var overlay = document.querySelector('.shop-cart-overlay');
    var drawer = document.querySelector('.shop-cart-drawer');
    if (overlay) overlay.classList.add('is-open');
    if (drawer) drawer.classList.add('is-open');
  }

  function cartCloseDrawer() {
    var overlay = document.querySelector('.shop-cart-overlay');
    var drawer = document.querySelector('.shop-cart-drawer');
    if (overlay) overlay.classList.remove('is-open');
    if (drawer) drawer.classList.remove('is-open');
  }

  function cartRenderDrawer() {
    var itemsEl = document.querySelector('.shop-cart-drawer .shop-cart-items');
    var footEl = document.querySelector('.shop-cart-drawer .shop-cart-drawer-foot');
    if (!itemsEl) return;
    var items = cartGet();
    if (items.length === 0) {
      itemsEl.innerHTML = '<div class="shop-cart-empty">Your bag is empty.</div>';
      if (footEl) footEl.style.display = 'none';
      return;
    }
    if (footEl) footEl.style.display = '';
    itemsEl.innerHTML = items.map(function (item, index) {
      return '' +
        '<div class="shop-cart-line">' +
          '<img src="' + item.image + '" alt="" width="60" height="75" loading="lazy">' +
          '<div class="shop-cart-line-info">' +
            '<div class="shop-cart-line-name">' + shopEscapeHtml(item.name) + '</div>' +
            '<div class="shop-cart-line-meta">' + shopEscapeHtml(item.color) + ' · ' + shopEscapeHtml(item.size) + ' · Qty ' + item.qty + '</div>' +
            '<button class="shop-cart-line-remove" data-index="' + index + '">Remove</button>' +
          '</div>' +
        '</div>';
    }).join('');
    itemsEl.querySelectorAll('.shop-cart-line-remove').forEach(function (btn) {
      btn.addEventListener('click', function () { cartRemove(parseInt(btn.getAttribute('data-index'), 10)); });
    });
    var subtotalEl = document.querySelector('.shop-cart-drawer .shop-cart-subtotal-amount');
    if (subtotalEl && typeof shopFormatPrice === 'function') subtotalEl.textContent = shopFormatPrice(cartSubtotal(), 'EUR');
  }

  function cartInjectDrawer() {
    if (document.querySelector('.shop-cart-drawer')) return;
    var overlay = document.createElement('div');
    overlay.className = 'shop-cart-overlay';
    var drawer = document.createElement('div');
    drawer.className = 'shop-cart-drawer';
    drawer.innerHTML = '' +
      '<div class="shop-cart-drawer-head">' +
        '<h3>Your Bag</h3>' +
        '<button class="shop-cart-close" aria-label="Close cart">&times;</button>' +
      '</div>' +
      '<div class="shop-cart-items"></div>' +
      '<div class="shop-cart-drawer-foot">' +
        '<div class="shop-cart-subtotal"><span>Subtotal</span><span class="shop-cart-subtotal-amount">€0.00</span></div>' +
        '<a href="/shop/cart.html" class="shop-btn shop-btn-block">View Bag</a>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    overlay.addEventListener('click', cartCloseDrawer);
    drawer.querySelector('.shop-cart-close').addEventListener('click', cartCloseDrawer);
  }

  function cartInjectIcon() {
    var socials = document.querySelector('.site-header .socials');
    if (!socials || document.querySelector('.shop-cart-icon-btn')) return;
    var link = document.createElement('a');
    link.href = '/shop/cart.html';
    link.className = 'shop-cart-icon-btn';
    link.setAttribute('aria-label', 'View cart');
    link.innerHTML = '<i class="ti ti-shopping-bag" style="font-size:20px;"></i><span class="shop-cart-badge">0</span>';
    link.addEventListener('click', function (e) {
      e.preventDefault();
      cartRenderDrawer();
      cartOpenDrawer();
    });
    socials.appendChild(link);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cartCloseDrawer();
  });

  document.addEventListener('DOMContentLoaded', function () {
    cartInjectDrawer();
    cartInjectIcon();
    cartRenderBadge();
    cartRenderDrawer();
  });

  window.cartGet = cartGet;
  window.cartAdd = cartAdd;
  window.cartUpdateQty = cartUpdateQty;
  window.cartRemove = cartRemove;
  window.cartSubtotal = cartSubtotal;
  window.cartCount = cartCount;
  window.cartOpenDrawer = cartOpenDrawer;
  window.cartCloseDrawer = cartCloseDrawer;
  window.cartRenderDrawer = cartRenderDrawer;
  window.shopEscapeHtml = shopEscapeHtml;
})();
