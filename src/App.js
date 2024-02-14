import React,{useState,useEffect} from "react";
import Imagecard from './components/imagecard';
import ImageSearch from "./components/ImageSearch";

function App() {
  const[ images, setimages]=useState([]);
  const[ isloading, setisloading]=useState(true);
  const[ term, setterm]= useState('');
  useEffect(() =>{ 
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setimages(data.hits);
      setisloading(false);
    })
    .catch(err => console.log(err));
  },[term]);
  return (
    
  <div className="container mx-aut0 ">
    <ImageSearch searchText={(text)=>setterm(text)} />
    { isloading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1>: <div className="grid grid-cols-3 gap-4 items-center">
      { 
        images.map(image=>(
          <Imagecard key={image.id} image={image} />
        )
        )
      }
      {
      !isloading && images.length == 0 &&  <h1 className="text-3xl text-center mx-auto mt-32 ">No Images Found</h1>
    }
      
    </div>}
  </div>
  );
}

export default App;
