import { CallToAction } from './components/call-to-action';
import { FormArea } from './components/form-area';
import { MainContent } from './components/main-content';
import { GlobalStyle } from './styles/global-style';
import { ResetStyle } from './styles/reset-style';

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <MainContent>
        <CallToAction />
        <FormArea />
      </MainContent>
    </>
  );
}

export default App;
