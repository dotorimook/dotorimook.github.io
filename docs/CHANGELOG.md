# 프로젝트 변경사항 요약

## 최신 변경사항 (2025-02-18)

### SEO 대폭 개선

이번 업데이트에서는 블로그의 검색엔진 최적화(SEO)를 대폭 개선했습니다.

#### 주요 변경 파일

| 파일 | 변경 내용 |
|------|----------|
| `src/layouts/Layout.astro` | 메타 태그, OG 태그, Google 인증, 언어 설정 |
| `src/pages/[...slug].astro` | JSON-LD 스키마, 이미지 스타일 개선 |

#### 추가된 기능

1. **Google Search Console 인증**
   - 사이트 소유권 확인 메타 태그 추가

2. **JSON-LD 구조화된 데이터**
   - Article 스키마 자동 생성
   - 검색 결과 Rich Snippet 지원

3. **Open Graph 개선**
   - 이미지 크기(1200x630) 명시
   - 사이트명, 언어 설정 추가

4. **언어 설정**
   - `ko` → `ko-KR`로 개선

5. **Core Web Vitals**
   - 폰트 CDN preconnect
   - 뷰포트 및 테마 색상 설정
   - 이미지 CLS 방지 스타일

#### 새로운 폴터 구조

```
docs/
├── README.md                          # 작업 기록 가이드
└── records/
    └── 2025-02-18-seo-improvements.md # SEO 작업 상세 로그
```

---

## 이전 변경사항

### 2025-02-XX (예시)
- 항목 1
- 항목 2

---

## 변경사항 조회 방법

### Git 로그
```bash
git log --oneline --since="2025-02-01"
```

### 특정 파일 변경 이력
```bash
git log -p src/layouts/Layout.astro
```

---

*이 문서는 주요 변경사항을 요약합니다. 상세한 작업 내용은 `docs/records/` 폴터의 날짜별 문서를 참고하세요.*
