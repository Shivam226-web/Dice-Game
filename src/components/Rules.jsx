import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>after click on dices if select number is equal to dice number you will get same point as Dice{""}</p>
        <p>if you get wrong guess then 2 point will be deducted</p>  
      </div>      
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #FBF1F1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}
`;
