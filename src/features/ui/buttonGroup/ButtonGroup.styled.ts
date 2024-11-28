import styled from "styled-components";

export const StyledButtonGroup = styled.div`
	display: flex;
	flex-direction: row;

	button {
		border-radius: 0px;
		border-right: 0px;

		&:first-child {
			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
		}

		&:last-child {
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
			border-right: 1px solid ${({ theme }) => theme.colors.primary};
		}

		&.active {
			background-color: ${({ theme }) => theme.colors.primary};
			color: white;
		}
	}
`;
