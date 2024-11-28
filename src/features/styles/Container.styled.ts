import styled from "styled-components";

interface Props {
	$gap?: string;
}

export const Container = styled.section<Props>`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap || "1rem"};

	@media (max-width: 1080px) {
		padding: 1rem;
	}
`;
