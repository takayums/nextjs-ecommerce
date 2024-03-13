import Image from "next/image";
import Image1 from "@/assets/Image.jpg";
import Image2 from "@/assets/Image1.jpg";
import Image3 from "@/assets/Image2.jpg";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Features() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto container mt-14">
        <div className="grid grid-cols-3 gap-6">
          {/*Card 1*/}
          <div className="h-[536px] relative overflow-hidden rounded-lg">
            <Image
              src={Image2}
              alt="Banner"
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="absolute text-white top-16 inset-x-0">
              <p className="text-center text-4xl font-semibold mb-4">
                Sale of the Month
              </p>
              <div className="mx-[67px] grid place-items-center grid-cols-4 text-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <p className="flex flex-col items-center">
                    <span className="font-normal text-2xl">00</span>
                    <span>DAYS</span>
                  </p>
                  <p className="text-2xl self-start">:</p>
                </div>
                <div className="justify-center flex items-center gap-2">
                  <p className="flex flex-col items-center">
                    <span className="font-normal text-2xl">12</span>
                    <span>HOURS</span>
                  </p>
                  <p className="text-2xl self-start">:</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="flex flex-col items-center">
                    <span className="font-normal text-2xl">12</span>
                    <span>MINS</span>
                  </p>
                  <p className="text-2xl self-start">:</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="flex flex-col items-center">
                    <span className="font-normal text-2xl">22</span>
                    <span>SECS</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 inset-x-0 absolute flex justify-center">
                <Link
                  href="#"
                  className="px-8 py-[14px] rounded-full bg-white text-sm font-semibold gap-2 text-primary inline-flex items-center justify-center"
                >
                  Shop Now
                  <AiOutlineArrowRight size={20} className="font-semibold" />
                </Link>
              </div>
            </div>
          </div>
          {/*Card 2*/}
          <div className="h-[536px] relative overflow-hidden rounded-lg">
            <Image
              src={Image1}
              alt="Banner"
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="absolute top-[35px] inset-x-0 flex flex-col items-center text-white">
              <p className="font-medium text-sm mb-4">85% Fat Free</p>
              <p className="text-4xl font-semibold mb-3">Low-Fat Meat</p>
              <p className="text-lg font-normal mb-[30px]">
                Started at <span className="text-warning">$79.99</span>
              </p>
              <Link
                href="#"
                className="px-8 py-[14px] rounded-full bg-white text-sm font-semibold gap-2 text-primary inline-flex items-center justify-center"
              >
                Shop Now
                <AiOutlineArrowRight size={20} className="font-semibold" />
              </Link>
            </div>
          </div>
          {/*Card 3*/}
          <div className="h-[536px] relative overflow-hidden rounded-lg">
            <Image
              src={Image3}
              alt="Banner"
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="absolute top-[35px] inset-x-0 flex flex-col items-center text-gray-900">
              <p className="font-medium text-sm mb-4">SUMMER SALE</p>
              <p className="text-4xl font-semibold mb-3">100% Fresh Fruit</p>
              <p className="text-lg font-normal mb-[30px] flex gap-3 items-center">
                Up to
                <span className="bg-gray-900 font-semibold text-[#FCC900] px-3 py-[6px] rounded-md">
                  64% OFF
                </span>
              </p>
              <Link
                href="#"
                className="px-8 py-[14px] rounded-full bg-white text-sm font-semibold gap-2 text-primary inline-flex items-center justify-center"
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
