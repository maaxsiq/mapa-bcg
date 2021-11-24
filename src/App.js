import Routes from './Routes/Routes';
import GlobalStyle from './Styles/Styles';
import APIProvider from './Hooks/useAPI';
import AppProvider from './Hooks/useApp';

function App() {
  return (
    <AppProvider>
      <APIProvider>
        <GlobalStyle />
        <Routes />
      </APIProvider>
    </AppProvider>
  );
}

export default App;
