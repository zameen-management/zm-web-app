import styled from "styled-components";

export const StyledFileUpload = styled.div`
	width: min-content;
	white-space: nowrap;

	input {
		opacity: 0;
		width: 0.1px;
		height: 0.1px;
		position: absolute;
	}

	label {
		display: block;
		background: var(--primary);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		padding: 0.65rem 0.75rem;
		cursor: pointer;
		border-radius: 5px;
		transition: all 0.25s ease-in-out;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}

		p {
			color: white;
			font-size: 14px;
			line-height: 14px;
			font-weight: 400;
			white-space: nowrap;
		}

		svg {
			color: white;
		}
	}
`;
