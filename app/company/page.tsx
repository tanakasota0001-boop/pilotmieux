// app/company/page.tsx

import React from "react";
import Image from "next/image";

type CompanyInfo = {
  name: string;
  established: string;
  address: string;
  representative: string;
  employees: string;
  business: string;
};

const companyInfo: CompanyInfo = {
  name: "株式会社パイロットミュー（pilotmieux, Inc.）",
  established: "2026年3月17日",
  address: "長野県松本市笹部1-4-8",
  representative: "椿 謙一",
  employees: "3名",
  business: "経営コンサルティングおよびDX・AI導入支援",
};

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="grid grid-cols-[160px_1fr] border-b border-gray-100 py-5">
      <div className="text-sm tracking-wide text-gray-400">
        {label}
      </div>

      <div className="text-gray-800">
        {value}
      </div>
    </div>
  );
};

const CompanyPage = () => {
  return (
    <main className="bg-[#fafafa] text-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">

        {/* Title */}
        <section className="mb-32">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Company
          </h1>
        </section>

{/* MVV */}

<section className="mb-52">


  <div className="space-y-40">

    {/* Mission */}
    <div>
      <p className="text-sm tracking-[0.25em] text-gray-400 uppercase mb-8">
        Our Mission
      </p>

      <div className="w-12 h-[1px] bg-gray-300 mb-10" />

      <h2 className="text-[24px] md:text-[36px] leading-[1.5] font-light tracking-tight">
        対話を通じて
        <br />
        経営の本質を見つけ、
        <br />
        成長の道筋をともに描く。
      </h2>
    </div>

    {/* Vision */}
    <div>
      <p className="text-sm tracking-[0.25em] text-gray-400 uppercase mb-8">
        Our Vision
      </p>

      <div className="w-12 h-[1px] bg-gray-300 mb-10" />

      <h2 className="text-[24px] md:text-[36px] leading-[1.5] font-light tracking-tight">
        挑戦する企業が、
        <br />
        迷わず前へ進める社会へ。
      </h2>
    </div>

    {/* Value */}
    <div>
      <p className="text-sm tracking-[0.25em] text-gray-400 uppercase mb-8">
        Our Value
      </p>

      <div className="w-12 h-[1px] bg-gray-300 mb-10" />

      <div className="text-[24px] md:text-[36px] leading-[1.7] font-light tracking-tight">
        <p>対話を、起点に。</p>
        <p>本質を、道筋に。</p>
        <p>実行を、成果に。</p>
      </div>
    </div>

  </div>
</section>

        {/* CEO Message */}
        <section className="mb-40">

          <div className="mb-20">
            <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
              Message
            </p>
          </div>

          <div className="grid md:grid-cols-[320px_1fr] gap-16 items-start">

            {/* Image */}
            <div>
              <Image
                src="/images/ceo.jpg"
                alt="代表取締役 椿謙一"
                width={320}
                height={420}
                className="rounded-3xl object-cover"
              />

              <div className="mt-6">
                <p className="text-xl font-medium">
                  椿 謙一
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  代表取締役社長 / CEO
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="max-w-3xl space-y-8 text-[15px] leading-[2.3] text-gray-700">

              <p>
                当社は、
                「対話を通じて経営の本質を見つけ、成長の道筋をともに描く」
                というMissionを掲げ、挑戦する企業の右腕となることを目指して設立しました。
              </p>

              <p>
                AI時代の到来により、世の中の働き方や経営のあり方は大きく変わり始めています。
                一方で、どれだけ技術が進化しても、企業の本質的な課題は、
                経営者との対話の中にこそ見えてくると考えています。
              </p>

              <p>
                私はこれまで、大手製造業にてプロダクトリーダーとして設計から製造までを9年間主導し、
                その後、事業戦略部門にて数百億円規模のマーケティング・事業戦略に携わってきました。
                また、ChatGPTの登場とともに自ら生成AIを学び、実際の業務現場に実装し、
                業務効率化やDX推進にも取り組んできました。
              </p>

              <p>
                これまでの経験から、事業を動かす難しさ、現場に入り込む大切さ、
                そして何より対話の重要性を強く認識しました。
                机上の正論ではなく、共に考え、共に動き、成果まで伴走する存在が、
                このAI時代には必要だと信じています。
              </p>

              <p>
                プライベートでは、幼少期からスポーツに打ち込み、
                硬式テニスではインターハイ、全国選抜などを経験してきました。
                何かに取り組むなら、結果が出るまで諦めない。
                この姿勢は、私自身の仕事観であり、
                パイロットミューの伴走支援に対する姿勢そのものでもあります。
              </p>

              <p>
                社名である「パイロットミュー」は、
                伴走者、副操縦士を意味する「Co-Pilot」と、
                フランス語で「より良い」を意味する「Mieux」を掛け合わせたものです。
              </p>

              <p>
                経営者が経営に集中できるように。
                挑戦したい企業が、AI時代に取り残されることなく、
                自らの可能性を広げていけるように。
                そして、企業の成長が、そこで働く人、
                関わるすべての人、地域の豊かさへとつながっていくように。
              </p>

              <p>
                パイロットミューは、
                対話を起点に、本質を道筋に変え、
                実行を成果へとつなげる伴走者であり続けます。
              </p>

            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section>

          <div className="mb-16">
            <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
              Company Profile
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl px-8 py-4">
            <InfoRow label="会社名" value={companyInfo.name} />
            <InfoRow label="設立日" value={companyInfo.established} />
            <InfoRow label="本社所在地" value={companyInfo.address} />
            <InfoRow label="代表取締役社長" value={companyInfo.representative} />
            <InfoRow label="従業員数" value={companyInfo.employees} />
            <InfoRow label="事業内容" value={companyInfo.business} />
          </div>

        </section>

      </div>
    </main>
  );
};

export default CompanyPage;