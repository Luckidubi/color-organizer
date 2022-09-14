import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import ColorProvider from "./ColorProvider";
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <ColorProvider>
		<App />
    </ColorProvider>
	</React.StrictMode>
)