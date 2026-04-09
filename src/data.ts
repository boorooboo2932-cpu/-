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
  category: 'Content & Marketing' | 'Branding & Package' | 'VMD & Display';
  title: string;
  description: string;
  image: string; // Thumbnail
  images: string[]; // Gallery images
  tags: string[];
  link?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  result?: string;
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
    id: 'content-marketing',
    category: 'Content & Marketing',
    title: 'Content & Marketing Design',
    description: '구매 전환을 고려한 온라인 판매 콘텐츠 및 제품의 가치를 전달하는 비주얼 콘텐츠 제작.',
    image: 'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web.jpeg',
    images: [
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web_1.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web_2.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web_3.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web_4.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web_5.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/d60ecd34f2d6060a09f9aaf730ce0af8f6cb823c/web_6.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_7.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_8.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_9.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_10.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_11.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_12.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/b738cf2570f6155033b8cfc8d1ff542d48d1eec5/web_13.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_14.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_15.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_16.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_17.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_18.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_19.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1a518db49726587432ba0b62ea9ded69fa9798d9/web_20.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_21.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_22.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_23.png',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_24.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_25.jpeg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_26.png',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/58ef38b4f3007d511b366831361f070d490b777b/web_27.png',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/de06e272078c806a60349570cc0eb2a0290c4ec7/web_28.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/de06e272078c806a60349570cc0eb2a0290c4ec7/web_29.jpg',
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/de06e272078c806a60349570cc0eb2a0290c4ec7/web_30.jpg'
    ],
    tags: ['Marketing', 'Commerce', 'Visual'],
    overview: '사용자의 행동 흐름과 구매 전환을 고려하여 UI/UX 중심의 구조 설계를 기반으로 웹 디자인을 진행했습니다. 브랜드 아이덴티티를 유지하면서도 실제 운영 환경에 최적화된 디자인을 목표로 했습니다.',
    problem: '기존 웹페이지는 정보 구조가 명확하지 않아 사용자의 이탈률이 높고, 구매까지 이어지는 흐름이 단절되어 있었습니다. 또한 시각적 통일성이 부족해 브랜드 신뢰도가 낮은 상태였습니다.',
    solution: '사용자 동선을 재설계하고, 핵심 콘텐츠 중심으로 레이아웃을 정리했습니다. 컬러 시스템과 타이포그래피를 통일하여 브랜드 일관성을 강화하고, 가독성과 접근성을 고려한 UI를 구축했습니다.',
    result: '사용자의 페이지 체류 시간 증가 및 이탈률 감소를 유도했으며, 구매 전환 흐름이 개선되어 실제 운영 효율 향상에 기여했습니다. 브랜드 이미지 또한 보다 전문적이고 신뢰감 있게 개선되었습니다.'
  },
  {
    id: 'branding-package',
    category: 'Branding & Package',
    title: 'Branding & Package Design',
    description: '브랜드 아이덴티티를 기반으로 일관된 비주얼 시스템 설계 패키지부터 브로슈어까지 브랜드의 첫 인상을 완성합니다.',
    image: 'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/be037a90b30f286e6054e6ec477e70ecac43b668/package_22.jpg',
    images: [
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/be037a90b30f286e6054e6ec477e70ecac43b668/package_22.jpg'
    ],
    tags: ['Branding', 'Package', 'Identity'],
    overview: '제품의 특징과 브랜드 컨셉을 시각적으로 전달하기 위해 패키지 및 인쇄물 디자인을 통합적으로 기획하고 제작했습니다. 매장에서의 첫 인상을 결정짓는 디자인 완성도를 목표로 했습니다.',
    problem: '기존 패키지는 제품의 특징이 명확하게 전달되지 않고, 브랜드 아이덴티티가 일관되지 않아 경쟁 제품 대비 시각적 임팩트가 부족했습니다. 또한 소비자의 구매 욕구를 자극하는 요소가 부족한 상태였습니다.',
    solution: '제품의 핵심 장점을 강조하는 그래픽 요소를 강화하고, 컬러 및 타이포를 재정비하여 브랜드 통일성을 구축했습니다. 패키지 구조와 레이아웃을 개선하여 정보 전달력을 높이고, 매대 진열 시 시인성을 고려한 디자인을 적용했습니다.',
    result: '제품의 주목도가 상승하고 브랜드 인지도가 강화되었으며, 소비자에게 제품의 가치가 보다 직관적으로 전달되었습니다. 실제 판매 환경에서 경쟁력을 확보할 수 있는 디자인으로 개선되었습니다.'
  },
  {
    id: 'vmd-display',
    category: 'VMD & Display',
    title: 'VMD & Display Design',
    description: '공간과 브랜드 경험을 연결하는 디자인. 매장에서의 고객 경험을 설계합니다.',
    image: 'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1b9441461773ff742d99aa5349d2c3de3f638b20/dp.jpeg',
    images: [
      'https://raw.githubusercontent.com/boorooboo2932-cpu/portfolio-images/1b9441461773ff742d99aa5349d2c3de3f638b20/dp.jpeg'
    ],
    tags: ['VMD', 'Display', 'Space'],
    overview: '브랜드 경험을 공간으로 확장하기 위해 매장 디스플레이 및 VMD 디자인을 기획하고 실행했습니다. 고객의 시선을 유도하고 체류 시간을 늘리는 공간 구성을 목표로 했습니다.',
    problem: '기존 매장은 상품 배치와 동선이 비효율적이어서 고객의 시선이 분산되고, 제품 노출 효과가 낮은 상태였습니다. 브랜드 컨셉이 공간에 제대로 반영되지 않아 일관성이 부족했습니다.',
    solution: '고객의 이동 동선을 고려하여 공간을 재구성하고, 핵심 제품 중심으로 시선이 집중되는 디스플레이를 설계했습니다. 브랜드 컬러와 그래픽 요소를 활용하여 공간의 통일감을 강화하고, 시각적 포인트를 통해 고객 경험을 개선했습니다.',
    result: '고객의 체류 시간 증가와 제품 노출 효과 향상을 유도했으며, 매장 전체의 브랜드 이미지가 보다 명확하게 전달되었습니다. 실제 판매 환경에서 제품 집중도가 높아지는 결과를 만들었습니다.'
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
