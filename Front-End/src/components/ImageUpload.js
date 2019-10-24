import React, {Component} from 'react';
import {storage} from '../firebase';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) 
    {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`${image.name}`).put(image);
      console.log("Uplode",image,uploadTask)
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log('ERR');
        console.log(error);
      }, 
    () => {
        // complete function ....
        console.log('Complete');
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }

  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>
            UPLOAD
        </button>
        <br/>
        <img src={this.state.url } alt="Uploaded images" height="300" width="400"/>
      </div>
    )
  }
}

export default ImageUpload;
// || 'http://via.placeholder.com/400x300'