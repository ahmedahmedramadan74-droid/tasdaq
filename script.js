/* =====================================================================
   خريطة الصور — غيّر المسارات من هنا فقط (أو استبدل الملف بنفس الاسم)
   كل المسارات نسبية لمجلد المشروع. يمكنك استخدام jpg / png / webp / svg.
   ===================================================================== */
/* =====================================================================
   رابط قناة التليجرام (زر JOIN في الهيدر)
   ضع رابط قناتك بين علامتي التنصيص، مثل: "https://t.me/اسم_القناة"
   لم يُعثر على رابط في ملفات المشروع، لذلك تُرك فارغًا عمدًا.
   ===================================================================== */
const TELEGRAM_URL="";

const IMAGES={
  homeCircle:"images/home-circle.svg"          // الصفحة الرئيسية: الصورة الدائرية الكبيرة
  /* باقي الصور في COLLECTIONS بالأسفل:
     thumb  = صورة الإطار في الصفحة الرئيسية
     hero   = الصورة الكبيرة في أعلى الصفحة الثانية / الثالثة
     images = صور بطاقات المعرض بالترتيب (الصفحة الثانية) */
};

/* ========= المحتوى (عدّل النصوص والصور من هنا) ========= */
const UI = {
  en:{siteUrl:"Tasadaq Wansor Telegram",brand:"Tasadaq Wansor",langLabel:"Language",joinLabel:"Join our Telegram channel",joinMissing:"Add the Telegram channel link in script.js (TELEGRAM_URL)",heroTitle:"Learn. Build. Secure.",heroSub:"Practical tech knowledge for everyone",
      lead:"Welcome to ant, your home for hands-on tutorials, tools and ideas. Pick a collection below to explore photos and stories.",
      sectionTitle:"Explore Collections",back:"← Back",copied:"Copied successfully ✓",copyName:"Copy name",copyDesc:"Copy description",noVideo:"Add this video link in script.js (COLLECTIONS → video → url)",
      p3SearchLabel:"Search the products guide",p3Empty:"No products match your search.",
      p3Note:"Entries summarize the linked sources. Boycott calls and accusations are attributed to the named campaign groups or publications and are not independent findings of this site. Please open the source link and verify before sharing. Last reviewed: 13 Nov 2026."},
  ar:{siteUrl:"Tasadaq Wansor Telegram",brand:"Tasadaq Wansor",langLabel:"اللغة",joinLabel:"انضم إلى قناتنا على تليجرام",joinMissing:"أضف رابط قناة التليجرام في script.js (TELEGRAM_URL)",heroTitle:"Tasadaq Wansor",heroSub:" 2026/11/14",
      lead:"نحن مجموعة من الباحثين المتخصصين نقوم بجمع حسابات إنستغرام وأرقام هواتف الأشخاص الأكثر احتياجاً في قطاع غزه وذلك بهدف إيصال الصدقات إليهم نحن لا نتبع لأي منظمات خيرية او جهات أخرى Tasadaq Wansor لقد تلقينا العديد من الرسائل التي تستفسر عن حسابات موثوقة يمكن التبرع من خلالها ولذلك، قمنا بإنشاء موقع تصدّق وانصر",
      sectionTitle:" يجري حالياً تحديث الموقع وهناك المزيد في الطريق وسنوافيكم بالمستجدات فور إضافة تحديثات أخرى     ",back:"→ رجوع",copied:"تم النسخ بنجاح ✓",copyName:"نسخ الاسم",copyDesc:"نسخ الوصف",noVideo:"أضف رابط الفيديو في script.js (COLLECTIONS ← video ← url)",
      p3SearchLabel:"ابحث في دليل المنتجات",p3Empty:"لا توجد منتجات مطابقة لبحثك.",
      p3Note:"المعلومات ملخّصة من المصادر المرفقة. دعوات المقاطعة والاتهامات منسوبة إلى الجهات أو المنشورات المذكورة، وليست نتائج تحقق مستقلة من هذا الموقع. افتح رابط المصدر وتحقق منه قبل المشاركة. آخر مراجعة: 13 نوفمبر 2026."}
};
/* الصور في مجلد images — استبدل الملفات بنفس الأسماء أو غيّر المسارات هنا */
const COLLECTIONS = {
  1:{thumb:"images/gaza.jpg",hero:"images/gaza.jpg",square:true,
     images:["images/gallery1-1.svg","images/gallery1-2.svg","images/gallery1-3.svg","images/gallery1-4.svg","images/gallery1-5.svg","images/gallery1-6.svg"],
     title:{en:"Nature Collection",ar:" للتبرع وعرض الحسابات  "},
     desc:{en:"Sunsets, lakes and mountains",ar:"للتبرع وعرض الحسابات والأرقام اضغط هنا  "},
     text:{en:"A calm journey through landscapes at golden hour. Each card below opens a different scene from the collection.",ar:"  قال رسول الله صلى الله عليه وسلم ما من امرئ يخذل امرأً مسلماً في موضع تنتهك فيه حرمته وينتقص فيه من عرضه إلا خذله الله في موطن يحب فيه نصرته وما من امرئ ينصر مسلماً في موضع ينتقص فيه من عرضة وينتهك فية من حرمتة إلا نصره الله في موطن يحب نصرته  "},
     cards:[["Lake","البحيرة","Still water at dusk","مياه ساكنة عند الغروب"],["Mountain","الجبل","Snow-capped peaks","قمم مكسوّة بالثلج"],["Forest","الغابة","Tall pine trees","أشجار صنوبر عالية"],["Sunrise","الشروق","First light of day","أول ضوء للنهار"],["Valley","الوادي","Green and quiet","أخضر وهادئ"],["Sky","السماء","Colors of the clouds","ألوان الغيوم"]]},
  /* الإطار الثاني يفتح الصفحة الثالثة المستقلة (page:"page3") = دليل منتجات المقاطعة.
     thumb = صورة الإطار في الصفحة الرئيسية (لم تتغير) — hero = بانر أعلى الصفحة الثالثة */
  2:{page:"page3",thumb:"images/muqata3a-logo.jpg",hero:"images/muqata3a-logo.jpg",square:true,
     title:{en:"Tech Labs",ar:" وجاهدوا بأموالكم"},
     desc:{en:"Hands-on projects and tools",ar:" لعرض المنتجات والشركات التي تدعم الاحتلال اضغط هنا   "},
     imageTitle:{en:"Boycott Products Guide",ar:"دليل منتجات المقاطعة"},
     text:{en:"A guide to products targeted by consumer boycott campaigns. Every entry shows the product and its company, the reason given by the campaign or publication, and a link to the source. Use the search box or the filters to browse.",
           ar:"دليل للمنتجات المستهدفة بحملات المقاطعة. يعرض كل منتج اسمه وشركته والسبب الذي ذكرته الحملة أو المنشور المرجعي، مع رابط المصدر. استخدم مربع البحث أو التصفية لتصفّح الأقسام."}}
};


/* =====================================================================
   دليل المنتجات (الصفحة الثالثة) — كل منتج له مصدر موثوق في SRC
   لإضافة منتج: أضف سطرًا في PRODUCTS (id, القسم, الاسم, الشركة, السبب, المصدر, نوع التوثيق)
   صورة المنتج: ضع ملفًا باسم id داخل images/products/ (jpg أو png أو webp) — انظر IMAGES-GUIDE.md
   ===================================================================== */
const CATS=["food","restaurants","sweets","dairy","care","clean","clothing","electronics","tech","ecommerce","transport","shipping","tourism","finance","energy"];
const P3T={
  en:{search:"Search by product, company or reason…",all:"All",menu:"Boycott Products & Companies",cats:{food:"Food & Beverages",restaurants:"Restaurants & Fast Food",sweets:"Chocolate & Sweets",dairy:"Dairy Products",care:"Skin & Body Care",clean:"Home Cleaning Products",clothing:"Clothing & Footwear",electronics:"Electronics",tech:"Technology & Software",ecommerce:"E-commerce & Retail",transport:"Transport & Delivery",shipping:"Shipping & Logistics",tourism:"Hotels & Tourism",finance:"Financial Services & Real Estate",energy:"Energy & Fuel"},
      count:n=>n+" products",source:"Source",basis:{bds:"Official BDS target",bdsOrganic:"Grassroots boycott supported by BDS",bdsPressure:"BDS pressure target",campaign:"Campaign call (not BDS list)",press:"Press report"},reviewed:"Last reviewed",
      open:"View details",kinds:{product:"Product photo",logo:"Company logo",sample:"Illustration (not the real product photo)",none:"No verified photo yet"},pub:"Publisher / product owner",desc:"Description",catLabel:"Category"},
  ar:{search:"ابحث باسم المنتج أو الشركة أو السبب…",all:"الكل",menu:"منتجات وشركات المقاطعة",cats:{food:"الأغذية والمشروبات",restaurants:"المطاعم والوجبات السريعة",sweets:"الشوكولاتة والحلويات",dairy:"منتجات الألبان",care:"العناية بالبشرة والجسم",clean:"منتجات تنظيف المنزل",clothing:"الملابس والأحذية",electronics:"الإلكترونيات",tech:"التكنولوجيا والبرمجيات",ecommerce:"التجارة الإلكترونية والتجزئة",transport:"النقل والتوصيل",shipping:"الشحن والخدمات اللوجستية",tourism:"الفنادق والسياحة",finance:"الخدمات المالية والعقارات",energy:"الطاقة والوقود"},
      count:n=>n+" منتج",source:"المصدر",basis:{bds:"هدف رسمي لدى BDS",bdsOrganic:"مقاطعة شعبية تدعمها BDS",bdsPressure:"هدف ضغط لدى BDS",campaign:"دعوة حملة (خارج قائمة BDS)",press:"تقرير صحفي"},reviewed:"آخر مراجعة",
      open:"عرض التفاصيل",kinds:{product:"صورة المنتج",logo:"شعار الشركة",sample:"صورة توضيحية (ليست صورة المنتج الفعلية)",none:"لا توجد صورة موثّقة بعد"},pub:"الناشر / صاحب المنتج",desc:"الوصف",catLabel:"القسم"}
};
const SRC={
  ecList:{url:"https://www.ethicalconsumer.org/ethicalcampaigns/boycotts",en:"Ethical Consumer — Boycotts List",ar:"Ethical Consumer — قائمة المقاطعات"},
  ecPal:{url:"https://www.ethicalconsumer.org/ethical-campaigns-boycotts/palestine-boycott-list",en:"Ethical Consumer — Palestine boycott list",ar:"Ethical Consumer — قائمة مقاطعة فلسطين"},
  ecCoke:{url:"https://www.ethicalconsumer.org/ethical-shopping/boycotts/coca-cola",en:"Ethical Consumer — Coca-Cola boycott",ar:"Ethical Consumer — مقاطعة كوكاكولا"},
  ecEcover:{url:"https://www.ethicalconsumer.org/home-garden/boycotting-ecover-method",en:"Ethical Consumer — Boycotting Ecover & Method",ar:"Ethical Consumer — مقاطعة إيكوفر وميثود"},
  ecScj:{url:"https://www.ethicalconsumer.org/node/239904",en:"Ethical Consumer — SC Johnson brands",ar:"Ethical Consumer — علامات SC Johnson"},
  irish:{url:"https://www.irishtimes.com/ireland/2025/09/14/from-pampers-to-pot-noodle-the-israel-linked-goods-you-might-find-in-your-house",en:"The Irish Times (Sept 2025)",ar:"The Irish Times (سبتمبر 2025)"},
  sabah:{url:"https://dailysabah.com/business/economy/2-years-into-gaza-genocide-global-boycotts-batter-brands-linked-to-israel",en:"Daily Sabah",ar:"Daily Sabah"}
};
const REASONS={
  coke:{en:"A boycott target supported by the BDS National Committee (listed among the grassroots organic boycott targets in its guide). Campaigners say Coca-Cola's exclusive Israeli franchisee, Central Bottling Company, owns a distribution centre and cooling house in the Atarot settlement zone.",
        ar:"هدف ذو أولوية لدى اللجنة الوطنية للمقاطعة (BDS) منذ ديسمبر 2024. يقول القائمون على الحملة إن الوكيل الحصري لكوكاكولا في إسرائيل (Central Bottling Company) يملك مركز توزيع ومخزنًا مبردًا في منطقة مستوطنة عطروت."},
  cokeBrand:{en:"A brand of The Coca-Cola Company, which Ethical Consumer lists among the BDS priority targets, accused of involvement in illegal Israeli settlements.",
        ar:"علامة تابعة لشركة كوكاكولا، المدرجة بحسب Ethical Consumer ضمن أهداف BDS ذات الأولوية، والمتهمة بالتورط في المستوطنات الإسرائيلية غير القانونية."},
  sodastream:{en:"The BDS National Committee still calls for its boycott, saying it is complicit in displacing Bedouin-Palestinian citizens in the Naqab (Negev) and has a history of discrimination against Palestinian workers. It closed its West Bank factory in 2015.",
        ar:"لا تزال اللجنة الوطنية للمقاطعة (BDS) تدعو إلى مقاطعتها، وتقول إنها متورطة في تهجير المواطنين الفلسطينيين البدو في النقب ولها تاريخ من التمييز ضد العمال الفلسطينيين. أغلقت الشركة مصنعها في الضفة الغربية عام 2015."},
  sabra:{en:"Campaigners have called for its boycott since at least 2011 because of the Strauss Group, which BDS says financially supports the Israeli army. Strauss sold its stake in November 2024, so PepsiCo now owns Sabra in the US; in the UK it is owned by Osem, ultimately owned by Nestlé.",
        ar:"تدعو حملات إلى مقاطعتها منذ 2011 على الأقل بسبب مجموعة شتراوس، التي تقول BDS إنها تقدّم دعمًا ماليًا للجيش الإسرائيلي. باعت شتراوس حصتها في نوفمبر 2024 فأصبحت بيبسيكو المالك الوحيد في أمريكا؛ أما في بريطانيا فتملكها أوسيم، المملوكة في النهاية لنستله."},
  nestleWP:{en:"More than 90 West Papuan tribes, political and religious groups (since 2025) call for boycotting products that use palm oil from expropriated West Papuan land; Nestlé's Aero, KitKat and Smarties are named.",
        ar:"تدعو أكثر من 90 قبيلة ومنظمة سياسية ودينية من غرب بابوا (منذ 2025) إلى مقاطعة المنتجات التي تستخدم زيت نخيل من أراضٍ مصادَرة في غرب بابوا، وقد ذُكرت منتجات نستله: آيرو وكيت كات وسمارتيز."},
  nestleFormula:{en:"Baby Milk Action has called for a boycott since 1977, accusing Nestlé of marketing infant formula in ways that contribute to infant death and suffering.",
        ar:"تدعو منظمة Baby Milk Action إلى مقاطعة نستله منذ 1977، متهمةً إياها بتسويق حليب الأطفال الصناعي بأساليب تسهم في وفاة الرضع ومعاناتهم."},
  nestleWater:{en:"IBFAN, in a November 2025 briefing to COP30, said Nestlé's bottled-water business depletes community groundwater and pollutes drinking water with microplastics, and called on consumers to boycott Nestlé.",
        ar:"قالت الشبكة الدولية IBFAN في إحاطة مقدّمة إلى COP30 في نوفمبر 2025 إن نشاط نستله في المياه المعبأة يستنزف المياه الجوفية للمجتمعات ويلوّث مياه الشرب بالميكروبلاستيك، ودعت المستهلكين إلى مقاطعتها."},
  mondelez:{en:"Named in the West Papuan groups' boycott call (since 2025) over palm oil from expropriated West Papuan land; Oreo and Ritz are both owned by Mondelez International.",
        ar:"مذكور في دعوة مجموعات غرب بابوا للمقاطعة (منذ 2025) بسبب زيت النخيل المأخوذ من أراضٍ مصادَرة؛ وكلٌّ من أوريو وريتز مملوك لشركة موندليز إنترناشيونال."},
  starbucks:{en:"The Lakota People's Law Project calls for a boycott of Starbucks because of its multibillion-dollar deal with Nestlé.",
        ar:"تدعو منظمة Lakota People's Law Project إلى مقاطعة ستاربكس بسبب صفقتها بمليارات الدولارات مع نستله."},
  mcd:{en:"BDS says McDonald's Israeli franchisee donated meals and drinks to Israeli military personnel and promoted it on social media. BDS also notes that McDonald's Malaysia sued BDS Malaysia.",
        ar:"تقول BDS إن الوكيل الإسرائيلي لماكدونالدز تبرّع بوجبات ومشروبات لجنود الجيش الإسرائيلي وروّج لذلك على وسائل التواصل، وتشير إلى أن ماكدونالدز ماليزيا رفعت دعوى على BDS ماليزيا."},
  fast:{en:"Targeted by grassroots boycott campaigns that the BDS National Committee supports because the company, or its Israeli branches or franchisees, openly supported Israel and/or donated meals to the Israeli military, according to BDS.",
        ar:"مستهدفة بحملات مقاطعة شعبية تدعمها اللجنة الوطنية للمقاطعة (BDS)، لأن الشركة أو فروعها أو وكلاءها في إسرائيل أعلنوا دعمهم لإسرائيل و/أو تبرّعوا بوجبات للجيش الإسرائيلي، بحسب BDS."},
  kelloggs:{en:"GMO-Free USA calls for a boycott, accusing the company of greenwashing and \u201chealthwashing\u201d and of backtracking on a 2020 pledge to phase out glyphosate in its wheat and oat supply by 2025. Ferrero has owned Kellogg's in North America since 2025.",
        ar:"تدعو منظمة GMO-Free USA إلى مقاطعتها، متهمةً الشركة بالتضليل البيئي والصحي وبالتراجع عن تعهّد عام 2020 بالتخلص التدريجي من مبيد الغليفوسات في إمدادات القمح والشوفان بحلول 2025. تملك فيريرو كيلوغز في أمريكا الشمالية منذ 2025."},
  dates:{en:"American Muslims for Palestine have called for a boycott of Israeli dates since 2012, saying they are mostly grown in illegal settlements using stolen water and that Palestinian workers face harsh conditions.",
        ar:"تدعو منظمة American Muslims for Palestine إلى مقاطعة التمور الإسرائيلية منذ 2012، وتقول إنها تُزرع في الغالب في مستوطنات غير قانونية بمياه مسروقة وإن العمال الفلسطينيين يعملون في ظروف قاسية."},
  carrefour:{en:"Listed by Ethical Consumer among the BDS priority targets, accused of involvement in illegal Israeli settlements.",
        ar:"مدرجة لدى Ethical Consumer ضمن أهداف BDS ذات الأولوية، ومتهمة بالتورط في المستوطنات الإسرائيلية غير القانونية."},
  coconut:{en:"PETA says its investigations documented monkeys chained, abusively trained and forced to pick coconuts in Thailand's coconut industry, and urges consumers to avoid canned coconut milk from Thailand.",
        ar:"تقول منظمة PETA إن تحقيقاتها وثّقت سلسلة قرود وتدريبها بعنف وإجبارها على قطف جوز الهند في صناعة جوز الهند في تايلاند، وتحثّ المستهلكين على تجنّب حليب جوز الهند المعلّب من تايلاند."},
  benjerry:{en:"Daily Sabah reports that Unilever drew criticism after transferring Ben & Jerry's distribution rights in Israel to a local firm, and that Unilever's turnover fell amid the boycotts.",
        ar:"تذكر Daily Sabah أن يونيليفر تعرّضت لانتقادات بعد نقلها حقوق توزيع بن آند جيريز في إسرائيل إلى شركة محلية، وأن مبيعاتها تراجعت في ظل حملات المقاطعة."},
  produce:{en:"The BDS National Committee calls for boycotting produce from Israel, saying fruit, vegetables and wine labelled \u201cProduct of Israel\u201d often include products of illegal settlements, and Israeli companies do not distinguish between the two.",
        ar:"تدعو اللجنة الوطنية للمقاطعة (BDS) إلى مقاطعة المنتجات الزراعية القادمة من إسرائيل، وتقول إن الفواكه والخضروات والنبيذ المكتوب عليها «منتج إسرائيلي» تتضمن غالبًا منتجات مستوطنات غير قانونية، والشركات الإسرائيلية لا تفرّق بينهما."},
  unilever:{en:"The Irish Times (Sept 2025) lists this Unilever brand among Israel-linked household goods on a consumer boycott list; the article notes multinationals have a footprint in Israel.",
        ar:"تذكر The Irish Times (سبتمبر 2025) هذه العلامة التابعة ليونيليفر ضمن السلع المنزلية المرتبطة بإسرائيل على قائمة مقاطعة للمستهلكين، وتشير إلى أن للشركات متعددة الجنسيات حضورًا في إسرائيل."},
  pgIrish:{en:"The Irish Times (Sept 2025) lists this Procter & Gamble brand among Israel-linked household goods on a consumer boycott list, noting that P&G has offices in Tel Aviv.",
        ar:"تذكر The Irish Times (سبتمبر 2025) هذه العلامة التابعة لبروكتر آند غامبل ضمن السلع المنزلية المرتبطة بإسرائيل على قائمة مقاطعة للمستهلكين، مشيرةً إلى أن للشركة مكاتب في تل أبيب."},
  colgate:{en:"The Irish Times (Sept 2025) lists Colgate toothpaste among Israel-linked household goods on a consumer boycott list.",
        ar:"تذكر The Irish Times (سبتمبر 2025) معجون أسنان كولجيت ضمن السلع المنزلية المرتبطة بإسرائيل على قائمة مقاطعة للمستهلكين."},
  ahava:{en:"A BDS priority target, accused of involvement in illegal Israeli settlements (Ethical Consumer's summary of the BDS-backed Boycat list).",
        ar:"هدف ذو أولوية لدى BDS، ومتهمة بالتورط في المستوطنات الإسرائيلية غير القانونية (بحسب ملخص Ethical Consumer لقائمة Boycat المدعومة من BDS)."},
  loreal:{en:"Naturewatch Foundation has boycotted L'Or\u00e9al since 2000 over animal testing. It welcomes the end of ingredient testing on animals but says products could still be tested by Chinese health authorities; it confirmed in June 2026 that the boycott continues.",
        ar:"تقاطع مؤسسة Naturewatch لوريال منذ عام 2000 بسبب اختبارات المنتجات على الحيوانات. ترحّب بإنهاء اختبار المكوّنات على الحيوانات لكنها تقول إن المنتجات قد تخضع لاختبارات من السلطات الصحية الصينية، وأكدت في يونيو 2026 استمرار المقاطعة."},
  pgWP:{en:"Named in the West Papuan groups' boycott call (since 2025) over palm oil from expropriated West Papuan land; Pantene and Herbal Essences are owned by Procter & Gamble.",
        ar:"مذكورة في دعوة مجموعات غرب بابوا للمقاطعة (منذ 2025) بسبب زيت النخيل المأخوذ من أراضٍ مصادَرة؛ وكلٌّ من بانتين وهيربال إسنسز مملوك لبروكتر آند غامبل."},
  scjEcover:{en:"Naturewatch Foundation has called since 2018 for a boycott of all SC Johnson brands, including Ecover and Method, saying the company still tests on animals when required by law.",
        ar:"تدعو مؤسسة Naturewatch منذ 2018 إلى مقاطعة جميع علامات SC Johnson، ومنها إيكوفر وميثود، قائلةً إن الشركة لا تزال تُجري اختبارات على الحيوانات حين يفرضها القانون."},
  scjBrand:{en:"Owned by SC Johnson; Naturewatch Foundation asks compassionate consumers to boycott all SC Johnson brands until the whole company is cruelty-free.",
        ar:"مملوكة لشركة SC Johnson؛ وتطلب مؤسسة Naturewatch من المستهلكين المتعاطفين مع الحيوان مقاطعة جميع علامات SC Johnson إلى أن تصبح الشركة كلها خالية من اختبارات الحيوان."},
  siemens:{en:"The BDS National Committee called for a boycott in October 2022, citing Siemens' contract on the EuroAsia Interconnector linking Israel's grid with the EU, which BDS says would help maintain and expand illegal settlements.",
        ar:"دعت اللجنة الوطنية للمقاطعة (BDS) إلى مقاطعتها في أكتوبر 2022 بسبب عقد سيمنز في مشروع EuroAsia Interconnector لربط شبكة كهرباء إسرائيل بالاتحاد الأوروبي، وتقول BDS إنه يسهم في بقاء المستوطنات غير القانونية وتوسّعها."}
};
const CO={
  coke:["The Coca-Cola Company","شركة كوكاكولا"],pg:["Procter & Gamble","بروكتر آند غامبل"],nestle:["Nestlé","نستله"],
  mondelez:["Mondelez International","موندليز إنترناشيونال"],unilever:["Unilever","يونيليفر"],scj:["SC Johnson","إس سي جونسون"]
};
/* أسباب إضافية للمنتجات الجديدة — مُدرجة بحسب الشركة الأم (انظر الملاحظة في آخر الصفحة) */
Object.assign(REASONS,{
  nestleCo:{en:"A Nestlé brand. Baby Milk Action has called for a boycott of Nestlé since 1977, accusing it of marketing infant formula in ways that contribute to infant death and suffering. Listed here by parent company.",
        ar:"علامة تابعة لنستله. تدعو منظمة Baby Milk Action إلى مقاطعة نستله منذ 1977، متهمةً إياها بتسويق حليب الأطفال الصناعي بأساليب تسهم في وفاة الرضع ومعاناتهم. مُدرجة هنا بحسب الشركة الأم."},
  pgBrand:{en:"A brand of Procter & Gamble. The Irish Times (Sept 2025) reports that P&G, which has offices in Tel Aviv, has brands on consumer boycott lists. Listed here by parent company; the article may not name this exact brand.",
        ar:"علامة تابعة لبروكتر آند غامبل. تذكر The Irish Times (سبتمبر 2025) أن للشركة، التي لها مكاتب في تل أبيب، علامات ترد في قوائم مقاطعة للمستهلكين. مُدرجة هنا بحسب الشركة الأم، وقد لا يذكر المقال هذه العلامة بالاسم."},
  unilBrand:{en:"A brand of Unilever. The Irish Times (Sept 2025) lists several Unilever brands (Pot Noodle, Hellmann's, Knorr, Magnum) on a consumer boycott list. Listed here by parent company; the article may not name this exact brand.",
        ar:"علامة تابعة ليونيليفر. تذكر The Irish Times (سبتمبر 2025) عدة علامات ليونيليفر (بوت نودل وهيلمانز وكنور وماغنوم) على قائمة مقاطعة للمستهلكين. مُدرجة هنا بحسب الشركة الأم، وقد لا يذكر المقال هذه العلامة بالاسم."},
  colgateBrand:{en:"A brand of Colgate-Palmolive. The Irish Times (Sept 2025) lists Colgate toothpaste among Israel-linked household goods on a consumer boycott list. Listed here by parent company; the article may not name this exact brand.",
        ar:"علامة تابعة لكولجيت-بالموليف. تذكر The Irish Times (سبتمبر 2025) معجون أسنان كولجيت ضمن السلع المنزلية المرتبطة بإسرائيل على قائمة مقاطعة للمستهلكين. مُدرجة هنا بحسب الشركة الأم، وقد لا يذكر المقال هذه العلامة بالاسم."},
  lorealBrand:{en:"A brand of L'Or\u00e9al. Naturewatch Foundation has boycotted L'Or\u00e9al since 2000 over animal testing and confirmed in June 2026 that the boycott continues. Listed here by parent company.",
        ar:"علامة تابعة للوريال. تقاطع مؤسسة Naturewatch لوريال منذ عام 2000 بسبب اختبارات المنتجات على الحيوانات، وأكدت في يونيو 2026 استمرار المقاطعة. مُدرجة هنا بحسب الشركة الأم."}
});
Object.assign(CO,{
  loreal:["L'Or\u00e9al S.A.","لوريال"],colgate:["Colgate-Palmolive","كولجيت-بالموليف"]
});
/* ===== صور المنتجات =====
   الطريقة الأسهل: استبدل الملف images/products/<id>.jpg بصورتك بنفس الاسم (يُقبل أيضًا png / webp / jpeg / svg بنفس الاسم — يجرّب الموقع الامتدادات بالترتيب).
   لاستخدام مسار مختلف لمنتج معيّن أضف سطرًا هنا (id ← المسار أو رابط https)، مثال:
   "coca-cola":"images/products/my-coke-photo.webp"
   إن فُقد الملف تظهر صورة بديلة بالحرف الأول بدل أيقونة مكسورة. */
const PRODUCT_PHOTOS={
};
const PHOTO_EXTS=["jpg","png","webp","jpeg","svg"];
/* PHOTO_MANIFEST (data/photos.js) يسرد المنتجات التي لها ملف صورة فعلي. من ليس فيها يظهر له مربع بديل بتصميم الموقع بلا أي طلب صورة مفقودة. */
/* سياسة الصور (بالأولوية):
   1) صورة المنتج الأصلية  PHOTO_EXTERNAL[id]            ← type: "product"
   2) شعار الشركة           COMPANY_LOGOS[اسم الشركة en]    ← يُعرض بوسم «شعار الشركة» ولا يُقدَّم كصورة منتج
   3) الصورة المحلية القديمة (صورة توضيحية) — تبقى احتياطًا إلى أن تتأكد الصور الخارجية. اجعل SHOW_LOCAL_SAMPLES=false لإخفائها
   4) مربع فارغ بتصميم الموقع بوسم «لا توجد صورة موثّقة بعد» (لا صورة خاطئة أبدًا)
   تُجرَّب الروابط في المتصفح نفسه: ما يتعطل رابطه ينتقل تلقائيًا للتالي. الوسم تحت الصورة يوضّح نوع الصورة المعروضة فعلًا. */
const SHOW_LOCAL_SAMPLES=false;
const extPhoto=p=>(typeof PHOTO_EXTERNAL!=="undefined"&&PHOTO_EXTERNAL[p.id])||null;
const extLogo=p=>(typeof COMPANY_LOGOS!=="undefined"&&COMPANY_LOGOS[p.co[0]])||null;
const isHttps=u=>/^https:\/\//.test(u||"");
/* نسخة محلية (على نفس الدومين) من الصورة الخارجية: images/external/<id>.<ext> — تُولَّد بـ tools/mirror-external-images.py وتُسجَّل في data/photos-mirror.js.
   تُجرَّب أولًا لأنها لا تتأثر بمنع الربط المباشر (hotlink) ولا بتغيّر الروابط الخارجية. */
const mirrorPhoto=p=>(typeof PHOTO_MIRROR!=="undefined"&&PHOTO_MIRROR[p.id])||null;
function photoItems(p){
  const c=[], e=extPhoto(p), l=extLogo(p), m=mirrorPhoto(p);
  if(m&&e) c.push({src:m,kind:e.type==="logo"?"logo":"product",meta:e});
  if(e&&isHttps(e.url)) c.push({src:e.url,kind:e.type==="logo"?"logo":"product",meta:e});
  if(l&&isHttps(l.url)) c.push({src:l.url,kind:"logo",meta:l});
  const o=PRODUCT_PHOTOS[p.id]||(typeof PHOTO_MANIFEST!=="undefined"&&PHOTO_MANIFEST[p.id]);
  if(o&&SHOW_LOCAL_SAMPLES) c.push({src:o,kind:"sample"});
  c.push({src:badge(p),kind:"none"});
  return c;
}
const photoSrc=(p,n=0)=>{const c=photoItems(p);return c[Math.min(n,c.length-1)].src};
const itemFor=(p,src)=>photoItems(p).find(x=>x.src===src||new URL(x.src,document.baseURI).href===src)||{kind:"none"};
/* وسم نوع الصورة + عرض الشعار بنسبه الأصلية */
function tagImage(img){
  const p=PRODUCTS.find(x=>x.id===img.dataset.id); if(!p) return;
  const it=itemFor(p,img.getAttribute("src")), T=P3T[lang];
  img.classList.toggle("is-logo",it.kind==="logo");
  const w=img.closest(".pimg-wrap"); if(!w) return;
  let t=w.querySelector(".ptype"); if(!t){t=document.createElement("span");t.className="ptype";w.appendChild(t)}
  t.textContent=T.kinds[it.kind]; t.dataset.kind=it.kind;
}
document.addEventListener("load",e=>{const i=e.target;if(i&&i.tagName==="IMG"&&i.classList.contains("pimg")) tagImage(i)},true);
/* ===== الأفاتار (الناشر / صاحب المنتج) =====
   الافتراضي: صورة رمزية دائرية بلا وجه (رأس وكتفان) — images/avatars/default.svg — لكل من لم يضع صورة.
   لوضع صورة خاصة بناشر: ضع الملف في images/avatars/ ثم أضف سطرًا (اسم الشركة بالإنجليزية كما في CO ← المسار)، مثال:
   "Nestlé":"images/avatars/nestle.jpg"   وستظهر بدل الأفاتار الافتراضي. */
const DEFAULT_AVATAR="images/avatars/default.svg";
const PUBLISHER_AVATARS={
};
const avatarSrc=p=>PUBLISHER_AVATARS[p.co[0]]||DEFAULT_AVATAR;

/* [id, القسم, [الاسم en, ar], [الشركة en, ar], مفتاح السبب, مفتاح المصدر, نوع التوثيق] */
const PRODUCTS=[
 ["coca-cola","food",["Coca-Cola","كوكاكولا"],CO.coke,"coke","ecCoke","bds"],
 ["fanta","food",["Fanta","فانتا"],CO.coke,"cokeBrand","ecPal","bds"],
 ["sprite","food",["Sprite","سبرايت"],CO.coke,"cokeBrand","ecPal","bds"],
 ["schweppes","food",["Schweppes","شويبس"],CO.coke,"cokeBrand","ecPal","bds"],
 ["costa-coffee","food",["Costa Coffee","كوستا كوفي"],CO.coke,"cokeBrand","ecPal","bds"],
 ["powerade","food",["Powerade","باوريد"],CO.coke,"cokeBrand","ecPal","bds"],
 ["smartwater","food",["Glaceau Smartwater","سمارت ووتر (غلاسو)"],CO.coke,"cokeBrand","ecPal","bds"],
 ["innocent","food",["Innocent","إنوسنت"],CO.coke,"cokeBrand","ecPal","bds"],
 ["sodastream","food",["SodaStream","صودا ستريم"],["SodaStream (owned by PepsiCo)","صودا ستريم (مملوكة لبيبسيكو)"],"sodastream","ecList","bds"],
 ["sabra-hummus","food",["Sabra Hummus","حمص صبرا"],["PepsiCo / Strauss Group (until Nov 2024)","بيبسيكو / مجموعة شتراوس (حتى نوفمبر 2024)"],"sabra","ecList","bds"],
 ["kitkat","food",["KitKat","كيت كات"],CO.nestle,"nestleWP","ecList","campaign"],
 ["aero","food",["Aero","آيرو"],CO.nestle,"nestleWP","ecList","campaign"],
 ["smarties","food",["Smarties","سمارتيز"],CO.nestle,"nestleWP","ecList","campaign"],
 ["nestle-formula","food",["Nestlé infant formula","حليب الأطفال الصناعي من نستله"],CO.nestle,"nestleFormula","ecList","campaign"],
 ["nestle-water","food",["Nestlé bottled water","مياه نستله المعبأة"],CO.nestle,"nestleWater","ecList","campaign"],
 ["oreo","food",["Oreo","أوريو"],CO.mondelez,"mondelez","ecList","campaign"],
 ["ritz","food",["Ritz","ريتز"],CO.mondelez,"mondelez","ecList","campaign"],
 ["starbucks","food",["Starbucks","ستاربكس"],["Starbucks Corporation","شركة ستاربكس"],"starbucks","ecList","campaign"],
 ["mcdonalds","food",["McDonald's","ماكدونالدز"],["McDonald's Corporation","شركة ماكدونالدز"],"mcd","ecList","bds"],
 ["burger-king","food",["Burger King","برجر كينج"],["Burger King Corporation","شركة برجر كينج"],"fast","ecList","bds"],
 ["papa-johns","food",["Papa John's","بابا جونز"],["Papa John's International","بابا جونز الدولية"],"fast","ecList","bds"],
 ["pizza-hut","food",["Pizza Hut","بيتزا هت"],["Pizza Hut LLC","بيتزا هت"],"fast","ecList","bds"],
 ["dominos","food",["Domino's Pizza","دومينوز بيتزا"],["Domino's Pizza Group","مجموعة دومينوز بيتزا"],"fast","ecList","bds"],
 ["kelloggs","food",["Kellogg's (North America)","كيلوغز (أمريكا الشمالية)"],["Kellogg's / Ferrero","كيلوغز / فيريرو"],"kelloggs","ecList","campaign"],
 ["dates-hadiklaim","food",["Hadiklaim dates","تمور هاديكليم"],["Hadiklaim","هاديكليم"],"dates","ecList","campaign"],
 ["dates-mehadrin","food",["Mehadrin dates","تمور مهادرين"],["Mehadrin","مهادرين"],"dates","ecList","campaign"],
 ["dates-carmel","food",["Carmel Agrexco dates","تمور كارمل أجريكسكو"],["Carmel Agrexco","كارمل أجريكسكو"],"dates","ecList","campaign"],
 ["carrefour","food",["Carrefour","كارفور"],["Carrefour","مجموعة كارفور"],"carrefour","ecPal","bds"],
 ["coconut-milk","food",["Canned coconut milk from Thailand","حليب جوز الهند المعلّب من تايلاند"],["Thai coconut milk producers (PETA call)","منتجو حليب جوز الهند في تايلاند (دعوة PETA)"],"coconut","ecList","campaign"],
 ["ben-jerrys","food",["Ben & Jerry's","بن آند جيريز"],CO.unilever,"benjerry","sabah","press"],
 ["israeli-produce","food",["Fruit, vegetables & wine labelled \u201cProduct of Israel\u201d","فواكه وخضروات ونبيذ مكتوب عليها «منتج إسرائيلي»"],["Israeli companies","شركات إسرائيلية"],"produce","ecList","bds"],
 ["pot-noodle","food",["Pot Noodle","بوت نودل"],CO.unilever,"unilever","irish","press"],
 ["hellmanns","food",["Hellmann's mayonnaise","مايونيز هيلمانز"],CO.unilever,"unilever","irish","press"],
 ["knorr","food",["Knorr stock cubes","مكعبات كنور"],CO.unilever,"unilever","irish","press"],
 ["magnum","food",["Magnum ice cream","آيس كريم ماغنوم"],CO.unilever,"unilever","irish","press"],

 ["ahava","care",["Ahava cosmetics","مستحضرات أهافا"],["Ahava","أهافا"],"ahava","ecPal","bds"],
 ["loreal","care",["L'Or\u00e9al","لوريال"],["L'Or\u00e9al S.A.","لوريال"],"loreal","ecList","campaign"],
 ["pantene","care",["Pantene","بانتين"],CO.pg,"pgWP","ecList","campaign"],
 ["herbal-essences","care",["Herbal Essences","هيربال إسنسز"],CO.pg,"pgWP","ecList","campaign"],
 ["pampers","care",["Pampers","بامبرز"],CO.pg,"pgIrish","irish","press"],
 ["gillette","care",["Gillette","جيليت"],CO.pg,"pgIrish","irish","press"],
 ["colgate","care",["Colgate toothpaste","معجون أسنان كولجيت"],["Colgate-Palmolive","كولجيت-بالموليف"],"colgate","irish","press"],

 ["ecover","clean",["Ecover","إيكوفر"],CO.scj,"scjEcover","ecEcover","campaign"],
 ["method","clean",["Method","ميثود"],CO.scj,"scjEcover","ecEcover","campaign"],
 ["mr-muscle","clean",["Mr Muscle","مستر مسل"],CO.scj,"scjBrand","ecList","campaign"],
 ["duck","clean",["Duck","داك"],CO.scj,"scjBrand","ecList","campaign"],
 ["pledge","clean",["Pledge","بليدج"],CO.scj,"scjBrand","ecList","campaign"],
 ["glade","clean",["Glade","جليد"],CO.scj,"scjBrand","ecScj","campaign"],
 ["shout","clean",["Shout","شاوت"],CO.scj,"scjBrand","ecScj","campaign"],
 ["windex","clean",["Windex","ويندكس"],CO.scj,"scjBrand","ecScj","campaign"],
 ["siemens","clean",["Siemens washing machines & dishwashers","غسالات وغسالات أطباق سيمنز"],["Siemens","سيمنز"],"siemens","ecList","bds"],

 /* ===== منتجات إضافية (50 في كل قسم) ===== */
 ["nescafe","food",["Nescaf\u00e9","نسكافيه"],CO.nestle,"nestleCo","ecList","campaign"],
 ["nespresso","food",["Nespresso","نسبريسو"],CO.nestle,"nestleCo","ecList","campaign"],
 ["maggi","food",["Maggi","ماجي"],CO.nestle,"nestleCo","ecList","campaign"],
 ["cerelac","food",["Cerelac","سيريلاك"],CO.nestle,"nestleCo","ecList","campaign"],
 ["nido","food",["Nido","نيدو"],CO.nestle,"nestleCo","ecList","campaign"],
 ["nesquik","food",["Nesquik","نيسكويك"],CO.nestle,"nestleCo","ecList","campaign"],
 ["milo","food",["Milo","ميلو"],CO.nestle,"nestleCo","ecList","campaign"],
 ["perrier","food",["Perrier","بيرييه"],CO.nestle,"nestleCo","ecList","campaign"],
 ["san-pellegrino","food",["San Pellegrino","سان بيليغرينو"],CO.nestle,"nestleCo","ecList","campaign"],
 ["quality-street","food",["Quality Street","كواليتي ستريت"],CO.nestle,"nestleCo","ecList","campaign"],
 ["dasani","food",["Dasani","داساني"],CO.coke,"cokeBrand","ecPal","bds"],
 ["minute-maid","food",["Minute Maid","مينيت مايد"],CO.coke,"cokeBrand","ecPal","bds"],
 ["fuze-tea","food",["Fuze Tea","فيوز تي"],CO.coke,"cokeBrand","ecPal","bds"],
 ["vitaminwater","food",["Vitaminwater","فيتامين ووتر"],CO.coke,"cokeBrand","ecPal","bds"],
 ["fresca","food",["Fresca","فريسكا"],CO.coke,"cokeBrand","ecPal","bds"],
 ["head-shoulders","care",["Head & Shoulders","هيد آند شولدرز"],CO.pg,"pgBrand","irish","press"],
 ["olay","care",["Olay","أولاي"],CO.pg,"pgBrand","irish","press"],
 ["oral-b","care",["Oral-B","أورال بي"],CO.pg,"pgBrand","irish","press"],
 ["old-spice","care",["Old Spice","أولد سبايس"],CO.pg,"pgBrand","irish","press"],
 ["secret","care",["Secret deodorant","مزيل عرق سيكريت"],CO.pg,"pgBrand","irish","press"],
 ["always","care",["Always","أولويز"],CO.pg,"pgBrand","irish","press"],
 ["tampax","care",["Tampax","تامباكس"],CO.pg,"pgBrand","irish","press"],
 ["venus","care",["Venus razors","شفرات فينوس"],CO.pg,"pgBrand","irish","press"],
 ["crest","care",["Crest toothpaste","معجون أسنان كريست"],CO.pg,"pgBrand","irish","press"],
 ["aussie","care",["Aussie","أوسي"],CO.pg,"pgBrand","irish","press"],
 ["sk-ii","care",["SK-II","إس كيه تو"],CO.pg,"pgBrand","irish","press"],
 ["dove","care",["Dove","دوف"],CO.unilever,"unilBrand","irish","press"],
 ["axe","care",["Axe","أكس"],CO.unilever,"unilBrand","irish","press"],
 ["vaseline","care",["Vaseline","فازلين"],CO.unilever,"unilBrand","irish","press"],
 ["lux","care",["Lux","لوكس"],CO.unilever,"unilBrand","irish","press"],
 ["rexona","care",["Rexona","ريكسونا"],CO.unilever,"unilBrand","irish","press"],
 ["simple","care",["Simple skincare","سيمبل للعناية بالبشرة"],CO.unilever,"unilBrand","irish","press"],
 ["ponds","care",["Pond's","بونديز"],CO.unilever,"unilBrand","irish","press"],
 ["tresemme","care",["TRESemm\u00e9","تريسيمي"],CO.unilever,"unilBrand","irish","press"],
 ["sunsilk","care",["Sunsilk","صانسيلك"],CO.unilever,"unilBrand","irish","press"],
 ["lifebuoy","care",["Lifebuoy","لايفبوي"],CO.unilever,"unilBrand","irish","press"],
 ["closeup","care",["Closeup toothpaste","معجون أسنان كلوز أب"],CO.unilever,"unilBrand","irish","press"],
 ["clear","care",["Clear shampoo","شامبو كلير"],CO.unilever,"unilBrand","irish","press"],
 ["degree","care",["Degree deodorant","مزيل عرق ديجري"],CO.unilever,"unilBrand","irish","press"],
 ["nexxus","care",["Nexxus","نيكساس"],CO.unilever,"unilBrand","irish","press"],
 ["garnier","care",["Garnier","غارنييه"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["maybelline","care",["Maybelline","ميبيلين"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["lancome","care",["Lanc\u00f4me","لانكوم"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["nyx","care",["NYX Professional Makeup","إن واي إكس"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["kiehls","care",["Kiehl's","كيلز"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["la-roche-posay","care",["La Roche-Posay","لاروش بوزيه"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["vichy","care",["Vichy","فيشي"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["cerave","care",["CeraVe","سيرافي"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["redken","care",["Redken","ريدكن"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["kerastase","care",["K\u00e9rastase","كيراستاس"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["urban-decay","care",["Urban Decay","أوربان ديكاي"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["matrix","care",["Matrix hair care","ماتريكس للعناية بالشعر"],CO.loreal,"lorealBrand","ecList","campaign"],
 ["palmolive","care",["Palmolive","بالموليف"],CO.colgate,"colgateBrand","irish","press"],
 ["protex","care",["Protex","بروتكس"],CO.colgate,"colgateBrand","irish","press"],
 ["elmex","care",["elmex","إلمكس"],CO.colgate,"colgateBrand","irish","press"],
 ["sanex","care",["Sanex","سانكس"],CO.colgate,"colgateBrand","irish","press"],
 ["speed-stick","care",["Speed Stick","سبيد ستيك"],CO.colgate,"colgateBrand","irish","press"],
 ["softsoap","care",["Softsoap","سوفت سوب"],CO.colgate,"colgateBrand","irish","press"],
 ["scrubbing-bubbles","clean",["Scrubbing Bubbles","سكرابينغ بابلز"],CO.scj,"scjBrand","ecList","campaign"],
 ["drano","clean",["Drano","درانو"],CO.scj,"scjBrand","ecList","campaign"],
 ["fantastik","clean",["Fantastik","فانتاستيك"],CO.scj,"scjBrand","ecList","campaign"],
 ["oust","clean",["Oust","أوست"],CO.scj,"scjBrand","ecList","campaign"],
 ["mr-sheen","clean",["Mr Sheen","مستر شين"],CO.scj,"scjBrand","ecList","campaign"],
 ["ariel","clean",["Ariel","أريال"],CO.pg,"pgBrand","irish","press"],
 ["tide","clean",["Tide","تايد"],CO.pg,"pgBrand","irish","press"],
 ["fairy","clean",["Fairy","فيري"],CO.pg,"pgBrand","irish","press"],
 ["downy","clean",["Downy","داوني"],CO.pg,"pgBrand","irish","press"],
 ["febreze","clean",["Febreze","فيبريز"],CO.pg,"pgBrand","irish","press"],
 ["mr-clean","clean",["Mr. Clean","مستر كلين"],CO.pg,"pgBrand","irish","press"],
 ["dawn","clean",["Dawn","داون"],CO.pg,"pgBrand","irish","press"],
 ["cascade","clean",["Cascade","كاسكيد"],CO.pg,"pgBrand","irish","press"],
 ["swiffer","clean",["Swiffer","سويفر"],CO.pg,"pgBrand","irish","press"],
 ["bounty","clean",["Bounty","باونتي"],CO.pg,"pgBrand","irish","press"],
 ["gain","clean",["Gain","غاين"],CO.pg,"pgBrand","irish","press"],
 ["lenor","clean",["Lenor","لينور"],CO.pg,"pgBrand","irish","press"],
 ["flash","clean",["Flash","فلاش"],CO.pg,"pgBrand","irish","press"],
 ["dreft","clean",["Dreft","دريفت"],CO.pg,"pgBrand","irish","press"],
 ["cheer","clean",["Cheer","تشير"],CO.pg,"pgBrand","irish","press"],
 ["joy","clean",["Joy","جوي"],CO.pg,"pgBrand","irish","press"],
 ["ivory","clean",["Ivory","آيفوري"],CO.pg,"pgBrand","irish","press"],
 ["bold","clean",["Bold","بولد"],CO.pg,"pgBrand","irish","press"],
 ["ace","clean",["Ace","إيس"],CO.pg,"pgBrand","irish","press"],
 ["bounce","clean",["Bounce","بونس"],CO.pg,"pgBrand","irish","press"],
 ["era","clean",["Era","إيرا"],CO.pg,"pgBrand","irish","press"],
 ["domestos","clean",["Domestos","دومستوس"],CO.unilever,"unilBrand","irish","press"],
 ["cif","clean",["Cif","سيف"],CO.unilever,"unilBrand","irish","press"],
 ["comfort","clean",["Comfort","كومفورت"],CO.unilever,"unilBrand","irish","press"],
 ["omo","clean",["Omo","أومو"],CO.unilever,"unilBrand","irish","press"],
 ["surf","clean",["Surf","سيرف"],CO.unilever,"unilBrand","irish","press"],
 ["sunlight","clean",["Sunlight","صنلايت"],CO.unilever,"unilBrand","irish","press"],
 ["vim","clean",["Vim","فيم"],CO.unilever,"unilBrand","irish","press"],
 ["seventh-generation","clean",["Seventh Generation","سفنث جنريشن"],CO.unilever,"unilBrand","irish","press"],
 ["skip","clean",["Skip","سكيب"],CO.unilever,"unilBrand","irish","press"],
 ["radion","clean",["Radion","راديون"],CO.unilever,"unilBrand","irish","press"],
 ["love-home-and-planet","clean",["Love Home & Planet","لاف هوم آند بلانيت"],CO.unilever,"unilBrand","irish","press"],
 ["ajax","clean",["Ajax","أجاكس"],CO.colgate,"colgateBrand","irish","press"],
 ["fabuloso","clean",["Fabuloso","فابولوسو"],CO.colgate,"colgateBrand","irish","press"],
 ["soupline","clean",["Soupline","سوبلين"],CO.colgate,"colgateBrand","irish","press"],
 ["murphy-oil-soap","clean",["Murphy Oil Soap","صابون مورفي الزيتي"],CO.colgate,"colgateBrand","irish","press"]
].map(([id,cat,n,co,r,src,basis])=>({id,cat,n,co,r:REASONS[r],src:SRC[src],basis}));

/* ===== دمج قاعدة البيانات الجديدة (data/entries.js + data/sources.js) =====
   - تصحيح نوع الأساس للعناصر القديمة بحسب دليل BDS الرسمي (راجعه الموقع بتاريخ 2026-11-13).
   - نقل بعض العناصر القديمة إلى الأقسام الجديدة (بلا تكرار ولا حذف).
   - إضافة العناصر الجديدة. أي معرّف مكرر يُتجاهل مع تحذير في الـ console. */
const BASIS_FIX={
  "coca-cola":"bdsOrganic","mcdonalds":"bdsOrganic","burger-king":"bdsOrganic","papa-johns":"bdsOrganic","pizza-hut":"bdsOrganic","dominos":"bdsOrganic",
  "fanta":"campaign","sprite":"campaign","schweppes":"campaign","costa-coffee":"campaign","powerade":"campaign","smartwater":"campaign","innocent":"campaign",
  "dasani":"campaign","minute-maid":"campaign","fuze-tea":"campaign","vitaminwater":"campaign","fresca":"campaign",
  "ahava":"campaign","sabra-hummus":"campaign"
};
const VERIFIED_NOW=["coca-cola","mcdonalds","burger-king","papa-johns","pizza-hut","dominos","carrefour","siemens","sodastream","israeli-produce"];
const CAT_MOVE={
  "mcdonalds":"restaurants","burger-king":"restaurants","pizza-hut":"restaurants","papa-johns":"restaurants","dominos":"restaurants","starbucks":"restaurants","costa-coffee":"restaurants",
  "kitkat":"sweets","aero":"sweets","smarties":"sweets","quality-street":"sweets","oreo":"sweets","magnum":"sweets","ben-jerrys":"sweets",
  "nido":"dairy","siemens":"electronics","carrefour":"ecommerce"
};
PRODUCTS.forEach(p=>{
  if(BASIS_FIX[p.id]) p.basis=BASIS_FIX[p.id];
  if(CAT_MOVE[p.id]) p.cat=CAT_MOVE[p.id];
  if(VERIFIED_NOW.includes(p.id)) p.reviewed="2026-11-13";
});
(function(){
  const seen=new Set(PRODUCTS.map(p=>p.id));
  (typeof NEW_ENTRIES!=="undefined"?NEW_ENTRIES:[]).forEach(e=>{
    if(seen.has(e.id)){console.warn("duplicate id ignored:",e.id);return}
    if(!SRC_NEW[e.src]||!COMPANIES[e.co]||!CATS.includes(e.cat)){console.warn("bad entry ignored:",e.id);return}
    seen.add(e.id);
    PRODUCTS.push({id:e.id,cat:e.cat,n:e.n,co:COMPANIES[e.co],r:e.r,src:SRC_NEW[e.src],basis:e.basis,reviewed:e.reviewed});
  });
})();
/* فحص سلامة: العدد المعتمد 190 عنصرًا (150 في PRODUCTS + 40 في data/entries.js).
   إن نقص العدد (مثلًا لم يُحمَّل data/entries.js على الاستضافة أو قدّم المتصفح/الـCDN نسخة قديمة) يُسجَّل خطأ صريح في الـconsole ولا يُخفى. */
const EXPECTED_ITEMS=190;
if(PRODUCTS.length!==EXPECTED_ITEMS){
  console.error("[integrity] عدد العناصر "+PRODUCTS.length+" بدل "+EXPECTED_ITEMS+" — تحقق من رفع data/entries.js وتفريغ الكاش (CDN/المتصفح).");
}
if(typeof NEW_ENTRIES==="undefined") console.error("[integrity] data/entries.js لم يُحمَّل: العناصر الأربعون الجديدة غير موجودة.");
document.documentElement.dataset.items=PRODUCTS.length;

/* بحث متسامح: يتجاهل التشكيل والهمزات والتاء المربوطة وعلامات الترقيم والحروف اللاتينية المشكّلة */
const norm=t=>(t||"").toLowerCase().normalize("NFKD").replace(/[\u064B-\u065F\u0670\u0640]/g,"")
  .replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه").replace(/[^\p{L}\p{N}\s]/gu,"").replace(/\s+/g," ").trim();
PRODUCTS.forEach(p=>p.idx=norm([p.id,p.n[0],p.n[1],p.co[0],p.co[1],p.r.en,p.r.ar,P3T.en.cats[p.cat],P3T.ar.cats[p.cat]].join(" ")));

/* ========= الأدوات ========= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let lang=(()=>{try{const v=localStorage.getItem("lang");return v==="en"||v==="ar"?v:"ar"}catch(_){return"ar"}})(), current=null, p3=null, pd=null, p3Y=0, backing=false;
const home=$("#home"), gallery=$("#gallery"), gHero=$("#galleryHero"), page3=$("#page3"), p3Hero=$("#p3Hero"), page4=$("#page4");

/* ========= اللغة ========= */
function applyLang(l){
  lang=l;
  document.documentElement.lang=l; document.documentElement.dir=l==="ar"?"rtl":"ltr";
  $$("[data-i18n]").forEach(e=>e.textContent=UI[l][e.dataset.i18n]);
  $$("[data-i18n-aria]").forEach(e=>e.setAttribute("aria-label",UI[l][e.dataset.i18nAria]));
  $$("[data-i18n-title]").forEach(e=>e.title=UI[l][e.dataset.i18nTitle]);
  $("#frames").innerHTML=Object.entries(COLLECTIONS).map(([id,c])=>
    `<button class="frame" data-id="${id}"><div><h4>${c.title[l]}</h4><p>${c.desc[l]}</p></div><img class="thumb" src="${c.thumb}" alt="${c.title[l]}"></button>`).join("");
  $$(".frame").forEach(f=>f.onclick=()=>openCollection(f.dataset.id));
  $$("#langMenu button").forEach(b=>b.classList.toggle("active",b.dataset.lang===l));
  if(current) renderGallery(current);
  if(p3) renderPage3();
  if(pd!==null) renderProduct();
}
const langBtn=$("#langBtn"), menu=$("#langMenu");
langBtn.onclick=e=>{e.stopPropagation();menu.hidden=!menu.hidden};
document.onclick=()=>menu.hidden=true;
$$("#langMenu button").forEach(b=>b.onclick=()=>{try{localStorage.setItem("lang",b.dataset.lang)}catch(_){}applyLang(b.dataset.lang);menu.hidden=true});

/* مسار صورة البطاقة: من قائمة images في المجموعة، وإلا النمط الاحتياطي gallery{id}-{n}.svg */
const cardImg=(id,n)=>(COLLECTIONS[id].images||[])[n]||`images/gallery${id}-${n+1}.svg`;
$("#homeCircle").src=IMAGES.homeCircle;

/* ========= النسخ (Copy to Clipboard) — يعمل تلقائيًا لأي بطاقة حالية أو مستقبلية ========= */
const copyBtn=key=>`<button type="button" class="copy" aria-label="${UI[lang][key]}" title="${UI[lang][key]}"><svg><use href="#i-copy"/></svg></button>`;
function showToast(msg){const t=$("#toast");t.textContent=msg;t.hidden=false;clearTimeout(t._h);t._h=setTimeout(()=>t.hidden=true,2000)}
/* زر JOIN: يفتح قناة التليجرام في تبويب جديد (النص يبقى JOIN في كل اللغات) */
const joinLink=$("#joinLink");
if(TELEGRAM_URL) joinLink.href=TELEGRAM_URL;
joinLink.addEventListener("click",e=>{ if(!TELEGRAM_URL){ e.preventDefault(); showToast(UI[lang].joinMissing); } });
async function copyText(text){
  try{await navigator.clipboard.writeText(text);return true}
  catch(e){ // بديل للمتصفحات/السياقات التي تمنع Clipboard API
    const ta=document.createElement("textarea");ta.value=text;ta.style.cssText="position:fixed;opacity:0";
    document.body.append(ta);ta.select();let ok=false;try{ok=document.execCommand("copy")}catch(_){}ta.remove();return ok}
}
$("#grid").addEventListener("click",async e=>{
  const b=e.target.closest(".copy"); if(!b) return;
  e.stopPropagation();
  if(await copyText(b.previousElementSibling.textContent.trim())){
    showToast(UI[lang].copied); b.classList.add("done"); setTimeout(()=>b.classList.remove("done"),900);
  }
});

/* ========= الصفحة الثانية ========= */
function renderGallery(id){
  const c=COLLECTIONS[id]; gHero.src=c.hero; gHero.alt=c.title[lang]; gHero.classList.toggle("is-square",!!c.square);
  $("#gTitle").textContent=c.title[lang]; $("#gText").textContent=c.text[lang];
  const i=lang==="ar"?1:0;
  $("#grid").innerHTML=c.cards.map((k,n)=>
    `<article class="card"><img src="${cardImg(id,n)}" alt="${k[i]}" loading="lazy"><h5><span>${k[i]}</span>${copyBtn("copyName")}</h5><p><span>${k[i+2]}</span>${copyBtn("copyDesc")}</p></article>`).join("");
}

/* ========= حركة انتقال الصورة (Shared Element) ========= */
function morph(from,to,swap){
  if(document.startViewTransition){               // المتصفحات الحديثة
    from.style.viewTransitionName="hero";
    document.startViewTransition(()=>{
      from.style.viewTransitionName=""; swap(); to.style.viewTransitionName="hero";
    }).finished.finally(()=>to.style.viewTransitionName="");
    return;
  }
  const r1=from.getBoundingClientRect();           // بديل: FLIP عبر Web Animations
  const clone=document.createElement("img");
  clone.src=from.currentSrc||from.src;
  Object.assign(clone.style,{position:"fixed",left:r1.left+"px",top:r1.top+"px",width:r1.width+"px",height:r1.height+"px",objectFit:"cover",zIndex:99,borderRadius:"20px",border:"3px solid #fff",pointerEvents:"none"});
  document.body.append(clone);
  swap();
  const r2=to.getBoundingClientRect(); to.style.visibility="hidden";
  clone.animate([{left:r1.left+"px",top:r1.top+"px",width:r1.width+"px",height:r1.height+"px"},
                 {left:r2.left+"px",top:r2.top+"px",width:r2.width+"px",height:r2.height+"px"}],
                {duration:650,easing:"cubic-bezier(.65,0,.35,1)",fill:"forwards"})
       .finished.then(()=>{clone.remove();to.style.visibility=""});
}
/* ========= زر الرجوع في الهاتف (History API) =========
   كل مستوى يُفتح يضيف سجلًا واحدًا: 0 = الرئيسية، 1 = مجموعة/دليل، 2 = تفاصيل منتج.
   زر الرجوع الداخلي يستدعي history.back() فيتصرف كزر الهاتف تمامًا. */
const pushNav=s=>{try{history.pushState(s,"")}catch(_){}};
const atLv=n=>!!(history.state&&history.state.lv===n);
function goBack(n,direct){
  if(atLv(n)){ if(!backing){backing=true;history.back()} }   // backing يمنع ضغطتين متتاليتين من الخروج من الموقع
  else direct();
}
try{history.replaceState({lv:0},"")}catch(_){}               // يثبّت نقطة البداية ويمنع سجلًا ميتًا بعد إعادة التحميل
function openCollection(id,noPush){
  if(current!==null||p3!==null) return;
  if(COLLECTIONS[id].page==="page3") return openPage3(id,noPush);
  current=id; renderGallery(id);
  const thumb=$(`.frame[data-id="${id}"] .thumb`);
  morph(thumb,gHero,()=>{home.hidden=true;gallery.hidden=false;scrollTo(0,0)});
  if(!noPush) pushNav({lv:1,id});
}
function closeGallery(){
  if(current===null) return;
  const thumb=$(`.frame[data-id="${current}"] .thumb`);
  morph(gHero,thumb,()=>{gallery.hidden=true;home.hidden=false;thumb.scrollIntoView({block:"center"});current=null});
}
$("#backBtn").onclick=()=>goBack(1,closeGallery);
/* ========= الصفحة الثالثة: دليل منتجات المقاطعة ========= */
const esc=t=>String(t).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const P3={cat:"all",q:"",menu:false};
/* صورة بديلة (حرف أول) تظهر تلقائيًا إن لم يوجد ملف المنتج في images/products */
function badge(p){
  let h=0; for(const ch of p.id) h=(h*31+ch.charCodeAt(0))%360;
  const t=(p.n[0].match(/[A-Za-z0-9]/)||["?"])[0].toUpperCase();
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='hsl(${h},45%,18%)'/><text x='50' y='67' font-size='56' font-family='Arial,sans-serif' font-weight='700' text-anchor='middle' fill='#fff'>${esc(t)}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
const productCard=(p,i,T)=>`<article class="pcard" data-id="${p.id}" tabindex="0" aria-label="${esc(p.n[i])} — ${T.open}">
  <div class="pimg-wrap"><img class="pimg" src="${esc(photoSrc(p))}" data-id="${p.id}" alt="${esc(p.n[i])}" loading="lazy" decoding="async" referrerpolicy="no-referrer"></div>
  <div class="pbody">
    <h5 class="pname">${esc(p.n[i])}</h5>
    <div class="ppub"><img class="avatar" src="${esc(avatarSrc(p))}" alt="" loading="lazy"><span class="pco">${esc(p.co[i])}</span></div>
    <span class="pbadge">${T.basis[p.basis]}</span>
    ${p.reviewed?`<small class="prev">${T.reviewed}: ${p.reviewed}</small>`:""}
    <p class="preason">${esc(p.r[lang])}</p>
    <a class="psrc" href="${p.src.url}" target="_blank" rel="noopener noreferrer">${T.source}: ${esc(p.src[lang])} ↗</a>
  </div>
</article>`;
function renderPage3(){
  const c=COLLECTIONS[p3], T=P3T[lang], i=lang==="ar"?1:0;
  p3Hero.src=c.hero; p3Hero.alt=c.imageTitle[lang]; p3Hero.classList.toggle("is-square",!!c.square);
  $("#p3Title").textContent=c.imageTitle[lang]; $("#p3Text").textContent=c.text[lang];
  $("#p3Search").placeholder=T.search;
  const tokens=norm(P3.q).split(" ").filter(Boolean);
  const hit=p=>tokens.every(t=>p.idx.includes(t));
  const by={}; CATS.forEach(k=>by[k]=PRODUCTS.filter(p=>p.cat===k&&hit(p)));
  const total=CATS.reduce((a,k)=>a+by[k].length,0);
  /* «الكل» كما هو + زر «منتجات وشركات المقاطعة» يفتح قائمة منسدلة بكل الأقسام */
  const inCat=P3.cat!=="all";
  $("#p3Filters").innerHTML=
    `<button type="button" class="chip${P3.cat==="all"?" active":""}" data-cat="all" aria-pressed="${P3.cat==="all"}">${T.all}<small>${total}</small></button>`+
    `<button type="button" id="p3Menu" class="chip fdd-toggle${inCat?" active":""}" aria-haspopup="true" aria-expanded="${P3.menu}" aria-controls="p3MenuList">${T.menu}<span class="fdd-caret" aria-hidden="true">${P3.menu?"▴":"▾"}</span></button>`+
    `<div id="p3MenuList" class="fdd-menu" role="menu" aria-label="${esc(T.menu)}"${P3.menu?"":" hidden"}>`+
      CATS.map(k=>`<button type="button" role="menuitemradio" class="fdd-item${P3.cat===k?" active":""}" data-cat="${k}" aria-checked="${P3.cat===k}"><span>${T.cats[k]}</span><small>${by[k].length}</small></button>`).join("")+
    `</div>`;
  const shown=CATS.filter(k=>(P3.cat==="all"||P3.cat===k)&&by[k].length);
  $("#p3Frames").innerHTML=shown.map(k=>
    `<section class="bframe" data-cat="${k}"><div class="bframe-head"><h3>${T.cats[k]}</h3><span>${T.count(by[k].length)}</span></div><div class="pgrid">${by[k].map(p=>productCard(p,i,T)).join("")}</div></section>`).join("");
  const n=shown.reduce((a,k)=>a+by[k].length,0);
  $("#p3Count").textContent=T.count(n);
  $("#p3Empty").hidden=n>0;
}
/* إن تعذّر تحميل صورة منتج: جرّب الامتداد التالي ثم الصورة البديلة (حرف أول) بدل أيقونة الصورة المكسورة؛ والأفاتار يرجع للافتراضي */
document.addEventListener("error",e=>{
  const img=e.target; if(!img||img.tagName!=="IMG"||(img.src||"").startsWith("data:")) return;
  if(img.classList.contains("pimg")||img.classList.contains("pd-img")){
    const p=PRODUCTS.find(x=>x.id===img.dataset.id); if(!p) return;
    /* سجّل الفشل علنًا (لا نخفيه): window.IMAGE_FAILURES وconsole.warn */
    (window.IMAGE_FAILURES=window.IMAGE_FAILURES||[]).push({id:p.id,url:img.getAttribute("src")});
    console.warn("[image-failed]",p.id,img.getAttribute("src"));
    const n=(+img.dataset.n||0)+1; img.dataset.n=n; img.src=photoSrc(p,n);
  }else if(img.classList.contains("avatar")&&!img.dataset.fb){
    img.dataset.fb="1"; img.src=DEFAULT_AVATAR;
  }
},true);
/* فتح صفحة تفاصيل المنتج عند الضغط على البطاقة (الرابط داخل البطاقة يفتح المصدر فقط) */
$("#p3Frames").addEventListener("click",e=>{
  if(e.target.closest("a")) return;
  const c=e.target.closest(".pcard"); if(c) openProduct(c.dataset.id);
});
$("#p3Frames").addEventListener("keydown",e=>{
  if((e.key!=="Enter"&&e.key!==" ")||e.target.closest("a")) return;
  const c=e.target.closest(".pcard"); if(c){e.preventDefault();openProduct(c.dataset.id)}
});
$("#p3Search").addEventListener("input",e=>{P3.q=e.target.value;renderPage3()});
const closeMenu=(focus)=>{if(!P3.menu)return;P3.menu=false;renderPage3();if(focus)$("#p3Menu").focus()};
$("#p3Filters").addEventListener("click",e=>{
  const t=e.target.closest(".fdd-toggle");
  if(t){P3.menu=!P3.menu;renderPage3();$("#p3Menu").focus();return}
  const b=e.target.closest("[data-cat]"); if(!b) return;
  P3.cat=b.dataset.cat; P3.menu=false; renderPage3(); $("#p3Menu").focus();
});
/* إغلاق القائمة بالضغط خارجها أو بزر Esc، وتنقّل بالأسهم داخلها */
document.addEventListener("click",e=>{if(P3.menu&&!e.composedPath().includes($("#p3Filters")))closeMenu(false)});
document.addEventListener("keydown",e=>{
  if(!P3.menu) return;
  if(e.key==="Escape"){e.preventDefault();closeMenu(true);return}
  if(e.key!=="ArrowDown"&&e.key!=="ArrowUp") return;
  const items=[...document.querySelectorAll("#p3MenuList .fdd-item")]; if(!items.length) return;
  e.preventDefault();
  const i=items.indexOf(document.activeElement);
  items[(i+(e.key==="ArrowDown"?1:-1)+items.length)%items.length].focus();
});
function openPage3(id,noPush){
  p3=id; P3.q=""; P3.cat="all"; P3.menu=false; $("#p3Search").value=""; renderPage3();
  const thumb=$(`.frame[data-id="${id}"] .thumb`);
  morph(thumb,p3Hero,()=>{home.hidden=true;page3.hidden=false;scrollTo(0,0)});
  if(!noPush) pushNav({lv:1,id});
}
function closePage3(){
  if(p3===null) return;
  const thumb=$(`.frame[data-id="${p3}"] .thumb`);
  morph(p3Hero,thumb,()=>{page3.hidden=true;home.hidden=false;thumb.scrollIntoView({block:"center"});p3=null});
}
$("#p3Back").onclick=()=>goBack(1,closePage3);

/* ========= صفحة تفاصيل المنتج ========= */
function renderProduct(){
  const p=PRODUCTS.find(x=>x.id===pd); if(!p) return;
  const T=P3T[lang], i=lang==="ar"?1:0, im=$("#p4Img");
  if(im.dataset.id!==p.id){im.dataset.id=p.id;im.dataset.n=0;im.src=photoSrc(p)}
  im.alt=p.n[i];
  $("#p4Title").textContent=p.n[i];
  const av=$("#p4Avatar"); av.dataset.fb=""; av.src=avatarSrc(p);
  $("#p4PubLabel").textContent=T.pub; $("#p4Co").textContent=p.co[i];
  $("#p4Badge").textContent=T.basis[p.basis]; $("#p4Cat").textContent=T.cats[p.cat];
  $("#p4DescLabel").textContent=T.desc; $("#p4Desc").textContent=p.r[lang];
  $("#p4Rev").textContent=p.reviewed?T.reviewed+": "+p.reviewed:"";
  const cr=$("#p4Credit"); cr.hidden=true;
  im.onload=()=>{
    const it=itemFor(p,im.getAttribute("src")), K=P3T[lang].kinds, ar=lang==="ar";
    im.classList.toggle("is-logo",it.kind==="logo");
    let h=K[it.kind];
    if(it.meta){
      h+=" — "+(ar?"المصدر: ":"Source: ")+'<a href="'+esc(it.meta.page||it.src)+'" target="_blank" rel="noopener noreferrer">'+esc(it.meta.source)+" ↗</a>";
      if(it.meta.license) h+=" — "+(ar?"الحقوق: ":"Rights: ")+esc(it.meta.license);
    }
    cr.innerHTML=h; cr.hidden=false;
  };
  if(im.complete&&im.naturalWidth) im.onload();
  const a=$("#p4Src"); a.href=p.src.url; a.textContent=T.source+": "+p.src[lang]+" ↗";
}
function openProduct(id,noPush){
  pd=id; p3Y=window.scrollY; renderProduct();
  page3.hidden=true; page4.hidden=false; scrollTo(0,0);
  if(!noPush) pushNav({lv:2,id:p3,pd:id});
}
function closeProduct(){
  if(pd===null) return;
  pd=null; page4.hidden=true; page3.hidden=false; scrollTo(0,p3Y);
}
$("#p4Back").onclick=()=>goBack(2,closeProduct);
/* زر رجوع الهاتف/المتصفح (والأمام): يطابق الواجهة مع مستوى السجل دون إضافة سجلات جديدة */
addEventListener("popstate",e=>{
  backing=false;
  const s=e.state||{}, lv=s.lv||0, was=current!==null||p3!==null;
  if(pd!==null&&lv<2) closeProduct();
  if(lv===0){ closeGallery(); closePage3(); }
  else if(!was){
    if(COLLECTIONS[s.id]){ openCollection(s.id,true); if(lv===2) try{history.replaceState({lv:1,id:s.id},"")}catch(_){} }
  }
  else if(lv===2&&pd===null&&p3!==null&&PRODUCTS.some(x=>x.id===s.pd)) openProduct(s.pd,true);
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&pd!==null)$("#p4Back").click()});
applyLang(lang);
