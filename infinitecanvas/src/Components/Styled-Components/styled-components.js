import styled from 'styled-components';

export const Screen = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: scroll;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e9e9;
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
    background-color: white;
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

export const CanvasFrame = styled.div`
    height: 95%;
    width: 80%;
    position: absolute;
    border: 1px solid black;
    overflow: hidden;
    background: grey;
`;

export const CanvasArea = styled.canvas`
    position: absolute;
    height: 1000px;
    width: 1000px;    
    border: 1px solid black;
    top: ${props => props.position.y}px;
    left: ${props => props.position.x}px;
    pointer-events: ${props => (props.user === null ? 'none' : 'auto')};
`;

export const PaletteArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    border: 1px solid #2b79d9;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 30px;
    z-index: 1;
    background-color: white;
    padding: 15px 15px;
    border-radius: 15px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    & > h3 {
        color: #2b79d9;
        user-select: none;
        margin: 5px 5px;
    }
`;

export const ColourLabel = styled.label`
    height: 40px;
    width: 40px;
    background-color: ${props => props.colour};
    border-radius: 10px;
`;

export const ColourInput = styled.input`
    visibility: hidden;
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
    margin-right: 30px;
    margin-top: 30px;
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
        user-select: none;
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