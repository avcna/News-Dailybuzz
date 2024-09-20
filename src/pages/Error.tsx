import styled from "styled-components"
import error from "../assets/error.svg"

const Div = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  `;

const Img = styled.img`
width: 300px;

@media (max-width: 768px) {
   width: 200px;
  }
`

export const ErrorPage: React.FC = () => {
  return (
    <Div>
      <Img src={error} alt="Maaf, Terjadi Kesalahan"/>
    </Div>
  )
}

