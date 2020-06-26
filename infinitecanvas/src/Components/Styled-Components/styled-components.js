import styled from 'styled-components';

export const Screen = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Input = styled.input`
    width: 75%;
    margin: 0.3rem;
    border-radius: 5px;
    border: 1px solid #2b79d9;
    padding: 5px;
    transition-duration: 0.4s;
`;

export const Button = styled.button`
    border: none;
    text-align: center;
    transition-duration: 0.4s;
    cursor: pointer;
    padding: 6px 12px;
    color: white;
    background-color: #2b79d9;
    border-radius: 6px;
    font-size: 1rem;
    width: inherit;
    height: 2rem;
    margin: 0.5rem;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LoginModal = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    z-index: 1;
    position: absolute;

    & > h3 {
        color: #2b79d9;
    }
`;

export const CanvasArea = styled.canvas`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: #f8f8f8;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 1rem;
    display: block;
`;

export const PaletteArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    border: 1px solid #2b79d9;
    position: absolute;
    bottom: 0;
    margin-bottom: 40px;
    z-index: 1;
    background-color: white;
    padding: 10px 30px;
    border-radius: 15px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    & > h3 {
        color: #2b79d9;
        margin-right: 10px;
    }
`;

export const Colour = styled.div`
    width: 30px;    
    height: 30px;
    background-color: ${props => props.colour};
    border: 1px solid black;
    margin: 5px;
    border-radius: 15px;
    cursor: pointer;
`;

export const AdminArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => (props.isExpanded ? "top" : "center")};
    align-items: ${props => (props.isExpanded ? "left" : "center")};    
    border: 1px solid #2b79d9;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 60px;
    margin-top: 60px;
    z-index: 1;
    background-color: white;
    padding: 10px 30px;
    border-radius: 15px;
    transition: width 0.2s linear, height 0.2s linear;
    width: ${props => (props.isExpanded ? "20%" : "2rem")};
    height: ${props => (props.isExpanded ? "50rem" : "2rem")};
    overflow: hidden;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    & > button {
        color: #2b79d9;
        text-decoration: none;
        border: none;
        background-color: white;
        outline: none;
        width: ${props => (props.open ? "5rem" : "initial")};
    }

    & > div {
        overflow-y: scroll;
        width: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    & > div::-webkit-scrollbar {
        background: #f1f1f1;
        width: 10px;
    }

    & > div::-webkit-scrollbar-track {
        width: 5px;
    }

    & > div::-webkit-scrollbar-thumb {
        background: #2b79d9;
    }

    & > div::-webkit-scrollbar-thumb:hover {
        background: #0755b5;
    }
`;

export const UserLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    height: 2rem;
    padding-right: 5px;

    & > button {
        background-color: white;
        color: #2b79d9;
        border: solid 1px #2b79d9;
        width: 3rem;
        border-radius: 5px;
    }

    & > p {
        color: #2b79d9
    }
`;

export const ConfirmButtons = styled.div`
    & > button {
        background-color: white;
        color: #2b79d9;
        border: solid 1px #2b79d9;
        width: 3rem;
        border-radius: 5px;
    }
`;