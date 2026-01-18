import {
  ArrowUpRight,
  Cloud,
  Globe2,
  Headset,
  Network,
  Server,
  ShieldCheck
} from "lucide-react";

export const navLinks = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "공지사항", href: "/services#notice" },
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

export const updates = [
  {
    title: "클라우드 서비스를 찾으시나요?",
    date: "바로가기",
    description: "합리적인 비용의 클라우드 인프라로 비즈니스를 빠르게 시작하세요.",
    tag: "공지"
  },
  {
    title: "글로벌 네트워크",
    date: "24/7",
    description:
      "전 세계 분산 인프라와 상시 모니터링으로 안정적인 성능과 낮은 지연을 유지합니다.",
    tag: "안내"
  },
  {
    title: "기술 지원",
    date: "상시",
    description: "언제든 연결 가능한 24/7 글로벌 기술 지원을 제공합니다.",
    tag: "지원"
  }
];

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
      { label: "공지사항", href: "/services#notice" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "클라우드 플랫폼", href: "/services#cloud" },
      { label: "코로케이션", href: "/services#colocation" },
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
