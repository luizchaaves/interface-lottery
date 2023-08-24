import Providers from './components/Providers';
import Home from './pages/Home';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Providers>
      <Home />
      <GlobalStyles />
    </Providers>
  );
}

export default App;
