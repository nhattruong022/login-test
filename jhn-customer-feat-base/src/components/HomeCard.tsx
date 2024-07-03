import Image from 'next/image';
import { PiMapPin } from 'react-icons/pi';

const HomeCard = () => {
    return (
        <button className="col-span-1 rounded-card aspect-[316/235] relative overflow-hidden">
            <Image src="/imgs/image-card.png" layout="fill" objectFit="cover" alt="" />

            <div className="absolute bottom-0 left-0 right-0 flex flex-col h-20 bg-gradient-to-t from-black to-black/0 p-[0.625rem] justify-end gap-y-[0.3125rem]">
                <div className="flex gap-x-[0.3125rem] text-label-white items-end">
                    <div className="flex flex-col items-start">
                        <span className="text-base line-clamp-1">Newly built boutique hotel in Oku-Kagurazaka</span>
                        <span className="flex items-center text-sm">
                            <PiMapPin className="text-sm" />
                            Tokyo, Japan
                        </span>
                    </div>
                    <span className="text-2xl font-bold">$42,779</span>
                </div>

                <Image src="/svg/paginate.svg" height={6} width={290} alt="" />
            </div>
        </button>
    );
};

export default HomeCard;
