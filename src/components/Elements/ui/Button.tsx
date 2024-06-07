import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
    children: ReactNode;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'big-success';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
    const buttonClass = classNames(
        'font-normal w-full text-lg py-2 px-4 ',
        {
            'bg-blue-500 hover:bg-blue-600 text-white rounded-xl': type === 'primary',
            'bg-success hover:bg-green-600 text-white rounded-xl': type === 'success',
            'rounded-2xl bg-success hover:bg-green-600 py-3.5 text-white ': type === 'big-success',
            'bg-red-500 hover:bg-red-600 text-white rounded-xl': type === 'danger',
        }
    );

    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    );
};

