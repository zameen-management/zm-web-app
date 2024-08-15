import styled from "styled-components";

export const StyledInput = styled.div<any>`
	display: flex;
	flex-direction: column;
	gap: 5px;

	label {
		font-size: 1rem;
		font-weight: 300;
		letter-spacing: 0.2px;
		color: black;

		span {
			font-weight: 500;
			color: #e74c3c;
		}
	}

	input {
		outline: none;
		border: 1px solid var(--light-gray);
		padding: 0.65rem 0.75rem;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 300;
		letter-spacing: 0.15px;

		&::placeholder {
			font-weight: 300;
			color: var(--light-gray);
		}

		&:active,
		&:focus {
			border-color: var(--primary);
		}
	}
`;
