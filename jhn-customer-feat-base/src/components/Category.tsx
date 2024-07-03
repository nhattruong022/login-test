import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

import HomeCard from '@/components/HomeCard';

import { Button } from './UI';

const Category = () => {
    return (
        <div className="flex flex-col flex-1 p-4">
            <span className="text-lg text-base-black">Over 1,000 top city homes</span>
            {/* eslint-disable-next-line rulesdir/tailwind-convert-px-to-rem */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] my-6 gap-x-4 gap-y-6">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>

            <div className="flex items-center h-16 py-4 gap-x-3">
                <span className="text-xl font-bold text-base-black">Selected properties (5/5)</span>

                <div className="flex flex-1 gap-x-3">
                    <div className="relative rounded-card border-[0.0625rem] border-grey-300 overflow-hidden">
                        <Image src={'/imgs/placeholder-image.png'} height={40} width={60} alt="" />
                        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center h-5 w-5 rounded-full bg-[rgba(0,0,0,.6)]">
                            <IoClose className="text-white" />
                        </button>
                    </div>

                    <div className="relative rounded-card border-[0.0625rem] border-grey-300 overflow-hidden">
                        <Image src={'/imgs/placeholder-image.png'} height={40} width={60} alt="" />
                        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center h-5 w-5 rounded-full bg-[rgba(0,0,0,.6)]">
                            <IoClose className="text-white" />
                        </button>
                    </div>

                    <div className="relative rounded-card border-[0.0625rem] border-grey-300 overflow-hidden">
                        <Image src={'/imgs/placeholder-image.png'} height={40} width={60} alt="" />
                        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center h-5 w-5 rounded-full bg-[rgba(0,0,0,.6)]">
                            <IoClose className="text-white" />
                        </button>
                    </div>

                    <div className="relative rounded-card border-[0.0625rem] border-grey-300 overflow-hidden">
                        <Image src={'/imgs/placeholder-image.png'} height={40} width={60} alt="" />
                        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center h-5 w-5 rounded-full bg-[rgba(0,0,0,.6)]">
                            <IoClose className="text-white" />
                        </button>
                    </div>

                    <div className="relative rounded-card border-[0.0625rem] border-grey-300 overflow-hidden">
                        <Image src={'/imgs/placeholder-image.png'} height={40} width={60} alt="" />
                        <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center h-5 w-5 rounded-full bg-[rgba(0,0,0,.6)]">
                            <IoClose className="text-white" />
                        </button>
                    </div>
                </div>
                <Button variant="secondary">Compare properties</Button>
            </div>
        </div>
    );
};

export default Category;
