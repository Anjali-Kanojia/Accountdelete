import React, {useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import {clickContext} from './clickcontext';
import DeletedItem from './delItem';

function Item({item}) {
  const {setDisabled, selectedId, setSelectedId, shouldShow, setShouldShow} =
    useContext(clickContext);
  useEffect(()=>{
    setDisabled(true)
    setSelectedId(false)
    setShouldShow(false);
  },[])
  const borderColor = item.id === selectedId ? '#F9572B' : '#F5F0E2';
  const color = item.id === selectedId ? '#F9572B' : '#000000';
  const borderWidth = item.id === selectedId ? 1 : 0;
  const fontWeight = item.id === selectedId ? 'bold' : 'normal';

  const selected = item => {
    setDisabled(false);
    setSelectedId(item.id);
   
    if (item.item == ' Others') {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  };

  return (
    <DeletedItem
      item={item}
      onPress={() => selected(item)}
      borderColor={{borderColor}}
      color={{color}}
      borderWidth={{borderWidth}}
      fontWeight={{fontWeight}}
    
    />
  );
}

export default Item;
