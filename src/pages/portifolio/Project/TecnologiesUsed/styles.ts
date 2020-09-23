import styled from 'styled-components';

import { VerticalStyledScroll } from '../../../../styles/shared';

export const Container = styled.div`
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.8);

  ${VerticalStyledScroll}

  h4 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }

  section {
    margin-top: 1.2rem;

    h5 {
      font-size: 1.8rem;
      text-transform: uppercase;
    }
  }
`;

export const TecnologiesList = styled.ul`
  list-style: none;
  margin-left: 1rem;

  li {
    line-height: 2rem;
    font-size: 1.4rem;

    a {
      text-decoration: none;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
