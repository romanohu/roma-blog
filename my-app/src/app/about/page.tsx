import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="no-tailwind">
      <h1>About Me</h1>
      <p>
        X(Twitter)：<Link href={"https://x.com/romanohu794"}>@romanohu794</Link>
        <br />
        GitHub：<Link href={"https://github.com/romanohu"}>@romanohu</Link>
      </p>
      <h4>所属</h4>
       <ul>
        <li>筑波大学 知識情報・図書館学類</li>
        <li>筑波大学現代視覚文化研究会(25年度会長)</li>
        <li>筑波大学ワンダーフォーゲルクラブ</li>
       </ul>
      <h4>資格等</h4>
        <ul>
          <li>基本情報技術者(2024/12)</li>
          <li>応用情報技術者(2025/4)</li>
          <li>(データベーススペシャリスト受験予定(2025/10)) </li>
        </ul>
      <h4>趣味</h4>
        <ul>
          <li>映画( 「TENET」，「BLADE RUNNER」，「デッドプール2」 )</li>
          <li>ゲーム( 「モンスターハンター」，「学園アイドルマスター」，「崩壊スターレイル」，「DeathStranding」等)</li>
          <li>アニメ( 「SSSS.DYNAZENON」，「閃光のハサウェイ」等)</li>
          <li>音楽( 「サカナクション」 )</li>
        </ul>

     
    </div>
  );
}