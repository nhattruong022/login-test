import { PiArrowUpRight } from 'react-icons/pi';

import { Logo } from './UI/icon';

const Footer = () => {
    return (
        <footer className="flex flex-col px-16 py-8 bg-primary-500 gap-y-10">
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-y-8">
                    <div className="flex items-center gap-x-[0.875rem] text-base-white">
                        <Logo className="h-10" />

                        {/* TODO: change the font to "Aboro" font for this line */}
                        <span className="text-2xl uppercase">hana.ai</span>
                    </div>

                    <span className="text-base-white text-lg leading-[150%]">
                        2020 Massachusetts Ave <br /> NW, Washington, DC 20036
                    </span>
                </div>

                <div className="flex gap-x-20 text-base-white">
                    <div className="flex flex-col gap-y-8">
                        <span className="text-base font-semibold">Rooms</span>
                        <span className="text-base font-semibold">Facilities</span>
                        <span className="text-base font-semibold">Offers</span>
                        <span className="text-base font-semibold">Wedding</span>
                    </div>

                    <div className="flex flex-col gap-y-8">
                        <span className="text-base font-semibold">About</span>
                        <span className="text-base font-semibold">Blog</span>
                        <span className="text-base font-semibold">Careers</span>
                        <span className="text-base font-semibold">Location</span>
                    </div>

                    <div className="flex flex-col gap-y-8">
                        <span className="text-base font-semibold">Instagram</span>
                        <span className="text-base font-semibold">Twitter</span>
                        <span className="text-base font-semibold">YouTube</span>
                        <span className="text-base font-semibold">TikTok</span>
                    </div>
                </div>

                <form action="#" className="flex flex-col gap-y-[3.125rem] text-base-white">
                    <span className="text-2xl font-semibold">
                        Subscribe Our
                        <br />
                        Newsletter
                    </span>

                    <div className="flex pb-[0.625rem] border-b-[0.125rem] border-base-white">
                        <input
                            type="text"
                            className="flex-1 bg-transparent border-none outline-none placeholder:text-base-white w-72"
                            placeholder="Email Address"
                        />
                        <button>
                            <PiArrowUpRight className="text-3xl" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="border-[0.0625rem] border-base-white h-0"></div>

            <div className="flex justify-between text-base-white">
                <span className="text-lg leading-[150%]">@2023 Zerra. All rights reserved</span>

                <div className="flex text-lg gap-x-8 text-base-white">
                    <span>Terms & Condditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
