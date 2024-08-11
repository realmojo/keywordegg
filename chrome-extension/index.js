const getKeywords = async (keyword) => {
  const response = await fetch(
    `https://f5game-bot.herokuapp.com/naver/list?keyword=${keyword}`
  );
  if (response.ok) {
    return response.json();
  } else {
    return '';
  }
};

const setLiHtml = (items) => {
  let liHtml =
    '<tr><td style="padding: 4px 0; border-bottom: 1px solid #ddd">검색어</td><td style="border-bottom: 1px solid #ddd">PC</td><td style="border-bottom: 1px solid #ddd">Mobile</td><td style="border-bottom: 1px solid #ddd">클릭률</td></tr>';

  for (const item of items) {
    const url = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(item.keyword)}`;
    liHtml += `<tr><td style="padding: 3px 0;"><a href="${url}" style="color: #55a13b">${item.keyword}</a></td><td>${item.pc}</td><td>${item.mobile}</td><td>${item.mobileCtr}</td></tr>`;
  }

  let html = `<div style="padding: 10px 19px 16px"><table style="width: 100%;"><tbody>${liHtml}</tbody></table></div>`;
  return html;
};

const setPreviewHtml = (keyword) => {
  const keywordEggLinkHtml =
    '<div><a href="https://keywordegg.com" target="_blank"><svg fill="#60c33c" width="24px" height="24px" viewBox="0 0 64.00 64.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" stroke="#60c33c" stroke-width="0.00064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.28"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-896" y="0" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"></path> <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"></path> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg></a></div>';
  let html = `<section class="sc_new sp_related" id="nx_right_related_count_keywords">
    <div class="api_subject_bx _related_box">
        <div id="keyword-egg" class="mod_title_area" style="justify-content: space-between">
            <div class="title_wrap">
                <h2 class="title">[${keyword}] 연관 검색어 조회량</h2>
            </div>
            ${keywordEggLinkHtml}
        </div>
    </div>
  
    </section>`;

  document.getElementById('sub_pack').insertAdjacentHTML('afterbegin', html);
};

const setHtml = (items) => {
  document
    .getElementById('keyword-egg')
    .insertAdjacentHTML('afterend', setLiHtml(items));
};

const run = async () => {
  const url = location.href;
  if (url.indexOf('https://search.naver.com/search.naver') !== -1) {
    const keyword = document.getElementsByName('oquery')[0].value;
    setPreviewHtml(keyword);
    const items = await getKeywords(keyword);

    if (items.items.length > 0) {
      const d = items.items.slice(0, 50);
      setHtml(d);
    }
  }
};

run();
