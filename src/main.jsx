import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icons/css/flag-icons.min.css'
import './global.css'
import { Provider as StoreProvider } from 'react-redux'
import store from './store'

//store==>oluşturulan merkezi state ti provider ın içine atmak için kullanılıyor
// Provider as StoreProvider==bu şekilde takma isimle de kullanabiliriz

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
    
  </React.StrictMode>,
)
