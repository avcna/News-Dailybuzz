import styled from "styled-components";

export const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  column-gap: 24px;
  row-gap: 20px;
`;