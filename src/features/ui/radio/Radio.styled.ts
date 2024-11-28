import styled from "styled-components";

export const StyledRadio = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
`;

export const RadioButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;

	svg {
		width: 25px;
		height: 25px;
	}

	p {
		font-size: 1rem;
		color: black;
	}
`;
