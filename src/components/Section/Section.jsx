import { Title, StyledSection } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};
