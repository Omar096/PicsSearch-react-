
import React from 'react'
class ImageCards extends React.Component{
  constructor(props){
    super(props)
    this.state={spans:0}
    this.imageRef=React.createRef()
  }
  // هنا مش هتعرف تحسب طول الصوره لان الصوره لسه محصلهاش لود
  componentDidMount(){
    this.imageRef.current.addEventListener('load',this.setSpans)
  }
  setSpans=()=>{
    const height=this.imageRef.current.clientHeight
    const spans=Math.ceil(height/10)
    this.setState={spans:{spans}}
  }
 render(){
   //destructure
   const{description,urls}=this.props.image
   return(
     <img
     //ref is attribute we put it inside any components to get info from dom
     style={{ gridRowEnd:`span ${this.state.spans}`}}
     ref={this.imageRef}
     src={urls.regular}
     alt={description}
     />
   )
 }
}
export default ImageCards