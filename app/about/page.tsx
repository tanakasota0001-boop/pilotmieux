// app/about/page.tsx

import React from "react";

type CompanyInfo = {
  name: string;
  established: string;
  address: string;
  representative: string;
  capital: string;
  employees: string;
  business: string;
};

const companyInfo: CompanyInfo = {
  name: "株式会社パイロットミュー（pilotmieux. Inc.）",
  established: "2026年3月17日",
  address: "長野県松本市笹部1-4-8",
  representative: "椿　謙一",
  capital: "30万円",
  employees: "3名",
  business: "経営コンサルティングおよびDX・AI導入支援"
};

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex border-b py-3">
      <div className="w-1/3 font-medium text-gray-600">{label}</div>
      <div className="w-2/3 text-gray-900">{value}</div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">About</h1>

      <section className="bg-white rounded-2xl shadow-sm p-6">
        <InfoRow label="会社名" value={companyInfo.name} />
        <InfoRow label="設立日" value={companyInfo.established} />
        <InfoRow label="本社所在地" value={companyInfo.address} />
        <InfoRow label="代表取締役社長" value={companyInfo.representative} />
        <InfoRow label="資本金" value={companyInfo.capital} />
        <InfoRow label="従業員数" value={companyInfo.employees} />
        <InfoRow label="事業内容" value={companyInfo.business} />
      </section>
    </main>
  );
};

export default AboutPage;