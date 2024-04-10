
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/Contact',
          element:<Contact/>
        },
        {
          path:'/About',
          element:<About/>
        }
      ]
    }
  ])
  return (
    <div className="App" >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
