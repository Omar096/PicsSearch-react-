import React from 'react'
import ImageCards from './imageCards'
import './imagelist.css'
//using maping
//adding a key to it to stop error and  easy re-render
const imageList=(props)=>{
  const images=props.Images.map((image)=>{
    return <ImageCards  key={image.id} image={image} />
  })
return <div className='Image-list'> {images}</div>
}
export default imageList