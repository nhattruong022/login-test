import classNames from 'classnames';
import { type FC } from 'react';

interface SeparationProps {
    className?: string;
    variant?: 'horizontal' | 'vertical';
}

const Separation: FC<SeparationProps> = ({ className, variant = 'vertical' }) => {
    if (variant === 'horizontal') {
        return <div className={classNames('border-[0.0625rem] border-grey-300 w-full', className)}></div>;
    }

    return <div className={classNames('h-full border-[0.0625rem] border-grey-300', className)}></div>;
};

export default Separation;
