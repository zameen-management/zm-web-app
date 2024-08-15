import styled from "styled-components";

interface HeaderProps {
	open: Boolean;
}

export const StyledWebappHeader = styled.header<HeaderProps>`
	width: 100%;
	height: 75px;
	background: var(--dark-gray);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;

	nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background: var(--dark-gray);

		.menu-close {
			position: fixed;
			left: 0;
			top: 0;
			width: 100vw;
			height: 50px;
			display: ${(props) => (props.open ? "flex" : "none")};
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			padding: 0 2rem;
		}

		a {
			color: white;
			font-weight: 300;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;

			svg {
				display: none;
				color: var(--gray);
				width: 1rem;
				height: 1rem;
			}
		}

		.header-button {
			font-size: 14px;
			color: white;
			background: var(--primary);
			border: none;
			outline: none;
			border-radius: 5px;
			padding: 0.75rem 1.5rem;
			cursor: pointer;
			white-space: nowrap;

			&:hover {
				box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
			}
		}

		@media (max-width: 1080px) {
			position: fixed;
			top: 0;
			left: ${(props) => (props.open ? "0" : "100vw")};
			width: 100vw;
			height: 100vh;
			z-index: 10;
			flex-direction: column;
			align-items: flex-end;
			padding: calc(75px + 2rem) 2rem 0 2rem;

			a {
				background: none;
				color: var(--primary);
				border: 1px solid var(--primary);
				width: 100%;
				padding: 1rem;
				border-radius: 5px;
				font-weight: 400;

				svg {
					display: block;
				}
			}

			.header-button {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1rem;
			}
		}
	}

	.menu-icon {
		width: 30px;
		height: 30px;
		color: var(--primary);
		cursor: pointer;
		display: none;

		@media (max-width: 1080px) {
			display: block;
		}
	}
`;

export const StyledWebappBody = styled.section`
	flex-grow: 1;
	min-height: calc(100vh - 75px);
	overflow: auto;
`;

export const StyledWebappFooter = styled.footer`
	width: 100%;
	background: var(--dark-gray);
	color: white;
	padding: 2rem;
`;
