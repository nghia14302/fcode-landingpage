import React from 'react';

import Landing from './component/Landing';
import { GlobalStyle } from './global';

function App() {
    return (
        <div>
            <GlobalStyle />

            {/*
            <object
                style={{
                    opacity: 0.3,
                    position: 'absolute',
                    left: '50%',
                    top: '0px',
                    transform: 'translateX(-50%)',
                }}
                data={layer}
            />
            */}

            <Landing />
        </div>
    );
}

export default App;
