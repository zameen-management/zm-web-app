import styled from "styled-components";

export const StyledTextArea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;

	label {
		color: ${({ theme }) => theme.colors.darkGray};
		font-size: 14px;
		font-weight: 300;

		.required {
			color: red;
		}
	}

	textarea {
		resize: none;
		height: 8rem;
		padding: 8px;
		color: black;
		font-size: 1rem;
		line-height: 1rem;
		font-weight: 300;
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		border-radius: 3px;

		&::placeholder {
			color: ${({ theme }) => theme.colors.textGray};
			font-size: 1rem;
			line-height: 1rem;
			font-weight: 300;
		}

		&:focus,
		&:active {
			border-color: ${({ theme }) => theme.colors.textGray};
		}
	}
`;
