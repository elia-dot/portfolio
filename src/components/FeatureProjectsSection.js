import React from 'react';
import styled from 'styled-components';
import FeaturedProject from './FeaturedProject';

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const Grid = styled.div`
  padding: 1em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 450px));
  gap: 2em;
  place-content: center;
`;

const FeatureProjectsSection = ({ projects }) => {
 
  return (
    <Container>
     
      <Grid>
        {projects.map((project) => (
          <FeaturedProject
            project={project}
            key={project.name}
            
          />
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureProjectsSection;
