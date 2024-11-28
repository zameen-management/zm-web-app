import styled from "styled-components";

export const StyledFileUploadButton = styled.div`
	input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}

	label {
		width: min-content;
		white-space: nowrap;
		font-size: 1rem;
		color: white;
		padding: 8px 20px;
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.primary};
		background: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
		border-radius: 3px;
		transition: all 0.25s ease-in-out;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		svg {
			width: 20px;
			height: 20px;
		}

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}
	}
`;
