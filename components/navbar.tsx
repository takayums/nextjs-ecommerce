import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="max-w-screen-xl py-5 flex justify-between items-center container mx-auto">
        <ul className="flex gap-8 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>

        <Link href="/" className="flex items-center gap-2">
          <IoCallOutline size={18} />
          (219) 555-0114
        </Link>
      </nav>
    </header>
  );
}
