import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AppProvider from "./contexts/AppProvider";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
