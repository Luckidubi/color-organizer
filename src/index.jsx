import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { colorData } from './App'

export const ColorContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <ColorContext.Provider value={colorData}>
		<App />
    </ColorContext.Provider>
	</React.StrictMode>
)