"use client";

import { Typewriter } from 'react-simple-typewriter';

const MyTypewriter = () => {

    const handleType = () => {};
    const handleDone = () => {};

    return (
        <div className='w-full max-w-[780px]'>
            <h1 className='pt-0 mx-auto font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                Life is simple{' '}
                <span className='text-red-600 font-bold'>
                    <Typewriter
                        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
            </h1>
        </div>
    );
}

export default MyTypewriter;
