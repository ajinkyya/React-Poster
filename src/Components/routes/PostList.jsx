import Post from '../Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
import Modal from '../Modal'
import { useLoaderData } from 'react-router-dom'

const PostList = ({modalVisibility}) => {
     const posts = useLoaderData();
    
  return (
    <>
       { modalVisibility && (<Modal>
            <NewPost />
        </Modal>)}
        { (<ul className={classes.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
        </ul>)}
        
    </>
  )
}

export default PostList;
