import styled from 'styled-components';
import Grid from '../styled/Grid.styled';
import { useEffect } from 'react';

const Section = styled.section`
  padding: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  color: var(--main-color);
  /* margin-bottom: 50px; */
`;

const SubTitle = styled.p`
  font-size: 20px;
  text-align: center;
  font-style: italic;
  margin-bottom: 50px;
  font-weight: 300;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: gray;

  position: relative;
  overflow: hidden;

  &:hover ul {
    transform: translateX(0);
  }
`;

const SocialMedia = styled.ul`
  transition: transform 0.2s ease-in;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  background-color: var(--main-color);
  color: white;
  margin: 0;
  transform: translateX(-100%);
`;

const SocialMediaItem = styled.li`
  padding: 5px;
  &:hover {
    background-color: #91c7f7;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBlock = styled.div`
  padding: 20px 15px;
  background-color: white;
`;

const TeamMember = styled.div`
  border: 1px solid black;
`;

export default function TeamSection() {
  useEffect(() => {
    fetch('/data/team.json');
  }, []);
  return (
    <Section>
      <SectionTitle>Our Team</SectionTitle>
      <SubTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
        reiciendis.
      </SubTitle>

      <Grid $nrOfCols={4}>
        <TeamMember>
          <ImageContainer>
            <Image src='/img/team/person_1.jpg' />
            <SocialMedia>
              <SocialMediaItem>item1</SocialMediaItem>
              <SocialMediaItem>item2</SocialMediaItem>
            </SocialMedia>
          </ImageContainer>
          <InfoBlock>
            <h2>Ben Tomson</h2>
            <p>Product manager</p>
          </InfoBlock>
        </TeamMember>
      </Grid>
    </Section>
  );
}
