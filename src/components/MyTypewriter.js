"use client";

import { Typewriter } from 'react-simple-typewriter'

const MyTypewriter = () => {

    const handleType = () => {};
    const handleDone = () => {};

    return (
        <div className='App'>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold', fontSize: '72px' }}>
                Life is simple{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
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
