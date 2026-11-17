/* ===== قاعدة بيانات الشركات والمنتجات الجديدة =====
   COMPANIES: معرّف الشركة ← [اسم en, اسم ar]
   NEW_ENTRIES: كل عنصر = منتج/علامة واحدة. المعرّف (id) ثابت وفريد، وهو اسم ملف الصورة المستقبلي:
       images/products/<id>.webp   ثم يُسجَّل تلقائيًا بتشغيل tools/build-photo-manifest.py
   صيغة العنصر: E(id, القسم, معرّف_الشركة, [اسم en, ar], نوع_الأساس, [سبب en, ar], مفتاح_المصدر, تاريخ_المراجعة)
   أنواع الأساس (basis):
     bds         = هدف مقاطعة استهلاكي ذو أولوية في دليل BDS الرسمي
     bdsOrganic  = مقاطعة شعبية تدعمها BDS (لم تبدأها BDS)
     bdsPressure = هدف ضغط لدى BDS (مقاطعة عند توفر بديل + ضغط مؤسسي)
     campaign    = دعوة من حملة/منظمة أخرى (ليست قائمة BDS الرسمية)
     press       = ورد في تقرير صحفي
   لا تضف عنصرًا بلا مصدر في SRC_NEW يثبت المعلومة. */
const COMPANIES = {
  chevron:["Chevron Corporation","شيفرون"], intel:["Intel","إنتل"], dell:["Dell Technologies","ديل"],
  hpinc:["HP Inc.","إتش بي"], hpe:["Hewlett Packard Enterprise","هيوليت باكارد إنتربرايز"],
  microsoft:["Microsoft","مايكروسوفت"], amazon:["Amazon","أمازون"], google:["Google (Alphabet)","غوغل (ألفابت)"],
  wix:["Wix.com","ويكس"], disney:["The Walt Disney Company","شركة ديزني"], cisco:["Cisco Systems","سيسكو"],
  motorola:["Motorola Solutions","موتورولا سوليوشنز"], ibm:["IBM","آي بي إم"], meta:["Meta Platforms","ميتا"],
  oracle:["Oracle","أوراكل"], palantir:["Palantir Technologies","بالانتير"],
  airbnb:["Airbnb","إير بي إن بي"], booking:["Booking Holdings","بوكينغ هولدينغز"], expedia:["Expedia Group","إكسبيديا"],
  axa:["AXA","أكسا"], barclays:["Barclays","باركليز"], remax:["RE/MAX","ريماكس"],
  maersk:["A.P. Moller – Maersk","ميرسك"], zim:["ZIM Integrated Shipping Services","زيم"], msc:["Mediterranean Shipping Company (MSC)","شركة MSC للشحن"],
  uber:["Uber Technologies","أوبر"], reebok:["Reebok","ريبوك"], inditex:["Inditex","إنديتكس"], adidas:["adidas AG","أديداس"],
  tnuva:["Tnuva","تنوفا"], strauss:["Strauss Group","مجموعة شتراوس"], osem:["Osem","أوسم"],
  prigat:["Prigat","بريغات"], jafora:["Jafora-Tabori","يافورا-تابوري"], sabra:["Sabra Dipping Company","شركة سابرا"]
};
const R_DATE = "2026-11-13";
/* E يقبل الآن لغة واحدة فقط: اترك الجانب الآخر "" أو مرّر نصًا مفردًا — تُترجَم اللغة الناقصة تلقائيًا (translate.js) */
const __pair = x => Array.isArray(x) ? [x[0]==null?"":x[0], x[1]==null?"":x[1]]
  : (typeof x==="string" ? (((x.match(/[\u0600-\u06FF]/g)||[]).length>(x.match(/[A-Za-z]/g)||[]).length)?["",x]:[x,""]) : ["",""]);
const E = (id,cat,co,n,basis,r,src,reviewed=R_DATE)=>{const rr=__pair(r);return {id,cat,co,n:__pair(n),basis,r:{en:rr[0],ar:rr[1]},src,reviewed}};
const NEW_ENTRIES = [
/* ---------- الطاقة والوقود ---------- */
E("chevron","energy","chevron",["Chevron","شيفرون"],"bds",
 ["Listed by the BDS National Committee as a consumer boycott priority. BDS says Chevron is the main corporation extracting gas claimed by Israel in the East Mediterranean, and that it runs thousands of stations worldwide under the Chevron, Caltex and Texaco brands.",
  "تدرجها اللجنة الوطنية للمقاطعة (BDS) ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية. تقول BDS إن شيفرون هي الشركة الرئيسية التي تستخرج الغاز الذي تدّعي إسرائيل ملكيته شرق المتوسط، وإن لها آلاف محطات الوقود حول العالم بعلامات شيفرون وكالتكس وتكساكو."],"bdsGuide"),
E("caltex","energy","chevron",["Caltex","كالتكس"],"bds",
 ["A Chevron fuel brand. BDS's guide names Chevron (including the Caltex and Texaco brands) as a consumer boycott priority target.",
  "علامة وقود تابعة لشيفرون. يذكر دليل BDS شيفرون (بما فيها علامتا كالتكس وتكساكو) هدفًا ذا أولوية للمقاطعة الاستهلاكية."],"bdsGuide"),
E("texaco","energy","chevron",["Texaco","تكساكو"],"bds",
 ["A Chevron fuel brand. BDS's guide names Chevron (including the Caltex and Texaco brands) as a consumer boycott priority target.",
  "علامة وقود تابعة لشيفرون. يذكر دليل BDS شيفرون (بما فيها علامتا كالتكس وتكساكو) هدفًا ذا أولوية للمقاطعة الاستهلاكية."],"bdsGuide"),
/* ---------- الإلكترونيات ---------- */
E("intel","electronics","intel",["Intel (processors & chips)","إنتل (المعالجات والرقائق)"],"bds",
 ["Listed by BDS as a consumer boycott priority. BDS describes Intel as the largest international investor in Israel for decades, with a plant at Kiryat Gat on the land of the depopulated village of Iraq al-Manshiya. BDS says Intel dropped a planned $25 billion Israeli investment in June 2024 after pressure, but the campaign continues.",
  "تدرجها BDS ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية. تصف BDS إنتل بأنها أكبر مستثمر دولي في إسرائيل منذ عقود، ولها مصنع في كريات غات مقام على أرض قرية عراق المنشية المهجّرة. وتقول BDS إن إنتل تراجعت في يونيو 2024 عن استثمار مخطط بقيمة 25 مليار دولار بعد الضغوط، لكن الحملة مستمرة."],"bdsGuide"),
E("dell","electronics","dell",["Dell (computers & servers)","ديل (الحواسيب والخوادم)"],"bds",
 ["Listed by BDS as a consumer boycott priority. BDS, citing WhoProfits, says Dell supplies servers and maintenance to the Israeli military under a $150 million 2023 contract and has R&D activity in Israel's National Cyber Park.",
  "تدرجها BDS ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية. تقول BDS، استنادًا إلى WhoProfits، إن ديل تورّد خوادم وخدمات صيانة للجيش الإسرائيلي بموجب عقد بقيمة 150 مليون دولار عام 2023، ولها نشاط بحث وتطوير في «الحديقة السيبرانية الوطنية» الإسرائيلية."],"bdsGuide"),
E("hp-inc","electronics","hpinc",["HP Inc. (computers & printers)","إتش بي (حواسيب وطابعات)"],"bds",
 ["Hewlett Packard (HP Inc. and HPE) is a BDS consumer boycott priority. BDS says HP Inc. provides services to the offices of Israel's prime minister and finance minister.",
  "هيوليت باكارد (HP Inc. وHPE) هدف ذو أولوية للمقاطعة الاستهلاكية لدى BDS. تقول BDS إن HP Inc. تقدّم خدمات لمكتبي رئيس الوزراء ووزير المالية الإسرائيليين."],"bdsGuide"),
E("hpe","electronics","hpe",["Hewlett Packard Enterprise (HPE)","هيوليت باكارد إنتربرايز (HPE)"],"bds",
 ["Hewlett Packard (HP Inc. and HPE) is a BDS consumer boycott priority. BDS says HPE supports Israel's Population and Immigration Authority by providing technology for its databases and IT systems.",
  "هيوليت باكارد (HP Inc. وHPE) هدف ذو أولوية للمقاطعة الاستهلاكية لدى BDS. تقول BDS إن HPE تدعم سلطة السكان والهجرة الإسرائيلية بتقنيات لقواعد بياناتها وأنظمتها."],"bdsGuide"),
E("xbox","electronics","microsoft",["Xbox (consoles & gaming)","إكس بوكس (الأجهزة والألعاب)"],"bdsPressure",
 ["BDS, together with Microsoft workers (No Azure for Apartheid), calls for pressure on Microsoft wherever possible when alternatives exist, including boycotting Xbox and gaming. This is a pressure target, not one of BDS's consumer priority targets.",
  "تدعو BDS، بالتعاون مع عاملين في مايكروسوفت (No Azure for Apartheid)، إلى الضغط على مايكروسوفت حيثما أمكن عند توفر بدائل، بما يشمل مقاطعة إكس بوكس والألعاب. هذا هدف ضغط وليس من أهداف المقاطعة الاستهلاكية ذات الأولوية."],"bdsGuide"),
E("ring","electronics","amazon",["Ring cameras","كاميرات رينغ"],"bdsPressure",
 ["BDS urges boycotting Amazon products such as Ring cameras, an Amazon subsidiary, as part of pressure on Amazon. BDS links Amazon to Project Nimbus, a $1.22 billion cloud contract with Google for the Israeli government and military.",
  "تدعو BDS إلى مقاطعة منتجات أمازون مثل كاميرات رينغ (شركة تابعة لأمازون) ضمن الضغط على أمازون. وتربط BDS أمازون بمشروع «نيمبوس»، عقد حوسبة سحابية بقيمة 1.22 مليار دولار مع غوغل للحكومة والجيش الإسرائيليين."],"bdsGuide"),
/* ---------- التكنولوجيا والبرمجيات ---------- */
E("microsoft","tech","microsoft",["Microsoft (Azure & AI services)","مايكروسوفت (أزور وخدمات الذكاء الاصطناعي)"],"bdsPressure",
 ["BDS calls for pressure on Microsoft, boycotting where reasonable alternatives exist, citing reporting by The Guardian and +972 Magazine that the Israeli military uses Microsoft Azure cloud and AI services.",
  "تدعو BDS إلى الضغط على مايكروسوفت ومقاطعتها حيث توجد بدائل معقولة، مستندة إلى تحقيقات The Guardian ومجلة +972 بأن الجيش الإسرائيلي يستخدم خدمات أزور السحابية والذكاء الاصطناعي من مايكروسوفت."],"bdsGuide"),
E("google","tech","google",["Google (Cloud & services)","غوغل (الحوسبة السحابية والخدمات)"],"bdsPressure",
 ["A BDS pressure target. BDS cites Project Nimbus, a $1.22 billion 2021 cloud contract between Google, Amazon and the Israeli government, and a new April 2024 Google contract with the Israeli military.",
  "هدف ضغط لدى BDS. تذكر BDS مشروع «نيمبوس»، عقد حوسبة سحابية بقيمة 1.22 مليار دولار وُقّع عام 2021 بين غوغل وأمازون والحكومة الإسرائيلية، إضافة إلى عقد جديد بين غوغل والجيش الإسرائيلي في أبريل 2024."],"bdsGuide"),
E("wix","tech","wix",["Wix (website builder)","ويكس (منصة بناء المواقع)"],"bdsOrganic",
 ["BDS lists Wix among grassroots boycott targets it supports but did not initiate, saying such companies or their branches have openly supported Israel and/or donated in kind to the Israeli military.",
  "تدرج BDS ويكس ضمن أهداف المقاطعة الشعبية التي تدعمها ولم تبدأها، وتقول إن هذه الشركات أو فروعها دعمت إسرائيل علنًا و/أو قدّمت تبرعات عينية للجيش الإسرائيلي."],"bdsGuide"),
E("disney-plus","tech","disney",["Disney+ (streaming)","ديزني+ (البث)"],"bds",
 ["BDS calls on people to cancel or not sign up for Disney+. It says Disney and Marvel glorify Israel's regime, citing the casting of Gal Gadot (Snow White) and Shira Haas (Captain America: Brave New World).",
  "تدعو BDS إلى إلغاء الاشتراك في ديزني+ أو عدم الاشتراك. وتقول إن ديزني ومارفل تمجّدان النظام الإسرائيلي، مستشهدة بإسناد أدوار إلى غال غادوت (سنو وايت) وشيرا هاس (كابتن أمريكا: عالم جديد شجاع)."],"bdsGuide"),
E("cisco","tech","cisco",["Cisco Systems","سيسكو"],"bdsPressure",
 ["Named in BDS's non-exhaustive list of priority tech companies for institutional pressure (divestment and contract exclusion).",
  "مذكورة في قائمة BDS غير الحصرية لشركات التكنولوجيا ذات الأولوية للضغط المؤسسي (سحب الاستثمار والاستبعاد من العقود)."],"bdsDivest"),
E("motorola-solutions","tech","motorola",["Motorola Solutions","موتورولا سوليوشنز"],"bdsPressure",
 ["Named in BDS's non-exhaustive list of priority tech companies for institutional pressure (divestment and contract exclusion).",
  "مذكورة في قائمة BDS غير الحصرية لشركات التكنولوجيا ذات الأولوية للضغط المؤسسي (سحب الاستثمار والاستبعاد من العقود)."],"bdsDivest"),
E("ibm","tech","ibm",["IBM","آي بي إم"],"bdsPressure",
 ["Named in BDS's non-exhaustive list of priority tech companies for institutional pressure (divestment and contract exclusion).",
  "مذكورة في قائمة BDS غير الحصرية لشركات التكنولوجيا ذات الأولوية للضغط المؤسسي (سحب الاستثمار والاستبعاد من العقود)."],"bdsDivest"),
E("meta","tech","meta",["Meta (Facebook, Instagram, WhatsApp)","ميتا (فيسبوك وإنستغرام وواتساب)"],"bdsPressure",
 ["Named in BDS's non-exhaustive list of priority tech companies for institutional pressure (divestment and contract exclusion).",
  "مذكورة في قائمة BDS غير الحصرية لشركات التكنولوجيا ذات الأولوية للضغط المؤسسي (سحب الاستثمار والاستبعاد من العقود)."],"bdsDivest"),
E("oracle","tech","oracle",["Oracle","أوراكل"],"bdsPressure",
 ["Named in BDS's non-exhaustive list of priority tech companies for institutional pressure (divestment and contract exclusion).",
  "مذكورة في قائمة BDS غير الحصرية لشركات التكنولوجيا ذات الأولوية للضغط المؤسسي (سحب الاستثمار والاستبعاد من العقود)."],"bdsDivest"),
E("palantir","tech","palantir",["Palantir","بالانتير"],"bdsPressure",
 ["Named in BDS's non-exhaustive list of priority tech companies for institutional pressure (divestment and contract exclusion).",
  "مذكورة في قائمة BDS غير الحصرية لشركات التكنولوجيا ذات الأولوية للضغط المؤسسي (سحب الاستثمار والاستبعاد من العقود)."],"bdsDivest"),
/* ---------- التجارة الإلكترونية ---------- */
E("amazon","ecommerce","amazon",["Amazon (online store)","أمازون (المتجر الإلكتروني)"],"bdsPressure",
 ["A BDS pressure target over Project Nimbus, the $1.22 billion cloud contract with Google for the Israeli government and military. BDS advises using alternatives and ordering directly from companies when you can.",
  "هدف ضغط لدى BDS بسبب مشروع «نيمبوس»، عقد الحوسبة السحابية بقيمة 1.22 مليار دولار مع غوغل للحكومة والجيش الإسرائيليين. وتنصح BDS باستخدام بدائل والطلب مباشرة من الشركات حين يمكن."],"bdsGuide"),
/* ---------- الفنادق والسياحة ---------- */
E("airbnb","tourism","airbnb",["Airbnb","إير بي إن بي"],"bdsPressure",
 ["A BDS pressure target. BDS says Airbnb is listed in the UN database of businesses involved in Israeli settlements and offers rentals in illegal settlements built on occupied Palestinian land.",
  "هدف ضغط لدى BDS. تقول BDS إن إير بي إن بي واردة في قاعدة بيانات الأمم المتحدة للشركات المرتبطة بالمستوطنات الإسرائيلية، وتعرض إيجارات في مستوطنات غير قانونية مقامة على أرض فلسطينية محتلة."],"bdsGuide"),
E("booking-com","tourism","booking",["Booking.com","بوكينغ.كوم"],"bdsPressure",
 ["A BDS pressure target. BDS says Booking Holdings is listed in the UN database of businesses involved in Israeli settlements and offers rentals in illegal settlements built on occupied Palestinian land.",
  "هدف ضغط لدى BDS. تقول BDS إن بوكينغ هولدينغز واردة في قاعدة بيانات الأمم المتحدة للشركات المرتبطة بالمستوطنات الإسرائيلية، وتعرض إيجارات في مستوطنات غير قانونية مقامة على أرض فلسطينية محتلة."],"bdsGuide"),
E("expedia","tourism","expedia",["Expedia","إكسبيديا"],"bdsPressure",
 ["A BDS pressure target. BDS says Expedia is listed in the UN database of businesses involved in Israeli settlements and offers rentals in illegal settlements built on occupied Palestinian land.",
  "هدف ضغط لدى BDS. تقول BDS إن إكسبيديا واردة في قاعدة بيانات الأمم المتحدة للشركات المرتبطة بالمستوطنات الإسرائيلية، وتعرض إيجارات في مستوطنات غير قانونية مقامة على أرض فلسطينية محتلة."],"bdsGuide"),
/* ---------- الخدمات المالية والعقارات ---------- */
E("axa","finance","axa",["AXA (insurance)","أكسا (التأمين)"],"bds",
 ["Listed by BDS as a consumer boycott priority. BDS says AXA held $150.43 million in eleven companies that arm Israel, including Boeing and General Dynamics.",
  "تدرجها BDS ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية. تقول BDS إن أكسا تملك أسهمًا وسندات بقيمة 150.43 مليون دولار في إحدى عشرة شركة تسلّح إسرائيل، منها بوينغ وجنرال دايناميكس."],"bdsGuide"),
E("barclays","finance","barclays",["Barclays (bank)","باركليز (بنك)"],"campaign",
 ["The Palestine Solidarity Campaign (UK) runs a boycott campaign against Barclays, saying it still holds shares in companies linked to Israeli genocide. Ethical Consumer notes Barclays no longer holds shares in the Israeli arms maker Elbit Systems. Not one of BDS's consumer priority targets in its guide.",
  "تدير حملة التضامن مع فلسطين (بريطانيا) حملة مقاطعة ضد باركليز، قائلةً إنه لا يزال يملك أسهمًا في شركات مرتبطة بالإبادة في غزة. وتشير Ethical Consumer إلى أن باركليز لم يعد يملك أسهمًا في شركة السلاح الإسرائيلية «إلبيت». وهو ليس ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية في دليل BDS."],"ecSupport"),
E("remax","finance","remax",["RE/MAX (real estate)","ريماكس (العقارات)"],"bds",
 ["Listed by BDS as a consumer boycott priority. BDS says RE/MAX markets and sells property in illegal Israeli settlements built on stolen Palestinian land.",
  "تدرجها BDS ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية. تقول BDS إن ريماكس تسوّق وتبيع عقارات في مستوطنات إسرائيلية غير قانونية مقامة على أرض فلسطينية مسلوبة."],"bdsGuide"),
/* ---------- الشحن ---------- */
E("maersk","shipping","maersk",["Maersk (shipping & logistics)","ميرسك (الشحن والخدمات اللوجستية)"],"bds",
 ["In March 2025 the BDS National Committee announced a partnership with the Mask Off Maersk campaign, making Maersk an official BDS target over alleged military cargo shipments to Israel. Maersk denied transporting arms to Israel at its 2025 shareholder meeting; campaigners report it halted shipments to and from Israeli settlements.",
  "في مارس 2025 أعلنت اللجنة الوطنية للمقاطعة (BDS) شراكة مع حملة «انزعوا القناع عن ميرسك» لتصبح ميرسك هدفًا رسميًا لـBDS بسبب ما يُزعم من شحن بضائع عسكرية إلى إسرائيل. نفت ميرسك نقل أسلحة إلى إسرائيل في اجتماع مساهميها 2025، ويذكر القائمون على الحملة أنها أوقفت الشحن من المستوطنات الإسرائيلية وإليها."],"pdMaersk"),
E("zim","shipping","zim",["ZIM (container shipping)","زيم (شحن الحاويات)"],"campaign",
 ["An Israeli shipping line targeted by a trade-union-led boycott campaign in 2023. Campaigners say it ships weapons to Israel, and that its CEO publicly declared support for Israel's war. Not listed as a consumer target in BDS's priority guide.",
  "شركة شحن إسرائيلية استهدفتها حملة مقاطعة نقابية عام 2023. يقول القائمون على الحملة إنها تشحن أسلحة إلى إسرائيل، وإن رئيسها التنفيذي أعلن دعمه علنًا للحرب الإسرائيلية. وهي غير مدرجة هدفًا استهلاكيًا في دليل أولويات BDS."],"greenleftZIM"),
E("msc","shipping","msc",["MSC (container shipping)","MSC (شحن الحاويات)"],"press",
 ["The Maritime Executive reported a campaign by BDS-aligned protesters against MSC container ships, which they allege transport raw materials for the Israeli military. These are the protesters' allegations; MSC is not listed in BDS's priority guide.",
  "نشرت The Maritime Executive تقريرًا عن حملة لمحتجين متحالفين مع BDS ضد سفن MSC، يزعمون أنها تنقل مواد خام للجيش الإسرائيلي. هذه ادعاءات المحتجين؛ وMSC غير مدرجة في دليل أولويات BDS."],"maritimeMSC"),
/* ---------- النقل والتوصيل ---------- */
E("uber","transport","uber",["Uber / Uber Eats","أوبر / أوبر إيتس"],"press",
 ["Business & Human Rights Resource Centre (Sept 2025) reported a growing boycott campaign against Uber after it announced a multi-million-dollar investment in the Israeli drone-delivery firm Flytrex, planned for Uber Eats. Not listed in BDS's priority guide.",
  "أورد مركز موارد الأعمال وحقوق الإنسان (سبتمبر 2025) أن حملة مقاطعة متصاعدة تستهدف أوبر بعد إعلانها استثمارًا بملايين الدولارات في شركة التوصيل بالطائرات المسيّرة الإسرائيلية «فلايتريكس»، المخطط استخدامها في أوبر إيتس. وهي غير مدرجة في دليل أولويات BDS."],"bhrrcUber"),
/* ---------- الملابس والأحذية ---------- */
E("reebok","clothing","reebok",["Reebok","ريبوك"],"bds",
 ["Listed by BDS as a consumer boycott priority. BDS says Reebok signed a sponsorship contract with the Israel Football Association in early 2025; the IFA includes teams in illegal settlements. BDS calls on Reebok to withdraw or face a global boycott.",
  "تدرجها BDS ضمن أهداف المقاطعة الاستهلاكية ذات الأولوية. تقول BDS إن ريبوك وقّعت في مطلع 2025 عقد رعاية مع الاتحاد الإسرائيلي لكرة القدم، الذي يضم فرقًا في مستوطنات غير قانونية، وتدعوها إلى الانسحاب وإلا واجهت مقاطعة عالمية."],"bdsGuide"),
E("zara","clothing","inditex",["Zara","زارا"],"campaign",
 ["Reported as a grassroots boycott target that BDS added to its supported organic boycotts in September 2025 (reported by USCPR and a secondary BDS-alternatives guide). The BDS guide page we checked on the review date lists other organic targets but not Zara, so verify before relying on this.",
  "مذكورة كهدف مقاطعة شعبية أضافتها BDS إلى المقاطعات الشعبية المدعومة في سبتمبر 2025 (بحسب USCPR ودليل بدائل ثانوي). لكن صفحة دليل BDS التي راجعناها في تاريخ المراجعة تذكر أهدافًا شعبية أخرى ولا تذكر زارا، فيُرجى التحقق قبل الاعتماد على هذه المعلومة."],"uscpr"),
E("adidas","clothing","adidas",["adidas","أديداس"],"press",
 ["Faced boycott calls in September 2026 over a single-shoe-service ad featuring a former Israeli soldier. adidas said the campaign was developed by its local team in Israel and was not part of its global advertising; adidas Arabia apologised. Not listed in BDS's priority guide.",
  "واجهت دعوات مقاطعة في سبتمبر 2026 بسبب حملة إعلانية لخدمة «الحذاء المفرد» ظهر فيها جندي إسرائيلي سابق. قالت أديداس إن الحملة أعدّها فريقها المحلي في إسرائيل ولم تكن جزءًا من إعلاناتها العالمية، وقدّمت أديداس العربية اعتذارًا. وهي غير مدرجة في دليل أولويات BDS."],"tribuneAdidas"),
/* ---------- الألبان والحلويات والأغذية الإسرائيلية ---------- */
E("tnuva","dairy","tnuva",["Tnuva (dairy products)","تنوفا (منتجات الألبان)"],"campaign",
 ["Israeli dairy producer named among the Israeli food companies (Tnuva, Strauss, Elite, Osem, Prigat, Jafora) targeted by a Palestinian boycott campaign, as reported by Israel Hayom. Not one of BDS's international priority targets.",
  "منتج ألبان إسرائيلي ورد ضمن شركات الأغذية الإسرائيلية (تنوفا وشتراوس وإيليت وأوسم وبريغات ويافورا) المستهدفة بحملة مقاطعة فلسطينية بحسب Israel Hayom. وليس من أهداف BDS الدولية ذات الأولوية."],"israelHayom"),
E("elite","sweets","strauss",["Elite (chocolate & sweets)","إيليت (الشوكولاتة والحلويات)"],"campaign",
 ["Israeli chocolate and candy maker, owned by the Strauss Group (JTA), named among the Israeli food companies targeted by a Palestinian boycott campaign (Israel Hayom). Not one of BDS's international priority targets.",
  "شركة شوكولاتة وحلويات إسرائيلية تملكها مجموعة شتراوس (JTA)، وردت ضمن شركات الأغذية الإسرائيلية المستهدفة بحملة مقاطعة فلسطينية (Israel Hayom). وليست من أهداف BDS الدولية ذات الأولوية."],"israelHayom"),
E("strauss","food","strauss",["Strauss Group products","منتجات مجموعة شتراوس"],"campaign",
 ["Israeli food group named in a Palestinian boycott campaign (Israel Hayom). CJPME says Strauss's financial support for Israeli army brigades (Golani and Givati) is the basis for the Sabra boycott call.",
  "مجموعة أغذية إسرائيلية وردت في حملة مقاطعة فلسطينية (Israel Hayom). وتقول CJPME إن دعم شتراوس المالي لألوية في الجيش الإسرائيلي (غولاني وغفعاتي) هو أساس دعوة مقاطعة سابرا."],"cjpmeSabra"),
E("osem","food","osem",["Osem (food products)","أوسم (منتجات غذائية)"],"campaign",
 ["Israeli food manufacturer named among the Israeli food companies targeted by a Palestinian boycott campaign, as reported by Israel Hayom. Not one of BDS's international priority targets.",
  "شركة أغذية إسرائيلية وردت ضمن شركات الأغذية الإسرائيلية المستهدفة بحملة مقاطعة فلسطينية بحسب Israel Hayom. وليست من أهداف BDS الدولية ذات الأولوية."],"israelHayom"),
E("prigat","food","prigat",["Prigat (juices)","بريغات (العصائر)"],"campaign",
 ["Israeli juice maker named among the Israeli food companies targeted by a Palestinian boycott campaign, as reported by Israel Hayom. Not one of BDS's international priority targets.",
  "شركة عصائر إسرائيلية وردت ضمن شركات الأغذية الإسرائيلية المستهدفة بحملة مقاطعة فلسطينية بحسب Israel Hayom. وليست من أهداف BDS الدولية ذات الأولوية."],"israelHayom"),
E("jafora-tabori","food","jafora",["Jafora-Tabori (soft drinks)","يافورا-تابوري (المشروبات)"],"campaign",
 ["Israeli soft-drink maker named among the Israeli food companies targeted by a Palestinian boycott campaign, as reported by Israel Hayom. Not one of BDS's international priority targets.",
  "شركة مشروبات غازية إسرائيلية وردت ضمن شركات الأغذية الإسرائيلية المستهدفة بحملة مقاطعة فلسطينية بحسب Israel Hayom. وليست من أهداف BDS الدولية ذات الأولوية."],"israelHayom"),
E("obela","food","sabra",["Obela (hummus & dips)","أوبيلا (الحمص والصلصات)"],"campaign",
 ["BDS supporters in New Zealand picket supermarkets over Obela, the Sabra Dipping Company's non-US brand, saying its Israeli co-owner Strauss funds Israeli military brigades. Ownership has since changed: The Jerusalem Post reported in January 2024 that PepsiCo bought Strauss's 50% stake. Not listed in BDS's priority guide.",
  "يعتصم مناصرو BDS في نيوزيلندا أمام المتاجر بسبب أوبيلا، علامة شركة سابرا خارج الولايات المتحدة، قائلين إن شريكها الإسرائيلي شتراوس يموّل ألوية في الجيش الإسرائيلي. وقد تغيّرت الملكية لاحقًا: ذكرت Jerusalem Post في يناير 2024 أن بيبسيكو اشترت حصة شتراوس البالغة 50%. وهي غير مدرجة في دليل أولويات BDS."],"nobela")
];
