import logoImg from '@/assets/logo.png';
import { format } from 'date-fns';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <Image
            src={logoImg}
            width={400}
            height={300}
            alt='Logo'
            className='mx-auto'
            />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;