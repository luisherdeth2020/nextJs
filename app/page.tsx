import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
      <span className="text-5xl">Hola Mundo</span>
      <Link href={"/about"} className="text-2xl">About Page</Link>
    </main>
  );
}
