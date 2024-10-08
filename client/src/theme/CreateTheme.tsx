import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { prefixer } from "stylis";
import React, { ReactNode } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { useDarkStore } from "../store/DarkMode";

interface ProviderThemeProps {
  children: ReactNode;
}

function ProviderTheme(props: ProviderThemeProps) {
  const { darkMode } = useDarkStore();
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode,
          background: {
            default: darkMode === "dark" ? "black" : "#e2f2f2",
          },
        },
        direction: "rtl",
        components: {
          MuiSelect: {
            defaultProps: {
              size: "small",
            },
          },
          MuiTextField: {
            defaultProps: {
              size: "small",
            },
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 50,
                    borderColor: "yellow solid",
                  },
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            height: "100vh",
            width: "100vw",
            maxWidth: "100%",
          }}
        >
          {props.children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default ProviderTheme;
