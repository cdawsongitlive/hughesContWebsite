import React from "react";
import "util/analytics";
import { ThemeProvider } from "util/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
