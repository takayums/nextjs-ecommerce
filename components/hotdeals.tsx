import Image from "next/image";
import Link from "next/link";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShopping,
} from "react-icons/ai";
import Fruit from "@/assets/fruit1.png";
import Fruit1 from "@/assets/fruit4.jpg";

export default function Hotdeals() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto container mt-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-gray-900 text-3xl font-semibold">Hot Deals</h2>
          <Link
            href=""
            className="flex items-center text-base gap-3 font-medium text-primary"
          >
            View All <AiOutlineArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-2 group hover:shadow-primary hover:shadow hover:border-hard-primary border flex flex-col relative overflow-hidden border-gray-100">
            <div className="m-2 relative h-[337px] overflow-hidden">
              <Image
                src={Fruit1}
                className="object-cover w-full h-full"
                alt="Fruit"
              />
              <div className="absolute top-6 left-6 inline-flex gap-3">
                <p className=" px-2 py-[3px] rounded-md bg-danger text-white text-sm">
                  Sale 50%
                </p>
                <p className=" px-2 py-[3px] rounded-md bg-blue-600 text-white text-sm">
                  Base Sale
                </p>
              </div>
            </div>
            <div className="flex px-6 gap-2 mb-6">
              <div className="p-3 rounded-full text-gray-900 right-2 border bg-gray-50 border-gray-200">
                <AiOutlineHeart size={20} />
              </div>
              <div className="flex-1 flex items-center justify-center gap-3 bg-primary rounded-full text-white font-medium group-hover:bg-primary group-hover:text-white">
                Add to Cart
                <AiOutlineShopping size={20} />
              </div>
              <div className="p-3 text-gray-900 rounded-full bg-gray-50 right-2 border border-gray-200">
                <AiOutlineEye size={20} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-hard-primary group-hover:font-medium">
                  Chennesie cabbage
                </p>
                <p className="text-2xl text-gray-900 font-medium mb-2">
                  $20.00
                </p>
                <div className="flex items-center gap-2 mb-[18px] justify-center">
                  <div className="flex gap-1">
                    <AiFillStar size={18} className="text-warning" />
                    <AiFillStar size={18} className="text-warning" />
                    <AiFillStar size={18} className="text-warning" />
                    <AiFillStar size={18} className="text-warning" />
                    <AiFillStar size={18} className="text-warning" />
                  </div>
                  <p className="text-gray-500 text-xs">543 (feedback)</p>
                </div>
                <p className="text-sm text-gray-400">
                  Hurry up! Offer ends In:
                </p>
                <div className="mx-auto mt-3 grid place-items-center grid-cols-4 text-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <p className="flex flex-col items-center">
                      <span className="font-normal text-2xl">00</span>
                      <span className="text-gray-400">DAYS</span>
                    </p>
                    <p className="text-2xl self-start text-gray-400">:</p>
                  </div>
                  <div className="justify-center flex items-center gap-2">
                    <p className="flex flex-col items-center">
                      <span className="font-normal text-2xl">12</span>
                      <span className="text-gray-400">HOURS</span>
                    </p>
                    <p className="text-2xl self-start text-gray-400">:</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <p className="flex flex-col items-center">
                      <span className="font-normal text-2xl">12</span>
                      <span className="text-gray-400">MINS</span>
                    </p>
                    <p className="text-2xl text-gray-400 self-start">:</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <p className="flex flex-col items-center">
                      <span className="font-normal text-2xl">22</span>
                      <span className="text-gray-400">SECS</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group hover:shadow-primary hover:shadow hover:border-hard-primary border flex flex-col relative overflow-hidden border-gray-100">
            <div className="m-2 relative h-[230px] overflow-hidden">
              <Image src={Fruit} className="object-cover" alt="Fruit" />
              <p className="absolute top-0 left-0 px-2 py-[3px] rounded-md bg-danger text-white text-sm">
                Sale 50%
              </p>
              <div className="absolute top-2 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineHeart size={20} />
              </div>
              <div className="absolute top-14 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineEye size={20} />
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="">
                <p className="text-sm text-gray-700 group-hover:text-primary">
                  Big Potatoes
                </p>
                <p className="text-base text-gray-900 font-medium mb-2">
                  $20.00
                </p>
                <div className="flex gap-1">
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} />
                </div>
              </div>
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white">
                <AiOutlineShopping size={20} />
              </div>
            </div>
          </div>
          <div className="group hover:shadow-primary hover:shadow hover:border-hard-primary border flex flex-col relative overflow-hidden border-gray-100">
            <div className="m-2 relative h-[230px] overflow-hidden">
              <Image src={Fruit} className="object-cover" alt="Fruit" />
              <p className="absolute top-0 left-0 px-2 py-[3px] rounded-md bg-danger text-white text-sm">
                Sale 50%
              </p>
              <div className="absolute top-2 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineHeart size={20} />
              </div>
              <div className="absolute top-14 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineEye size={20} />
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="">
                <p className="text-sm text-gray-700 group-hover:text-primary">
                  Big Potatoes
                </p>
                <p className="text-base text-gray-900 font-medium mb-2">
                  $20.00
                </p>
                <div className="flex gap-1">
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} />
                </div>
              </div>
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white">
                <AiOutlineShopping size={20} />
              </div>
            </div>
          </div>
          <div className="group hover:shadow-primary hover:shadow hover:border-hard-primary border flex flex-col relative overflow-hidden border-gray-100">
            <div className="m-2 relative h-[230px] overflow-hidden">
              <Image src={Fruit} className="object-cover" alt="Fruit" />
              <p className="absolute top-0 left-0 px-2 py-[3px] rounded-md bg-danger text-white text-sm">
                Sale 50%
              </p>
              <div className="absolute top-2 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineHeart size={20} />
              </div>
              <div className="absolute top-14 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineEye size={20} />
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="">
                <p className="text-sm text-gray-700 group-hover:text-primary">
                  Big Potatoes
                </p>
                <p className="text-base text-gray-900 font-medium mb-2">
                  $20.00
                </p>
                <div className="flex gap-1">
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} />
                </div>
              </div>
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white">
                <AiOutlineShopping size={20} />
              </div>
            </div>
          </div>
          <div className="group hover:shadow-primary hover:shadow hover:border-hard-primary border flex flex-col relative overflow-hidden border-gray-100">
            <div className="m-2 relative h-[230px] overflow-hidden">
              <Image src={Fruit} className="object-cover" alt="Fruit" />
              <p className="absolute top-0 left-0 px-2 py-[3px] rounded-md bg-danger text-white text-sm">
                Sale 50%
              </p>
              <div className="absolute top-2 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineHeart size={20} />
              </div>
              <div className="absolute top-14 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineEye size={20} />
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="">
                <p className="text-sm text-gray-700 group-hover:text-primary">
                  Big Potatoes
                </p>
                <p className="text-base text-gray-900 font-medium mb-2">
                  $20.00
                </p>
                <div className="flex gap-1">
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} />
                </div>
              </div>
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white">
                <AiOutlineShopping size={20} />
              </div>
            </div>
          </div>
          <div className="group hover:shadow-primary hover:shadow hover:border-hard-primary border flex flex-col relative overflow-hidden border-gray-100">
            <div className="m-2 relative h-[230px] overflow-hidden">
              <Image src={Fruit} className="object-cover" alt="Fruit" />
              <p className="absolute top-0 left-0 px-2 py-[3px] rounded-md bg-danger text-white text-sm">
                Sale 50%
              </p>
              <div className="absolute top-2 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineHeart size={20} />
              </div>
              <div className="absolute top-14 p-2 rounded-full right-2 border border-gray-200">
                <AiOutlineEye size={20} />
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center justify-between">
              <div className="">
                <p className="text-sm text-gray-700 group-hover:text-primary">
                  Big Potatoes
                </p>
                <p className="text-base text-gray-900 font-medium mb-2">
                  $20.00
                </p>
                <div className="flex gap-1">
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} className="text-warning" />
                  <AiFillStar size={12} />
                </div>
              </div>
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white">
                <AiOutlineShopping size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
