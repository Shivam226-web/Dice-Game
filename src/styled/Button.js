import styled from "styled-components";

 export const Button = styled.button`

color: #fff;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;
transition : 0.4s background ease-in;

&:hover{
    background-color: #fff;
    border: 1px solid black;
    color: black;
    transition : 0.3s background ease-in;

}
`;

 export const OutLineButton = styled(Button)`
 background-color: #fff;
 border: 1px solid black;
 color: black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    

}

`;