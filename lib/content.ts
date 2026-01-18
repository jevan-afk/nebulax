import {
  ArrowUpRight,
  Cloud,
  Database,
  Globe2,
  HardDrive,
  Headset,
  Layers,
  LifeBuoy,
  Lock,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Zap
} from "lucide-react";

export const navLinks = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "공지사항", href: "/notices" },
  { label: "문의", href: "/contact" }
];

export const heroContent = {
  title: "안정적인 인프라와 확장 가능한 클라우드, NebulaX가 함께합니다.",
  subtitle:
    "NebulaX는 클라우드, 데이터센터, 웹 구축까지 비즈니스에 꼭 필요한 디지털 인프라를 통합 제공하는 기술 파트너입니다. 합리적인 비용, 24/7 지원, 유연한 확장으로 고객의 성장을 돕습니다.",
  primaryCta: "상담 요청하기",
  secondaryCta: "서비스 전체 보기",
  highlight: "NebulaX Corp.",
  promo: {
    title: "신규 클라우드 구축을 검토하시나요?",
    action: "무료 컨설팅"
  }
};

export const heroStats = [
  { label: "24/7 모니터링", value: "365일" },
  { label: "유연한 확장", value: "실시간" },
  { label: "전문 기술 지원", value: "전담" }
];

export const missionContent = {
  title: "비즈니스의 성공은 안정적인 기술 기반에서 시작됩니다.",
  body: "NebulaX는 고객의 비즈니스를 보이지 않는 곳에서 가장 튼튼하게 지지하는 기술 파트너입니다. 합리적인 비용의 인프라, 상시 대응 지원, 성장 단계에 맞춘 확장으로 고객이 핵심 비즈니스에 집중할 수 있도록 지원합니다."
};

export const featuredCards = [
  {
    title: "클라우드 플랫폼",
    description: "필요한 만큼 유연하게 확장되는 클라우드 인프라를 제공합니다.",
    icon: Cloud
  },
  {
    title: "코로케이션/IDC",
    description: "안정적인 전력과 네트워크가 보장된 데이터센터 환경을 제공합니다.",
    icon: Server
  },
  {
    title: "웹/디지털 구축",
    description: "브랜드에 맞는 웹사이트 구축과 운영 가이드를 제공합니다.",
    icon: Globe2
  }
];

export const serviceIntro = {
  title: "서비스",
  description:
    "클라우드, IDC, 네트워크, 보안, 백업 등 인프라 전반을 통합 제공하여 효율적인 운영과 안정적인 확장을 지원합니다."
};

export const serviceProcess = [
  {
    title: "요구사항 분석",
    description: "현재 환경과 목표를 진단하여 최적의 인프라 전략을 수립합니다."
  },
  {
    title: "설계 및 구축",
    description: "규모와 예산에 맞춘 구성으로 클라우드/IDC/웹 환경을 설계합니다."
  },
  {
    title: "운영 및 고도화",
    description: "24/7 모니터링과 기술 지원으로 안정적인 운영을 돕습니다."
  }
];

export const servicesDetailed = [
  {
    id: "cloud",
    title: "클라우드 플랫폼",
    summary:
      "비즈니스 성장 속도에 맞춰 유연하게 확장되는 클라우드 인프라를 제공합니다.",
    icon: Cloud,
    highlights: [
      "월별 과금 기반의 합리적인 비용",
      "필요 시 즉시 확장 가능한 리소스",
      "상시 모니터링 및 운영 지원"
    ],
    features: [
      "가상서버, 스토리지, 네트워크 통합 제공",
      "자동 백업 및 스냅샷 지원",
      "보안 정책 및 접근 제어 강화"
    ],
    useCases: ["서비스 신규 런칭", "트래픽 급증 대응", "레거시 이전"],
    deliverables: ["설계 문서", "운영 매뉴얼", "전담 기술 지원"],
    cta: "클라우드 상담 요청"
  },
  {
    id: "colocation",
    title: "코로케이션/IDC",
    summary:
      "통신사 중립 데이터센터에서 안정적인 전력과 네트워크 환경을 제공합니다.",
    icon: Server,
    highlights: [
      "통신사 선택이 가능한 중립 IDC",
      "24/7 상주 인프라 관리",
      "보안·온도·전력 모니터링"
    ],
    features: [
      "랙/케이지 단위 확장",
      "전용 회선 및 네트워크 이중화",
      "출입 통제 및 장비 보호"
    ],
    useCases: ["핵심 서버 운영", "하이브리드 인프라 구성", "고성능 장비 운용"],
    deliverables: ["입주 계획", "시설 점검 리포트", "운영 대응 가이드"],
    cta: "IDC 상담 요청"
  },
  {
    id: "managed",
    title: "매니지드 운영",
    summary: "전담 엔지니어가 운영을 맡아 안정성과 효율성을 높입니다.",
    icon: Headset,
    highlights: ["장애 대응 및 이슈 관리", "정기 리포트 제공", "운영 비용 최적화"],
    features: [
      "24/7 모니터링 및 장애 대응",
      "성능 튜닝 및 자원 최적화",
      "보안 패치 및 업데이트 관리"
    ],
    useCases: ["운영 인력 부족", "서비스 안정성 강화", "운영 자동화"],
    deliverables: ["월간 운영 리포트", "장애 대응 프로세스", "개선 제안서"],
    cta: "운영 상담 요청"
  },
  {
    id: "network",
    title: "네트워크/보안",
    summary: "안전한 네트워크 설계와 보안 운영으로 핵심 데이터를 보호합니다.",
    icon: ShieldCheck,
    highlights: ["네트워크 이중화", "보안 정책 수립", "접근 제어"],
    features: [
      "VPN 및 전용 회선 설계",
      "방화벽/IDS/IPS 운영",
      "보안 로그 모니터링"
    ],
    useCases: ["내부망 구축", "보안 강화", "규정 준수 대응"],
    deliverables: ["보안 정책 문서", "네트워크 구성도", "정기 점검 리포트"],
    cta: "보안 컨설팅"
  },
  {
    id: "backup",
    title: "백업/DR",
    summary: "데이터 보호와 비상 복구 체계를 구축하여 안정성을 높입니다.",
    icon: HardDrive,
    highlights: ["정기 백업", "재해 복구 계획", "복구 테스트"],
    features: [
      "자동 백업 스케줄링",
      "멀티 리전 백업 보관",
      "복구 시나리오 테스트"
    ],
    useCases: ["중요 데이터 보호", "서비스 연속성 확보", "규정 대응"],
    deliverables: ["DR 계획서", "복구 시뮬레이션", "백업 운영 리포트"],
    cta: "백업 상담"
  },
  {
    id: "web",
    title: "웹/디지털 구축",
    summary: "브랜드 경험을 강화하는 웹사이트 구축과 운영 지원을 제공합니다.",
    icon: Monitor,
    highlights: ["UX/UI 설계", "반응형 구축", "운영 가이드"],
    features: [
      "브랜드 톤에 맞춘 디자인",
      "콘텐츠 기획 및 구조 설계",
      "운영을 위한 관리 가이드"
    ],
    useCases: ["기업 홈페이지 구축", "서비스 랜딩 제작", "콘텐츠 리뉴얼"],
    deliverables: ["디자인 시스템", "개발 산출물", "운영 매뉴얼"],
    cta: "웹 구축 상담"
  }
];

export const serviceBenefits = [
  {
    title: "안정적인 운영",
    description: "전담 엔지니어와 24/7 모니터링으로 서비스 안정성을 보장합니다.",
    icon: LifeBuoy
  },
  {
    title: "유연한 확장",
    description: "비즈니스 성장 속도에 맞춰 리소스를 즉시 확장합니다.",
    icon: Zap
  },
  {
    title: "보안 강화",
    description: "보안 정책과 접근 제어로 핵심 데이터를 안전하게 보호합니다.",
    icon: Lock
  },
  {
    title: "통합 관리",
    description: "클라우드부터 웹 구축까지 일관된 운영 체계를 제공합니다.",
    icon: Layers
  }
];

export const updates = [
  {
    slug: "cloud-start-guide",
    title: "클라우드 서비스를 찾으시나요?",
    date: "2024.10.18",
    description: "합리적인 비용의 클라우드 인프라로 비즈니스를 빠르게 시작하세요.",
    tag: "공지",
    author: "NebulaX 운영팀",
    content:
      "합리적인 비용으로 시작할 수 있는 NebulaX 클라우드 플랫폼 안내입니다. 월별 과금 모델, 확장 옵션, 운영 지원 범위를 확인하고 문의하시면 맞춤형 견적을 제공해드립니다."
  },
  {
    slug: "global-network-update",
    title: "글로벌 네트워크 운영 업데이트",
    date: "2024.09.30",
    description: "전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다.",
    tag: "안내",
    author: "NebulaX 인프라팀",
    content:
      "글로벌 네트워크 구간에 대한 모니터링 범위를 확장했습니다. 주요 노드 상태, 응답 속도, 장애 감지 정책을 강화하여 안정적인 성능을 제공합니다."
  },
  {
    slug: "support-availability",
    title: "24/7 기술 지원 안내",
    date: "2024.09.12",
    description: "언제든 연결 가능한 24/7 글로벌 기술 지원을 제공합니다.",
    tag: "지원",
    author: "NebulaX 고객지원",
    content:
      "NebulaX는 24시간 상시 대응 체계를 운영합니다. 장애 대응 및 기술 문의는 대표번호 또는 이메일로 접수해 주세요."
  }
];

export const notices = updates;

export const infoGrid = [
  {
    title: "합리적인 비용의 클라우드 인프라",
    description: "필요할 때 즉시 확장되는 유연한 클라우드 환경을 제공합니다."
  },
  {
    title: "24시간 전문가 기술 지원",
    description: "언제든지 연결 가능한 글로벌 기술 지원팀이 함께합니다."
  },
  {
    title: "사업 성장에 따른 확장",
    description: "비즈니스 규모에 맞춰 시스템을 유연하게 확장할 수 있습니다."
  },
  {
    title: "전 세계 분산 인프라",
    description: "상시 모니터링으로 안정적인 성능을 유지합니다."
  },
  {
    title: "낮은 지연",
    description: "글로벌 네트워크 기반의 빠른 응답 속도를 제공합니다."
  },
  {
    title: "안정적인 성능",
    description: "보이지 않는 곳에서 비즈니스를 가장 튼튼하게 받쳐줍니다."
  }
];

export const globalNetwork = {
  title: "글로벌 네트워크",
  description:
    "전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다.",
  stats: heroStats
};

export const ctaContent = {
  title: "지금 NebulaX와 함께 안정적인 인프라를 구축하세요.",
  description: "클라우드부터 데이터센터, 웹 구축까지 필요한 모든 영역을 지원합니다.",
  primary: "서비스 상담하기",
  secondary: "문의하기",
  icon: ArrowUpRight
};

export const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "회사소개", href: "/about" },
      { label: "사업자 정보", href: "/contact#business" },
      { label: "공지사항", href: "/notices" }
    ]
  },
  {
    title: "Services",
    links: servicesDetailed.map((service) => ({
      label: service.title,
      href: `/services#${service.id}`
    }))
  },
  {
    title: "Support",
    links: [
      { label: "문의", href: "/contact" },
      { label: "기술 지원", href: "/contact#support" },
      { label: "대표번호", href: "tel:1644-2781" }
    ]
  }
];

export const aboutContent = {
  heading: "NebulaX는 디지털 인프라의 모든 순간을 함께합니다",
  body: "네뷸라엑스는 클라우드, 데이터센터, 네트워크, 웹 구축까지 통합 제공하는 기술 파트너입니다. 안정적인 인프라 운영과 유연한 확장을 통해 고객의 핵심 비즈니스가 흔들리지 않도록 지원합니다.",
  valuesHeadline: "고객의 성장에 집중하는 가치",
  valuesBody: "NebulaX는 안정성, 확장성, 신뢰를 중심으로 고객의 성장을 지원합니다."
};

export const values = [
  {
    title: "기술 파트너십",
    description: "고객의 비즈니스 목표를 함께 고민하는 파트너로서 함께합니다.",
    icon: ShieldCheck
  },
  {
    title: "유연한 확장",
    description: "필요할 때 바로 확장 가능한 인프라로 성장 속도를 지원합니다.",
    icon: Network
  },
  {
    title: "24시간 지원",
    description: "글로벌 기술 지원팀이 언제든지 대응합니다.",
    icon: Headset
  }
];

export const contactContent = {
  heading: "네뷸라엑스에 문의하세요",
  body: "서비스 상담, 클라우드 인프라, 웹 구축까지 NebulaX가 함께합니다.",
  items: [
    { label: "회사명", value: "네뷸라엑스 주식회사" },
    { label: "사업자등록번호", value: "257-81-03903" },
    { label: "주소", value: "대전광역시 유성구 장대로 106, 2층 J182호" },
    { label: "대표번호", value: "1644-2781" },
    { label: "이메일", value: "contact@nebulax.digital" }
  ]
};

export const businessInfo = {
  company: "네뷸라엑스 주식회사",
  registration: "257-81-03903",
  address: "대전광역시 유성구 장대로 106, 2층 J182호",
  phone: "1644-2781",
  trademark: "Contell:DC is a registered trademark of NebulaX, Corp."
};

export const faqItems = [
  {
    question: "서비스 상담은 어떻게 진행되나요?",
    answer:
      "요구사항을 접수한 뒤 현황 분석 → 설계 제안 → 구축/운영 순으로 진행됩니다."
  },
  {
    question: "클라우드와 IDC를 함께 사용할 수 있나요?",
    answer: "하이브리드 구성을 통해 클라우드와 IDC를 동시에 운영할 수 있습니다."
  },
  {
    question: "기술 지원은 어떤 방식으로 제공되나요?",
    answer: "전화/이메일/원격 지원을 통해 24/7 대응 체계를 제공합니다."
  }
];
