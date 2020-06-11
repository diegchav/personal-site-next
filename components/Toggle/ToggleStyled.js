import styled from 'styled-components';

const ToggleStyled = styled.div`
    margin-left: auto;
    margin-top: 2rem;
    margin-right: 2rem;

    width: 35px;
    height: 25px;
    border-radius: 100px;
    background: ${props => props.backgroundColor};
    display: flex;
    align-items: center;
    padding: 0 5px;
    cursor: pointer;

    .circle {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: ${props => props.foregroundColor};
        margin-left: ${props => props.isToggled ? 'auto' : '0'};
        z-index: 1;
    }
`;

export default ToggleStyled;