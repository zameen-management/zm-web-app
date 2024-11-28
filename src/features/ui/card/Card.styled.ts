import styled from "styled-components";

export const StyledCard = styled.div`
	width: 100%;
	border: 2px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: 3px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
