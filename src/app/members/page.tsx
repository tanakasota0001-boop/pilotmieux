import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { MemberList } from "@/components/members/MemberList";

export const metadata: Metadata = {
  title: "チーム紹介",
  description:
    "株式会社パイロットミューのチームメンバーをご紹介します。技術・現場・事業・AI活用それぞれの専門性を持つメンバーが、地方企業の成長に伴走します。",
  alternates: { canonical: "/members" },
};

export default function MembersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badgeContent={<><Sparkles className="h-3 w-3" />Members</>}
        badgeColorClass="bg-emerald-50 text-emerald-600"
        title="チーム紹介"
        description="技術、現場、事業、AI活用。それぞれの専門性を横断しながら、地方企業の成長に伴走するメンバーです。"
        accentColor="bg-emerald-100/50"
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MemberList />
        </div>
      </section>
    </div>
  );
}
