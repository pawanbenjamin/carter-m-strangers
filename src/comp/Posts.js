import React, { useState, useEffect } from "react";

import SinglePost from "./SinglePost";

// This is my Post function for my app. 
// Im starting to understand the basics of { useEffect & useState }.

function Posts(props) {
    const [ posts, setPosts ] = useState([]);
    
    useEffect(()=>{
        async function getPosts() { 
            const response = await fetch( 
                `https://strangers-things.herokuapp.com/api/2109-lsu-web-ft/posts`
            );    
       
            const responseObj = await response.json();
            
            setPosts(responseObj.data.posts);
        
        }    
      getPosts();
      
      console.log(posts);
    }, [posts]);
    
   const allPosts = posts.map(post => {
       return (
           <h1>{post.title}</h1>
       )
   })

    return (
        <div>
            <h1>Posts:</h1>
          {
              allPosts
          }
        </div>
    );    
}    
export default Posts