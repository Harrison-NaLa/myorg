import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreManagerProps {}

const StyledStoreManager = styled.div`
  color: pink;
`;

export function StoreManager(props: StoreManagerProps) {
  return (
    <StyledStoreManager>
      <h1>Welcome to StoreManager!</h1>
    </StyledStoreManager>
  );
}

export default StoreManager;
