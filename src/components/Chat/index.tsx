import GlobalStyle from "../../global-styles";
import AppThemeProvider from "./theme";
import App from "./components/App";

const Chat = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  );
};

export default Chat;
