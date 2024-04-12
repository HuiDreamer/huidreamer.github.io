var posts=["archives/69.html","archives/70.html","archives/73.html","archives/74.html","archives/75.html","archives/79.html","archives/78.html","archives/adb-xia-zai-shi-yong-fang-fa-ji-chang-yong-ming-ling.html","archives/ai-dao-ri-huo-zhi-ding-ri-qi-wang-ye-zi-dong-bian-hui-dai-ma.html","archives/ao-ye-de-wei-hai.html","archives/bao-ta-mian-ban-openlitespeed-kai-qi-hstsrang-httpsgeng-an-quan.html","archives/cong-debian-10-sheng-ji-dao-debian-11-jiao-cheng.html","archives/huo-qu-you-hua-pt926echao-ji-guan-li-yuan-mi-ma.html","archives/kai-qi-wang-zhan-jian-jin-shi-zeng-qiang-ti-yan-pwa.html","archives/jiang-di-google-adsense-guang-gao-dui-ye-mian-da-kai-su-du-de-ying-xiang.html","archives/linuxxi-tong-vpsgua-zai-shu-ju-pan.html","archives/kai-qi-chrome-edge-zi-dai-duo-xian-cheng-xia-zai-xia-zai-ti-su-ji-shi-bei.html","archives/minecraft-ji-yan-ban-fu-wu-qi-da-jian.html","archives/qi-yong-hstsrang-wang-zhan-httpsfang-wen-geng-jia-an-quan.html","archives/ru-he-rang-zao-can-geng-jian-kang.html","archives/she-zhi-minecraft-ji-yan-ban-fu-wu-qi.html","archives/shu-mei-pai-4b-xin-she-bei-zhe-teng-ji.html","archives/tuo-fa-fa-si-xi-ruan-tou-pi-duo-you-zen-me-ban.html","archives/typechoti-huan-gavatartou-xiang-wei-qqtou-xiang-jiao-cheng.html","archives/wei-shi-me-xu-yao-jie-tang.html","archives/zai-xia-tian-bai-cheng-yi-dao-guang.html","archives/wei-shi-me-yao-gei-wang-zhan-qi-yong-ssl.html","archives/zui-hao-de-yue-du-ti-yan-kindle.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"回忆航线","link":"https://moony.la/","avatar":"https://moony.la/upload/logo.png","descr":"喜欢捣鼓的博主","recommend":false},{"name":"cicode","link":"http://www.cicode.cn/","avatar":"http://www.cicode.cn/favicon.ico","descr":"技术内容分享与在线开发工具","recommend":false},{"name":"陶小桃","link":"https://www.52txr.cn/","avatar":"https://z1.ax1x.com/2023/01/12/pSuDn6H.png","descr":"热衷于分享技术的机械专业小哥哥~","recommend":false},{"name":"FlyingSky's Blog","link":"https://blog.fsky7.com/","avatar":"https://static.fsky7.com/images/9c1d35960f638f3f34fcae0c2d8e9da1.jpg","descr":"每个人的裂痕，最后都会变成故事的花纹。","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };