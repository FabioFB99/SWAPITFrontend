import styled from 'styled-components';

import Palette from '../styles/Palette';

const AnchorStyled = styled.a`
  color: ${Palette.primary};
  font-size: 14px;
  &:hover {
    color: ${Palette.highlight};
  }
`;

const Anchor = ({ children, className, href, target, rel }) => {
  return (
    <AnchorStyled className={className} href={href} target={target} rel={rel}>
      {children}
    </AnchorStyled>
  );
};

export default Anchor;
