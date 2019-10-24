import React, { Component } from 'react';
import Rahma  from './components/rahma';
// import React  from 'react';
import ImageUpload  from './components/ImageUpload';

class App extends Component {
  state ={
    selectedFile:null
  }
  fileSelectedHandler = event =>  {
    this.setState({
      selectedFile:event.target.files[0]
    })
  }
  
  fileUploadHandler =() =>{
    
  }

  render() { 
    return ( 
      <div>
        <br/>
        <Rahma/>
        {/* <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUplodHandler}>upload</button> */}
     
     <ImageUpload/>
      </div>
     );
  }
}
 
export default App;
