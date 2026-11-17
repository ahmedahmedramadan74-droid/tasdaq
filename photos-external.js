/* ===== صور المنتجات الخارجية (روابط مباشرة HTTPS) =====
   type=product: صورة للمنتج/الخدمة نفسها؛ type=logo: شعار شركة فقط.
   كل عنصر يتضمن رابط الصورة، صفحة المصدر، وملاحظة الحقوق وحالة الاختبار.
   الصور روابط خارجية وليست ملفات محلية؛ يلزم اتصال بالإنترنت.
   الروابط المضافة في دفعة 14 نوفمبر 2026 لم يمكن اختبارها من بيئة البناء لعدم توفر اتصال إنترنت.
*/
const COMPANY_LOGOS = {
  "Chevron Corporation": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/chevron",
    "source": "Simple Icons — Chevron brand mark",
    "page": "https://simpleicons.org/?q=Chevron",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Intel": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/intel",
    "source": "Simple Icons — Intel brand mark",
    "page": "https://simpleicons.org/?q=Intel",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Dell Technologies": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/dell",
    "source": "Simple Icons — Dell brand mark",
    "page": "https://simpleicons.org/?q=Dell",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "HP Inc.": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/hp",
    "source": "Simple Icons — HP brand mark",
    "page": "https://simpleicons.org/?q=HP",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Google (Alphabet)": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/google",
    "source": "Simple Icons — Google brand mark",
    "page": "https://simpleicons.org/?q=Google",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Wix.com": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/wix",
    "source": "Simple Icons — Wix brand mark",
    "page": "https://simpleicons.org/?q=Wix",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Cisco Systems": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/cisco",
    "source": "Simple Icons — Cisco brand mark",
    "page": "https://simpleicons.org/?q=Cisco",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Motorola Solutions": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/motorola",
    "source": "Simple Icons — Motorola brand mark",
    "page": "https://simpleicons.org/?q=Motorola",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "IBM": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/ibm",
    "source": "Simple Icons — IBM brand mark",
    "page": "https://simpleicons.org/?q=IBM",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Meta Platforms": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/meta",
    "source": "Simple Icons — Meta brand mark",
    "page": "https://simpleicons.org/?q=Meta",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Palantir Technologies": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/palantir",
    "source": "Simple Icons — Palantir brand mark",
    "page": "https://simpleicons.org/?q=Palantir",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Airbnb": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/airbnb",
    "source": "Simple Icons — Airbnb brand mark",
    "page": "https://simpleicons.org/?q=Airbnb",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Booking Holdings": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/bookingdotcom",
    "source": "Simple Icons — Booking.com brand mark",
    "page": "https://simpleicons.org/?q=Booking.com",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Expedia Group": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/expedia",
    "source": "Simple Icons — Expedia brand mark",
    "page": "https://simpleicons.org/?q=Expedia",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "AXA": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/axa",
    "source": "Simple Icons — AXA brand mark",
    "page": "https://simpleicons.org/?q=AXA",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Barclays": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/barclays",
    "source": "Simple Icons — Barclays brand mark",
    "page": "https://simpleicons.org/?q=Barclays",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "RE/MAX": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/remax",
    "source": "Simple Icons — RE/MAX brand mark",
    "page": "https://simpleicons.org/?q=RE/MAX",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "A.P. Moller – Maersk": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/maersk",
    "source": "Simple Icons — Maersk brand mark",
    "page": "https://simpleicons.org/?q=Maersk",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Uber Technologies": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/uber",
    "source": "Simple Icons — Uber brand mark",
    "page": "https://simpleicons.org/?q=Uber",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Reebok": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/reebok",
    "source": "Simple Icons — Reebok brand mark",
    "page": "https://simpleicons.org/?q=Reebok",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "adidas AG": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/adidas",
    "source": "Simple Icons — adidas brand mark",
    "page": "https://simpleicons.org/?q=adidas",
    "license": "ترخيص الأيقونة الفردية يحتاج مراجعة؛ ترخيص مشروع Simple Icons لا يمنح حقوق العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN وفق نمط Simple Icons؛ لم يمكن اختبار استجابة الصورة أو مراجعة ترخيص هذا الشعار الفردي من بيئة العمل."
  },
  "Nestlé": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/nestle",
    "source": "Simple Icons — Nestlé brand mark",
    "page": "https://simpleicons.org/?q=nestle",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Burger King Corporation": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/burgerking",
    "source": "Simple Icons — Burger King Corporation brand mark",
    "page": "https://simpleicons.org/?q=burgerking",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Papa John's International": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/papajohns",
    "source": "Simple Icons — Papa John's International brand mark",
    "page": "https://simpleicons.org/?q=papajohns",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Pizza Hut LLC": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/pizzahut",
    "source": "Simple Icons — Pizza Hut LLC brand mark",
    "page": "https://simpleicons.org/?q=pizzahut",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Carrefour": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/carrefour",
    "source": "Simple Icons — Carrefour brand mark",
    "page": "https://simpleicons.org/?q=carrefour",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "L'Oréal S.A.": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/loreal",
    "source": "Simple Icons — L'Oréal S.A. brand mark",
    "page": "https://simpleicons.org/?q=loreal",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Procter & Gamble": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/proctergamble",
    "source": "Simple Icons — Procter & Gamble brand mark",
    "page": "https://simpleicons.org/?q=proctergamble",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "SC Johnson": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/scjohnson",
    "source": "Simple Icons — SC Johnson brand mark",
    "page": "https://simpleicons.org/?q=scjohnson",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Siemens": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/siemens",
    "source": "Simple Icons — Siemens brand mark",
    "page": "https://simpleicons.org/?q=siemens",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "The Coca-Cola Company": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/cocacola",
    "source": "Simple Icons — The Coca-Cola Company brand mark",
    "page": "https://simpleicons.org/?q=cocacola",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Unilever": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/unilever",
    "source": "Simple Icons — Unilever brand mark",
    "page": "https://simpleicons.org/?q=unilever",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Colgate-Palmolive": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/colgate",
    "source": "Simple Icons — Colgate-Palmolive brand mark",
    "page": "https://simpleicons.org/?q=colgate",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Amazon": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/amazon",
    "source": "Simple Icons — Amazon brand mark",
    "page": "https://simpleicons.org/?q=amazon",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "The Walt Disney Company": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/disneyplus",
    "source": "Simple Icons — The Walt Disney Company brand mark",
    "page": "https://simpleicons.org/?q=disneyplus",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Microsoft": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/microsoft",
    "source": "Simple Icons — Microsoft brand mark",
    "page": "https://simpleicons.org/?q=microsoft",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Oracle": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/oracle",
    "source": "Simple Icons — Oracle brand mark",
    "page": "https://simpleicons.org/?q=oracle",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  },
  "Inditex": {
    "type": "logo",
    "url": "https://cdn.simpleicons.org/zara",
    "source": "Simple Icons — Inditex brand mark",
    "page": "https://simpleicons.org/?q=zara",
    "license": "تُعرض الأيقونة للتعريف بالعلامة فقط. راجع ترخيص الأيقونة الفردية وإرشادات العلامة التجارية؛ لا يعني ترخيص مكتبة Simple Icons منح حق استخدام العلامة التجارية.",
    "checked": "2026-11-14: أُضيف رابط CDN معروف الصيغة؛ لم يمكن اختبار الرابط من بيئة البناء لعدم توفر اتصال إنترنت."
  }
};

const PHOTO_EXTERNAL = {
  "coca-cola": {
    "type": "product",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_(Germany).jpg?width=800",
    "source": "Wikimedia Commons — Ralf Roletschek",
    "page": "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_(Germany).jpg",
    "license": "راجع صفحة الصورة",
    "checked": "2026-11-14: صفحة الملف على Commons فُتحت وهو موجود (2354×4174). لم يُختبر التحميل المباشر من بيئة بلا إنترنت — شغّل tools/check-photo-urls.py"
  },
  "fanta": {
    "type": "product",
    "url": "https://getraenke-augsburg.de/371-thickbox_default/fanta-orange-050-pet.jpg",
    "source": "KILMEY Getränkeservice — Fanta Orange 0.5L",
    "page": "https://getraenke-augsburg.de/getraenke/erfrischung-limonade/orangen-limonade/fanta-orange-050-pet",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "sprite": {
    "type": "product",
    "url": "https://www.coca-cola.com/content/dam/onexp/is/is/brands/sprite/2026/sprite.png",
    "source": "Coca-Cola Iceland — Sprite bottle",
    "page": "https://www.coca-cola.com/is/is/brands/sprite",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "schweppes": {
    "type": "product",
    "url": "https://www.carmar.com.tr/idea/ei/75/myassets/products/221/schweppes-tonik-1-lt-10936036.png?revision=1697143329",
    "source": "Carmar — Schweppes Tonic Water 1L",
    "page": "https://www.carmar.com.tr/urun/schweppes-tonik-1-lt-10936036",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "costa-coffee": {
    "type": "product",
    "url": "https://dojwn62xby8qn.cloudfront.net/public/media/offer_slide_images/49378-1774359005288.png",
    "source": "Shopmium — Costa Coffee Original Latte",
    "page": "https://offers.shopmium.com/uk/n/costa-coffee-iced-classic-latte-1",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "powerade": {
    "type": "product",
    "url": "https://www.coca-cola.com/content/dam/onexp/it/it/powerade-brand-page/orange.png",
    "source": "Coca-Cola Italy — Powerade Orange",
    "page": "https://www.coca-cola.com/it/it/brands/powerade",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "innocent": {
    "type": "product",
    "url": "https://static1.chronodrive.com/img/PM/Z/0/50/0Z_99450.jpg",
    "source": "Chronodrive — Innocent Strawberry, Banana & Apple Smoothie",
    "page": "https://www.chronodrive.com/innocent--smoothie-fraise-banane-et-pomme-P99450",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "sodastream": {
    "type": "product",
    "url": "https://www.mediaexpert.pl/media/cache/resolve/filemanager_original/images/descriptions/images/81/8159229/storage_app_opisy2_sodastream_2096842_img/sodastream.png",
    "source": "Media Expert — SodaStream Mix",
    "page": "https://www.mediaexpert.pl/agd-male/do-kuchni/przygotowywanie_napojow/saturator-sodastream-mix-czarny",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "sabra-hummus": {
    "type": "product",
    "url": "https://www.pepsicoschoolsource.com/prod/s3fs-public/styles/pepsico_school_source_product_image_style_for_mobile_fallback/public/2023-05/SAB_Classic_30oz_angle2018.png?itok=7B6F0jEk",
    "source": "PepsiCo School Source — Sabra Classic Hummus",
    "page": "https://www.pepsicoschoolsource.com/brands/sabra-hummus/sabra-classic-hummus-30oz",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "kitkat": {
    "type": "product",
    "url": "https://www.nestle-esar.com/sites/g/files/pydnoa441/files/2023-01/61613%20KitKat%204F%20Milk%20Import%20Pack.png",
    "source": "Nestlé ESAR — KitKat 4 Finger Milk Chocolate",
    "page": "https://www.nestle-esar.com/chocolate",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت أو بسبب قيود وصول الناشر. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "nestle-water": {
    "type": "product",
    "url": "https://alfatah.pk/cdn/shop/files/NewProject_14_9c8cfe63-c529-4a4e-9da4-871ba18a45c7.png?v=1749636308",
    "source": "Al-Fatah — Nestlé Pure Life 500ml",
    "page": "https://alfatah.pk/products/nestle-water-pure-life-500-ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "oreo": {
    "type": "product",
    "url": "https://images.cdn.europe-west1.gcp.commercetools.com/723b2575-66c7-4d92-ae49-82bf1d168d26/00-477739-1840460918-carYWj9t.jpg",
    "source": "BILLA Online Shop — Oreo Original Cookie Roll",
    "page": "https://shop.billa.at/produkte/oreo-original-rolle-00477739",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ritz": {
    "type": "product",
    "url": "https://hips.hearstapps.com/hmg-prod/images/6-671fd6d503c39.png",
    "source": "Delish — Nabisco Ritz Crackers",
    "page": "https://www.delish.com/kitchen-tools/cookware-reviews/a62738651/best-cracker-brands/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "starbucks": {
    "type": "product",
    "url": "https://hips.hearstapps.com/hmg-prod/images/tall-starbucks-to-go-cup-on-wooden-table-royalty-free-image-1769701122.pjpeg?crop=0.667xw%3A1.00xh%3B0.0962xw%2C0&resize=1200%3A%2A",
    "source": "Delish — Starbucks takeaway cup",
    "page": "https://www.delish.com/food-news/a70188422/starbucks-rewards-program-update-2026/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "mcdonalds": {
    "type": "product",
    "url": "https://img0.didiglobal.com/static/soda_public/img_7d986846111910c25f24e3dad91c0d82.png",
    "source": "DiDi Food — McDonald's Big Mac and Fries",
    "page": "https://web.didiglobal.com/mx/food/tijuana-bcn/mcdonalds-macroplaza/5764607783673266411",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "nido": {
    "type": "product",
    "url": "https://digitalcontent.api.tesco.com/v2/media/ghs/6d9b5d3b-16c4-4e4e-ae89-931050771e6b/2a35e304-a473-440d-a8d9-3a75d2680623_58551948.jpeg",
    "source": "Tesco Groceries — Nestlé Nido Instant Full Cream Milk Powder",
    "page": "https://www.tesco.com/groceries/en-GB/products/266258950",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "nesquik": {
    "type": "product",
    "url": "https://cdn.metcash.media/image/upload/w_1500%2Ch_1500%2Cc_pad%2Cb_auto/igashop/images/10267.jpg",
    "source": "IGA Shop Online — Nestlé Nesquik Chocolate Powder 500g",
    "page": "https://www.igashop.com.au/product/nesquik-chocolate-10267",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت أو بسبب قيود وصول الناشر. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "cerelac": {
    "type": "product",
    "url": "https://cdn.shopify.com/s/files/1/0070/8286/8854/collections/7613035988750_C1N1_enAU_grande_282d7061-8665-473e-8824-fd0e646c9eb1_1200x1200.jpg?v=1606428240",
    "source": "Nestlé FamilyNes — Cerelac Baby Rice",
    "page": "https://shop.nestlebaby.com.au/collections/cerelac-infant-cereal",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "san-pellegrino": {
    "type": "product",
    "url": "https://www.instacart.com/image-server/1200x1200/www.instacart.com/assets/domains/product-image/file/large_b5a770a4-bd8c-4e45-af58-7c0617822d9f.jpg",
    "source": "Lucky Supermarkets / Instacart — S.Pellegrino 1L",
    "page": "https://shop.luckysupermarkets.com/landing?postal_code=94105&product_id=16914182&retailer_id=542",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "fuze-tea": {
    "type": "product",
    "url": "https://www.coca-cola.com/content/dam/onexp/fr/fr/fuze-tea/fr_fuzetea_prod_saveur%20citron%20vert_750x750_v1.jpg",
    "source": "Coca-Cola France — Fuze Tea",
    "page": "https://www.coca-cola.com/fr/fr/brands/fuze-tea",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "perrier": {
    "type": "product",
    "url": "https://mali-achats.com/sites/default/files/Eau-Gazeuse-Perrier.jpg",
    "source": "Mali-achats — Perrier 500ml",
    "page": "https://mali-achats.com/product/212",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "tide": {
    "type": "product",
    "url": "https://i5.walmartimages.com/seo/Tide-Original-Scent-Liquid-Laundry-Detergent-64-loads-2-95-L_f998c582-4acf-4245-b910-cf51809615f5_1.aeaee6f600a9a66600a38218a76d5cf6.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
    "source": "Walmart — Tide Original Liquid Laundry Detergent",
    "page": "https://www.walmart.com/ip/1869045384",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ariel": {
    "type": "product",
    "url": "https://misabargains.co.uk/cdn/shop/files/IMG-4025.jpg?v=1719925839",
    "source": "Misa Bargains — Ariel Original Washing Liquid",
    "page": "https://misabargains.co.uk/products/ariel-original-washing-liquid-35w-1225ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "dove": {
    "type": "product",
    "url": "https://peronabeauty.com/wp-content/uploads/2024/02/Dove-Body-Wash-Deeply-Nourishing-750ml.jpg",
    "source": "Perona Beauty — Dove Deeply Nourishing Body Wash 750ml",
    "page": "https://peronabeauty.com/product/dove-body-wash-deeply-nourishing-750ml/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت أو بسبب قيود وصول الناشر. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "vaseline": {
    "type": "product",
    "url": "https://images.squarespace-cdn.com/content/v1/65e61649d0f69f11056d33cc/05e649b9-0dde-4023-93b8-68e99dbc94b9/Vaseline%2BOriginal%2BPetroleum%2BJelly.jpg?format=2500w",
    "source": "Noted Dermatology — Vaseline Original Petroleum Jelly",
    "page": "https://www.noteddermatology.com/pores-101",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "garnier": {
    "type": "product",
    "url": "https://www.garnier.com.ph/-/media/project/loreal/brand-sites/garnier/apac/ph/products/micellar-water/micellar-water-pink/micellar_pink_400ml_new.png?hash=D65594E4D0215D7F2CF55F2D214F1345&rev=4e0afa70ecec4cb788d0cea1a615bf59&w=600",
    "source": "Garnier Philippines — Micellar Cleansing Water",
    "page": "https://www.garnier.com.ph/about-our-brands/garnier-micellar-water/micellar-cleansing-water-pink-for-drysensitive-skin",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "cerave": {
    "type": "product",
    "url": "https://vorosamart.com/wp-content/uploads/2025/01/CeraVe-Moisturizing-Cream-454G.webp",
    "source": "Vorosa Mart — CeraVe Moisturising Cream 454g",
    "page": "https://vorosamart.com/cerave-moisturizing-cream-454g/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "pantene": {
    "type": "product",
    "url": "https://e-tec-2025-eu-central.s3.eu-central-1.amazonaws.com/xstorage/1/_cache/20250829/0_80809526_80809540_DE_PI_1228518_1_1f2a81c1a2b260fc6439371eab7273f6.jpg",
    "source": "e-tec — Pantene Pro-V Classic Care Shampoo",
    "page": "https://www.e-tec.at/de/shop/produkt/111897/pantene-pro-v-classic-care-shampoo.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "always": {
    "type": "product",
    "url": "https://images.ctfassets.net/2lrezuyi0bgv/3VWwZEUWtmxXh2u1NBeFgo/6999ef050edda78840d273e76a7b177e/08001841971223_C1N1.jpg",
    "source": "Always / P&G — Always Ultra Normal Wings",
    "page": "https://always-fr-fr-staging.pgmodernweb.com/fr-fr/produits-feminins-always/serviettes-hygieniques-always",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "olay": {
    "type": "product",
    "url": "https://pics.walgreens.com/prodimg/27778/900.jpg",
    "source": "Walgreens — Olay Age Defying Classic Cream",
    "page": "https://www.walgreens.com/store/c/olay-age-defying-classic-daily-renewal-cream%2C-face-moisturizer/ID%3Dprod8079-product",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت أو بسبب قيود وصول الناشر. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "colgate": {
    "type": "product",
    "url": "https://cdn-netshop.lyreco.no/static/1691476689000000/images/EasyOrderHighResolution/80/41/asset.9518041.jpg",
    "source": "Lyreco — Colgate Triple Action Toothpaste",
    "page": "https://www.lyreco.no/p/tannkrem-colgate-triple-action-75ml-274350",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "head-shoulders": {
    "type": "product",
    "url": "https://images.ctfassets.net/o64msvf55fy4/5dKtBSiJlAv3J4HMCDB23V/0707d6df905f7530f7778d920c4035f8/8006540130308.png",
    "source": "Head & Shoulders France — Classic Anti-Dandruff Shampoo",
    "page": "https://www.headandshoulders.fr/fr-fr/produits-antipelliculaires/shampoing-antipelliculaire/classic/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "lifebuoy": {
    "type": "product",
    "url": "https://guardian.com.my/media/catalog/product/_/8/_8999999586645.jpg?auto=webp&fit=cover&format=pjpg&width=640",
    "source": "Guardian Malaysia — Lifebuoy Lemon Fresh Handwash",
    "page": "https://guardian.com.my/lifebuoy-hw-200ml-lemon-fresh-121116366.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "maybelline": {
    "type": "product",
    "url": "https://s13emagst.akamaized.net/products/1137/1136006/images/res_c9090b509bedf9c443f8a6ca5e4b2890.jpg",
    "source": "eMAG — Maybelline Lash Sensational Mascara",
    "page": "https://www.emag.bg/spirala-maybelline-ny-lash-sensational-black-3600531143459/pd/DH32TMBBM/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "axe": {
    "type": "product",
    "url": "https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDc2MTU0fGltYWdlL2pwZWd8cHJvZHVjdC1pbWFnZXMvaDk1L2hiNC8xMDYwMDM2MDA4MzQ4Ni5qcGd8ZDgyOWIzM2U5MGVhYjFkMjA2YjBlNjJhNDE4MGE2NzEzNzZlYmU5ODNkNmM3Mzk3YjIyZjdhNjlmZmNlODEzZQ",
    "source": "Clicks — AXE Musk Deodorant Body Spray",
    "page": "https://clicks.co.za/axe_aerosol-deodorant-body-spray-wild-spice-200ml/p/220510",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "tresemme": {
    "type": "product",
    "url": "https://assets.unileversolutions.com/v1/118596854.png",
    "source": "TRESemmé / Unilever — Rich Moisture Shampoo",
    "page": "https://www.tresemme.com/uk/collections/moisture-rich.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "la-roche-posay": {
    "type": "product",
    "url": "https://nationalpharmacies.lbcdn.io/app/uploads/2023/05/LORE-3337875801072-1.png",
    "source": "National Pharmacies — La Roche-Posay Effaclar Serum",
    "page": "https://www.nationalpharmacies.com.au/product/la-roche-posay-effaclar-anti-acne-salicylic-acid-serum-50ml/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ponds": {
    "type": "product",
    "url": "https://m2ce.sindabad.com/pub/media/catalog/product/p/c/pcsf0200007g028.jpg",
    "source": "Sindabad — Pond's Moisturising Cold Cream",
    "page": "https://sindabad.com/pond-s-moisturizing-cold-cream-28gm.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "matrix": {
    "type": "product",
    "url": "https://salonsupplies.co.uk/cdn/shop/files/MegaSleekShampoo1.jpg?v=1691660912",
    "source": "Salon Supplies — Matrix Mega Sleek Shampoo",
    "page": "https://salonsupplies.co.uk/products/matrix-total-results-mega-sleek-shampoo-300ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "simple": {
    "type": "product",
    "url": "https://prod-spinneys-cdn-new.azureedge.net/media/images/products/2021/01/8710908710773.jpg",
    "source": "Spinneys — Simple Micellar Facial Gel Wash",
    "page": "https://www.spinneys.com/en-ae/catalogue/simple-water-boost-face-gel-wash-150ml_18340/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "windex": {
    "type": "product",
    "url": "https://static.winc.com.au/pi/0d/a8a2a08d4ec5d53ce4dc35409f61e87ecec68e-1581569/lgsq.jpg",
    "source": "Winc — Windex Original Glass Cleaner",
    "page": "https://www.winc.com.au/main-catalogue-productdetail/windex-glass-cleaner-trigger-750ml/86794343",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "gain": {
    "type": "product",
    "url": "https://i5.walmartimages.com/asr/fc304e72-08eb-4fe8-948c-a9d492a9d901.0b826c4bae58585dbb8dfcc31b34fed2.jpeg",
    "source": "Walmart Canada — Gain Original Liquid Laundry Detergent",
    "page": "https://www.walmart.ca/en/ip/Gain-Liquid-Laundry-Detergent-Original-Scent-Freshness-Odour-Fighting-High-efficiency-washing-machine-iquid-cleaning-soap/6000207566352",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "domestos": {
    "type": "product",
    "url": "https://www.countrylife.ie/medias/9075171-frontface-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTU5Njl8aW1hZ2UvanBlZ3xjM2x6TFcxaGMzUmxjaTlwYldGblpYTXZPRGsyTXpnNU5URTVOemN5Tmk4NU1EYzFNVGN4WDJaeWIyNTBabUZqWlY4eE1qQXdWM2d4TWpBd1NBfGJmMTljZDFkZjQ1MzIzYWNjNGUzOTgyOTkyNDI5MTIxMjdiZDkzZGU4ODA4NGQzMmNjZTM3ZTQ3NDVmODAwZGQ",
    "source": "Country Life — Domestos Extended Germ-Kill",
    "page": "https://www.countrylife.ie/shop/product/Domestos-2L/9075171",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "drano": {
    "type": "product",
    "url": "https://i5.walmartimages.com/seo/Drano-Liquid-Clog-Remover-Drain-Cleaner-32-oz-Pack-of-12_6cd99b37-4f17-4c9a-b899-9494498221a9.643a1f07879919c2e165c62c868f58fa.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
    "source": "Walmart — Drano Liquid Drain Cleaner",
    "page": "https://www.walmart.com/browse/household-essentials/drano/1115193_1071968_3278685_9936345",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "fairy": {
    "type": "product",
    "url": "https://cdn.pr.commerce.coop.co.uk/8006540994269_1_1024x1024_20250808.png",
    "source": "Co-op — Fairy Original Washing-Up Liquid",
    "page": "https://shop.coop.co.uk/product/fairy-original-washing-up-liquid-green-with-liftaction-320ml--c58ae32a-776c-4c66-b042-56bdb0f71fd0",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "glade": {
    "type": "product",
    "url": "https://i5.walmartimages.com/asr/92cf36d1-f53a-4036-baed-50c0b18a8a79.c0f2e5136d8f9dfcce07db7b1eec50be.jpeg",
    "source": "Walmart Canada — Glade Clean Linen Air Freshener",
    "page": "https://www.walmart.ca/en/ip/Glade-Air-Freshener-Odor-Fighting-Room-Spray-Clean-Linen/6000205758535",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "omo": {
    "type": "product",
    "url": "https://ecombe.nahdionline.com/media/catalog/product/1/0/103979768_aa7957b25b06e117d_67299.png",
    "source": "Nahdi Online — OMO Automatic Laundry Detergent",
    "page": "https://www.nahdionline.com/en-sa/omo-automatic-laundry-detergent-powder-touch-of-comfort-6kg/pdp/103979768",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ring": {
    "type": "product",
    "url": "https://media.adeo.com/mkp/93d00cc6039894ce0d55f11f0eb77b1b/media.jpg?fit=bounds&format=jpg&height=650&quality=80&width=650",
    "source": "Leroy Merlin — Ring Video Doorbell",
    "page": "https://www.leroymerlin.es/productos/ring-video-doorbell-sonnette-video-connectee-sans-fil-video-hd-detection-de-mouvements-et-batterie-rechargeable-86166116.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "xbox": {
    "type": "product",
    "url": "https://www.pbtech.co.nz/imgprod/G/A/GAMMST1601__2.jpg?h=672161022",
    "source": "PBTech — Microsoft Xbox Series X Console",
    "page": "https://www.pbtech.co.nz/product/GAMMST1601/Microsoft-Xbox-Series-X-1TB-Console",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "hpe": {
    "type": "product",
    "url": "https://xtech.com.br/config/imagens_conteudo/produtos/imagensGRD/GRD_51707_Servidor%20HPE%20Rack%20DL380%20Gen10%20Silver%204114%20875771-S05.jpg",
    "source": "Xtech — HPE ProLiant DL380 Gen10 Server",
    "page": "https://xtech.com.br/Servidor-Hp-Dl380-Hpe-Gen10-Intel-Xeon-Silver-Rack-875771-S05/p/51707/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "hp-inc": {
    "type": "product",
    "url": "https://empire.co.tz/cdn/shop/files/hp14.jpg?v=1750752419&width=416",
    "source": "Empire Online — HP 14 Laptop",
    "page": "https://empire.co.tz/products/hp-14-intel-core-i7-14-inch-8gb-memory-512gb-ssd-dos-laptop",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "intel": {
    "type": "product",
    "url": "https://ic.jimms.fi/product/0/5/479304-ig800gg.jpg",
    "source": "Jimms.fi — Intel Core i5-14400F Boxed Processor",
    "page": "https://www.jimms.fi/FI/Product/Show/197973/bx8071514400f/intel-core-i5-14400f-lga1700-2-50-ghz-20mb-boxed",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "dell": {
    "type": "product",
    "url": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502939_sd.jpg",
    "source": "Best Buy — Dell Latitude 3000 Laptop",
    "page": "https://www.bestbuy.com/site/dell-latitude-3000-15-6-laptop-intel-core-i5-8-gb-memory-256-gb-ssd-black/6502939.p",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "maersk": {
    "type": "product",
    "url": "https://img.turkiyetoday.com/images/2026/3/6/maersk-suspends-key-shipping-routes-amid-escalating-middle-east-conflict-3215724_20260306130819.jpeg",
    "source": "Türkiye Today — Maersk Container Ship",
    "page": "https://www.turkiyetoday.com/region/maersk-suspends-key-shipping-routes-amid-escalating-iran-war-3215724",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "msc": {
    "type": "product",
    "url": "https://media.licdn.com/dms/image/v2/C4D12AQEzj16PppFjnA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520110278312?e=2147483647&t=Qc69wpg_0zMF8vnx9mF52dH1bx8TSo_7jyrg3jzDeiQ&v=beta",
    "source": "LinkedIn — MSC Container Ship",
    "page": "https://pt.linkedin.com/in/mario-silva-b263163",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "zim": {
    "type": "product",
    "url": "https://www.palmetto-industries.com/wp-content/uploads/2022/02/Zim.jpg",
    "source": "Palmetto Industries — ZIM Container Ship",
    "page": "https://www.palmetto-industries.com/best-international-shipping-companies/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "uber": {
    "type": "product",
    "url": "https://uberuk.wearyourebrand.com/storage/products/275/156713/2741f141-83f1-4d24-9e3b-23366652de55.jpg",
    "source": "Uber UK E-Shop — Uber Eats Insulated Delivery Bag",
    "page": "https://uberuk.wearyourebrand.com/en/products/bags/uber-eats-car-bag",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "osem": {
    "type": "product",
    "url": "https://drryor7280ntb.cloudfront.net/media/catalog/product/0/7/077544806009_vagrqf54lrfp66bh.jpg",
    "source": "FoodServiceDirect — Osem Bamba Peanut Snack",
    "page": "https://www.foodservicedirect.com/osem-large-bamba-peanut-snacks--3-5-ounce----12-per-case-251397.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "obela": {
    "type": "product",
    "url": "https://a.fsimg.co.nz/product/retail/fan/image/400x400/5224862.png?w=640",
    "source": "New World — Obela Classic Hommus",
    "page": "https://www.newworld.co.nz/shop/product/5224862_ea_000nw",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "prigat": {
    "type": "product",
    "url": "https://miamikosherfood.com/cdn/shop/files/899712000008.jpg?v=1765078193",
    "source": "Miami Kosher Food — Prigat Mango Juice",
    "page": "https://miamikosherfood.com/products/prigat-mango-falvored-juice-blend-drink-50-7-oz",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "reebok": {
    "type": "product",
    "url": "https://img.eobuwie.cloud/eob_product_656w_656h%284/9/2/8/49288a9f74af24c073de973d2619b59306a9811f_0000199174155_1__mf_01.jpg%2Cjpg%29/schuhe-reebok-classic-leather-50172-white-0000199174155.jpg",
    "source": "eobuwie — Reebok Classic Leather Sneaker",
    "page": "https://eschuhe.de/p/schuhe-reebok-classic-leather-50172-white-0000199174155",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "adidas": {
    "type": "product",
    "url": "https://theshoecity.co.za/cdn/shop/files/pixelcut-export-1729162200101.png?v=1746809671",
    "source": "The Shoe City — Adidas Superstar Sneaker",
    "page": "https://theshoecity.co.za/products/adidas-superstar-shoes-white-black",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "tnuva": {
    "type": "product",
    "url": "https://static.wixstatic.com/media/d3e4d2_e0c8d9d634a24da2b5e8c7e4e43aceea~mv2.jpg/v1/fill/w_800%2Ch_600%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/d3e4d2_e0c8d9d634a24da2b5e8c7e4e43aceea~mv2.jpg",
    "source": "Amiga Store — Tnuva Fresh Milk Carton",
    "page": "https://www.amigastore.co.il/product-page/חלב-ליטר-תנובה",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "elite": {
    "type": "product",
    "url": "https://www.israelikosher.com/imagesc/product/large/elite20milk20chocolate20bar20.webp",
    "source": "Israeli Kosher — Elite Milk Chocolate Bar",
    "page": "https://www.israelikosher.com/elite-3oz-milk-chocolate-bar-kp",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ben-jerrys": {
    "type": "product",
    "url": "https://images.ctfassets.net/6jpeaipefazr/1HoP2RoKb8LUSMZBqjMSnN/d420bdf754f09330c430c1711509fe76/P9-8711327370708.jpg",
    "source": "Co-op — Ben & Jerry’s Chocolate Fudge Brownie",
    "page": "https://www.coop.co.uk/products/ben-and-jerrys-chocolate-fudge-brownie-465ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "maggi": {
    "type": "product",
    "url": "https://vedikafoods.com/cdn/shop/files/MaggiNoodles70g.jpg?v=1770967100&width=1946",
    "source": "Vedika Foods — Maggi 2-Minute Masala Noodles",
    "page": "https://vedikafoods.com/products/maggi-noodles-70g",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "minute-maid": {
    "type": "product",
    "url": "https://139205281.cdn6.editmysite.com/uploads/1/3/9/2/139205281/CBSEAO6VEBZML2U4LCRJXHXU.jpeg",
    "source": "KOBA Korean BBQ — Minute Maid 100% Orange Juice",
    "page": "https://www.kobakoreanbbq.com/product/minute-maid-juice/50",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "dasani": {
    "type": "product",
    "url": "https://corporate.mcdonalds.com/content/dam/sites/corp/nfl/newsroom/menu-items-2023/NR_202106_5474_DasaniBottledWater_2000x2000.png.coredownload.png",
    "source": "McDonald's Corporate — Dasani Bottled Water",
    "page": "https://corporate.mcdonalds.com/corpmcd/our-stories/media-assets-library/media-article/dasani_bottled_water.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "kelloggs": {
    "type": "product",
    "url": "https://product.hstatic.net/1000075554/product/kellogg_s-corn-flakes-size-150g_cde8e2eed07849bebc5a9950e4191fc5_40bbe046fbe548aeb5de4bca8478c31a_grande.jpg",
    "source": "Toantot — Kellogg’s Corn Flakes 150g",
    "page": "https://toantot.myharavan.com/products/kellogg-s-corn-flakes-cereal-150g",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "dominos": {
    "type": "product",
    "url": "https://www.skipthedishes.com/_next/image?q=75&url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-09088abd0a2bcbfad6b6.jpeg&w=1080",
    "source": "SkipTheDishes — Domino’s Pepperoni Pizza",
    "page": "https://www.skipthedishes.com/dominos-pizza-815-gray-ave",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "magnum": {
    "type": "product",
    "url": "https://express.stongs.com/media/uploads/product/00058779143626_a1c1.png",
    "source": "Stong’s Market — Magnum Classic Ice Cream Bar",
    "page": "https://express.stongs.com/product/magnum-classic-bars/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "nescafe": {
    "type": "product",
    "url": "https://www.nescafe.com/sg/sites/default/files/styles/pdp_banner_image/public/2024-08/front_0.png.webp?itok=uRNKwIJf",
    "source": "NESCAFÉ Singapore — Classic Instant Coffee Jar",
    "page": "https://www.nescafe.com/sg/coffee/classic",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت أو بسبب قيود وصول الناشر. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "pampers": {
    "type": "product",
    "url": "https://diaper-house-sg.myshopify.com/cdn/shop/products/13076863_XL1_1024x.jpg?v=1525015449",
    "source": "Diaper House — Pampers Baby-Dry package",
    "page": "https://diaper-house-sg.myshopify.com/products/copy-of-goo-n-diaper-sample",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "swiffer": {
    "type": "product",
    "url": "https://www.2xsavings.com/cdn/shop/products/728048.jpg?v=1671135278",
    "source": "2X Savings — Swiffer Dusters Starter Kit",
    "page": "https://www.2xsavings.com/products/pgc11804ct-dusters-starter-kit-dust-lock-fiber-6-handle-blue-yellow-6-carton",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "dawn": {
    "type": "product",
    "url": "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_68e71bbf-eb08-41ff-a732-4e85949da414.jpg",
    "source": "Instacart — Dawn Ultra Dishwashing Liquid",
    "page": "https://www.instacart.com/products/17820008-dawn-dishwashing-liquid-dish-soap-original-scent-28-0-oz",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "febreze": {
    "type": "product",
    "url": "https://i5.walmartimages.com/seo/Air-Effects-with-Linen-and-Sky-Scent_6cad8903-e73e-4d87-bea1-34ecf6697a09_1.13b463a796e526bceed7295590305bc3.jpeg",
    "source": "Walmart — Febreze Air Effects Linen & Sky",
    "page": "https://www.walmart.com/ip/11027529",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "scrubbing-bubbles": {
    "type": "product",
    "url": "https://images-na.ssl-images-amazon.com/images/I/61DFyugfQFL.jpg",
    "source": "Whizz Kenya — Scrubbing Bubbles Bathroom Grime Fighter",
    "page": "https://www.whizz.co.ke/product/13408442/scrubbing-bubbles-disinfectant-bathroom-grime-fighter-spray-rainshower-32-fl-oz/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "vim": {
    "type": "product",
    "url": "https://express.stongs.com/media/uploads/product/Images/00067238212292_a1c1.jpg",
    "source": "Stong’s Market — Vim Lemon Cream Cleanser",
    "page": "https://express.stongs.com/product/vim-cream-cleanser-lemon/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "dreft": {
    "type": "product",
    "url": "https://static.ah.nl/dam/product/AHI_43545239373132323231?fileType=binary&rendition=800x800_JPG_Q90&revLabel=4",
    "source": "Albert Heijn — Dreft Original Dishwashing Liquid",
    "page": "https://www.ah.nl/producten/product/wi470475/dreft-afwasmiddel-original",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "vichy": {
    "type": "product",
    "url": "https://www.vichyusa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-vichy-master-catalog/default/dw2f50c315/product/Mineral89/M89-2026/Vichy-Mineral-89-Daily-Booster-PDP-Packshot-30ml-JPG.jpg",
    "source": "Vichy USA — Minéral 89 Daily Booster",
    "page": "https://www.vichyusa.com/skin-care/mineral-89-hyaluronic-acid-serum-mineral89.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "urban-decay": {
    "type": "product",
    "url": "https://www.gosupps.com/media/catalog/product/2/6/2627771.jpg",
    "source": "GoSupps — Urban Decay Original Naked Palette",
    "page": "https://www.gosupps.com/urban-decay-cosmetics-the-original-naked-eyeshadow-palette-limited-edition.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "kiehls": {
    "type": "product",
    "url": "https://skinstash.pk/cdn/shop/files/Untitled_design_-_2024-08-13T171936.080.png?v=1754244460&width=1946",
    "source": "SkinStash — Kiehl’s Ultra Facial Cream",
    "page": "https://skinstash.pk/products/kiehls-ultra-facial-cream",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "sk-ii": {
    "type": "product",
    "url": "https://shopeve.com/cdn/shop/products/s1850346-main-zoom.jpg?v=1669932440",
    "source": "Shopeve — SK-II Facial Treatment Essence",
    "page": "https://shopeve.com/products/facial-treatment-essence-pitera-essence",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "pledge": {
    "type": "product",
    "url": "https://apim.canadiantire.ca/v1/product/api/v1/product/image/0530358p?baseStoreId=CTR&impolicy=mZoom&imwidth=640&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e",
    "source": "Canadian Tire — Pledge Lemon Furniture Polish",
    "page": "https://www.canadiantire.ca/en/pdp/pledge-lemon-furniture-polish-275-g-0530358p.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "rexona": {
    "type": "product",
    "url": "https://assets.unileversolutions.com/v1/123260021.png",
    "source": "Rexona / Unilever — Cotton Dry Roll-On",
    "page": "https://www.rexona.com/tr/p/rexona-cotton-dry-antiperspirant-kad%C4%B1n-roll-on-deodorant-50-ml.html/08710847860829",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "kerastase": {
    "type": "product",
    "url": "https://freshbeautyco.com.au/cdn/shop/files/FBC-233700.png?v=1690612118",
    "source": "Fresh Beauty Co. — Kérastase Elixir Ultime Shampoo",
    "page": "https://freshbeautyco.com.au/products/233700-kerastase-elixir-ultime-elixir-ultime-le-bain-sublimating-oil-infused-shampoo-dull-hair",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا اتصال. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "palmolive": {
    "type": "product",
    "url": "https://assets.woolworths.com.au/images/1005/273026.jpg?h=600&impolicy=wowsmkqiema&w=600",
    "source": "Woolworths — Palmolive Original Dishwashing Liquid",
    "page": "https://www.woolworths.com.au/shop/productdetails/273026/palmolive-dishwashing-liquid-original",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "pot-noodle": {
    "type": "product",
    "url": "https://www.sparscotland.co.uk/images/products/brandbank/cec8c70e-873d-4c74-92d3-dfd24cab02f5.png",
    "source": "SPAR Scotland — Pot Noodle Chicken & Mushroom",
    "page": "https://www.sparscotland.co.uk/product/grocery-ready-meals/pot-noodle-standard-pot-noodle-chicken-mushroom-90-g/282606",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "old-spice": {
    "type": "product",
    "url": "https://lyko.com/globalassets/product-images/old-spice-deodorant-stick-original-50-ml-1224-104-0050_1.png?h=800&quality=75&w=800",
    "source": "Lyko — Old Spice Original Deodorant Stick",
    "page": "https://lyko.com/sv/old-spice/old-spice-deodorant-stick-original-50-ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "hellmanns": {
    "type": "product",
    "url": "https://digitalcontent.api.tesco.com/v2/media/ghs/8c39e9f4-8af4-4f33-8e11-d0d400050db3/082235b8-ad9b-4989-8f2b-d894f2c915d7_104083088.jpeg",
    "source": "Tesco Groceries — Hellmann’s Original Mayonnaise",
    "page": "https://bevasarlas.tesco.hu/groceries/hu-HU/products/2005105003748",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "sunsilk": {
    "type": "product",
    "url": "https://api.meekago.com/api/upload/images/7e4554cc-318e-4219-b004-0d6e2b7f0979-ca24.jpg",
    "source": "MeekaGo — Sunsilk Soft & Smooth Shampoo",
    "page": "https://meekago.com/product-details/sunsilk-soft-smooth-shampoo-origin-from-thailand--40",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "knorr": {
    "type": "product",
    "url": "https://cdn.webshopapp.com/shops/263312/files/466626524/knorr-knorr-chicken-stock-cube-8pk.jpg",
    "source": "Kellys Expat Shopping — Knorr Chicken Stock Cubes",
    "page": "https://www.kellys-expat-shopping.nl/nl/knorr-chicken-stock-cube-8pk.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "clear": {
    "type": "product",
    "url": "https://shop.mammy.app/images/thumbs/0031865_-600-.jpeg",
    "source": "Mammy App — Clear Anti-Dandruff Shampoo",
    "page": "https://shop.mammy.app/ar/شامبو-كلير-للنساء-نعومة-ولمعان-ضد-القشرة-600-مل",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "redken": {
    "type": "product",
    "url": "https://www.perfumesecompanhia.pt/on/demandware.static/-/Sites-master-catalog-pc/default/dw967c7217/images/hi-res/CP01/387387_142193.jpg",
    "source": "Perfumes e Companhia — Redken All Soft Shampoo",
    "page": "https://www.perfumesecompanhia.pt/pt/redken-all-soft-all-soft-shampoo/29236M.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "sanex": {
    "type": "product",
    "url": "https://assets.sainsburys-groceries.co.uk/gol/4010791/1/2365x2365.jpg",
    "source": "Sainsbury’s — Sanex Dermo Sensitive Roll-On",
    "page": "https://www.sainsburys.co.uk/gol-ui/product/sanex-derma-care-sensitive-48-hour-antiperspirant-roll-on-deodorant-50ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "lancome": {
    "type": "product",
    "url": "https://www.lancome.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lac-master-catalog/fr_FR/dw178de2b6/images/PACKSHOTS/MAKEUP/EYES/HYPNOSE/3614272161788_LANCOME_HYPNOSE_NOIR.png",
    "source": "Lancôme France — Hypnôse Mascara",
    "page": "https://www.lancome.fr/maquillage/maquillage-yeux/mascara/mascara-hypnose/A01035-LAC.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "aussie": {
    "type": "product",
    "url": "https://i5.walmartimages.com/seo/Aussie-Miracle-Moist-Shampoo-with-Avocado-Paraben-Free-For-All-Hair-Types-26-2-fl-oz_fb85a427-c1ff-4a32-aa59-4ae9f9de480b.578bc7e18c2196bb44169092384c853c.jpeg",
    "source": "Walmart — Aussie Miracle Moist Shampoo",
    "page": "https://www.walmart.com/ip/765285386",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "oral-b": {
    "type": "product",
    "url": "https://www.hebe.pl/on/demandware.static/-/Sites-PL_Master_Catalog/default/dwbcddd187/images/hi-res/739303__OralB_ProExpert_Deep_Clean_Pasta_Do_Zebow_75_ml__BB__1__p.png",
    "source": "Hebe — Oral-B Pro-Expert Deep Clean Toothpaste",
    "page": "https://www.hebe.pl/oral-b-pasta-do-zebow-75-ml-000000000000739303.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "protex": {
    "type": "product",
    "url": "https://www.cutpriceonline.com.au/cdn/shop/files/9400541044029-front-baseFormat-1200Wx1200H.jpg?v=1745922706&width=1445",
    "source": "Cutprice Online — Protex Gentle Antibacterial Soap",
    "page": "https://www.cutpriceonline.com.au/products/protex-antibacterial-gentle-bar-soap-90g",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "nexxus": {
    "type": "product",
    "url": "https://belvera.co.uk/cdn/shop/files/nexxus-ultralight-smooth-shampoo-bottle-front.jpg?v=1765664991",
    "source": "Belvera — Nexxus Ultralight Smooth Shampoo",
    "page": "https://belvera.co.uk/products/nexxus-ultralight-smooth-shampoo-frizz-control-sulfate-silicone-free",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "venus": {
    "type": "product",
    "url": "https://assets.target.com.au/transform/156341be-12ce-48f9-9336-78110e699a69/43285969-1?io=transform%3Afit%2Cwidth%3A1400%2Cheight%3A1600&output=webp&quality=90",
    "source": "Target Australia — Gillette Venus Smooth Razor",
    "page": "https://www.target.com.au/p/gillette-venus-smooth-razor/69007392",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "gillette": {
    "type": "product",
    "url": "https://f.nooncdn.com/p/e9642c281a9f5674be04623e81274f7b/pzsku/Z93E961A25C20C717BA51Z/45/1770634151/848aa676-9aa9-4f6e-9dfa-a5b9ce574fec.jpg",
    "source": "Noon Egypt — Gillette Fusion5 ProGlide Razor",
    "page": "https://www.noon.com/egypt-en/gillette-fusion-5-proglide-manual-razor-with-flexball-handle-technology-and-2-razor-blade-refills/Z93E961A25C20C717BA51Z/p/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "cif": {
    "type": "product",
    "url": "https://ca.britishessentials.com/cdn/shop/products/19933011_1_640x640_34b729f8-7980-4a68-8377-d6e9f3dc83e5_x700.jpg?v=1618831722",
    "source": "British Essentials — Cif Cream Cleaner Original",
    "page": "https://ca.britishessentials.com/products/cif-cream-white-500ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "smartwater": {
    "type": "product",
    "url": "https://i5.walmartimages.com/asr/e684dd5b-3be8-4084-8b82-3ca2c34ab946.fcca39aaa13ed90b5dbb9be5136e5351.jpeg",
    "source": "Walmart — Smartwater Alkaline Bottle",
    "page": "https://www.walmart.com/ip/1768995359",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "fresca": {
    "type": "product",
    "url": "https://millvalleymarket.com/cdn/shop/files/7aed47fc-95ba-4b13-a2a2-98de439fb0ad.jpg?v=1748577096&width=1445",
    "source": "Mill Valley Market — Fresca Grapefruit Citrus Can",
    "page": "https://millvalleymarket.com/products/fresca-can-12-fl-oz",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ecover": {
    "type": "product",
    "url": "https://www.futures-supplies.co.uk/images/ww/product/007.630NS__1.jpg",
    "source": "Futures Supplies — Ecover Lemon & Aloe Vera Washing-Up Liquid",
    "page": "https://www.futures-supplies.co.uk/product-ranges/cleaning-products/washing-up-liquids/ecover-washing-up-liquid-lemon-aloe-vera-450ml-single",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "milo": {
    "type": "product",
    "url": "https://i5.peapod.com/c/PO/POSIF.png",
    "source": "Food Lion — Nestlé Milo Chocolate Malt Beverage Mix",
    "page": "https://foodlion.com/groceries/beverages/hot-chocolate-cocoa/powdered-milk-mixers/nestle-milo-drink-mix-chocolate-malt-141-oz-can.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "smarties": {
    "type": "product",
    "url": "https://www.brfoods.gr/shop/brfoods/images/product/8933066211358_1.jpg",
    "source": "BR Foods — Nestlé Smarties Giant Tube",
    "page": "https://www.brfoods.gr/shop/brfoods/nestle-rowntree-120g-giant-tube-smarties",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "aero": {
    "type": "product",
    "url": "https://norwestdistributors.com/cdn/shop/products/Aero_grande.webp?v=1654904690",
    "source": "Nor West Distributors — Nestlé Aero Milk Chocolate Bar",
    "page": "https://norwestdistributors.com/products/aero-milk-chocolate-bar",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "bounce": {
    "type": "product",
    "url": "https://i5.walmartimages.com/seo/Bounce-Fresh-Linen-Scented-Fabric-Softener-Dryer-Sheets-120-Count_a323f4e4-b0cc-4470-92a9-61a9093c4153_1.033dd464a26781711dc315af15bab8ba.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768",
    "source": "Walmart — Bounce Fresh Linen Dryer Sheets",
    "page": "https://www.walmart.com/ip/180112060",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من وجود ترخيص يسمح بإعادة الاستخدام. يلزم الحصول على الإذن أو استبدالها بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مراجعة صفحة المصدر ومطابقة الصورة بصريًا مع اسم المنتج؛ تعذّر اختبار رابط الصورة المباشر من بيئة العمل بلا إنترنت. يمكن فحصه عبر tools/check-photo-urls.py."
  },
  "ace": {
    "type": "product",
    "url": "https://cdn.myikas.com/images/f399643d-c483-4d9b-b12e-c0b07c3080f8/79846e02-89c9-458a-87ee-48efd8298ef6/image_1080.jpg",
    "source": "AK Office — Ace Classic Bleach 1 kg",
    "page": "https://www.akoffice.com.tr/ace-camasir-suyu-normal-1-kg-ace0007",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "ajax": {
    "type": "product",
    "url": "https://www.nhscare.se/images/prod630/a7488.jpg",
    "source": "NHS Care — Ajax Classic All-Purpose Cleaner",
    "page": "https://www.nhscare.se/sv/Hem/Produkter/Stad/Rengoringsmedel/Rengoring_-_Allrent",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "ahava": {
    "type": "product",
    "url": "https://storage.googleapis.com/israel_expo_co_il_uploads/store/Community/6/exhibitslide/9971/image/9d37236fcc47815368c3744eaca005c8.jpeg",
    "source": "Israel Export Institute Catalogue — AHAVA skincare products",
    "page": "https://c-catalogue.israel-expo.co.il/expo/exhibits/3884",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "nestle-formula": {
    "type": "product",
    "url": "https://static-01.daraz.lk/p/52bbe60b9b794ce625c3d6eaef35e1d6.jpg",
    "source": "Daraz — Nestlé NAN 1 HMO Starter Infant Formula 400g",
    "page": "https://www.daraz.com.bd/products/versatile-nan-1-hmo-starter-infant-formula-400g-tin-i550716839.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "quality-street": {
    "type": "product",
    "url": "https://www.compraonline.alcampo.es/images-v3/37ea0506-72ec-4543-93c8-a77bb916ec12/3ed9c577-3962-4f0c-bafb-34db4ba00240/500x500.jpg",
    "source": "Alcampo — Nestlé Quality Street Assorted Chocolates Tin",
    "page": "https://www.compraonline.alcampo.es/products/Surtido-de-bombones-de-chocolate-chocolate-con-leche-y-caramelos-NESTLE-240-g/471016",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "vitaminwater": {
    "type": "product",
    "url": "https://storage.googleapis.com/images-prs-prd-c7e7986.prs.prd.v8.commerce.mi9cloud.com/product-images/zoom/00786162040008_1",
    "source": "ShopRite — Glacéau Vitaminwater Essential Orange-Orange",
    "page": "https://www.shoprite.com/product/glaceau-vitaminwater-essential-orange-00786162040008",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "nespresso": {
    "type": "product",
    "url": "https://brayval-coffee.com.ua/content/images/1/1800x1800l80br0/kofe-v-kapsulakh-nespresso-ispirazione-venezia-10sht-91353201776602.jpg",
    "source": "Brayval-Coffee — Nespresso Ispirazione Venezia Capsules",
    "page": "https://brayval-coffee.com.ua/ua/kofe-v-kapsulakh-nespresso-ispirazione-venezia-10sht/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "pizza-hut": {
    "type": "product",
    "url": "https://www.pizzahut.com.sv/static/media/images/images/jpg/1_13-06-2024-09-01_MD.jpg",
    "source": "Pizza Hut El Salvador — Pepperoni Pizza",
    "page": "https://m.pizzahut.com.sv/menu/categoria/Arma-tus-Pizza",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "papa-johns": {
    "type": "product",
    "url": "https://www.skipthedishes.com/_next/image?q=75&url=https%3A%2F%2Frestaurants-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-983a5b387a7b50a52f22.jpg&w=3840",
    "source": "SkipTheDishes — Papa John’s Medium Pepperoni Pizza",
    "page": "https://www.skipthedishes.com/papa-johns-pizza-simcoe-street-north",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "dates-mehadrin": {
    "type": "product",
    "url": "https://www.yerekasade.com/Cat_490004_334.jpg",
    "source": "Yerekasade — Mehadrin Gold Label Medjoul Dates",
    "page": "https://www.yerekasade.com/Catalog.asp?PRodID=1802354&Page=NewShowProd.asp",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "dates-hadiklaim": {
    "type": "product",
    "url": "https://www.hadiklaim.com/images/searchsort/ks_500g_gold.jpg",
    "source": "Hadiklaim — King Solomon Medjoul Natural Dates 500g",
    "page": "https://www.hadiklaim.com/date-varieties/sort-search",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "coconut-milk": {
    "type": "product",
    "url": "https://asianpantry.com.au/cdn/shop/files/6dffa117ed403d79561186cd324b75fe.webp?crop=center&height=630&v=1766529703&width=1200",
    "source": "Asian Pantry — Aroy-D Thai Coconut Milk 400ml",
    "page": "https://asianpantry.com.au/products/aroy-d-coconut-milk-400ml",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "burger-king": {
    "type": "product",
    "url": "https://www.kaloricketabulky.sk/file/image/foodstuff/a8cceda70a5b462580dadcda822c464b/963438e9e4eb4a11b28162c080e28360",
    "source": "KalorickéTabuľky — Burger King Whopper",
    "page": "https://www.kaloricketabulky.sk/potraviny/whopper-burger-king",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "cascade": {
    "type": "product",
    "url": "https://i5.walmartimages.com/seo/Cascade-Dishwasher-Detergent-ACtionPacs-Fresh-Scent-25-count_c0291e1c-1643-49ea-a403-0d0beadd0b3e.05ac5b2ab9ee4f06ffb021476c6fab33.jpeg",
    "source": "Walmart — Cascade Original ActionPacs Dishwasher Detergent",
    "page": "https://www.walmart.com/ip/237095143",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "zara": {
    "type": "product",
    "url": "https://static.zara.net/assets/public/9e20/7c72/fad34e30a7b1/01ea85e71e99/07545710250000-f1/07545710250000-f1.jpg?ts=1769609222807",
    "source": "Zara Australia — White Men’s Dress Shirt",
    "page": "https://www.zara.com/au/en/man-shirts-l737.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "mr-clean": {
    "type": "product",
    "url": "https://images.thdstatic.com/productImages/b573a0cb-839a-4b45-94d3-1ca33ea304e5/svn/mr-clean-sponges-scouring-pads-003700082027-64_1000.jpg",
    "source": "The Home Depot — Mr. Clean Magic Eraser 4-Pack",
    "page": "https://www.homedepot.com/p/Mr-Clean-Magic-Eraser-Multi-Purpose-Cleaning-Pad-4-Pack-003700082027/203192934",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "downy": {
    "type": "product",
    "url": "https://bevmo.com/cdn/shop/files/aaf858a8-088b-4fb9-962e-8ec016a9048b-padded_8812e210-3ab0-4504-ab78-37b6948d4663.png?v=1729065906&width=1445",
    "source": "BevMo! — Downy Ultra April Fresh Fabric Softener",
    "page": "https://bevmo.com/products/107561",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "siemens": {
    "type": "product",
    "url": "https://hkele.com.hk/image/cache/product/WG54A2A0HK-800x800.jpg",
    "source": "HKELE — Siemens iQ500 Front-Loading Washer",
    "page": "https://hkele.com.hk/en/WG54A2A0HK",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "carrefour": {
    "type": "product",
    "url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b106fb45983029.58443d8d44535.jpg",
    "source": "Behance — Carrefour Flour and Rice Packaging",
    "page": "https://www.behance.net/gallery/45983029/Carrefour-Flour-Rice",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "strauss": {
    "type": "product",
    "url": "https://2.bp.blogspot.com/-fHqn6qMQi2M/WHINEoIIMoI/AAAAAAAAADc/CAT9RN_mJOgprarVopV3DFksNE5Z-t0bgCLcB/s1600/%25D7%25A1%25D7%2599%25D7%259E%25D7%25A4%25D7%2595%25D7%25A0%25D7%2599%25D7%2594%252C%2B%D7%A9%D7%98%D7%A8%D7%90%D7%95%D7%A1%2B%D7%9E%D7%97%D7%9C%D7%91%D7%95%D7%AA%2B%D7%A6%D7%99%D7%9C%D7%95%D7%9D%2B%D7%A9%D7%9C%D7%95%D7%9E%D7%99%2B%D7%90%D7%A8%D7%91%D7%99%D7%91.jpg",
    "source": "Strauss Dairy — Symphony Cream Cheese Variety",
    "page": "https://katipay200.blogspot.com/2017/01/blog-post_8.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "elmex": {
    "type": "product",
    "url": "https://cdn.beautyfool.it/app/uploads/2024/03/85bba6cb962f3cf853d80ff45af7a63d-scaled.jpg",
    "source": "BeautyFool — elmex Complete Oral Hygiene Kit",
    "page": "https://www.beautyfool.it/test-prodotto/kit-igiene-orale-completa/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "murphy-oil-soap": {
    "type": "product",
    "url": "https://ak1.ostkcdn.com/images/products/is/images/direct/d57b0a152036b5657be36e2bb9a4bd1cf8cc4e2a/Murphy-Oil-Soap-Wood-Cleaner.jpg",
    "source": "Bed Bath & Beyond — Murphy Oil Soap Wood Cleaner Collection",
    "page": "https://www.bedbathandbeyond.com/Office-Supplies/Murphy-Oil-Soap-Wood-Cleaner-22-fl-oz-0.7-quart/33994989/product.html",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "mr-sheen": {
    "type": "product",
    "url": "https://www.shopshield.co.za/cdn/shop/files/Mr_Sheen_d880d74a-d591-45c1-9e9c-e669a5f57a1c.png?v=1736934427&width=1100",
    "source": "Shop Shield — Mr Sheen Cleaning Product Assortment",
    "page": "https://www.shopshield.co.za/pages/mr-sheen/mr-sheen-anexuy1l",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "jafora-tabori": {
    "type": "product",
    "url": "https://d226b0iufwcjmj.cloudfront.net/gs1-products/1181/large/7290019056584-846681/7290019056584/2025-05-12T12-18-38-629Z.jpg",
    "source": "BestMarket Online — Jafora-Tabori Spring Orange Juice 1.5L",
    "page": "https://www.bestmarketonline.co.il/?catalogProduct=4541567",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  },
  "israeli-produce": {
    "type": "product",
    "url": "https://bdsf34.wordpress.com/wp-content/uploads/2015/02/mandarineordi.jpg",
    "source": "BDS France 34 — Orri mandarins package marked “Origine Israël”",
    "page": "https://www.bdsfmontpellier.org/6eme-action-bds-france34-contre-mehadrin-chez-lidl-montpellier/",
    "license": "حقوق الصورة محفوظة للناشر أو صاحبها؛ لم يُتحقق من ترخيص يسمح بإعادة الاستخدام التجاري أو إعادة النشر. يلزم الحصول على إذن أو استبدال الصورة بصورة مرخّصة قبل النشر العام.",
    "checked": "2026-11-14: تمت مطابقة الصورة مع اسم المنتج/العلامة في نتيجة البحث وصفحة المصدر؛ لم يمكن اختبار رابط الصورة المباشر من بيئة البناء لعدم توفر اتصال إنترنت. الرابط خارجي وقد يتغير."
  }
};
