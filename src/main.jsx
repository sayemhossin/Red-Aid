import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import DonationForm from './Page/DonationForm/DonationForm';
import Contact from './Page/Contact/Contact';
import MyDonation from './Page/MyDonation/MyDonation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/form',
        element: <DonationForm></DonationForm>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/mydonation',
        element: <MyDonation></MyDonation>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
