# NebulaX Design System Clone

이 프로젝트는 Kakao Corp 페이지 구조와 인터랙션을 참고하여 NebulaX 브랜드 콘텐츠로 재구성한 UI입니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 콘텐츠 수정 위치

- `lib/content.ts`: NebulaX 텍스트/링크/카드 데이터
- `components/*`: 섹션별 UI 컴포넌트 (Hero, FeatureGrid, UpdatesList 등)
- `app/*/page.tsx`: 각 페이지 레이아웃 구성

## Kakao 섹션 매핑

- Hero: `components/Hero.tsx`
- Feature Grid: `components/FeatureGrid.tsx`
- Updates/News: `components/UpdatesList.tsx`
- Info Grid: `components/InfoGrid.tsx`
- CTA Band: `components/CTASection.tsx`
- Header/Footer: `components/Header.tsx`, `components/Footer.tsx`
