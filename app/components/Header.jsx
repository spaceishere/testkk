import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[50px] bg-amber-500 flex justify-between items-center px-20">
      <Link href={"/"}>
        <p>Logo</p>
      </Link>
      <div className="flex gap-4">
        <Link href={"/about"}>
          <p>About</p>
        </Link>
        <Link href={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
