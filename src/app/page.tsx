import AuditContainer from "@/components/AuditContainer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              SpendWise AI
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:block">
              <a
                href="https://github.com"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Stop overpaying for AI.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-zinc-500">
            Identify redundant subscriptions, optimize seat counts, and save thousands on your AI tech stack.
          </p>
        </div>

        <AuditContainer />
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500">
          &copy; 2026 SpendWise AI. Built for Credex.
        </p>
      </footer>
    </div>
  );
}
