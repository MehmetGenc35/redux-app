import React from 'react'
import AppRouter from './router'


//store==>oluşturulan merkezi state ti provider ın içine atmak için kullanılıyor
// Provider as StoreProvider==bu şekilde takma isimle de kullanabiliriz

const App = () => {

  return (    
      <AppRouter/>
  )
}

export default App