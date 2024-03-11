import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Fruit from "@/assets/fruits.jpg";

export default function Populer() {
  return (
    <section>
      <div className="max-w-screen-xl container mx-auto mt-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-gray-900 text-3xl font-semibold">
            Populer Categories
          </h2>
          <Link
            href=""
            className="flex items-center text-base gap-3 font-medium text-primary"
          >
            View All <AiOutlineArrowRight size={20} />
          </Link>
        </div>
        <div className="grid gap-6 grid-cols-6 grid-rows-2">
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
          <div className="group pt-4 pb-6 px-2 border-2 border-gray-100 rounded-md hover:border-hard-primary hover:shadow-md hover:shadow-soft-primary">
            <Image src={Fruit} alt="Food" />
            <p className="text-center text-lg font-medium group-hover:text-hard-primary">
              Fresh Fruit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
