import React, {useState, useEffect} from 'react'
import Service from '../appwrite/config'
import {Container, PostCard} from '../componets'


function AllPost() {
  const[posts, setPosts] = useState([])

  useEffect(() =>{
      Service.getPosts([]).then((posts) => {
        if(posts){
          setPosts(posts.documents)
        }
      })
  }, [])
  return (
    <div className=' w-full py-8'>
      <Container>
        {posts.map((post) =>{
          <PostCard  key={post.id} post={post}/>
        })}
      </Container>
    </div>
  )
}

export default AllPost
