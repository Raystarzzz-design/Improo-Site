/* ── CONTACT POPUP (global: called from onclick attributes in HTML) ── */
function openPopup() {
  document.getElementById('contact-popup').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closePopup() {
  document.getElementById('contact-popup').classList.remove('active');
  document.body.style.overflow = '';
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('contact-popup')) closePopup();
}
function sendEmail() {
  var name    = document.getElementById('contact-name').value;
  var email   = document.getElementById('contact-email').value;
  var message = document.getElementById('contact-message').value;
  if (!name || !email || !message) { alert('Please fill in all fields.'); return; }
  window.location.href = 'mailto:contact.improo@gmail.com?subject=Contact from '
    + encodeURIComponent(name)
    + '&body=Name: ' + encodeURIComponent(name)
    + '%0AEmail: ' + encodeURIComponent(email)
    + '%0A%0A' + encodeURIComponent(message);
  closePopup();
}

window.addEventListener('load', function () {

  /* ── HEADER SCROLL GLASS ── */
  var hdr = document.getElementById('hdr');
  function onScroll() { hdr.classList.toggle('scrolled', window.scrollY > 30); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── BURGER MENU ── */
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if (burger && navlinks) {
    burger.addEventListener('click', function () { navlinks.classList.toggle('open'); });
    navlinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navlinks.classList.remove('open'); });
    });
  }

  /* ── HERO SLIDER ── */
  (function () {
    var container = document.querySelector('.hero-slides-container');
    if (!container) return;
    var slides  = container.querySelectorAll('.hero-slide');
    var dots    = document.querySelectorAll('.hero-dot');
    var prevBtn = document.querySelector('.hero-slider-prev');
    var nextBtn = document.querySelector('.hero-slider-next');
    var current = 0, timer = null;

    function setHeight() {
      var maxH = 0;
      slides.forEach(function (s) { s.style.height = ''; if (s.offsetHeight > maxH) maxH = s.offsetHeight; });
      if (maxH > 0) { container.style.height = maxH + 'px'; slides.forEach(function (s) { s.style.height = maxH + 'px'; }); }
    }
    function goTo(idx) {
      slides[current].classList.remove('is-active');
      if (dots[current]) dots[current].classList.remove('is-active');
      current = ((idx % slides.length) + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      if (dots[current]) dots[current].classList.add('is-active');
    }
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(current + 1); }, 5000);
    }
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); resetTimer(); });
    dots.forEach(function (dot, i) { dot.addEventListener('click', function () { goTo(i); resetTimer(); }); });
    setHeight();
    window.addEventListener('resize', setHeight);
    resetTimer();
  }());

  /* ── WAITLIST ── */
  var joinBtn = document.getElementById('joinbtn');
  if (joinBtn) {
    joinBtn.addEventListener('click', function () {
      var input = document.querySelector('.cta input[type="email"]');
      if (!input) return;
      var val = input.value.trim();
      if (val) {
        window.location.href = 'mailto:contact.improo@gmail.com?subject=Waitlist signup&body=Please add me to the waitlist: ' + encodeURIComponent(val);
        input.value = '';
      } else {
        input.focus();
      }
    });
  }

  /* ── GSAP ANIMATIONS ── */
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  if (reduce || typeof gsap === 'undefined') {
    /* Fallback: show everything immediately */
    document.querySelectorAll('.reveal,[data-hero]').forEach(function (el) {
      el.style.opacity = 1; el.style.transform = 'none';
    });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
    var jp = document.getElementById('jprog');
    if (jp) {
      jp.style.strokeDashoffset = '0';
      try {
        var L = jp.getTotalLength();
        var put = function (el, f) {
          var p = jp.getPointAtLength(f * L);
          el.setAttribute('transform', 'translate(' + p.x + ',' + p.y + ')');
          el.setAttribute('opacity', '1');
        };
        put(document.getElementById('walker'), 0.99);
        put(document.getElementById('companion'), 0.95);
        var sup = document.getElementById('j-support');
        if (sup) sup.setAttribute('opacity', '0.9');
        var t2 = document.getElementById('j-tagline2');
        if (t2) { t2.textContent = "Get support. Give support — that's how we climb."; t2.setAttribute('opacity', '0.85'); }
      } catch (e) {}
    }
    var cf = document.getElementById('climbfill'); if (cf) cf.style.transform = 'scaleY(1)';
    var rf = document.getElementById('ringfill');  if (rf) rf.setAttribute('stroke-dashoffset', '117');
    var rp = document.getElementById('ringpct');   if (rp) rp.textContent = '70%';
    document.querySelectorAll('#bars i').forEach(function (i) { i.style.height = i.style.getPropertyValue('--h'); });
    return;
  }

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  /* hero entrance */
  gsap.from('[data-hero]', { y: 30, opacity: 0, duration: .9, stagger: .13, ease: 'power3.out', delay: .15 });

  /* ── JOURNEY ANIMATION ── */
  var path  = document.getElementById('jprog');
  if (path) {
  var jlen  = path.getTotalLength();
  var drawn = path;
  drawn.style.strokeDasharray  = jlen;
  drawn.style.strokeDashoffset = jlen;
  var lead = document.getElementById('walker');
  var comp = document.getElementById('companion');
  var support  = document.getElementById('j-support');
  var tagline2 = document.getElementById('j-tagline2');

  function fracAtX(targetX) {
    var lo = 0, hi = jlen;
    for (var i = 0; i < 24; i++) {
      var mid = (lo + hi) / 2;
      (path.getPointAtLength(mid).x < targetX) ? (lo = mid) : (hi = mid);
    }
    return lo / jlen;
  }
  var stopX  = [290, 510, 730, 950, 1160];
  var stops  = stopX.map(fracAtX);
  var MEET   = stops[2];
  var TRAIL  = 0.022;

  function place(el, frac, dx) {
    frac = Math.max(0, Math.min(1, frac));
    var pt  = path.getPointAtLength(frac * jlen);
    var pt2 = path.getPointAtLength(Math.min(jlen, frac * jlen + 1));
    var ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI;
    gsap.set(el, { x: pt.x + (dx || 0), y: pt.y, rotation: ang });
  }

  function buildWalk() {
    var seg = [0].concat(stops, [1]);
    var lp  = { p: 0 };
    var tl  = gsap.timeline({
      delay: .3,
      onComplete: function () { gsap.delayedCall(1.4, function () { tl.kill(); start(); }); }
    });

    function sync() {
      drawn.style.strokeDashoffset = jlen * (1 - lp.p);
      place(lead, lp.p, 0);
      if (lp.p >= MEET - 0.001) place(comp, Math.max(MEET, lp.p - TRAIL), 0);
    }
    tl.eventCallback('onUpdate', sync);

    var STEPS_PER_SEG = 6;
    function limbs(prefix, dur, at) {
      var lA = '.' + prefix + 'legA', lB = '.' + prefix + 'legB';
      var aA = '.' + prefix + 'ArmA', aB = '.' + prefix + 'ArmB';
      var n  = Math.max(3, STEPS_PER_SEG * 2 - 1);
      var st = dur / (n + 1);
      var o  = { transformOrigin: '0px 0px' };
      tl.fromTo(lA, { rotation:  22, ...o }, { rotation: -22, ...o, duration: st, yoyo: true, repeat: n, ease: 'sine.inOut' }, at)
        .fromTo(lB, { rotation: -22, ...o }, { rotation:  22, ...o, duration: st, yoyo: true, repeat: n, ease: 'sine.inOut' }, at)
        .fromTo(aA, { rotation: -18, ...o }, { rotation:  18, ...o, duration: st, yoyo: true, repeat: n, ease: 'sine.inOut' }, at)
        .fromTo(aB, { rotation:  18, ...o }, { rotation: -18, ...o, duration: st, yoyo: true, repeat: n, ease: 'sine.inOut' }, at)
        .set([lA, lB, aA, aB], { rotation: 0, ...o }, at + dur);
    }

    var PACE = 7.0, PAUSE = .8, SIGH = .45;
    var tInjury = 0;

    for (var i = 1; i < seg.length; i++) {
      var to       = seg[i];
      var dur      = PACE * (to - seg[i - 1]);
      var segStart = tl.duration();
      tl.to(lp, { p: to, duration: dur, ease: 'none' }, segStart);
      limbs('', dur, segStart);
      if (i >= 3) limbs('c', dur, segStart);
      if (i === 3) tInjury = segStart + dur;
      if (i < seg.length - 1) {
        var pauseAt = segStart + dur;
        tl.to(lead, { scaleY: .93, transformOrigin: 'bottom center', duration: SIGH, yoyo: true, repeat: 1, ease: 'sine.inOut' }, pauseAt)
          .to({}, { duration: PAUSE }, pauseAt);
        if (i >= 3) tl.to(comp, { scaleY: .93, transformOrigin: 'bottom center', duration: SIGH, yoyo: true, repeat: 1, ease: 'sine.inOut' }, pauseAt);
      }
    }

    var phrase = "Get support. Give support — that's how we climb.";
    var ti = { i: 0 };
    tl.to(comp, { opacity: 1, duration: .45, ease: 'power1.out' }, tInjury)
      .fromTo(support, { opacity: 0, y: 8 }, { opacity: .95, y: 0, duration: .5, ease: 'power2.out' }, tInjury + .1)
      .to(support, { opacity: 0, y: -6, duration: .5, ease: 'power1.in' }, tInjury + PAUSE + SIGH + .3)
      .set(tagline2, { opacity: 1 }, tInjury + .2)
      .to(ti, {
        i: phrase.length, duration: 2.2, ease: 'none',
        onUpdate:  function () { tagline2.textContent = phrase.slice(0, Math.round(ti.i)) + '▍'; },
        onComplete: function () { tagline2.textContent = phrase; }
      }, tInjury + .2);
    tl.to([lead, comp], { opacity: 0, duration: .6, ease: 'power1.out' })
      .to(tagline2,     { opacity: 0, duration: .6, ease: 'power1.in' }, '<');
    return tl;
  }

  var LIMBS = ['.legA', '.legB', '.armA', '.armB', '.clegA', '.clegB', '.cArmA', '.cArmB'];
  function start() {
    gsap.killTweensOf([lead, comp, support, tagline2].concat(LIMBS));
    gsap.set([lead, comp], { xPercent: -50, yPercent: -50, scaleY: 1 });
    gsap.set(lead,  { opacity: 1 });
    gsap.set(comp,  { opacity: 0 });
    gsap.set([support, tagline2], { opacity: 0 });
    if (tagline2) tagline2.textContent = '';
    gsap.set(LIMBS, { rotation: 0, transformOrigin: '0px 0px' });
    place(lead, 0, 0);
    place(comp, MEET, 0);
    drawn.style.strokeDashoffset = jlen;
    buildWalk();
  }
  start();

  gsap.to('.flag-cloth', { rotation: -8, transformOrigin: 'left center', duration: .6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  } /* ── einde journey-animatie: alleen draaien als de journey-SVG nog bestaat ── */

  /* scroll reveals */
  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.to(el, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  /* count-up stats */
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var end = +el.dataset.count, suf = el.dataset.suffix || '', o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: function () { el.textContent = Math.round(o.v) + suf; } });
  });

  /* climb line fills on scroll */
  gsap.to('#climbfill', { scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '.climb', start: 'top 70%', end: 'bottom 75%', scrub: .6 } });

  /* phone ring + bars animate on enter */
  ScrollTrigger.create({ trigger: '.phone', start: 'top 75%', once: true, onEnter: function () {
    gsap.to('#ringfill', { strokeDashoffset: 117, duration: 1.6, ease: 'power2.out' });
    var pv = { v: 0 };
    gsap.to(pv, { v: 70, duration: 1.6, ease: 'power2.out',
      onUpdate: function () { document.getElementById('ringpct').textContent = Math.round(pv.v) + '%'; } });
    gsap.to('#bars i', { height: function (i) { return document.querySelectorAll('#bars i')[i].style.getPropertyValue('--h'); },
      duration: .8, stagger: .08, ease: 'power2.out' });
  }});

});
