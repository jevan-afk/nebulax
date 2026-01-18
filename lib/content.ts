import {
  ArrowUpRight,
  Cloud,
  Globe2,
  Headset,
  Network,
  Server,
  ShieldCheck,
  Cpu,
  Database,
  Settings,
  Building2,
  LifeBuoy,
  MonitorCheck
} from "lucide-react";

export const navLinks = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "공지사항", href: "/notices" },
  { label: "문의", href: "/contact" }
];

export const heroContent = {
  title: "성공적인 비즈니스를 위한 가장 확실한 기술 파트너.",
  subtitle:
    "우리는 단순한 서비스 회사가 아닙니다. 고객의 비즈니스를 함께 고민하고, 성장의 모든 기술 여정을 책임지는 든든한 동반자가 되겠습니다.",
  primaryCta: "서비스 상담하기",
  secondaryCta: "클라우드 서비스 바로가기",
  highlight: "NebulaX Corp.",
  promo: {
    title: "클라우드 서비스를 찾으시나요?",
    action: "바로가기"
  }
};

export const missionContent = {
  title: "비즈니스의 성공은 안정적인 기술 위에서 시작됩니다.",
  body: "네뷸라엑스는 보이지 않는 곳에서 고객의 비즈니스를 가장 튼튼하게 받쳐주는 기술 파트너입니다. 합리적인 비용의 클라우드 인프라, 24시간 든든한 전문가의 기술 지원, 그리고 사업 성장에 따라 유연하게 확장되는 시스템을 통해 고객이 오직 비즈니스에만 집중할 수 있도록 돕습니다."
};

export const processSteps = [
  {
    title: "상담 및 진단",
    description: "요구사항을 분석하고 현재 인프라 환경을 진단합니다."
  },
  {
    title: "설계 및 구축",
    description: "비즈니스 규모에 맞춰 클라우드·IDC·웹 구축 전략을 설계합니다."
  },
  {
    title: "운영 및 지원",
    description: "24/7 모니터링과 기술 지원으로 안정적인 운영을 돕습니다."
  }
];

export const serviceIntro = {
  title: "서비스",
  description:
    "합리적인 비용으로 시작해 필요할 때 즉시 확장되는 클라우드 인프라와, 언제든 연결 가능한 24/7 글로벌 기술 지원을 제공합니다. 전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다."
};

export const featuredCards = [
  {
    title: "클라우드 플랫폼",
    description: "월별 가격 모델과 맞춤형 솔루션을 고품질과 거품 없는 가격으로 제공합니다.",
    icon: Cloud
  },
  {
    title: "코로케이션",
    description: "인터넷 서비스 공급자를 선택할 수 있는 통신사 중립 데이터 센터를 제공합니다.",
    icon: Server
  },
  {
    title: "웹 사이트",
    description: "회사나 가게에 꼭 필요한 홈페이지, 처음부터 끝까지 책임지고 만들어 드립니다.",
    icon: Globe2
  }
];

export const serviceCategories = [
  {
    id: "cloud",
    title: "클라우드 플랫폼",
    description:
      "유연한 확장과 월별 과금 모델로 시작 부담을 낮춘 클라우드 서비스를 제공합니다.",
    icon: Cloud,
    offerings: [
      "퍼블릭/프라이빗 클라우드 구축",
      "가상 서버, 스토리지, 네트워크",
      "백업·DR 구성",
      "사용량 기반 과금 컨설팅"
    ]
  },
  {
    id: "colocation",
    title: "코로케이션 (IDC)",
    description:
      "통신사 중립 데이터 센터에서 안정적인 전력·네트워크 환경을 제공합니다.",
    icon: Building2,
    offerings: [
      "랙·케이지 단위 상면 제공",
      "상시 온습도·전력 모니터링",
      "보안 출입 통제",
      "원격 Hands 지원"
    ]
  },
  {
    id: "network",
    title: "네트워크 & 회선",
    description: "글로벌 네트워크 기반의 낮은 지연과 안정적인 전송 품질을 지원합니다.",
    icon: Network,
    offerings: [
      "전용 회선 및 VPN 구성",
      "로드밸런싱/트래픽 최적화",
      "네트워크 설계 및 장애 대응",
      "다중 회선 이중화"
    ]
  },
  {
    id: "managed",
    title: "매니지드 운영",
    description:
      "24/7 모니터링과 전문가 운영 지원으로 시스템 안정성을 확보합니다.",
    icon: MonitorCheck,
    offerings: [
      "24시간 모니터링",
      "장애 대응 및 리포팅",
      "보안 패치 및 유지보수",
      "운영 자동화 컨설팅"
    ]
  },
  {
    id: "security",
    title: "보안 서비스",
    description: "보안 위협에 대비한 대응 체계와 운영 가이드를 제공합니다.",
    icon: ShieldCheck,
    offerings: [
      "보안 정책 수립",
      "취약점 점검",
      "접근 제어 및 로그 관리",
      "보안 운영 교육"
    ]
  },
  {
    id: "website",
    title: "웹사이트 구축",
    description:
      "브랜드 톤에 맞춘 UX/UI 설계부터 제작·운영까지 책임집니다.",
    icon: Globe2,
    offerings: [
      "맞춤형 웹/모바일 UX 설계",
      "반응형 웹 구축",
      "콘텐츠 구성 및 제작",
      "운영 가이드 및 유지보수"
    ]
  }
];

export const serviceDetails = [
  {
    id: "cloud",
    title: "클라우드 플랫폼",
    description:
      "월별 가격 모델과 맞춤형 구성으로 유연하게 시작하고, 비즈니스 성장에 맞춰 즉시 확장할 수 있습니다.",
    points: [
      "합리적인 비용의 클라우드 인프라",
      "필요 시 즉시 확장 가능한 리소스",
      "상시 모니터링으로 안정적인 성능 유지",
      "데이터 백업 및 DR 설계 지원"
    ]
  },
  {
    id: "colocation",
    title: "코로케이션",
    description:
      "통신사 중립 데이터 센터에서 안정적인 전력·네트워크 환경을 제공하여 핵심 장비를 안전하게 운영합니다.",
    points: [
      "통신사 선택이 가능한 중립 IDC",
      "24/7 상주 인프라 관리",
      "보안·온도·전력 모니터링",
      "원격 장애 대응 서비스"
    ]
  },
  {
    id: "network",
    title: "네트워크 & 회선",
    description:
      "글로벌 네트워크 기반의 연결을 통해 안정적인 통신 환경과 저지연 성능을 제공합니다.",
    points: [
      "전용 회선 및 VPN 구축",
      "트래픽 분산 및 로드밸런싱",
      "다중 회선 이중화",
      "네트워크 장애 대응"
    ]
  },
  {
    id: "managed",
    title: "매니지드 운영",
    description:
      "24시간 모니터링과 전문가 지원으로 고객 시스템을 안정적으로 운영합니다.",
    points: [
      "24/7 모니터링",
      "장애 대응 및 정기 리포팅",
      "보안 패치 운영",
      "운영 자동화 컨설팅"
    ]
  },
  {
    id: "website",
    title: "웹 사이트",
    description:
      "회사와 브랜드에 꼭 필요한 홈페이지를 기획부터 제작, 운영까지 책임지고 제공합니다.",
    points: [
      "브랜드 톤에 맞춘 UX/UI 설계",
      "콘텐츠 구성 및 반응형 구축",
      "운영 편의를 위한 관리 가이드",
      "운영 대행 및 유지보수"
    ]
  }
];

export const serviceStacks = [
  {
    title: "인프라 구성",
    description: "Cloud, IDC, Network 기반의 안정적 인프라 설계",
    icon: Cpu
  },
  {
    title: "데이터 운영",
    description: "백업, 스토리지, DB 운영 최적화",
    icon: Database
  },
  {
    title: "운영 자동화",
    description: "모니터링과 운영 자동화를 통한 효율 개선",
    icon: Settings
  },
  {
    title: "지원 체계",
    description: "24/7 기술 지원 및 긴급 대응",
    icon: LifeBuoy
  }
];

export const notices = [
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
    description:
      "전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다.",
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
  },
  {
    slug: "website-build-package",
    title: "웹사이트 구축 패키지 업데이트",
    date: "2024.08.21",
    description: "브랜드 맞춤 UX/UI와 콘텐츠 기획이 포함된 웹 구축 패키지를 제공합니다.",
    tag: "업데이트",
    author: "NebulaX 웹팀",
    content:
      "웹사이트 구축 패키지에 콘텐츠 전략 수립과 운영 가이드를 포함했습니다. 프로젝트 규모에 따른 일정과 예산 상담도 지원합니다."
  }
];

export const updates = notices.slice(0, 3);

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
    "합리적인 비용으로 시작해 필요할 때 즉시 확장되는 클라우드 인프라와, 언제든 연결 가능한 24/7 글로벌 기술 지원을 제공합니다. 전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다.",
  stats: [
    { label: "상시 모니터링", value: "24/7" },
    { label: "유연한 확장", value: "즉시" },
    { label: "안정적인 성능", value: "상시" }
  ]
};

export const stats = globalNetwork.stats;

export const ctaContent = {
  title: "클라우드 서비스를 찾으시나요?",
  description: "지금 NebulaX와 함께 합리적인 비용과 안정적인 인프라를 경험해보세요.",
  primary: "바로가기",
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
    links: [
      { label: "클라우드 플랫폼", href: "/services#cloud" },
      { label: "코로케이션", href: "/services#colocation" },
      { label: "네트워크", href: "/services#network" },
      { label: "매니지드 운영", href: "/services#managed" },
      { label: "웹 사이트", href: "/services#website" }
    ]
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
  heading: "비즈니스의 성공은 안정적인 기술 위에서 시작됩니다",
  body: "네뷸라엑스는 보이지 않는 곳에서 고객의 비즈니스를 가장 튼튼하게 받쳐주는 기술 파트너입니다. 합리적인 비용의 클라우드 인프라, 24시간 든든한 전문가의 기술 지원, 그리고 사업 성장에 따라 유연하게 확장되는 시스템으로 고객이 오직 비즈니스에만 집중할 수 있도록 돕습니다."
};

export const aboutHighlights = [
  {
    title: "기술 중심 파트너십",
    description: "고객 비즈니스 목표를 함께 고민하며 전략을 설계합니다."
  },
  {
    title: "신뢰 가능한 운영",
    description: "인프라 안정성과 보안을 최우선으로 운영합니다."
  },
  {
    title: "유연한 확장",
    description: "성장 속도에 맞춘 유연한 확장 옵션을 제공합니다."
  }
];

export const serviceHighlights = [
  {
    title: "글로벌 네트워크",
    description: "전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다.",
    icon: Network
  },
  {
    title: "24/7 기술 지원",
    description: "언제든 연결 가능한 글로벌 기술 지원을 제공합니다.",
    icon: Headset
  },
  {
    title: "안정적인 보안 운영",
    description: "비즈니스 핵심 데이터를 보호하기 위한 보안 운영을 제공합니다.",
    icon: ShieldCheck
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

export const contactTopics = [
  "클라우드/IDC 상담",
  "네트워크/회선 문의",
  "웹사이트 제작",
  "운영/보안 컨설팅",
  "기타 문의"
];

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

export const businessInfo = {
  company: "네뷸라엑스 주식회사",
  registration: "257-81-03903",
  address: "대전광역시 유성구 장대로 106, 2층 J182호",
  phone: "1644-2781",
  trademark: "Contell:DC is a registered trademark of NebulaX, Corp."
};
