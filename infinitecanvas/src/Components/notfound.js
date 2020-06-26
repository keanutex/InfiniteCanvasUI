import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #31a0e0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 66%;
`;

const Text1 = styled.p`
    color: white;
    font-size: 8rem;
    margin: 1rem;
`;

const Text2 = styled.p`
    color: white;
    font-size: 2rem;
`;

const Text3 = styled.p`
    color: white;

    & > a {
        color: white;
        text-decoration: none;
        font-weight: bolder;
        margin-left: 5px;
    }
`;

function Notfound() {
    return (
        <Screen>
            <Container>
                <Text1>(╯°□°)╯︵ ┻━┻</Text1>
                <Text2>Oopsie Woopsie! Uwu You made a fucky wucky!! A wittle
                    fucko boingo! The code monkeys at our headquarters
                    worked VEWY HAWD to stop wou from seeing this!
                </Text2>
                <Text3>To go back to your cage, click here:
                    <Link to="/" color="white" text-decoration="none">OOPSIE_WOOPSIE</Link>
                </Text3>
            </Container>
        </Screen>
    )
}

export default Notfound