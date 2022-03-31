import { theme } from './themes/theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AppRouter from './navigation/Router';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
