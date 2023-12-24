import { InputForm } from "./InputForm"
import { List } from "./List"
import styled from "styled-components"

export const Chart = () => {
    return (
        <StyledChart>
            <InputForm />
            <List />
        </StyledChart>
    )
}

const StyledChart = styled.div`
    
`