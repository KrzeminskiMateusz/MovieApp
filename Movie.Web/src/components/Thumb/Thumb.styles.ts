import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  max-height: 600px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateMovieThumb 2s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
