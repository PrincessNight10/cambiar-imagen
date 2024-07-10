import React, {useState} from 'react'

export const Imagen = () => {
  
  const pictures = [
  'https://www.ecuavisa.com/binrepository/901x600/191c0/600d600/none/11705/RNOK/vinijunior-2048x1365_1617150_20240702213127.jpg',
    'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254',
   'https://www.wradio.com.co/resizer/v2/EEEQXL5S7JBQPOWYP5QDYCESQI.jpg?auth=62e2349fdd62c570f0c2464133f948ea9ce5540f3ed2354e7d17cfcc4661d2dc&width=650&height=488&quality=70&smart=true'  
  ]
  const [picture, setPicture] = useState(null)
  const handleSelectPicture = (event) => {
    let pos = Number(event.target.value)
    setPicture(pictures[pos])
  }
  return (
  <div className='container'>
    <p>
      Selecciona una imagen de 3 jugadores de la copa america
    </p>
 <select onChange={handleSelectPicture}name="" id="">
  <option value='anything'>Selecciona una opcion de estos 3 futbolistas</option>
  <option value='0'>1 vinicius junior</option>
  <option value='1'>2 lionel messi</option>
  <option value='2'>3 james rodriguez</option>

 </select>
<img className='cuadro' src={picture} alt="aqui esta la imagen"  />
  </div>
  )
}

export default Imagen;