import { IoIosArrowDown } from 'react-icons/io';
import { PiCurrencyCircleDollar, PiGlobeHemisphereEast, PiMapPin, PiPhone, PiUserCircle } from 'react-icons/pi';

import { Button } from './UI';
import { Logo } from './UI/icon';


const Header = () => {
    return (
        <header className="border-b-[0.0625rem] border-grey-100">
            <div className="flex items-center justify-between px-8 h-9 bg-primary-500">
                <div className="flex items-center gap-x-1 text-base-white">
                    <PiMapPin className="text-base" />
                    <span className="font-base">Tokyo, Japan</span>
                </div>

                <div className="flex items-end gap-x-8">
                    <div className="flex items-center gap-x-1 text-base-white">
                        <PiCurrencyCircleDollar className="text-lg" />
                        <span className="text-base">USD</span>
                        <IoIosArrowDown className="translate-y-[0.0625rem] text-base" />
                    </div>

                    <div className="flex items-center gap-x-1 text-base-white">
                        <PiGlobeHemisphereEast className="text-lg" />
                        <span className="text-base">English</span>
                        <IoIosArrowDown className="translate-y-[0.0625rem] text-base" />
                    </div>

                    <div className="flex items-center gap-x-1 text-base-white">
                        <PiPhone className="text-lg" />
                        <span className="text-base">+852 5804 4670</span>
                    </div>
                </div>
            </div>

            <div className="h-[4.5rem] px-16 flex justify-between items-center">
                <div className="flex gap-x-[0.875rem] items-center">
                    <Logo className="h-10" />

                    {/* TODO: change the font to "Aboro" font for this line */}
                    <span className="text-2xl uppercase text-base-black">hana.ai</span>
                </div>

                <div className="flex items-center gap-x-12">
                    <button className="flex items-center text-base-black gap-x-2">
                        <span className="text-lg font-bold">Home</span>
                    </button>

                    <button className="flex items-center text-base-black gap-x-2">
                        <span className="text-lg font-bold">Buy</span>
                        <IoIosArrowDown className="translate-y-[0.0625rem] text-base" />
                    </button>

                    <button className="flex items-center text-base-black gap-x-2">
                        <span className="text-lg font-bold">For Sale</span>
                        <IoIosArrowDown className="translate-y-[0.0625rem] text-base" />
                    </button>

                    <button className="flex items-center text-base-black gap-x-2">
                        <span className="text-lg font-bold">To Rent</span>
                        <IoIosArrowDown className="translate-y-[0.0625rem] text-base" />
                    </button>

                    <button className="flex items-center text-base-black gap-x-2">
                        <span className="text-lg font-bold">Area Guide</span>
                    </button>

                    <button className="flex items-center text-base-black gap-x-2">
                        <span className="text-lg font-bold">Insights</span>
                    </button>
                </div>

                <div className="flex gap-x-[1.125rem] h-[2.625rem] items-center">
                    <span className="px-6 text-xl font-bold text-primary-500 whitespace-nowrap">I’m an agent</span>

                   <Button variant="secondary" leftIcon={<PiUserCircle className="translate-y-[0.09375rem]" />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
