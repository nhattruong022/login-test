import Image from 'next/image';
import { MdOutlineKeyboardArrowRight, MdSort } from 'react-icons/md';
import { PiMagnifyingGlass } from 'react-icons/pi';

import { Button, Separation } from './UI';
import { Filter } from './UI/icon';

const SearchForm = () => {
    return (
        <div className="flex gap-x-4">
            <div className="rounded-card border-[0.0625rem] border-grey-500 py-2 px-4 flex gap-x-4 items-center w-[23.125rem]">
                <PiMagnifyingGlass className="text-2xl text-primary-500" />
                <input
                    type="text"
                    className="flex-1 text-base leading-[1.2] text-green-500"
                    placeholder="Search suburb, postcode or state"
                />
            </div>

            <Button variant="tertiary" className="border-grey-500">
                <div className="flex items-center gap-x-1">
                    <MdSort className="text-2xl" />
                    <span className="text-base font-semibold">Sort</span>
                </div>
            </Button>
        </div>
    );
};

const SearchMenu = () => {
    return (
        <div className="flex items-center h-16 px-16 py-3 border-b-[0.0625rem] border-grey-100 gap-x-4">
            <SearchForm />
            <Separation />
            <div className="flex items-end flex-1 overflow-hidden overflow-x-auto gap-x-8 scrollbar-hide">
                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/home.png'} height={18} width={19} alt="home" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Home</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/nation_parks.png'} height={18} width={19} alt="Nation parks" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Nation parks</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/room.png'} height={18} width={19} alt="Rooms" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Rooms</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/umbrella.png'} height={18} width={19} alt="Beach" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Beach</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/home.png'} height={18} width={19} alt="home" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Home</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/nation_parks.png'} height={18} width={19} alt="Nation parks" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Nation parks</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/room.png'} height={18} width={19} alt="Rooms" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Rooms</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/umbrella.png'} height={18} width={19} alt="Beach" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Beach</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/home.png'} height={18} width={19} alt="home" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Home</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/nation_parks.png'} height={18} width={19} alt="Nation parks" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Nation parks</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/room.png'} height={18} width={19} alt="Rooms" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Rooms</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/umbrella.png'} height={18} width={19} alt="Beach" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Beach</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/home.png'} height={18} width={19} alt="home" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Home</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/nation_parks.png'} height={18} width={19} alt="Nation parks" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Nation parks</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/room.png'} height={18} width={19} alt="Rooms" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Rooms</span>
                </button>

                <button className="flex flex-col items-center gap-y-1">
                    <Image src={'/imgs/umbrella.png'} height={18} width={19} alt="Beach" />
                    <span className="text-sm text-primary-500 whitespace-nowrap">Beach</span>
                </button>
            </div>

            <Button className="justify-center w-10 h-10 !px-0">
                <MdOutlineKeyboardArrowRight className="text-2xl" />
            </Button>

            <Button
                className="text-lg border-primary-500 text-primary-500"
                variant="tertiary"
                leftIcon={<Filter className="text-lg" height={28} width={26} />}
            >
                Filter
            </Button>
        </div>
    );
};

export default SearchMenu;
