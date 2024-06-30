import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { Router } from "./Router";
import { ShoppingCartProvider } from "./providers/ShoppingCartProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>
      <Toaster />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
