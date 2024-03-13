import Image from "next/image";
import Banner1 from "@/assets/Banner.jpg";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Banner() {
  return (
    <section>
      <div className="max-w-screen-xl container mx-auto mt-16">
        <div className="relative h-[368px] w-full rounded-lg overflow-hidden">
          <Image src={Banner1} className="object-cover" alt="Banner" />
          <div className="absolute top-[60px] text-white right-[50px]">
            <p className="mb-3 capitalize">SUMMER SALE</p>
            <p className="text-[56px] capitalize font-medium">
              <span className="text-warning">37%</span> OFF
            </p>
            <p className="w-[441px] mb-[28px] text-gray-300">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <div className="">
              <Link
                href="#"
                className="px-8 py-[14px] rounded-full bg-primary text-sm font-semibold gap-2 text-white inline-flex items-center justify-center"
              >
                Shop Now
                <AiOutlineArrowRight size={20} className="font-semibold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
