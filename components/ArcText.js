import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ text, arc, radius }) {
    const characters = text.replace(/\s/g, "\u00A0").split('');
    const degree = arc / characters.length;

    return (
        <h1 className='absolute top-10 left-60 font-alice text-2xl text-neutral border-2 border-neutral'>
            {characters.map((char, i) => (
                <span
                    key={`heading-span-${i}`}
                    className='inline-block'
                    style={{
                        height: `${radius}px`,
                        transform: `rotate(${(i * 6.42) - 45}deg)`,
                        transformOrigin: `0 ${radius}px 0`,
                    }}>
                    {char}
                </span>
            ))}
        </h1>
    );
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    arc: PropTypes.number, // how curved do you want the text
    radius: PropTypes.number, // how big do you want the curve
};

Heading.defaultProps = {
    arc: 120,
    radius: 400,
};
