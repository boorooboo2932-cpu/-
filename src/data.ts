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
    category: '웹디자인',
    title: '(주)하이비코리아 - 유아용품',
    description: '사용자의 흐름을 고려한 구조 설계와 전환율을 높이는 UI/UX를 중심으로 실제 운영 가능한 웹 디자인을 수행합니다',
    image: 'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web.jpeg',
    images: [
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web.jpeg'
    ],
    tags: ['Event Page', 'Promotion', 'Commerce'],
    link: 'https://brand.naver.com/hibee'
  },
  {
    id: '2',
    category: '웹디자인',
    title: '(주)테라솔루션 - 2차전지',
    description: '사용자의 흐름을 고려한 구조 설계와 전환율을 높이는 UI/UX를 중심으로 실제 운영 가능한 웹 디자인을 수행합니다',
    image: 'https://picsum.photos/seed/tera/800/600',
    images: [
      'https://picsum.photos/seed/tera1/1200/800',
      'https://picsum.photos/seed/tera2/1200/800'
    ],
    tags: ['Corporate', 'Responsive', 'B2B'],
    link: 'https://tera-solution.co.kr/'
  },
  {
    id: '3',
    category: '인쇄·패키지 디자인',
    title: '하하팩토리 - 실사출력',
    description: '제품의 가치를 시각적으로 전달하는 디자인. 패키지부터 브로슈어까지 브랜드의 첫 인상을 완성합니다',
    image: 'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/be037a90b30f286e6054e6ec477e70ecac43b668/package_22.jpg',
    images: [
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/be037a90b30f286e6054e6ec477e70ecac43b668/package_22.jpg'
    ],
    tags: ['Printing', 'Branding', 'Package'],
    link: 'https://www.hahafactory.co.kr/'
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
    description: '제품의 가치를 시각적으로 전달하는 디자인. 패키지부터 브로슈어까지 브랜드의 첫 인상을 완성합니다',
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
    description: '사용자의 흐름을 고려한 구조 설계와 전환율을 높이는 UI/UX를 중심으로 실제 운영 가능한 웹 디자인을 수행합니다',
    icon: Layout
  }
];
