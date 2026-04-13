export interface Program {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  ageGroup: string;
  image: string;
  features: string[];
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface Company {
  name: string;
  tagline: string;
  logo: string;
  email: string;
  phone: string;
  address: string;
  social: Social;
}

export interface CompanyConfig {
  domain: string;
  company: Company;
  programs: Program[];
  coaches: Coach[];
  testimonials: Testimonial[];
  gallery: string[];
  articles: Article[];
}

export const companyConfig: CompanyConfig = {
  domain: "cairocourts.com",
  company: {
    name: "Cairo Courts Basketball Academy",
    tagline: "Where Champions Are Made",
    logo: "/logo.svg",
    email: "info@cairocourts.com",
    phone: "+20 10 1234 5678",
    address: "الشيخ زايد، المنطقة الصناعية، القاهرة",
    social: {
      facebook: "https://facebook.com/cairocourts",
      instagram: "https://instagram.com/cairocourts",
      youtube: "https://youtube.com/cairocourts",
    },
  },
  programs: [
    {
      id: "1",
      title: "برنامج الناشئين",
      description: "بناء الأساسيات للرياضيين الصغار ages 6-12. التركيز على المهارات الأساسية والمرونة.",
      price: "1500 جنيه/شهر",
      duration: "4 أسابيع",
      ageGroup: "أعمار 6-12",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      features: ["المهارات الأساسية", "تمارين ممتعة", "ألعاب جماعية", "جلسات للأهالي"],
    },
    {
      id: "2",
      title: "التدريب المتقدم",
      description: "تدريب متقدم للرياضيين الجاديين ages 13-18. إعداد على مستوى الكلية.",
      price: "2500 جنيه/شهر",
      duration: "4 أسابيع",
      ageGroup: "أعمار 13-18",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop",
      features: ["مهارات متقدمة", "لياقة بدنية", "تحليل الفيديو", "إعداد الكلية"],
    },
    {
      id: "3",
      title: "تدريب فردي",
      description: "تدريب شخصي واحد على واحد مع مدربينا الخبراء. منهج مخصص لاحتياجاتك.",
      price: "300 جنيه/_session",
      duration: "ساعة واحدة",
      ageGroup: "جميع الأعمار",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
      features: ["تدريب 1-on-1", "خطة مخصصة", "جدول مرن", "ملاحظات فورية"],
    },
    {
      id: "4",
      title: "معسكر صيفي",
      description: "معسكر مكثف خلال الصيف لجميع المستويات. تدريب كامل مع прожиم اختياري.",
      price: "4500 جنيه",
      duration: "أسبوعان",
      ageGroup: "أعمار 8-18",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      features: ["تدريب مكثف", "مسابقات", "شهادة التخرج", "ملابس رياضية"],
    },
  ],
  coaches: [
    {
      id: "1",
      name: "أحمد محمد",
      title: "المدرب الرئيسي",
      specialization: "استراتيجية الهجوم",
      experience: "15+ سنة",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
      bio: "لاعب دولي سابق بخبرة في البطولات الأفريقية",
    },
    {
      id: "2",
      name: "كريم يوسف",
      title: "مدرب مساعد",
      specialization: "الدفاع واللياقة",
      experience: "10+ سنة",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "مدرب لياقة معتمد من الاتحاد المصري",
    },
    {
      id: "3",
      name: "عمر سعيد",
      title: "مدرب مهارات",
      specialization: "التصويب والتمرير",
      experience: "8+ سنة",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "متخصص في تطوير التصويب بدقة عالية",
    },
    {
      id: "4",
      name: "منى أحمد",
      title: "مدربة الناشئين",
      specialization: "الأساسيات",
      experience: "12+ سنة",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "متخصصة في اكتشاف المواهب الشابة",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "محمد عادل",
      role: "والد لاعب",
      content: "ابني تحسن بشكل كبير منذ انضمامه لأكاديمية القاهرة. المدربون رائعون!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "نور الدين",
      role: "طالب",
      content: "برنامج التدريب المتقدم ساعدني على اللعب في فريق الكلية. حلم تحقق!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "هالة محمد",
      role: "والدة لاعبة",
      content: "أفضل أكاديمية basketball في مصر. ابنتي تحب كل جلسة هنا.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop",
  ],
articles: [
    {
      id: "1",
      slug: "5-tips-for-better-shooting",
      title: "5 نصائح لتحسين التصويب في كرة السلة",
      excerpt: "حسّن تقنية التصويب مع هذه النصائح المدروسة من المدربين المحترفين في أكاديميتنا.",
      content: `<p>التصويب هو من أهم المهارات في كرة السلة، والذي يفصل اللاعبين العاديين عن اللاعبين المميزين. سواء كنت مبتدئاً أو لاعباً متقدمًا، فهناك دائماً مساحة للتحسن. جمعنا لك خمس نصائح مثبتة من أفضل المدربين لتصبح مصوباً أفضل.</p>

      <h2>1. المتابعة الصحيحة</h2>
      <p>من أكثر الأخطاء شيوعاً عدم متابعة التصويب بشكل صحيح. بعد إفلات الكرة، تأكد من:</p>
      <ul>
        <li>لف معصمك نحو السلة</li>
        <li>إشارة أصابعك للأسفل</li>
        <li>بقاء ذراعك ممدودة لحظة إضافية</li>
      </ul>
      <p>هذه المتابعة تعطي الكرة دوراناً خلفياً يساعدها على الدخول للسلة.</p>

      <h2>2. الحفاظ على العينين على الهدف</h2>
      <p>كثير من اللاعبين ينظرون بعيداً عن السلة قبل إفلات الكرة. إليك ما يجب عليك فعله:</p>
      <ul>
        <li>اختر نقطة محددة على الحلقة (عادة الزاوية الأمامية)</li>
        <li>حافظ على نظرك على هذه النقطة طوال التسديدة</li>
        <li>لا ترفع رأسك قبل أن تلمس الكرة يدك الأخرى</li>
      </ul>

      <h2>3. استخدم ساقيك بشكل صحيح</h2>
      <p>القوة الحقيقية تأتي من ساقيك وليست من ذراعيك فقط. المفتاح في:</p>
      <ul>
        <li>ثني ركبتيك بشكل مريح</li>
        <li>استخدام حركة إيقاعية من الأسفل إلى الأعلى</li>
        <li>البدء من أصابع القدمين وليس من الكعبين</li>
      </ul>
      <p>هذا يعطي تصويبك قوة وثباتاً متساوياً.</p>

      <h2>4. الممارسة اليومية المستمرة</h2>
      <p>المفتاح لأن تصبح مصوباً كبيراً هو التكرار. نحن ننصح بـ:</p>
      <ul>
        <li>تصوير 100 تسديدة ناجحة يومياً كحد أدنى</li>
        <li>التركز على الشكل الصحيح وليس على الكمية</li>
        <li>تسجيل تقدمك أسبوعياً</li>
      </ul>
      <p>تذكر: الشكل الصحيح يؤدي إلى النجاح.</p>

      <h2>5. الثقة بالنفس والتركيز</h2>
      <p>الثقة ضرورية في التصويب، خاصة في اللحظات الحاسمة:</p>
      <ul>
        <li>حافظ على إيجابيتك حتى بعد الإخطاء</li>
        <li>لديك ذاكرة قصيرة للنجاح</li>
        <li>ركز دائماً على التسديدة التالية</li>
      </ul>
      <p>أفضل المصوبين في التاريخ كانوا واثقين بأن التسديدة التالية ستدخل.</p>

      <div class="article-cta">
        <h3>هل تريد تحسين تصويبك؟</h3>
        <p>انضم لأكاديميتنا وحصل على تدريب شخصي من أفضل المدربين في مصر.</p>
        <a href="/programs" class="btn btn-primary">شاهد البرامج</a>
      </div>`,
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=400&fit=crop",
      author: "أحمد محمد",
      date: "10 أبريل 2026",
      category: "تدريب"
    },
    {
      id: "2",
      slug: "youth-athletics-why-start-early",
      title: "لماذا يجب أن يبدأ الأطفال في كرة السلة مبكراً",
      excerpt: "اكتشف فوائد كرة السلة للأطفال وكيف تبني شخصيتهم وتُطور مهاراتهم الجسدية.",
      content: `<p>كرة السلة ليست مجرد رياضة، بل هي طريقة رائعة لتنمية dzieciinteligencji dzieci والحركات لديهم. بدء children في سن مبكر يقدم فوائد عديدة تتجاوز اللياقة البدنية.</p>

      <h2>1. التنمية الجسدية الشاملة</h2>
      <p>تساعد كرة السلة children على تطوير:</p>
      <ul>
        <li><strong>التنسيق الحركي:</strong> الحركة المستمرة تختلف Burncalories مختلفة</li>
        <li><strong>التوازن:</strong> القفز والتوقف المفاجئ يطورون التوازن</li>
        <li><strong>المرونة:</strong> التمدد والحركات المتنوعة</li>
        <li><strong>القوة:</strong> بناء عضلات قوية بطريقة صحية</li>
      </ul>

      <h2>2. العمل الجماعي والمهارات الاجتماعية</h2>
      <p>اللعب في فريق يعلم الأطفال أشياء لا يمكن تعلميها في المدرسة:</p>
      <ul>
        <li><strong>التواصل:</strong> كيفية التعبير عن أفكارهم</li>
        <li><strong>التعاون:</strong> العمل مع الآخرين نحو هدف مشترك</li>
        <li><strong>حل النزاعات:</strong> التعامل مع الخلافات بطريقة صحية</li>
        <li><strong>القيادة:</strong> اكتشاف قدراتهم القيادية</li>
      </ul>

      <h2>3. الانضباط والتركيز</h2>
      <p>التدريب المنتظم يزرع:</p>
      <ul>
        <li>الالتزام بمواعيد التدريب</li>
        <li>الانتباه للتعليمات</li>
        <li>العمل الجاد لتحقيق الأهداف</li>
        <li>التحمل عند مواجهة التحديات</li>
      </ul>

      <h2>4. بناء الثقة بالنفس</h2>
      <p>مع تحسن مهاراتchild، تنمو ثقته بنفسه:</p>
      <ul>
        <li>الشعور بالإنجاز عند تسجيل أول هدف</li>
        <li>التغلب على الخوف من الخطأ</li>
        <li>تقبل النقد البناء</li>
        <li>الإصرار على المحاولة مرة أخرى</li>
      </ul>

      <h2>5. حب النشاط البدني مدى الحياة</h2>
      <p>البدء مبكراً يخلق أساساً لـ:</p>
      <ul>
        <li>حياة نشطة وصحية</li>
        <li>تجنب أمراض السمنة</li>
        <li>بناء صداقات duradoureas</li>
        <li>تعلم قيم رياضية مهمة</li>
      </ul>

      <div class="article-cta">
        <h3>سجل ابنك فيأكاديميتنا</h3>
        <p>نقدم برامج خاصة بالأطفال مع مدربين متخصصين في التعامل مع الفئات العمرية الصغيرة.</p>
        <a href="/programs" class="btn btn-primary">برنامج الناشئين</a>
      </div>`,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
      author: "منى أحمد",
      date: "8 أبريل 2026",
      category: "شباب"
    },
    {
      id: "3",
      slug: "nutrition-for-athletes",
      title: "التغذية السليمة للرياضيين: سر الأداء المتميز",
      excerpt: "تعلم ماذا تأكل لتحسين أدائك الرياضي وزيادة طاقتك وسرعة تعافيك.",
      content: `<p>التغذية السليمة هي أساس الأداء الرياضي المتميز. سواء كنت تمرين أو لاعب محترف، فإن ما تأكله يؤثر مباشرة على أدائك. إليك دليل شامل لتغذية basketball.</p>

      <h2>1. الكربوهيدرات: وقود جسمك</h2>
      <p> carbs هي المصدر الأساسي للطاقة في التمارين عالية الكثافة:</p>
      <ul>
        <li><strong>الحبوب الكاملة:</strong> الأرز البني،الشوفان، الخبز المصنوع من حبوب كاملة</li>
        <li><strong>الفواكه:</strong> الموز، التفاح، العنب، الفريز</li>
        <li><strong>الخضروات:</strong> البطاطس، الجزر، البنجر</li>
      </ul>
      <p>تناول الكربوهيدرات قبل وأثناء وبعد التدريب للحفاظ على مستوى الطاقة.</p>

      <h2>2. البروتين: إصلاح وبناء العضلات</h2>
      <p>البروتين ضروري لإصلاح العضلات وبناء عضلات جديدة:</p>
      <ul>
        <li><strong>الدجاج والأسماك:</strong> مصادر بروتين خالية من الدهن</li>
        <li><strong>البيض:</strong> بروتين كامل مع جميع الأحماض الأمينية</li>
        <li><strong>منتجات الألبان:</strong> لبن،زبادي،جبن</li>
        <li><strong>البقوليات:</strong> العدس،الفول،الحمص</li>
      </ul>
      <p>تناول بروتين في كل وجبة وخصوصاً بعد التدريب.</p>

      <h2>3. الترطيب: الماء حياتك</h2>
      <p>الجفاف يؤثر كبيراً على الأداء.是我们 يجب عليك فعله:</p>
      <ul>
        <li>اشرب 500 مل من الماء قبل التدريب بنصف ساعة</li>
        <li>تناول 200 مل كل 15-20 دقيقة أثناء التدريب</li>
        <li>اشرب 500-700 مل بعد كل كيلو متر جري</li>
        <li>في الأيام الحارة، زد كمية الماء</li>
      </ul>

      <h2>4. تغذية ما قبل التدريب</h2>
      <p>الوجبة قبل التدريب مهمة جداً. نفضل:</p>
      <ul>
        <li>تناول وجبة متتوازنة قبل 2-3 ساعات</li>
        <li>ركز على الكربوهيدرات والبروتين الخفيف</li>
        <li>تجنب foods الدهنية والثقيلة</li>
        <li>تجنب foods جديدة قد تؤثر على معدتك</li>
      </ul>

      <h2>5. تغذية ما بعد التدريب</h2>
      <p>خلال 30-60 دقيقة بعد التدريب:</p>
      <ul>
        <li>تناول وجبة تجمع بين بروتين وكربوهيدرات</li>
        <li>موزة مع زبادي adalah خيار ممتاز</li>
        <li>شرب ماء أو مشروب رياضي</li>
      </ul>
      <p>هذا يساعد على التعافي السريع وبناء العضلات.</p>

      <h2>6. foods التي يجب تجنبها</h2>
      <ul>
        <li>المشروبات الغازية والسكرية</li>
        <li>الوجبات السريعة والمصنعة</li>
        <li>الأ foods الغنية بالدهون المشبعة</li>
        <li>الكحول</li>
      </ul>

      <div class="article-cta">
        <h3>احصل على خطة تغذية مخصصة</h3>
        <p> 우리의 مدربين，我们可以为您提供 خطة تغذية مخصصة是根据 your目标和 مستوى النشاط.</p>
        <a href="/contact" class="btn btn-primary">تواصل معنا</a>
      </div>`,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      author: "كريم يوسف",
      date: "5 أبريل 2026",
      category: "تغذية"
    },
    {
      id: "4",
      slug: "defensive-skills",
      title: "فن الدفاع: كيف تص后卫 كمحترف",
      excerpt: "تعلم أساسيات الدفاع الفعال التي ستوقف أي مهاجم وتُربح فريقك.",
      content: `<p>في basketball،防守 مثل الهجوم一样重要. المدافع الممتاز يمكنه إيقاف المهاجم وإجباره على ارتكاب الأخطاء. إليك أساسيات الدفاع الاحترافي.</p>

      <h2>1. وضعية الوقوف الصحيحة</h2>
      <p>الوضع الصحيح هو أساس الدفاع الجيد:</p>
      <ul>
        <li>ق技巧 خفيفة على أصابع القدمين</li>
        <li>ركباك مثنيتان قليلاً</li>
        <li>وزنك موزع بالتساوي على القدمين</li>
        <li>يديك مرتفعتان ومستعدتان للتحريك</li>
      </ul>

      <h2>2. تتبع المهاجم</h2>
      <p>المتابعة الجيدة تمنع المهاجم من الاختراق:</p>
      <ul>
        <li>راقب محيط المهاجم دائمًا ( peripheral vision)</li>
        <li>لا تنظر للكرة فقط</li>
        <li>تحرك lateral مع المهاجم</li>
        <li>ابقَ بين المهاجم والسلة</li>
      </ul>

      <h2>3._blocks والسرقات</h2>
      <p>الblock والسرقة يتطلبان توقيتاً صحيحاً:</p>
      <ul>
        <li><strong>ال block:</strong> انتظر حتى يرفع المهاجم لل التسديدة</li>
        <li><strong>السرقة:</strong> استغل أخطاء المهاجم في التعامل</li>
        <li>لا ت hyperactive - التحرك المفرط يُرهقك</li>
        <li>ا��تخدم يداك لتوجيه المهاجم ليسرق</li>
      </ul>

      <h2>4.防守 الخطة</h2>
      <p>فهم防守 الخطة يجعلك defender أفضل:</p>
      <ul>
        <li><strong>Man-to-man:</strong> كل defender ي_MARK مهاجم محدد</li>
        <li><strong>Zone defense:</strong> defender منطقة محددة</li>
        <li><strong>Press:</strong> pressure عالي على球员 في half الملعب</li>
      </ul>

      <h2>5. التواصل مع الفريق</h2>
      <p>التواصل secret الدفاع الناجح:</p>
      <ul>
        <li>نادي عن screening قادمة</li>
        <li>أخبر teammates عن مهاجمين مختفين</li>
        <li>اطلب المساعدة عند الحاجة</li>
      </ul>

      <div class="article-cta">
        <h3>تدرب الدفاع مع أفضل المدربين</h3>
        <p>انضم لدينا وتعلم防守 من لاعبين دوليين سابقين.</p>
        <a href="/programs" class="btn btn-primary">برنامج التدريب المتقدم</a>
      </div>`,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
      author: "كريم يوسف",
      date: "3 أبريل 2026",
      category: "تدريب"
    },
    {
      id: "5",
      slug: "mental-preparation",
      title: "الاستعداد النفسي: قوة عقلك تفوز بالمباريات",
      excerpt: "تعلم كيف تُعد نفسك نفسياً قبل المباريات والتمارين لتحقيق أقصى أداء.",
      content: `<p>في المستوى العالي،الاختلاف بين لاعب عادي ولاعب متميز ليس جسدياً فقط، بل نفسياً أيضاً. قوة عقلك يمكنها أن تُفوز بالمباريات.</p>

      <h2>1. التصور الذهني</h2>
      <p>التصور أو التخيل هو تقنية powerful:</p>
      <ul>
        <li>تخيل yourself تسجل进球 ناجحة</li>
        <li>رؤية نفسك defender excellently</li>
        <li>تأمل الجمهور الكبير والتحمس</li>
      </ul>
      <p>الدراسات تُظهر أبطال replay ذهني يحسن الأداء فعلاً.</p>

      <h2>2. التركيز في اللحظات الحاسمة</h2>
      <p>المباريات تُفوز في اللحظات الأخيرة:</p>
      <ul>
        <li><strong>التنفس العميق:</strong> خذ نفس عميق عند الضغط</li>
        <li><strong>الآن وليس الماضي:</strong> لا تفكر في previous errors</li>
        <li><strong>هدف محدد:</strong> فكر في الشيء الوحيد الذي你需要 فعله الآن</li>
      </ul>

      <h2>3. إدارة القلق</h2>
      <p>الخوف طبيعي لكن يمكن التحكم فيه:</p>
      <ul>
        <li>حول القلق ل excitation ( excitement)</li>
        <li>إعداد yourself نفسياً قبل المباراة</li>
        <li>استخدم طقوساً قبل كل لعبة</li>
      </ul>

      <h2>4. الثقة بالنفس</h2>
      <p>الثقة تبنى على الإعداد الجيد:</p>
      <ul>
        <li>تدرب بجد حتى تثق في قدراتك</li>
        <li>تذكر نجاحاتك السابقة</li>
        <li>حدد نقاط قوتك واعتز بها</li>
      </ul>

      <h2>5. التعامل مع الضغط</h2>
      <p>اللاعبون المتميزون يميزون بقدرتهم على الأداء تحت الضغط:</p>
      <ul>
        <li>تدرب في ظروف مشابهة للمباراة</li>
        <li>لا تتجنب اللحظات الحاسمة بل ابحث عنها</li>
        <li>صدق yourself أنك قادر على النجاح</li>
      </ul>

      <div class="article-cta">
        <h3>احصل على تدريب نفسي متخصص</h3>
        <p>نقدم جلسات تدريب نفسي مع متخصصين في sports psychology.</p>
        <a href="/contact" class="btn btn-primary">تواصل معنا</a>
      </div>`,
      image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&h=400&fit=crop",
      author: "أحمد محمد",
      date: "1 أبريل 2026",
      category: "نفسية"
    }
  ],
};