import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>About Me</h1>
      <p>筑波大学 情報学群</p>
      <p>
        X(Twitter)：<Link href={"https://x.com/romanohu794"}>@romanohu794</Link>
        <br />
        GitHub：<Link href={"https://github.com/romanohu"}>@romanohu</Link>
      </p>
      <h4>資格等</h4>
        <ul>
          <li>基本情報技術者(2024/12)</li>
          <li>応用情報技術者(2025/4) -- 受験結果待ち</li>
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