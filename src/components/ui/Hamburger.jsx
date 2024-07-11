/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button"

import styled from "styled-components";


const StyledButton = styled.button`
  svg {
    color: #fff;
    font-size: 1.4em;
  }
`

const MOBILE_SCREEN = 500;
function Hamburger({ isOpen, onHandleClick }) {

  const [isMobile, setIsMobile] = useState(()=> window.innerWidth < MOBILE_SCREEN)


  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < MOBILE_SCREEN)
    }
    window.addEventListener('resize', checkScreen);
  }, [])

  return (
    <>
    {isMobile && <StyledButton variant="ghost" onClick={onHandleClick}>
      {!isOpen ? <FaBars className="text-white text-xl" /> : <IoClose className="text-white text-xl"/>}
		</StyledButton>}
    </>
	);
}

export default Hamburger;
