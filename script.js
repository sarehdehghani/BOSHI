(function () {
  'use strict';

  /* ---------- Texts (fa / en) ---------- */
  var TX = {
    fa: {parts:'قطعات',nShop:'فروشگاه',nHist:'تاریخچه',nWhy:'چرا بوش',eyebrow:'مهندسی آلمانی از ۱۸۸۶',h1a:'قدرت دقیق.',h1b:'اصالت بوش.',sub:'قطعات اصلی و گارانتی‌دار بوش برای خودروی شما؛ از شمع و ترمز تا باتری و دیاگ.',cta:'خرید قطعات',cta2:'تاریخچه بوش',shop:'فروشگاه قطعات',search:'جستجوی نام یا کد قطعه…',sort:'مرتب‌سازی',low:'ارزان‌ترین',high:'گران‌ترین',pop:'پرفروش‌ترین',all:'همه',add:'افزودن به سبد',none:'قطعه‌ای پیدا نشد',nw:'جدید',best:'پرفروش',inst:'موجود',lowst:'موجودی محدود',hist:'تاریخچه بوش',histSub:'بیش از یک قرن نوآوری که صنعت خودرو را ساخت.',why:'چرا قطعات اصلی؟',foot:'نمایندگی قطعات اصلی خودرو. تصویر و قیمت‌ها نمونه است.',rights:'تمامی حقوق محفوظ است',cart:'سبد خرید',empty:'سبد شما خالی است',sub_t:'جمع جزء',ship:'ارسال',free:'رایگان',tot:'مبلغ نهایی',checkout:'ثبت سفارش',specs:'مشخصات',done:'سفارش شما ثبت شد ✓',added:'به سبد اضافه شد',cur:'تومان'},
    en: {parts:'PARTS',nShop:'Shop',nHist:'History',nWhy:'Why Bosch',eyebrow:'GERMAN ENGINEERING SINCE 1886',h1a:'PRECISE POWER.',h1b:'BOSCH GRADE.',sub:'Genuine, warrantied Bosch parts for your car: from spark plugs and brakes to batteries and diagnostics.',cta:'SHOP PARTS',cta2:'BOSCH HISTORY',shop:'Parts Catalog',search:'Search by name or part number…',sort:'Sort by',low:'Price: low to high',high:'Price: high to low',pop:'Best sellers',all:'All',add:'Add to cart',none:'No parts found',nw:'NEW',best:'BEST SELLER',inst:'In stock',lowst:'Low stock',hist:'The Bosch Story',histSub:'Over a century of innovation that shaped the automobile.',why:'Why Genuine Parts?',foot:'Authorized genuine automotive parts. Images and prices are samples.',rights:'All rights reserved',cart:'Your Cart',empty:'Your cart is empty',sub_t:'Subtotal',ship:'Shipping',free:'Free',tot:'Total',checkout:'Place Order',specs:'Specifications',done:'Order placed ✓',added:'Added to cart',cur:'$'}
  };

  /* ---------- Data ---------- */
  var CATS = [
    {id:'ign',ic:'⚡',fa:'جرقه و احتراق',en:'Ignition'},
    {id:'brk',ic:'🛑',fa:'ترمز',en:'Brakes'},
    {id:'flt',ic:'🌀',fa:'فیلتر',en:'Filters'},
    {id:'pwr',ic:'🔋',fa:'باتری و برق',en:'Battery & Power'},
    {id:'lgt',ic:'💡',fa:'روشنایی و برف‌پاک‌کن',en:'Lights & Wipers'},
    {id:'dia',ic:'🧰',fa:'دیاگ و ابزار',en:'Diagnostics'}
  ];
  function P(id,c,ic,usd,old,st,pop,tag,pn,fa,en,dfa,den,s1fa,s1en,s2fa,s2en){
    return {id:id,c:c,ic:ic,usd:usd,old:old,st:st,pop:pop,tag:tag,pn:pn,fa:fa,en:en,dfa:dfa,den:den,sp:[{fa:s1fa,en:s1en},{fa:s2fa,en:s2en}]};
  }
  var PRODUCTS = [
    P(1,'ign','⚡',14.9,0,60,95,'best','BSH-IR-4401','شمع ایریدیوم','Iridium Spark Plug','الکترود ایریدیوم برای جرقه پایدار، مصرف کمتر و استارت سریع‌تر.','Iridium electrode for a stable spark, better economy and faster starts.','عمر: تا ۸۰ هزار کیلومتر','Life: up to 80,000 km','گارانتی ۲ ساله','2-year warranty'),
    P(2,'ign','🔥',32,38,25,60,'','BSH-CL-2210','کوئل جرقه‌زن','Ignition Coil','ولتاژ خروجی بالا و عایق مقاوم در برابر حرارت موتور.','High output voltage with heat-resistant insulation.','ولتاژ: ۴۰ کیلوولت','Output: 40 kV','مقاوم در برابر لرزش','Vibration resistant'),
    P(3,'brk','🛑',68,79,18,88,'best','BSH-BP-7730','لنت ترمز سرامیکی','Ceramic Brake Pads','ترمزگیری قوی، گردوغبار کم و بدون صدا.','Strong stopping power, low dust and silent operation.','جنس: سرامیک','Material: ceramic','ست جلو','Front set'),
    P(4,'brk','⚙',112,0,9,40,'nw','BSH-DS-5502','دیسک ترمز ونتیلاته','Vented Brake Disc','دیسک ونتیلاته برای دفع حرارت بهتر در ترمز سنگین.','Vented design for superior heat dissipation under heavy braking.','قطر: ۳۱۲ میلی‌متر','Diameter: 312 mm','پوشش ضدزنگ','Anti-corrosion coating'),
    P(5,'flt','🌀',11.5,0,120,70,'','BSH-OF-1108','فیلتر روغن','Oil Filter','فیلتراسیون بالا و ضدنشت برای محافظت از موتور.','High filtration efficiency with leak-proof sealing.','راندمان: ۹۹٪','Efficiency: 99%','دارای سوپاپ ضدبرگشت','Anti-drain valve'),
    P(6,'flt','💨',16,0,80,55,'','BSH-AF-3320','فیلتر هوا','Air Filter','جریان هوای پاک و پایدار برای عملکرد بهتر موتور.','Clean, steady airflow for better engine performance.','الیاف چندلایه','Multi-layer fibre','هم‌اندازه با فیلتر اصلی','OE-fit replacement'),
    P(7,'pwr','🔋',145,169,14,92,'best','BSH-BT-S5-70','باتری S5 ۷۰ آمپر','S5 Battery 70Ah','باتری قدرتمند مخصوص خودروهای مدرن با استارت-استاپ.','Powerful battery for modern cars with start-stop.','ظرفیت: ۷۰ آمپرساعت','Capacity: 70 Ah','گارانتی ۳ ساله','3-year warranty'),
    P(8,'pwr','⛽',189,0,7,35,'nw','BSH-FP-9004','پمپ بنزین الکتریکی','Electric Fuel Pump','پمپ دقیق با فشار ثابت برای انژکتورهای مدرن.','Precision pump with constant pressure for modern injectors.','فشار: ۴٫۵ بار','Pressure: 4.5 bar','کم‌صدا','Low noise'),
    P(9,'lgt','💡',24,0,70,65,'','BSH-HL-H7','لامپ هالوژن H7 پلاس','H7 Plus Halogen Bulb','تا ۹۰٪ نور بیشتر و دید واضح‌تر در شب.','Up to 90% more light for clearer night vision.','۵۵ وات / ۱۲ ولت','55 W / 12 V','ست ۲ عددی','Pack of 2'),
    P(10,'lgt','🌧',29,0,50,58,'','BSH-WP-AE','برف‌پاک‌کن ایروتوین','Aerotwin Wiper Set','تیغه آیرودینامیک بدون اسکلت فلزی با پاک‌کنی یکنواخت.','Aerodynamic flat blade with an even wipe.','جنس: لاستیک پریمیوم','Premium rubber','ست جلو','Front pair'),
    P(11,'dia','🧰',329,399,5,45,'nw','BSH-DG-KTS','دستگاه دیاگ حرفه‌ای','Pro Diagnostic Scanner','عیب‌یابی تمام سیستم‌های خودرو با نرم‌افزار به‌روز.','Full-system diagnostics with up-to-date software.','اتصال: بلوتوث','Link: Bluetooth','به‌روزرسانی سالانه','Annual updates'),
    P(12,'dia','🔧',89,0,22,30,'','BSH-TK-PRO','ست آچار حرفه‌ای','Pro Tool Kit','ست ۷۲ تکه فولاد کروم‌وانادیوم برای تعمیرکاران جدی.','72-piece chrome-vanadium set for serious mechanics.','۷۲ تکه','72 pieces','کیف ضدضربه','Impact case')
  ];
  var STATS = [
    {v:'1886',fa:'سال تأسیس',en:'Founded'},
    {v:'+400',fa:'کارخانه جهانی',en:'Locations worldwide'},
    {v:'12K+',fa:'قطعه در کاتالوگ',en:'Parts in catalog'},
    {v:'100%',fa:'اصل و گارانتی‌دار',en:'Genuine'}
  ];
  function H(y,a,b,c,d){return {y:y,tfa:a,ten:b,dfa:c,den:d};}
  var HIST = [
    H('1886','تأسیس در اشتوتگارت','Founded in Stuttgart','رابرت بوش کارگاه مکانیک دقیق و مهندسی برق را راه‌اندازی کرد.','Robert Bosch opens his workshop for precision mechanics and electrical engineering.'),
    H('1902','شمع پرولتاژ','High-voltage spark plug','با همکاری گوتلوب هونولد، اولین شمع کاربردی خودرو ساخته شد.','With Gottlob Honold, the first practical spark plug for automobiles is introduced.'),
    H('1927','پمپ انژکتور دیزل','Diesel injection pump','تولید انبوه سیستم تزریق دیزل آغاز شد.','Series production of the diesel injection pump begins.'),
    H('1967','تزریق الکترونیکی','Electronic fuel injection','D-Jetronic، نخستین سیستم تزریق سوخت الکترونیک، معرفی شد.','D-Jetronic, the first electronic fuel injection system, arrives.'),
    H('1978','ترمز ABS','ABS braking','بوش اولین سیستم ABS تولید انبوه جهان را عرضه کرد.','Bosch introduces the world’s first series-production ABS.'),
    H('1995','کنترل پایداری ESP','ESP stability control','سیستم ESP جان هزاران رانندگان را نجات داد.','ESP stability control goes on to save thousands of lives.')
  ];
  var FEATS = [
    {ic:'🛡',fa:'اصالت تضمینی',en:'Guaranteed Genuine',dfa:'همه قطعات با کد و هولوگرام اصلی.',den:'Every part ships with its original code and hologram.'},
    {ic:'🚚',fa:'ارسال سریع',en:'Fast Delivery',dfa:'ارسال رایگان بالای ۱۵۰ دلار.',den:'Free shipping on orders over $150.'},
    {ic:'🔧',fa:'مشاوره فنی',en:'Expert Advice',dfa:'انتخاب قطعه مناسب با کمک مهندسان.',den:'Pick the right part with engineer support.'},
    {ic:'↩',fa:'بازگشت ۱۴ روزه',en:'14-Day Returns',dfa:'ضمانت بازگشت وجه بدون دردسر.',den:'Hassle-free refunds within 14 days.'}
  ];

  /* ---------- State ---------- */
  var S = {lang:'fa', theme:'dark', cat:'', q:'', sort:'', cart:[]};
  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  S.lang = load('b_lang', 'fa');
  S.theme = load('b_theme', window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  try { S.cart = JSON.parse(load('b_cart', '[]')).filter(function (i) { return byId(i.id); }); } catch (e) { S.cart = []; }

  /* ---------- Helpers ---------- */
  var $ = function (id) { return document.getElementById(id); };
  function byId(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; }
  function t(k) { return TX[S.lang][k] || k; }
  function num(n) { return S.lang === 'fa' ? Number(n).toLocaleString('fa-IR') : String(n); }
  function money(u) {
    return S.lang === 'fa'
      ? (Math.round(u * 70) * 1000).toLocaleString('fa-IR') + ' ' + TX.fa.cur
      : '$' + u.toFixed(2);
  }
  function count() { return S.cart.reduce(function (a, i) { return a + i.q; }, 0); }
  function total() { return S.cart.reduce(function (a, i) { return a + i.q * byId(i.id).usd; }, 0); }
  var toastTimer;
  function toast(m) {
    var el = $('toast'); el.textContent = m; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.hidden = true; }, 1800);
  }

  /* ---------- Render ---------- */
  function applyStatic() {
    var h = document.documentElement;
    h.lang = S.lang; h.dir = S.lang === 'fa' ? 'rtl' : 'ltr'; h.setAttribute('data-theme', S.theme);
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.getAttribute('data-t')); });
    $('q').placeholder = t('search');
    $('langBtn').textContent = S.lang === 'fa' ? 'EN' : 'فا';
    $('themeBtn').textContent = S.theme === 'dark' ? '☀' : '☾';
    $('sort').innerHTML = [['', 'sort'], ['usd', 'low'], ['-usd', 'high'], ['-pop', 'pop']].map(function (o) {
      return '<option value="' + o[0] + '"' + (S.sort === o[0] ? ' selected' : '') + '>' + t(o[1]) + '</option>';
    }).join('');
    $('stats').innerHTML = STATS.map(function (s) { return '<div class="stat"><strong>' + s.v + '</strong><small>' + s[S.lang] + '</small></div>'; }).join('');
    $('timeline').innerHTML = HIST.map(function (e) {
      return '<div class="ev"><em>' + e.y + '</em><h3>' + e['t' + S.lang] + '</h3><div class="mu">' + e['d' + S.lang] + '</div></div>';
    }).join('');
    $('feats').innerHTML = FEATS.map(function (f) {
      return '<div class="ft"><i>' + f.ic + '</i><h3>' + f[S.lang] + '</h3><div class="mu">' + f['d' + S.lang] + '</div></div>';
    }).join('');
    $('cats').innerHTML = '<button class="btn chip' + (S.cat === '' ? ' on' : '') + '" data-cat="">' + t('all') + '</button>' +
      CATS.map(function (c) { return '<button class="btn chip' + (S.cat === c.id ? ' on' : '') + '" data-cat="' + c.id + '">' + c.ic + ' ' + c[S.lang] + '</button>'; }).join('');
    renderGrid(); renderCart();
  }

  function renderGrid() {
    var q = S.q.trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      return (!S.cat || p.c === S.cat) && (!q || (p.fa + ' ' + p.en + ' ' + p.pn).toLowerCase().indexOf(q) > -1);
    });
    if (S.sort) {
      var k = S.sort.replace('-', ''), d = S.sort[0] === '-' ? -1 : 1;
      list.sort(function (a, b) { return (a[k] - b[k]) * d; });
    }
    $('grid').innerHTML = list.map(function (p) {
      return '<article class="p">' +
        (p.tag ? '<span class="tag">' + t(p.tag) + '</span>' : '') +
        '<div class="pic" data-open="' + p.id + '">' + p.ic + '</div>' +
        '<div class="pb"><div class="pn">' + p.pn + '</div>' +
        '<h3 data-open="' + p.id + '">' + p[S.lang] + '</h3>' +
        '<div class="stock' + (p.st < 10 ? ' low' : '') + '">● ' + (p.st < 10 ? t('lowst') : t('inst')) + '</div>' +
        '<div class="pf"><div><span class="price">' + money(p.usd) + '</span>' + (p.old ? '<span class="old">' + money(p.old) + '</span>' : '') + '</div>' +
        '<button class="btn btn-red" data-add="' + p.id + '">' + t('add') + '</button></div></div></article>';
    }).join('');
    $('none').hidden = list.length > 0;
  }

  function renderCart() {
    $('cartCount').textContent = num(count());
    var d = $('drawer');
    var ship = total() >= 150 ? 0 : 9;
    d.innerHTML = '<div class="row"><h3 style="margin:0">' + t('cart') + '</h3><button class="btn" data-close="cart">✕</button></div>' +
      (S.cart.length ? S.cart.map(function (i) {
        var p = byId(i.id);
        return '<div class="ci"><div class="ic">' + p.ic + '</div><div class="info"><div>' + p[S.lang] + '</div><small class="mu">' + money(p.usd) + '</small></div>' +
          '<div class="qty"><button class="btn" data-q="-1" data-id="' + p.id + '">−</button><span>' + num(i.q) + '</span><button class="btn" data-q="1" data-id="' + p.id + '">+</button></div></div>';
      }).join('') +
      '<div style="margin-top:auto"><div class="row"><span>' + t('sub_t') + '</span><span>' + money(total()) + '</span></div>' +
      '<div class="row mu"><small>' + t('ship') + '</small><small>' + (ship ? money(ship) : t('free')) + '</small></div>' +
      '<div class="row total"><span>' + t('tot') + '</span><span>' + money(total() + ship) + '</span></div>' +
      '<button class="btn btn-red btn-lg" style="width:100%" data-checkout>' + t('checkout') + '</button></div>'
      : '<p class="mu">' + t('empty') + '</p>');
  }

  function openModal(id) {
    var p = byId(id);
    $('modal').innerHTML = '<div class="row"><div style="font-size:4rem">' + p.ic + '</div><button class="btn" data-close="modal">✕</button></div>' +
      '<div class="pn">' + p.pn + '</div><h2>' + p[S.lang] + '</h2><p>' + p['d' + S.lang] + '</p>' +
      '<div class="eyebrow">' + t('specs') + '</div><ul class="mu">' + p.sp.map(function (s) { return '<li>' + s[S.lang] + '</li>'; }).join('') + '</ul>' +
      '<div class="row"><span class="price">' + money(p.usd) + '</span><button class="btn btn-red" data-add="' + p.id + '" data-close="modal">' + t('add') + '</button></div>';
    $('modalOv').hidden = false;
  }

  /* ---------- Cart actions ---------- */
  function persist() { save('b_cart', JSON.stringify(S.cart)); renderCart(); }
  function add(id) {
    var f = S.cart.filter(function (i) { return i.id === id; })[0];
    if (f) f.q++; else S.cart.push({id: id, q: 1});
    persist(); toast(t('added'));
  }
  function change(id, d) {
    var f = S.cart.filter(function (i) { return i.id === id; })[0];
    if (!f) return;
    f.q += d;
    if (f.q < 1) S.cart.splice(S.cart.indexOf(f), 1);
    persist();
  }

  /* ---------- Events ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-add],[data-open],[data-q],[data-cat],[data-checkout],[data-close]');
    if (el) {
      if (el.hasAttribute('data-add')) add(+el.getAttribute('data-add'));
      if (el.hasAttribute('data-open')) openModal(+el.getAttribute('data-open'));
      if (el.hasAttribute('data-q')) change(+el.getAttribute('data-id'), +el.getAttribute('data-q'));
      if (el.hasAttribute('data-cat')) { S.cat = el.getAttribute('data-cat'); applyStatic(); }
      if (el.hasAttribute('data-checkout')) { S.cart = []; persist(); $('cartOv').hidden = true; toast(t('done')); }
      if (el.getAttribute('data-close') === 'cart') $('cartOv').hidden = true;
      if (el.getAttribute('data-close') === 'modal') $('modalOv').hidden = true;
      return;
    }
    if (e.target === $('cartOv')) $('cartOv').hidden = true;
    if (e.target === $('modalOv')) $('modalOv').hidden = true;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { $('cartOv').hidden = true; $('modalOv').hidden = true; }
  });
  $('cartBtn').addEventListener('click', function () { $('cartOv').hidden = false; });
  $('langBtn').addEventListener('click', function () { S.lang = S.lang === 'fa' ? 'en' : 'fa'; save('b_lang', S.lang); applyStatic(); });
  $('themeBtn').addEventListener('click', function () { S.theme = S.theme === 'dark' ? 'light' : 'dark'; save('b_theme', S.theme); applyStatic(); });
  $('q').addEventListener('input', function (e) { S.q = e.target.value; renderGrid(); });
  $('sort').addEventListener('change', function (e) { S.sort = e.target.value; renderGrid(); });

  applyStatic();
})();
