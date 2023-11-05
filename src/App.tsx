import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import ABPolloClient from './componentes/ABApolloClient';

const queryClient = new QueryClient()

function App() {
  return (
    <ABPolloClient>
          <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </QueryClientProvider>
    </ABPolloClient>

  );
}

export default App;
