import styled from 'styled-components';

const AboutStyled = styled.div`
    text-align: center;

    .name {
        color: ${props => props.fontColor};
        font-size: 4rem;
        line-height: 1rem;
    }

    hr {
        border: 1px solid #bbb;
    }

    .role {
        color: ${props => props.fontColor};
        font-size: 2rem;
        line-height: 1.5rem;
    }

    @media (max-width: 767px) {
        .name {
            font-size: 3rem;
            line-height: 2rem;
        }

        .role {
            font-size: 2rem;
            line-height: 2rem;
        }
    }
`;

export default AboutStyled;