import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

export const renderProvider = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
