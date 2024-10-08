import styled from 'styled-components';
import './App.css';
import InputCon from './components/InputCon/InputCon';
import ListArea from './components/ListArea/ListArea';

function App() {
  return (
    <>
      <Title>연락처 리스트</Title>
      <InputCon />
      <ListArea />
    </>
  );
}

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export default App;
