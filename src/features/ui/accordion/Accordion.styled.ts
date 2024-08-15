import styled from "styled-components";

interface AccordionProps {
	selected: Boolean;
}

export const StyledAccordion = styled.div`
	width: 100%;
`;

export const AccordionSection = styled.section<AccordionProps>`
	width: 100%;
	background: white;
	border: 1px solid lightgray;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: ${(props) => (props.selected ? "1rem" : "0")};
	cursor: pointer;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		z-index: 100;

		@media (max-width: 800px) {
			box-shadow: none;
		}
	}

	&:first-child {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	&:last-child {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	h3 {
		font-weight: 400;
	}

	p {
		font-size: 1rem;
	}

	svg {
		width: 35px;
		height: 35px;
		padding: 5px;
		border-radius: 5px;
		color: var(--primary);
		background: var(--off-white);
	}

	.arrow-down {
		background: none;
		color: var(--gray);
		padding: 0;
		transform: ${(props) =>
			props.selected ? "rotate(180deg)" : "rotate(0)"};
	}

	.content {
		max-height: ${(props) => (props.selected ? "200px" : "0")};
		overflow: hidden;
	}
`;
