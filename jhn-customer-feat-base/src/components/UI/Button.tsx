import classNames from 'classnames';
import Link from 'next/link';
import React, { type FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    leftIcon,
    rightIcon,
    children,
    className,
    href = '',
    ...rest
}) => {
    if (variant === 'link') {
        return (
            <Link
                className={classNames('px-6 pt-2 pb-[0.625rem] text-base-black text-xl font-bold', className)}
                href={href}
            >
                {leftIcon}
                {children}
                {rightIcon}
            </Link>
        );
    }

    return (
        <button
            {...rest}
            className={classNames(
                'px-6 pt-2 pb-[0.625rem] rounded-card flex items-center gap-x-3 text-xl font-bold leading-[120%] disabled:cursor-not-allowed',
                {
                    'text-base-black disabled:opacity-70': variant === 'primary',
                    'text-base-white bg-primary-500 disabled:bg-grey-400': variant === 'secondary',
                    'text-base-black border-[0.0625rem] border-base-black disabled:opacity-70': variant === 'tertiary',
                },
                className
            )}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    );
};

export default Button;
