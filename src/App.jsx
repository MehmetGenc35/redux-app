import React from 'react'
import AppRouter from './router'
import { useSelector } from 'react-redux';


//approuter rerender olması lazım uygulamanın render olmasını engelliyor
//approuter ın da rerender olması için lang.code yaptık ki o da rerender olsun


const App = () => {
  const lang = useSelector((state) => state.locale.lang);

  return (    
      <AppRouter key={lang.code}/>
  )
}

export default App