<template>
  <main class="site-layout px-2">
    <div class="text-cetner">
      <Button @click="loginWithNaver()">네이버 로그인</Button>
      <Button @click="kakaoLogin()">카톡 로그인</Button>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const loginWithNaver = () => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: 'wz_qdUgaXrVHxw9Zktgt', // Naver client key
    callbackUrl: `${window.location.origin}/login/callback`,
    callbackHandle: true,
  });
  naverLogin.init();
  naverLogin.reprompt();
};

const kakaoLogin = () => {
  console.log(window.Kakao);
  window.Kakao.Auth.login({
    scope: 'profile_nickname, profile_image, account_email',
    success: getKakaoAccount(),
  });
};

const getKakaoAccount = async () => {
  window.Kakao.API.request({
    url: '/v2/user/me',
    success: async (res) => {
      console.log(res);
      const kakaoAccount = res.kakao_account;
      const kakaoProperties = res.properties;
      let ninkname = kakaoProperties.nickname.trim();
      const profileImage = kakaoProperties.profile_image;
      const email = kakaoAccount?.email;
      //로그인처리구현
      if (!ninkname) {
        nickname = `kakao_${newDate().getTime()}`;
      }

      const params = {
        sid: res.id,
        nickname: ninkname,
        email: email,
        profileImage: profileImage,
        type: 'kakao',
      };

      const { status, data } = await axios.post(
        'https://api.mindpang.com/api/mind/login.php',
        params
      );

      if (status === 200 && data === 'ok') {
        if (route.query.next) {
          location.href = route.query.next;
        } else {
          location.href = 'https://keywordegg.com';
        }
      }
    },
    fail: (error) => {
      console.log(error);
    },
  });
};

const kakaoLogout = () => {
  window.Kakao.Auth.logout((res) => {
    console.log(res);
  });
};

const createKakaoButton = () => {
  console.log(window.Kakao);
  // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
  if (window.Kakao) {
    const kakao = window.Kakao;
    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      kakao.init('86c309b484a84c398f5021450af3ad49');
    }
  }
};
onMounted(() => {
  createKakaoButton();
});

useHead({
  title: '키워드에그 로그인',
  link: [
    {
      rel: 'canonical',
      href: 'https://keywordegg.com/login',
    },
  ],
});
</script>
