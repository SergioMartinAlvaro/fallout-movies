import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
import './index.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
