import styled from "styled-components";

export const StyledAppLayout = styled.section`
	background-color: whitesmoke;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.modal {
		width: 600px;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		background: white;
		border-radius: 3px;
		padding: 2rem;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 900px) {
		padding: 0;

		.modal {
			width: 100%;
			box-shadow: none;
			border: none;
		}
	}

	@media (max-width: 600px) {
		.modal {
			padding: 1rem;
		}
	}
`;
