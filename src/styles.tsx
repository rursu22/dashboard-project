import styled from "styled-components";

const backgroundColor = "#000000"

const accentColorRed = "#FF1C1C"

const accentColorBlue = "#0800FF"

export const AppContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: block;
    display: flex;
    flex-flow: row nowrap;
`

export const SidebarContainer = styled.aside`
    position: relative;
    width: 10%;
    height: 100%;
    background-color: ${backgroundColor};
`

export const TopBar = styled.div`
    position: relative;
    width: 100%;
    height: 5%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;

`

export const TopbarLinkContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    position: relative;
    width: 90%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
`

export const DashBoard = styled.div`
    width: 100%;
    height: 95%;
    background-color: rgba(0,0,0, 0.1)
`

export const TopbarLink = styled.a<{active:boolean}>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center; 
    align-content: center;

    &::after {
        content: "";
        position: absolute;
        left: ${props => props.active ? "10%" : "25%"};
        right: ${props => props.active ? "10%" : "25%"};
        bottom: 0;
        height: 2px; 
        background: ${accentColorBlue}; 
        border-radius: 2px;
        pointer-events: none;
        transition: left 200ms ease-in-out, right 200ms ease-in-out; 
    }

    &:hover::after {
        left: 10%;    // Grows border when hovered
        right: 10%;
    }
`