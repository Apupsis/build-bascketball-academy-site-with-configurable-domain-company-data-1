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
  domain: "procourtacademy.com",
  company: {
    name: "Pro Court Academy",
    tagline: "Where Champions Are Made",
    logo: "/logo.svg",
    email: "info@procourtacademy.com",
    phone: "+1 (555) 123-4567",
    address: "123 Basketball Blvd, Sports City, SC 12345",
    social: {
      facebook: "https://facebook.com/procourtacademy",
      instagram: "https://instagram.com/procourtacademy",
      youtube: "https://youtube.com/procourtacademy",
    },
  },
  programs: [
    {
      id: "1",
      title: "Youth Development",
      description: "Building fundamentals for young athletes ages 6-12. Focus on dribbling, shooting, and basic game understanding.",
      price: "$199/month",
      duration: "4 weeks",
      ageGroup: "Ages 6-12",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      features: ["Basic Skills", "Fun Drills", "Team Games", "Parent Sessions"],
    },
    {
      id: "2",
      title: "Elite Training",
      description: "Advanced training for serious athletes ages 13-18. College-level conditioning and tactical preparation.",
      price: "$349/month",
      duration: "4 weeks",
      ageGroup: "Ages 13-18",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&h=400&fit=crop",
      features: ["Advanced Skills", "Conditioning", "Video Analysis", "College Prep"],
    },
    {
      id: "3",
      title: "Private Coaching",
      description: "One-on-one personalized training with our expert coaches. Customized curriculum for your specific needs.",
      price: "$99/session",
      duration: "1 hour",
      ageGroup: "All Ages",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
      features: ["1-on-1 Training", "Custom Plan", "Flexible Schedule", "Immediate Feedback"],
    },
  ],
  coaches: [
    {
      id: "1",
      name: "Marcus Johnson",
      title: "Head Coach",
      specialization: "Offensive Strategy",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
      bio: "Former NBA player with championship experience",
    },
    {
      id: "2",
      name: "Sarah Williams",
      title: "Assistant Coach",
      specialization: "Defense & Conditioning",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Certified strength and conditioning specialist",
    },
    {
      id: "3",
      name: "David Chen",
      title: "Skills Coach",
      specialization: "Shooting & Ball Handling",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Shot doctor with professional training background",
    },
    {
      id: "4",
      name: "Lisa Thompson",
      title: "Youth Coach",
      specialization: "Fundamentals",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Specializes in developing young talent",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Michael Rodriguez",
      role: "Parent",
      content: "My son has improved tremendously since joining Pro Court Academy. The coaches are incredible!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "Jennifer Adams",
      role: "Student",
      content: "The Elite Training program helped me get recruited. I'm now playing at my dream college!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "Robert Kim",
      role: "Parent",
      content: "Best basketball academy in the area. My daughter loves every session here.",
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
  ],
  articles: [
    {
      id: "1",
      slug: "5-tips-for-better-shooting",
      title: "5 Tips for Better Shooting",
      excerpt: "Improve your shooting technique with these proven tips from professional coaches.",
      content: `<p>Shooting is one of the most important skills in basketball. Whether you're a beginner or an advanced player, there's always room for improvement. Here are five proven tips to help you become a better shooter.</p>
      
      <h2>1. Follow Through</h2>
      <p>One of the most common mistakes is not following through on your shot. Make sure to snap your wrist and follow through toward the basket. Your fingers should point down after the release.</p>
      
      <h2>2. Keep Your Eyes on the Target</h2>
      <p>Many players look away from the basket before releasing the ball. Train yourself to keep your eyes on the target throughout the entire shot. Pick a specific spot on the rim and focus on it.</p>
      
      <h2>3. Use Your Legs</h2>
      <p>Power comes from your legs, not just your arms. Bend your knees and use a rhythmic motion to generate upward force. This will give your shot more consistency and power.</p>
      
      <h2>4. Practice Daily</h2>
      <p>The key to becoming a great shooter is repetition. Aim for at least 100 made shots per day. Focus on form over quantity, especially when you're starting out.</p>
      
      <h2>5. Stay Confident</h2>
      <p>Confidence is crucial in shooting. Even when you miss, stay positive and keep believing in yourself. The best shooters have short memories and always focus on the next shot.</p>`,
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=400&fit=crop",
      author: "Marcus Johnson",
      date: "April 10, 2026",
      category: "Training"
    },
    {
      id: "2",
      slug: "youth-athletics-why-start-early",
      title: "Why Youth Should Start Basketball Early",
      excerpt: "Discover the benefits of introducing basketball to young athletes and how it builds character.",
      content: `<p>Starting basketball at a young age offers numerous benefits beyond just physical fitness. Here's why early introduction to the sport can be transformative for young athletes.</p>
      
      <h2>Physical Development</h2>
      <p>Basketball helps children develop coordination, balance, and motor skills. The constant movement and variety of movements engage different muscle groups and promote overall physical fitness.</p>
      
      <h2>Teamwork and Social Skills</h2>
      <p>Playing on a team teaches children how to work with others, communicate effectively, and resolve conflicts. These social skills are valuable both on and off the court.</p>
      
      <h2>Discipline and Focus</h2>
      <p>Regular practice and training instill discipline in young athletes. Learning to follow instructions and focus on goals translates to academic success and other areas of life.</p>
      
      <h2>Building Confidence</h2>
      <p>As children improve their skills and see progress, their confidence grows. This self-esteem carries over to other aspects of their lives, helping them face challenges with greater resilience.</p>
      
      <h2>Lifelong Love for Sports</h2>
      <p>Starting early creates a foundation for a lifelong appreciation for physical activity and healthy living. Many professional athletes began playing when they were just 5-7 years old.</p>`,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
      author: "Lisa Thompson",
      date: "April 8, 2026",
      category: "Youth"
    },
    {
      id: "3",
      slug: "nutrition-for-athletes",
      title: "Proper Nutrition for Young Athletes",
      excerpt: "Learn what foods fuel performance and help young athletes reach their full potential.",
      content: `<p>Proper nutrition is essential for young athletes to perform at their best and recover properly. Here's a guide to fueling your basketball training with the right foods.</p>
      
      <h2>Carbohydrates for Energy</h2>
      <p>Carbohydrates are the primary fuel source for high-intensity exercise. Include whole grains, fruits, and vegetables in your diet to maintain energy levels throughout practices and games.</p>
      
      <h2>Protein for Muscle Recovery</h2>
      <p>Protein helps repair and build muscle tissue. Good sources include lean meats, eggs, dairy, beans, and nuts. Aim to include protein in every meal and snack.</p>
      
      <h2>Hydration is Key</h2>
      <p>Dehydration can significantly impact performance. Drink water before, during, and after activities. For longer sessions, consider electrolyte drinks to replace lost minerals.</p>
      
      <h2>Pre-Game Nutrition</h2>
      <p>Eat a balanced meal 2-3 hours before games or practices. Focus on complex carbs and lean proteins. Avoid heavy, fatty foods that can slow you down.</p>
      
      <h2>Post-Train Recovery</h2>
      <p>Within 30-60 minutes after training, consume a snack combining protein and carbs. This helps replenish energy stores and supports muscle recovery.</p>
      
      <h2>Avoid Processed Foods</h2>
      <p>Limit sugary drinks, fast food, and processed snacks. These can cause energy crashes and don't provide the nutrients growing athletes need.</p>`,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      author: "Sarah Williams",
      date: "April 5, 2026",
      category: "Nutrition"
    }
  ],
};
