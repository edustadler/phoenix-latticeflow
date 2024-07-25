import Image from 'next/image';
import React from 'react';

interface CustomerLogosProps {
    className?: string;
}

const Logo: React.FC<CustomerLogosProps> = ({className}) => {
    return (
        <div className={`mx-auto py-4 ${className}`}>
            <Image
            src={'/images/lf_ai_logo.svg'}
            width={500}
            height={500}
            alt={'logo'}
            />
        </div>
    );
};

export default Logo;
