import styled from 'styled-components';

const StyledMovies = styled.div`
    display: flex;
    flex-direction: column;
    & .movie-card {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
   }


`;

export default StyledMovies;
