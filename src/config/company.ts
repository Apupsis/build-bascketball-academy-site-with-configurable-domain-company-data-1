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
};
