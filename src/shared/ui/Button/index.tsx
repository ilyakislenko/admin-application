import styled from "@emotion/styled"
import { IButtonSubmit } from "../../../interfaces"

const ButtonSignIn = styled.button`
height: 52px;
width:108px;
border-radius: 2px;
border: 0;
cursor:pointer;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.01em;
text-align: center;
background: #585CC6;
color:white;
margin-top:32px;
:disabled{
    cursor:default;
    background:#8A8A8A;
}
@media (max-width: 550px) {
    height: 42px;
    width: 85%;
}
`
export const ButtonSubmit:React.FC<IButtonSubmit> = ({buttonType,buttonDisabled,buttonText}) => {
    return(
        <ButtonSignIn type={buttonType} disabled={buttonDisabled}>{buttonText}</ButtonSignIn>
    )
}