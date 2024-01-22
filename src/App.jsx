import styled from 'styled-components';
import './styles/App.css';
import GlobalStyles from './styles/GlobalStyles';

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;
`;

const MyButton = styled.button`
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  background: ${(props) => (props.$outline ? 'white' : 'black')};
  color: ${(props) => (!props.$outline ? 'white' : 'black')};
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 17px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${(props) => (props.$outline ? '#cccccc' : '#3f3f3f')};
  }
  &:active {
    outline: 1px solid tomato;
  }
`;

const RedBtn = styled(MyButton)`
  background: tomato;
  border-color: tomato;
  &:hover {
    background: #f9806a;
  }
`;

export default function App() {
  return (
    <div className='App container'>
      <GlobalStyles />
      <MainTitle>Hello, world!</MainTitle>
      <hr />
      <MyButton>Click me</MyButton>
      <MyButton $outline>Outline btn</MyButton>
      <RedBtn>I am red btn</RedBtn>
      <RedBtn as={'a'} href='#kazkur'>
        I am red link not button
      </RedBtn>
    </div>
  );
}
