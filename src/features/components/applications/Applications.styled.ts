import styled from "styled-components";

interface Props {
	$active: boolean;
}

export const StyledFormNav = styled.ul`
	display: flex;
	border: 1px solid var(--light-gray);
	border-radius: 5px;

	@media (max-width: 900px) {
		display: none;
	}
`;

export const FormNavItem = styled.li<Props>`
	border-right: 1px solid var(--light-gray);
	list-style: none;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	font-weight: ${(props) => (props.$active ? "500" : "400")};
	color: ${(props) => (props.$active ? "var(--primary)" : "var(--gray)")};
	text-decoration: ${(props) => (props.$active ? "underline" : "none")};
	cursor: pointer;

	&:hover {
		color: var(--primary);
	}

	&:last-child {
		border: none;
	}
`;

export const FormImage = styled.img`
	width: 400px;
	height: auto;
	border: 1px solid var(--light-gray);
	border-radius: 5px;

	@media (max-width: 800px) {
		width: 100%;
	}
`;

interface StatusMessageProps {
	$success: boolean;
}

export const StatusMessage = styled.b<StatusMessageProps>`
	color: ${(props) => (props.$success ? "var(--success)" : "var(--error)")};
`;
