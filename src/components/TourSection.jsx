import styled, { css } from 'styled-components';
import Grid from './styled/Grid.styled';

const Card = styled.div`
  border: 1px solid gray;
  box-shadow: ${({ $special }) => ($special ? '5px 5px 15px gray' : 'none')};
  border: ${({ $special }) => ($special ? '3px solid tomato' : '1px solid gray')};

  p {
    color: tomato;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const InfoBlock = styled.div`
  padding: 20px 15px;
  background-color: white;
`;

const CardTitle = styled.h3`
  font-size: 18px;
`;
const CardDate = styled.p`
  color: gray;
  font-style: italic;
`;
const CardText = styled.p`
  line-height: 1.5;
  color: green;
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

export default function TourSection() {
  return (
    <div>
      <h2>TourSection</h2>
      {/* <Grid $nrOfCols={0}> */}
      <Grid>
        <Card>
          <Image src='/img/newyork.jpg' />
          <InfoBlock>
            <CardTitle>New York</CardTitle>
            <CardDate>Fri 27 Nov 2016</CardDate>
            <CardText>Praesent tincidunt sed tellus ut rutrum sed vitae justo. </CardText>
            <MyButton>Buy tickets</MyButton>
          </InfoBlock>
        </Card>
        <Card $special>
          <Image src='/img/newyork.jpg' />
          <InfoBlock>
            <CardTitle>New York</CardTitle>
            <CardDate>Fri 27 Nov 2016</CardDate>
            <CardText>Praesent tincidunt sed tellus ut rutrum sed vitae justo. </CardText>
            <MyButton>Buy tickets</MyButton>
          </InfoBlock>
        </Card>
        <Card>
          <Image src='/img/newyork.jpg' />
          <InfoBlock>
            <CardTitle>New York</CardTitle>
            <CardDate>Fri 27 Nov 2016</CardDate>
            <CardText>Praesent tincidunt sed tellus ut rutrum sed vitae justo. </CardText>
            <MyButton>Buy tickets</MyButton>
          </InfoBlock>
        </Card>
      </Grid>
    </div>
  );
}
