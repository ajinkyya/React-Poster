import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loadData as postLoader} from './Components/routes/Posts'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewPost, {action as newPostAction} from './Components/routes/NewPost'
import RouteLayout from './Components/routes/RouteLayout'
import PostDetails, {loader as postDetailsLoader} from './Components/routes/PostDetails'

const router = createBrowserRouter(
  [
    {
      path:'/', 
      element:<RouteLayout/>,
      children:[
                  {
                    path:'/', 
                    element:<Posts />,
                    loader : postLoader,
                    children:[
                      {
                        path:'/create-post',
                        element:<NewPost />,
                        action:newPostAction
                      },
                      {
                        path:'/:id',
                        element:<PostDetails />,
                        loader: postDetailsLoader
                      }
                    ]
                  },
                ]
      }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>
)
