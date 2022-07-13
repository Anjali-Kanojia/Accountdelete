import React, { useState } from 'react'
import { clickContext } from './src/components/clickcontext';
import MyStack from './src/screens/navScreen';


function App() {
  const [disabled,setDisabled] =useState(true)
  const [selectedId, setSelectedId] = useState(null);
  const [shouldShow, setShouldShow] = useState(false);
 
  return (
    <clickContext.Provider  value={{disabled,setDisabled,selectedId,setSelectedId,shouldShow,setShouldShow}}>
   <MyStack/>    
    </clickContext.Provider>
  )
}

export default App