const title = '키워드에그 - 모든 키워드를 한 눈에';
const description =
  '최신 키워드 트렌드와 통계 정보를 손쉽게 확인할 수 있는 웹사이트입니다. 인기 검색어, 트렌드 분석, 경쟁 키워드 조사 등 다양한 데이터를 한눈에 파악할 수 있으며, 사용자 맞춤형 키워드 추천 기능도 제공하여 효과적인 마케팅 전략 수립에 도움을 드립니다. 검색 엔진 최적화(SEO), 콘텐츠 마케팅, 광고 캠페인 등 다양한 분야에서 필요한 핵심 키워드를 간편하게 조회하고 분석하세요.';
const logo = '/logo.png';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      title: title,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.min.js',
          defer: true,
        },
        // {
        //   src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522",
        //   crossorigin: "anonymous",
        //   defer: true,
        // },
        // {
        //   src: '//wcs.naver.net/wcslog.js',
        //   type: 'text/javascript',
        // },
        // {
        //   innerHTML:
        //     'if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "18cf866f0226840"; if(window.wcs) {wcs_do();}',
        //   type: 'text/javascript',
        // },
        // {
        //   innerHTML:
        //     '(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt"; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", "feybr6kyxk");',
        //   type: 'text/javascript',
        // },
        // {
        //   innerHTML:
        //     '!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0"; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,"script", "https://connect.facebook.net/en_US/fbevents.js"); fbq("init", "348659884918044"); fbq("track", "PageView");',
        //   type: 'text/javascript',
        // },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://keywordegg.com',
        },
      ],
      meta: [
        // {
        //   name: 'naver-site-verification',
        //   content: 'cfae9d48e4136a6cc0488f13e108a464fcd96305',
        // },
        // {
        //   name: 'google-site-verification',
        //   content: 'VvMMlxDsaibrAPB29RkBlph_fkpfGw92LPRxcYC0wrA',
        // },
        // {
        //   name: '16cdf8d64fd8bf0',
        //   content: '16cdf8d64fd8bf0',
        // },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'theme-color',
          content: '#E5BA73',
        },
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://mindpang.com',
        },
        {
          property: 'og:article:author',
          content: 'Mindpang',
        },
        {
          property: 'og:site_name',
          content: '마인드팡',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:image',
          content: logo,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@mindpang.com',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: logo,
        },
        {
          name: 'apple-touch-icon',
          content: logo,
        },
      ],
    },
  },
});
