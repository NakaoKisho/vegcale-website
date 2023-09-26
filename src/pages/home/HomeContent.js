import TwitterIcon from "./../../assets/svg/twitter.svg";
import GithubIcon from "./../../assets/svg/github.svg";
import "./Home.css";

const homeContent = [
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/"><img src="https://vegcale.com/home/wp-content/uploads/2022/10/cropped-macha-scaled-2.webp" alt="link to my blog top page" className="img-fit" /></a>,
    featured: true,
    title: "ブログ(Kotlin, Android, GAS etc.)",
    subtitle: "https://vegcale.com/home/"
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="/portfolio"><img src="https://github.com/NakaoKisho/clean-architecture/blob/master/images/architecture_app_Nexus5.gif?raw=true" alt="link to Android earthquake map app(Kotlin) portfolio" className="img-fit" /></a>,
    featured: false,
    title: "地震マップ(開発中, Kotlin, Jetpack Compose)",
    subtitle: "githubに公開"
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="/portfolio"><img src="https://firebasestorage.googleapis.com/v0/b/vegcale-app.appspot.com/o/article%2Fvase1.webp?alt=media&token=fc8e054d-d79d-41b1-bae5-0f3652fb2bd8" alt="link to Android vegcale app(Java) portfolio" className="img-fit" /></a>,
    featured: false,
    title: "Vegcale(Java)",
    subtitle: "githubとストアに公開"
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/2022/10/23/convert-text-encoding-from-sjis-to-utf8-gas/"><img src="https://vegcale.com/home/wp-content/uploads/2022/10/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2022-10-23-23.46.41.webp" alt="link to github" className="img-fit-for-svg" /></a>,
    featured: true,
    title: "SJISからUTF8に変換(GAS)",
    subtitle: "ブログ記事(GoogleAppsScript)",
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/2022/10/24/auto-fill-google-form-by-qrcode-without-coding/"><img src="https://vegcale.com/home/wp-content/uploads/2022/10/qr-code-3970681__340.webp" alt="link to github" className="img-fit-for-svg" /></a>,
    featured: true,
    title: "QRコードを読み取ってGoogle Formに自動で反映！",
    subtitle: "ブログ記事(Kotlin, Android)",
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/2023/09/16/android-kotlin-how-to-solve-the-offset-was-read-befoer-initialized-error/"><img src="https://vegcale.com/home/wp-content/uploads/2023/09/Screenshot_20230916_121422-e1694834606777-700x485.webp" alt="link to my blog" className="img-fit-for-svg" /></a>,
    featured: false,
    title: "The offset was read before being initialized の対処法",
    subtitle: "ブログ記事(Kotlin, Android)",
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/2023/07/02/android-what-is-async-launch-withcontext/"><img src="https://vegcale.com/home/wp-content/uploads/2023/04/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2023-04-10-21.47.29-700x485.png" alt="link to my blog" className="img-fit-for-svg" /></a>,
    featured: false,
    title: "Android async・launch・withContextってなに？",
    subtitle: "ブログ記事(Kotlin, Android)",
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/2023/06/29/android-what-is-hilt/"><img src="https://vegcale.com/home/wp-content/uploads/2023/04/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2023-04-10-21.47.29-700x485.png" alt="link to my blog" className="img-fit-for-svg" /></a>,
    featured: false,
    title: "Android Hiltってなに？",
    subtitle: "ブログ記事(Kotlin, Android)",
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://vegcale.com/home/2023/04/01/kotlin-scaffold/"><img src="https://vegcale.com/home/wp-content/uploads/2023/04/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2023-04-01-17.02.19-700x485.webp" alt="link to my blog" className="img-fit-for-svg" /></a>,
    featured: false,
    title: "ザクっと理解するKotlin Scaffold",
    subtitle: "ブログ記事(Kotlin, Android)",
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://github.com/NakaoKisho"><img src={GithubIcon} alt="link to my github account" className="img-fit-for-svg" /></a>,
    featured: false,
    title: "Github"
  },
  {
    content: <a style={{height: '100%', width: '100%'}} href="https://twitter.com/OCL89894812"><img src={TwitterIcon} alt="link to my X(twitter) account" className="img-fit-for-svg" /></a>,
    featured: false,
    title: "X (Twitter)"
  },
];

export default homeContent