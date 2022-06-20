import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #2d3748;
  transition: 0.5s;
  border: 2px solid #2f4969;
  :hover {
    border: 2px solid #aaa;
  }
  & + li {
    margin-top: 2rem;
  }
`;
export const Icon = styled.div`
  width: 3.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
    transition: 0.3s;
    :hover {
      color: #999;
    }
  }
`;
