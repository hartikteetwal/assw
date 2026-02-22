import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-colitems-center justify-center bg-zinc-50 font-sans">

      <main className="flex gap-y-[19px] w-full max-w-3xl flex-col items-center justify-between py-22 px-16   sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black ">
            Webkul Assignment
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 ">
            Make a Nextjs project use SSR, SSG, ISR, PPR, Api Cache, Redux And TypeSctipt
            .
          </p>
          
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black px-5 transition-colors "
            href="/products"
            rel="noopener noreferrer"
          >
            Products
          </Link>
        </div>
        </div>
      </main>
    </div>
  );
}
