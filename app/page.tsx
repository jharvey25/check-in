import Link from "next/link";
import { TbReportAnalytics } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <PiFlowerLotus size={180} />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Log in</li>
          <li>Take assessment</li>
          <li>???</li>
          <li>Profit</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/assessments"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <TbReportAnalytics size={20} />
            Get Started
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jharvey25/check-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={16}/>
          Code
        </a>
      </footer>
    </div>
  );
}
