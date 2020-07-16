import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from './imageList'
// axios is a packge used for making api req replacing fetch
class App extends React.Component {
  state = { Images: [] };
  /*OnSubmit(term) {
    //two parameter location of get req , object
   axios.get('https:v//api.unsplash.com/search/photos',{
      params:{query:term},
      headers:{
      Authorization:'Client-ID kpoPgb0cHAIOIDftaPTo5L6F5p9GTnmSCtZ383zPzB8'
     }
     //always returning a promise
   }).then((response)=>{
     console.log(response.data.results)
   })
  }*/
  // or using async await

     OnSubmit = async (term) => {
    //two parameter location of get req , object
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID kpoPgb0cHAIOIDftaPTo5L6F5p9GTnmSCtZ383zPzB8",
      },
      //always returning a promise
    });
    this.setState({ Images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar OnSubmit={this.OnSubmit} />
        <ImageList Images={this.state.Images}/>
      </div>
    );
  }
}

export default App;
