import styled from "styled-components"
import error from "../assets/error.svg"

const Div = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  `;

export const ErrorPage: React.FC = () => {
  return (
    <Div>
      <img src={error} alt="Maaf, Terjadi Kesalahan" width={300}/>
    </Div>
  )
}

