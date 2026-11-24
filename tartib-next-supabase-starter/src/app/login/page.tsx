import Link from "next/link";
import { Header } from "@/components/header";

export default async function LoginPage({ searchParams }: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  const { error } = await searchParams;
  return (
    <main className="shell">
      <Header />
      <section className="page-head"><div className="eyebrow">حسابك في ترتّب</div><h1>تسجيل الدخول</h1></section>
      <section className="panel">
        {error === "callback" && <p role="alert">تعذّر إكمال تسجيل الدخول بهذا الرابط. لم يتم تسجيل دخولك.</p>}
        <p>سنفعّل تسجيل الدخول بالبريد الإلكتروني عبر Supabase بعد إضافة إعدادات المشروع.</p>
        <p className="note">هذه الشاشة هي واجهة أولية فقط؛ لا ترسل بيانات الدخول قبل إكمال الربط.</p>
        <div className="field"><label htmlFor="email">البريد الإلكتروني</label><input id="email" type="email" placeholder="name@example.com" disabled /></div>
        <button className="btn btn-primary" disabled>إرسال رابط الدخول — سيتم تفعيله لاحقًا</button>
        <p className="note"><Link href="/">العودة للرئيسية</Link></p>
      </section>
    </main>
  );
}
