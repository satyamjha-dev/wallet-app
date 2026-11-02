export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-950 text-white">
      <div className="rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Tailwind is Working! 🚀
        </h1>
        <p className="mt-2 text-red-500 font-medium b">
          Turborepo + Next.js + Tailwind CSS configured successfully.
        </p>
      </div>
    </main>
  );
}
