import React from 'react'
import styled from "styled-components"

const Header = styled.header`
  display: flex;
`

const MenuWrapper = styled.nav`
    align-self: center;
`

const MenuItem = styled.a`
    margin-right: 20px;
`

const HeaderLogo = styled.figure`

`

const HeaderWrapper = () => {
    return (
        <Header>
            <HeaderLogo>
                자취일기
            </HeaderLogo>
            <MenuWrapper>
                <MenuItem>원해요</MenuItem>
                <MenuItem>구해요</MenuItem>
                <MenuItem>소개해요</MenuItem>
            </MenuWrapper>
        </Header>
    )
}

export default HeaderWrapper