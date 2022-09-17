import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="594a0a3d-fa32-4b21-80fa-4c4fd48c5358" language="en-US"> 
        <Provider>
            <App />
         </Provider>
    </SpeechProvider>,
    document.getElementById('root')
    );
