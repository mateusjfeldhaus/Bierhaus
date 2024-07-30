import styled from "styled-components";

export const StyledDrinkCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .images {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-flow: column; */
    justify-items: center;

    img {
      width: 100%;
      max-width: 150px;
    }

    img:only-child {
      grid-column: span 2;
      justify-self: center;
    }
  }
`;
