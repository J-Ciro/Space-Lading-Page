import React from 'react'
import hamburger from '../../../../assets/shared/icon-hamburger.svg'
import hamburgerClosed from '../../../../assets/shared/icon-close.svg'

import { StyledHamburgerContainer } from './StyledHamburger'

export const Hamburger = () => {
  return (
    <StyledHamburgerContainer>
        <figure>
            <img src={hamburger} alt="" srcset="" />
        </figure>
    </StyledHamburgerContainer>
  )
}
