/*
    css from styled-components allows us to write a block of css
    that whe can pass in and render as css inside of styled component
*/
import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
// this is how we use link components in styled components 
//wrap it as a funtion
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`   
export const OptionDiv =styled.div`
${OptionContainerStyles}`