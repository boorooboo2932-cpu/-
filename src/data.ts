import { 
  Briefcase, 
  Layout, 
  ShoppingBag, 
  Factory, 
  Mail, 
  Phone, 
  MessageSquare, 
  Award, 
  TrendingUp, 
  Camera,
  Layers,
  CheckCircle2
} from 'lucide-react';

export interface PortfolioItem {
  id: string;
  category: '웹디자인' | '인쇄·패키지 디자인' | 'vmd·dp';
  title: string;
  description: string;
  image: string; // Thumbnail
  images: string[]; // Gallery images
  tags: string[];
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    category: '인쇄·패키지 디자인',
    title: 'Premium Skincare Branding',
    description: 'High-end aesthetic for a natural skincare line.',
    image: 'https://picsum.photos/seed/skincare/800/600',
    images: [
      'https://picsum.photos/seed/skincare1/1200/800',
      'https://picsum.photos/seed/skincare2/1200/800',
      'https://picsum.photos/seed/skincare3/1200/800'
    ],
    tags: ['Branding', 'Package', 'Logo']
  },
  {
    id: '2',
    category: '웹디자인',
    title: 'High-Conversion Detail Page',
    description: 'Optimized shopping experience for a tech gadget.',
    image: 'https://picsum.photos/seed/tech/800/600',
    images: [
      'https://picsum.photos/seed/tech1/1200/800',
      'https://picsum.photos/seed/tech2/1200/800'
    ],
    tags: ['Detail Page', 'UI/UX', 'Commerce']
  },
  {
    id: '3',
    category: '인쇄·패키지 디자인',
    title: 'Terra Solution Corporate Identity',
    description: 'Professional branding for an industrial technology firm.',
    image: 'https://picsum.photos/seed/industrial/800/600',
    images: [
      'https://picsum.photos/seed/industrial1/1200/800',
      'https://picsum.photos/seed/industrial2/1200/800',
      'https://picsum.photos/seed/industrial3/1200/800'
    ],
    tags: ['Corporate', 'B2B', 'Industrial']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: '테라솔루션',
    role: 'Visual Designer',
    period: '2026 - Present',
    highlights: [
      '홈페이지 제작',
      '카탈로그 및 브로슈어 디자인 총괄',
      'B2B 마케팅 콘텐츠 기획, 제작'
    ]
  },
  {
    id: '2',
    company: '하이비코리아',
    role: 'Head of Design',
    period: '2024 - Present',
    highlights: [
      '패키지 / 상세페이지 / 마케팅 이미지 총괄',
      '브랜드 디자인 및 VMD 기획',
      '제품 촬영 및 콘텐츠 제작'
    ]
  },
  {
    id: '3',
    company: '헤이밤비니 & 모모부티크(개인사업)',
    role: 'Ceo / Visual Designer',
    period: '2017 - 2022',
    highlights: [
      '브랜드 비주얼 디렉팅',
      '쇼핑몰 운영 및 커머스 디자인',
      '브랜드 패키지 및 프로모션 기획'
    ]
  }
];

export const AWARDS = [
  {
    year: '2014',
    title: '서울시 여성창업 공예대전 동상 수상',
    organization: '서울시'
  },
  {
    year: '2004',
    title: '한국아동미술협회 특별작품상 수상',
    organization: '한국아동미술협회'
  }
];

export const SKILLS = [
  {
    title: '브랜딩 디자인',
    description: '로고 / 패키지 / VMD',
    icon: Layers
  },
  {
    title: '상세페이지 & 쇼핑몰',
    description: '매출을 만드는 커머스 디자인',
    icon: ShoppingBag
  },
  {
    title: '광고 & 마케팅',
    description: '배너 & 마케팅 이미지 기획',
    icon: TrendingUp
  },
  {
    title: '제품 촬영 & 보정',
    description: '고퀄리티 제품 콘텐츠 제작',
    icon: Camera
  },
  {
    title: '기업 디자인',
    description: '카탈로그 / 브로슈어 / B2B',
    icon: Factory
  },
  {
    title: '웹사이트 디자인',
    description: '반응형 웹 및 UI/UX',
    icon: Layout
  }
];
