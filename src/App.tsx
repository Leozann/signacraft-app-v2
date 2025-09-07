// import libraries
import { RouterProvider } from "react-router-dom";

// import routes
import appRoutes from './routers/index';

// import global styles
import './assets/styles/App.scss';


function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
