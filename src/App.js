import './App.css';
import styled from 'styled-components';
import { Piano } from './components/Piano.js';

const CentreWrapper = styled.div`
  margin: 0;
  overflow: auto;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column; 
  @media (prefers-color-scheme: dark) {
    background-color: #121212;
}
`;

const TitleBar = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto 1fr;
  margin-bottom: 1rem;
  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

const Title = styled.div`
  display: block;
  font-size: 4rem;
  span {
    color: #1a76d2;
  }
`;

function App() {
  return (
    <div className="App">
      <CentreWrapper>
        <TitleBar>
          <Title>TON<span>LE</span></Title>
        </TitleBar>
        <Piano/>
      </CentreWrapper>
    </div>
  );
}

export default App;
