// Improo Shop — accessories catalog: URL-state filtering, sorting, pagination.
// Same pattern as the apparel catalog, simplified: accessories don't (yet)
// have color/size variants worth filtering on, just type + sort.

(function () {
  var PAGE_SIZE = window.SHOP_CONSTANTS.PAGE_SIZE;

  function parseState() {
    var params = new URLSearchParams(location.search);
    return {
      type: params.get('type') || '',
      sort: params.get('sort') || 'newest',
      page: parseInt(params.get('page'), 10) || 1
    };
  }

  function stateToQuery(state) {
    var params = new URLSearchParams();
    if (state.type) params.set('type', state.type);
    if (state.sort && state.sort !== 'newest') params.set('sort', state.sort);
    if (state.page && state.page !== 1) params.set('page', state.page);
    var qs = params.toString();
    return qs ? '?' + qs : location.pathname;
  }

  function getAllAccessories() {
    return window.SHOP_PRODUCTS.filter(function (p) { return p.category === 'accessories'; });
  }

  function applyFilters(products, state) {
    return products.filter(function (p) {
      if (state.type && p.type !== state.type) return false;
      return true;
    });
  }

  function applySort(products, sort) {
    var arr = products.slice();
    if (sort === 'price-asc') arr.sort(function (a, b) { return a.price - b.price; });
    else if (sort === 'price-desc') arr.sort(function (a, b) { return b.price - a.price; });
    else arr.sort(function (a, b) { return new Date(b.dateAdded) - new Date(a.dateAdded); });
    return arr;
  }

  function pillLink(label, active, newState) {
    return '<a href="' + stateToQuery(newState) + '" class="shop-pill' + (active ? ' is-active' : '') + '" data-nav="1">' + label + '</a>';
  }

  function renderFilterBar(state, count) {
    var el = document.getElementById('shop-filterbar');
    var types = window.SHOP_CONSTANTS.ACCESSORY_TYPES;
    var sorts = window.SHOP_CONSTANTS.SORTS;

    var allState = Object.assign({}, state, { type: '', page: 1 });
    var typeHtml = pillLink('All', state.type === '', allState) + types.map(function (t) {
      var active = state.type === t.id;
      var newState = Object.assign({}, state, { type: active ? '' : t.id, page: 1 });
      return pillLink(t.label, active, newState);
    }).join('');

    var sortHtml = sorts.map(function (s) {
      var active = state.sort === s.id;
      var newState = Object.assign({}, state, { sort: s.id, page: 1 });
      return '<a href="' + stateToQuery(newState) + '" class="' + (active ? 'is-active' : '') + '" data-nav="1">' + s.label + '</a>';
    }).join('');

    el.innerHTML = '' +
      '<div class="shop-filter-count">' + count + ' piece' + (count === 1 ? '' : 's') + '</div>' +
      '<div class="shop-filter-group"><span class="shop-filter-label">Type</span>' + typeHtml + '</div>' +
      '<div class="shop-sort-links">' + sortHtml + '</div>';
  }

  function renderGrid(items) {
    var el = document.getElementById('shop-grid');
    var emptyEl = document.getElementById('shop-empty');
    if (items.length === 0) {
      el.innerHTML = '';
      el.style.display = 'none';
      emptyEl.style.display = 'block';
      return;
    }
    el.style.display = '';
    emptyEl.style.display = 'none';
    el.innerHTML = items.map(function (p, i) {
      var badge = p.badge ? '<span class="shop-badge-mini">' + p.badge + '</span>' : '';
      return '' +
        '<a href="' + p.href + '" class="shop-grid-item">' +
          '<div class="shop-grid-photo">' +
            badge +
            '<img src="' + p.images.thumb + '" alt="' + p.name + '" width="480" height="600" loading="' + (i < 3 ? 'eager' : 'lazy') + '">' +
          '</div>' +
          '<div class="shop-grid-info">' +
            '<div class="shop-grid-name">' + p.name + '</div>' +
            '<div class="shop-grid-price">' + shopFormatPrice(p.price, p.currency) + '</div>' +
          '</div>' +
        '</a>';
    }).join('');
  }

  function renderPagination(state, totalPages) {
    var el = document.getElementById('shop-pagination');
    if (totalPages <= 1) { el.innerHTML = ''; return; }
    var html = '';
    var prevState = Object.assign({}, state, { page: state.page - 1 });
    html += state.page > 1 ? '<a href="' + stateToQuery(prevState) + '" data-nav="1">‹</a>' : '<span class="shop-page-disabled">‹</span>';
    for (var i = 1; i <= totalPages; i++) {
      var s = Object.assign({}, state, { page: i });
      html += '<a href="' + stateToQuery(s) + '" class="' + (i === state.page ? 'is-active' : '') + '" data-nav="1">' + i + '</a>';
    }
    var nextState = Object.assign({}, state, { page: state.page + 1 });
    html += state.page < totalPages ? '<a href="' + stateToQuery(nextState) + '" data-nav="1">›</a>' : '<span class="shop-page-disabled">›</span>';
    el.innerHTML = html;
  }

  function render() {
    var state = parseState();
    var all = getAllAccessories();
    var filtered = applySort(applyFilters(all, state), state.sort);
    var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    state.page = Math.min(Math.max(1, state.page), totalPages);
    var pageItems = filtered.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);

    renderFilterBar(state, filtered.length);
    renderGrid(pageItems);
    renderPagination(state, totalPages);
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[data-nav]');
    if (!link) return;
    e.preventDefault();
    history.pushState(null, '', link.getAttribute('href'));
    render();
    var bar = document.getElementById('shop-filterbar');
    if (bar) window.scrollTo({ top: bar.offsetTop - 100, behavior: 'smooth' });
  });

  window.addEventListener('popstate', render);
  document.addEventListener('DOMContentLoaded', render);
})();
