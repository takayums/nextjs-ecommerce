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

export default function PopulerProducts() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto container mt-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-gray-900 text-3xl font-semibold">
            Populer Products
          </h2>
          <Link
            href=""
            className="flex items-center text-base gap-3 font-medium text-primary"
          >
            View All <AiOutlineArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
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
