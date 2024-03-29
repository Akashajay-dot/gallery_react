import React from 'react';


const Imagecard = ({image}) => {   
  const tags= image.tags.split(",");
  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-2 px-2">
     <img src={image.webformatURL} alt='loading'></img>
       <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">
        Photo by {image.user}
      </div>  
      <ul>    
        <li>
          <strong>Views : </strong>{image.views}
        </li>
        <li>
        <strong>Downloads : </strong>{image.downloads} 
        </li>
        <li><strong>Likes : </strong>4000</li>
      </ul>
    </div>
    {
    tags.map((tag,index) =>(
      <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-grey-700 mr-2 text-xs ">
      #{tag}
    </span>
    ))
    }
    </div>
  )
}

export default Imagecard;