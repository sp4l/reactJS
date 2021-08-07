import './App.css';
//import Message from './Components/Component/Message';
import MessageList from './Components/Component/MessageList';
import { ThemeProvider,  createTheme } from "@material-ui/core/styles";

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <MessageList />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
