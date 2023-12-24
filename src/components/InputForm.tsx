import { useState } from "react";
import styled from "styled-components";
import ChartInterface from "../Interfaces/ChartInterface";

export const InputForm = () => {
    const [rank, setRank] = useState<ChartInterface>({ start: 1, end: 1 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setRank((prevUser) => ({ ...prevUser, [name]: value }));
    };
  
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("입력 정보:", rank);
    };
    return(
        <StyledInputForm>
            <StyledInput 
            name="start"
            value={rank.start}
            onChange={handleChange}
            placeholder="몇위부터 알아볼까요"
            />
            <StyledInput 
            name="end"
            value={rank.end}
            onChange={handleChange}
            placeholder="몇위까지 알아볼까요"
            />
            <StyledBtn
            onClick={handleSubmit}
            >
                전송하기
            </StyledBtn>
        </StyledInputForm>
    )
}

const StyledInputForm = styled.div`
    
`
const StyledInput = styled.input`
    width: 300px;
    height: 25px;
`
const StyledBtn = styled.button`
    width: 180px;
    height: 40px;
    font-size: 20px;
    background-color: #45ffb1;
    color: #666;
    border: none;
    cursor: pointer;
    &:hover{
        color:#fff;
    }
    &:active{
        background-color: #2fa071;
    }
`