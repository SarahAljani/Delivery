import "@mantine/core/styles.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
