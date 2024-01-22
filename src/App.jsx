import styled from 'styled-components';
import './styles/App.css';
import GlobalStyles from './styles/GlobalStyles';
import TourSection from './components/TourSection';

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;
`;

export default function App() {
  return (
    <div className='App container'>
      <TourSection />
      <GlobalStyles />
      {/* <MainTitle>Hello, world!</MainTitle>
      <hr />
      <MyButton>Click me</MyButton>
      <MyButton $outline>Outline btn</MyButton>
      <RedBtn>I am red btn</RedBtn>
      <RedBtn as={'a'} href='#kazkur'>
        I am red link not button
      </RedBtn> */}
    </div>
  );
}
