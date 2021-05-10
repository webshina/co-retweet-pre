<template>
    <div class="out-frame">
      <div class="text-center">
        <!-- タイトル -->
        <div style="position:relative;">
          <img src="~/assets/img/nathan-dumlao-4FHF4kCnj8A-unsplash.jpg" />
          <div style="position:absolute; top:30px; left:30px; color:#fff; white-space: nowrap;">
            <div style="margin:5px 0 0 0; font-size:50px; font-weight:600; letter-spacing: 3px; color:#fff;">
              Co&#45;ReTweet
            </div>
            <div style="margin:40px 0 50px 0; font-size:24px; font-weight:400; color:#fff;"> 
              <span class="mid">本当にいいサービス</span><br>
              をもっと多くのひとに<br>
              使ってもらうために
            </div>
            <div style="margin:0 0 0 0; font-size:24px; font-weight:400; color:#fff;"> 
                <span class="mid">ひとりビジネス</span>のための<br>
                <span class="mid">集客</span>プラットフォーム
            </div>
            <div style="margin:60px 0 0 0;">
              <LazyLoginButton />
            </div>
          </div>
        </div>
      </div>
      <div class="text-right" style="font-size:10px">
        <span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
      </div>
      
      <!-- KATTEにPR -->
      <LazyArticleCarousel />
      
      <div id="describe" class="wrapper">
        <h2 style="color:#333333;">Co-ReTweetとは</h2>
        <div class="indent-20" style="">
            <div class="mini-wrapper">
                <p>自分のサービス/プロダクトには自信がある！<br>
                でも...ユーザーが集まらない！</p>
            </div>

            <div class="mini-wrapper" style="color:#333333;">
                <p>そんな悩みを持っている</p>
                <ul class="bold">
                    <li>個人開発者</li>
                    <li>個人事業主</li>
                    <li>YouTuber</li>
                    <li>個人の飲食店経営者</li>
                    <li>etc.</li>
                </ul>
                <p>すべての個人ビジネスを手掛ける<br>あなたのためのサービスです</p>
                <img src="~/assets/img/rocket.png" class="img">
            </div>

        </div>
    </div>

    <div id="solution" class="wrapper background-gray">
        <h2>Co-ReTweetでできること</h2>
        <ul>
            <li class="check_blue"><span class="mid">本当にいい</span>サービスを<br>多くの人に知ってもらえる</li>
            <li class="check_blue"><span class="mid">お金をかけず</span>にPRできる</li>
            <li class="check_blue">フォロワーが<span class="mid">0人</span>でもバズる！</li>
            <li class="check_blue">これまで関係が薄かった顧客に<br>アプローチできる</li>
        </ul>
        <img class="img" src="~/assets/img/two-business-partners-handshaking.png">
    </div>

    <div id="service-outline" class="wrapper">
        <h2>Co-ReTweetの使い方</h2>
        <div style="background-color:#00aceeff; padding:20px 10px 20px 10px; border-radius: 10px;" >
          <img src="~/assets/img/サービスイメージ.png" width="100%">
        </div>
    </div>

    <div id="profit" class="wrapper">
      <h2 style="color:#333333;">
        Co&#45;ReTweetの特徴
      </h2>

      <h3>
        <li class="check_blue">本当にいいサービスを勝手にPR！</li>
      </h3>
      <p class="indent-20">
        Co-ReTweetに登録いただいたサービスの中から
        「認知されてない本当にいいサービス」をCo-ReTweetがピックアップ＆PRします！<br>

      </p>
      <div style="text-align:center; margin-bottom:50px;">
          <img class="img" src="~/assets/img/relation.png" style="width:150px;">
      </div>

      <h3>
          <li class="check_blue">
              つながりが薄いターゲット顧客にアプローチできる
          </li>
      </h3>
      <p class="indent-20">
          たとえば、あなたがレシピ投稿アプリを開発したとして、<br>
          あなたのフォロワーにターゲット顧客である『主婦層』は多いでしょうか<br><br>
          Co-ReTweetで、あなたのツイートにターゲット顧客のカテゴリ設定をしてください。<br>
          設定したカテゴリと同じカテゴリのユーザーにリツイートされやすくなり、<br>
          それにより、あなたのツイートがターゲット顧客の目に触れやすくなります。<br>
      </p>
      <div style="text-align:center; margin-bottom:50px;">
          <img class="img" src="~/assets/img/two-business-partners-handshaking_2.png" style="width:300px;">
      </div>

      <h3>
          <li class="check_blue">
              1回のツイートの宣伝効果がず～っと続く
          </li>
      </h3>
      <p class="indent-20">
          1回のツイートが人々の目に触れる期間は、通常1～3時間ほどと言われています。<br>
          それ以降は、他のツイートに埋もれて宣伝効果を失ってしまいます。<br>
          かと言って同じ内容を何度もツイートすれば、フォロワーが離れてしまいます。<br>
          <br>
          Co-ReTweetにあなたが拡散してほしいツイートを投稿すれば、<br>
          RT(リツイート)ポイントがあるかぎりずっと人々の目にふれさせることができ、<br>
          さらにリツイートされる可能性があります。
      </p>
      <div style="text-align:center; margin-bottom:50px;">
          <img class="img" src="~/assets/img/graph.png" style="width:300px;">
      </div>

      <h3>
          <li class="check_blue">お金をかけずにPRできる</li>
      </h3>
      <p class="indent-20">
          ほかのユーザーのツイートをリツイートすることで<br>
          RT(リツイート)ポイントを獲得し、<br>
          RT(リツイート)ポイントをつかうことで、<br>
          自分のツイートをリツイートしてもらえます<br>
      </p>
      <div style="text-align:center; margin-bottom:50px;">
          <img class="img" src="~/assets/img/save_money.png" style="width:150px;">
      </div>
    </div>

    <h2 style="color:#333333; font-size:20px;">「いいね」で事前登録！</h2>
    <p class="indent-20">
      事前登録いただいた方は「プレミアム会員」としてご招待。
      あなたのツイートを優先的にページ上部に掲載し、
      リツイートされやすくします。
    </p>

    <div style="margin: 0 0 100px 0;"></div>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  methods: {
    async signinWithTwitter(){
      const url = await this.$axios.$get('http://127.0.0.1:8000/api/twitter/getRedirectURLToTwitterProvider')
      console.log(url)
      window.location.href = url
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.body-class {
  color: #333333;
	margin:0px;
}
.out-frame {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif;
}
p {
    line-height:25px;
    font-size:15px
}

.mid{
  font-size: 110%;
  font-weight: 900;
}

b, strong, .bold{
    font-weight: bold;
	font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI semibold", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic", "Segoe UI", Verdana, Meiryo, sans-serif;
}
#title {
    padding: 100px 0px 100px 0px;
}
.service-name{
    margin: 10px 0px 20px 0px;
    font-size: 50px;
}
.wrapper{
    padding: 10px 10px 10px 10px;
}
.mini-wrapper{
    padding: 10px 0px 20px 0px;
}
.background-gray{
  background-color: #f7f7f7;
}
.background-blue{
  background-color: #00acee;
  color: #fff !important;
  border-top: 0.5px solid #bdecff;
}
ul {
    padding-left: 30px;
}
li {
  padding: 5px 0;
}
.check{
  list-style: none;
	padding-left: 20px;
	line-height: 1.6em;
	background: url(assets/icon/check_white.png) left 0px top 10px no-repeat;
	background-size: 15px auto;
  margin-bottom: 5px;
}
.check_blue{
  list-style: none;
	padding-left: 20px;
	line-height: 1.6em;
	background: url(assets/icon/check_blue.png) left 0px top 15px no-repeat;
	background-size: 15px auto;
  margin-bottom: 5px;
}
.indent-20{
    padding-left: 20px;
}
.img {
    width: 300px;
    margin:40px 0px 40px 0px;
    padding-left: 20px;
}
.service-name{
    font-family: 'Hind', sans-serif;
}
</style>