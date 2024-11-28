import styled from "styled-components";

interface Props {
	$gap?: string;
	$alignItems?: string;
}

export const Column = styled.div<Props>`
	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap || "1rem"};
	align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
	width: 100%;
`;
