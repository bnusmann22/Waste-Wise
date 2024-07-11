import styled from "styled-components";

const Heading = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  gap: .4em;
  font-weight: 600;
  &::after {
    content: "";
    display: inline-block;
    width: .5em;
    height: .5em;
    background-color: #58FF2F;
    border-radius: 50%;
  }
`

export default Heading;