import styled from "styled-components";

interface Props {
	$gap?: string;
	$justifyContent?: string;
}

export const Row = styled.div<Props>`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: ${({ $gap }) => ($gap ? $gap : "1rem")};
	align-items: center;
	justify-content: ${({ $justifyContent }) =>
		$justifyContent ? $justifyContent : "flex-start"};
`;
