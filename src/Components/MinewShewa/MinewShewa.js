import React, { useEffect, useState } from "react";
import "../AppleYouTube/AppleYouTube.css";

function MinewShewa() {
    const [youTubeVideos, setyouTubeVideos] = useState([]);
    useEffect(() => {
      fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDj8UShMVMdaSTrQLCw3tyuQlIdgKmKPbs&channelId=UCCYbR92tg8ZVr34p0BFHbtw&part=snippet,id&order=date&maxResults=6"
      )
        .then((response) => response.json())
        .then((data) => {
          const youTubeVideoData = data.items;
          setyouTubeVideos(youTubeVideoData);
        });
    }, []);
    console.log(youTubeVideos);
   return (
     <div className="allVideoWrapper">
       <div className="container">
         <div className="row justify-content text-center">
           <div className="col-12">
             <div className="title-wrapper">
               <br />
               <h1>Minew Shewa Latest videos</h1>
               <br />
             </div>
           </div>
           {youTubeVideos?.map((singleVideo, i) => {
             let vidId = singleVideo.id.videoId;
             let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
             let videoWrapper = (
               <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                 <div className="singleVideoWrapper">
                   <div className="videoThumbnail">
                     <a href={vidLink} target="_blank" rel="noreferrer">
                       <img
                         src={singleVideo.snippet.thumbnails.high.url}
                         alt="thumbnails"
                       />
                     </a>
                   </div>
                   <div className="videoInfoWrapper">
                     <div className="videoTitle">
                       <a href={vidLink} target="_blank" rel="noreferrer">
                         {singleVideo.snippet.title}
                       </a>
                     </div>
                     <div className="videoDesc">
                       {singleVideo.snippet.description}
                     </div>
                   </div>
                 </div>
               </div>
             );
             return videoWrapper;
           })}
         </div>
       </div>
     </div>
   );
}

export default MinewShewa;
