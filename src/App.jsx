import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Container from "react-bootstrap/Container";
import { Card, Image } from "react-bootstrap";
import Header from "./Components/LayoutComponents/Header";
import Footer from "./Components/LayoutComponents/Footer";
import Loader from "./Components/GlobalComponents/Loader";
import PrivateRoute from './Components/AppComponents/PrivateRoute';
import TicketTrek from './assets/Images/TicketTrek.gif'

const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Home = lazy(() => import("./Pages/Home"));
const NewTicket = lazy(() => import("./Pages/NewTicket"));
const Tickets = lazy(() => import("./Pages/Tickets"));
const Ticket = lazy(() => import("./Pages/Ticket"));
// const Notes = lazy(() => import("./Pages/Notes"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Card className='mb-4 rounded-0 border-0 border-light-subtle overflow-hidden'>
        <Card.Body className='p-0' style={{ height: "400px" }}>
          <Image src={TicketTrek} fluid width={800} className='w-100 h-100 object-fit-cover' height={800} alt="TicketTrek_img" />
        </Card.Body>
      </Card>
      <main className="flex-grow-1">
        <Container fluid="xxl" className="flex-grow-1">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main >
      <Footer />
      <ToastContainer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/new-ticket", element: <PrivateRoute><NewTicket /></PrivateRoute> },
      { path: "/tickets", element: <Tickets /> },
      { path: "/ticket/:ticketId", element: <PrivateRoute><Ticket /></PrivateRoute> },
      // { path: "/ticket/:ticketId/notes", element: <PrivateRoute><Notes /></PrivateRoute> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
