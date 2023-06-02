import styled from 'styled-components';

const StyledCards = styled.div`
    & .card {
        border: solid 1px #f0f8fa;
        height: 250px;
        width: 250px;
        background-color: #f0f8fa;
        box-shadow: 10px 5px 5px #bbbebf;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 10px;
        border-radius: 20px;
    }

    & .title {
        font-weight: bold;
        margin-top: 10px;
        font-size: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 180px;
        white-space: nowrap;
    }
    & .category {
        margin-bottom: 10px;
    }
    & .popularity {
        height: 50px;
        width: 150px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    & .actions {
        width: 150px;
        display: flex;
        justify-content: space-around;
    }
    
`;

export default StyledCards;
