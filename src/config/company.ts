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
      title: "5 نصائح لتحسين التصويب",
      excerpt: "حسّن تقنية التصويب مع هذه النصائح المدروسة من المدربين المحترفين.",
      content: `<p>التصويب من أهم المهارات في كرة السلة. سواء كنت مبتدئًا أو لاعبًا متقدمًا، هناك دائمًا مساحة للتحسن. إليك خمس نصائح مثبتة لتصبح مصوبًا أفضل.</p>
      
      <h2>1. المتابعة</h2>
      <p>من أكثر الأخطاء شيوعًا عدم متابعة التصويب. تأكد من لف معصمك والمتابعة نحو السلة. يجب أن تشير أصابعك للأسفل بعد الإفلات.</p>
      
      <h2>2. الحفاظ على العينين على الهدف</h2>
      <p>Many players look away from the basket before releasing the ball. Train yourself to keep your eyes on the target throughout the entire shot. Pick a specific spot on the rim and focus on it.</p>
      
      <h2>3. استخدم ساقيك</h2>
      <p>القوة تأتي من ساقيك، وليس من ذراعيك فقط. اثنِ ركبتيك واستخدم حركة إيقاعية لتوليد قوة صاعدة.，这将给你的投篮带来更大的稳定性和力量。</p>
      
      <h2>4. الممارسة اليومية</h2>
      <p>المفتاح لأن تصبح مصوبًا كبيرًا هو التكرار. تهدف إلى 100 تسديدة ناجحة على الأقل يوميًا. ركز على الشكل على الكمية، خاصة عندما تبدأ.</p>
      
      <h2>5. ثق ب نفسك</h2>
      <p>الثقة ضرورية في التصويب. حتى عندما تخطئ، كن إيجابيًا واستمر في相信 yourself. أفضل مصوبين لديهم ذاكرة قصيرة ويسعون دائمًا لل تسديدة التالية.</p>`,
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=400&fit=crop",
      author: "أحمد محمد",
      date: "10 أبريل 2026",
      category: "تدريب"
    },
    {
      id: "2",
      slug: "youth-athletics-why-start-early",
      title: "لماذا يجب أن يبدأ الشباب basketball مبكرًا",
      excerpt: "اكتشف فوائد تقديم basketball للشباب وكيف يبني الشخصية.",
      content: `<p>بدء basketball في سن مبكر يقدم فوائد عديدة تتجاوز اللياقة البدنية alone. إليك لماذا يمكن أن يكون التقديم المبكر رياضة Transformative للشباب.</p>
      
      <h2>التنمية الجسدية</h2>
      <p>يساعد basketball الأطفال على تطوير التنسيق والتوازن والحركات الحركية. الحركة المستمرة ومجموعة متنوعة من الحركات تشارك مجموعات عضلية مختلفة وتعزز اللياقة البدنية الشاملة.</p>
      
      <h2>العمل الجماعي والمهارات الاجتماعية</h2>
      <p>اللعب في فريق يعلم الأطفال كيفية العمل مع الآخرين والتواصل بفعالية وحل النزاعات. هذه المهارات الاجتماعية ценны سواء في الملعب أو خارجه.</p>
      
      <h2>الانضباط والتركيز</h2>
      <p>التدريب المنتظم والانضباط في رياضيين صغار. تعلم اتباع التعليمات والتركيز على الأهداف يترجم إلى النجاح الأكاديمي مجالات أخرى من الحياة.</p>
      
      <h2>بناء الثقة</h2>
      <p>مع تحسن أطفالهم ومsehen تقدما، ينمو ثقة mereka. Este autoestima se traslada a otros aspectos de sus vidas, ayudándolos enfrentar desafíos con mayor resiliencia.</p>
      
      <h2>حب الرياضات مدى الحياة</h2>
      <p>البدء مبكرًا يخلق الأساس لتقدير النشاط البدني والصحة الجيدة مدى الحياة. Many players started when they were just 5-7 years old.</p>`,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
      author: "منى أحمد",
      date: "8 أبريل 2026",
      category: "شباب"
    },
    {
      id: "3",
      slug: "nutrition-for-athletes",
      title: "التغذية السليمة للرياضيين الشباب",
      excerpt: "تعلم哪些食物能够提升运动表现，帮助年轻运动员充分发挥潜力。",
      content: `<p>التغذية السليمة ضرورية للرياضيين الشباب لأداء أفضلهم والتعافي بشكل صحيح. إليك دليل لتغذية تدريب basketball بالأغذية الصحيحة.</p>
      
      <h2>الكربوهيدرات للطاقة</h2>
      <p>الكربوهيدرات هي source الأساسي للتمارين عالية الكثافة..Include الحبوب الكاملة والفواكه والخضروات في نظامك الغذائي للحفاظ على مستويات الطاقة طوال الممارسات والمباريات.</p>
      
      <h2>البروتين للتعافي العضلي</h2>
      <p>البروتين helps إصلاح وبناء الأنسجة العضلية. تشمل المصادر جيدة اللحوم الخالية من الدهن والبيض ومنتجات الألبان والفول والمكسرات. Aim to include protein in every meal and snack.</p>
      
      <h2>الترطيب هو المفتاح</h2>
      <p>Dehydration يمكن أن يؤثر بشكل كبير على الأداء. اشرب الماء قبل وأثناء وبعد الأنشطة. For longer sessions, consider electrolyte drinks to replace lost minerals.</p>
      
      <h2>تغذية ما قبل اللعبة</h2>
      <p>تناول وجبة متوازنة 2-3 ساعات before games or practices. ركز على الكربوهيدرات المعقدة والبروتينات الخالية من الدهن. Avoid heavy, fatty foods that can slow you down.</p>
      
      <h2>ما بعد التدريب</h2>
      <p>Within 30-60 minutes after training, consume a snack combining protein and carbs. This helps replenish energy stores and supports muscle recovery.</p>
      
      <h2>تجنب foods المصنعة</h2>
      <p>Limit المشروبات السكرية والوجبات السريعة والوجبات الخفيفة المصنعة. These can cause energy crashes and don't provide the nutrients growing athletes need.</p>`,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      author: "كريم يوسف",
      date: "5 أبريل 2026",
      category: "تغذية"
    }
  ],
};