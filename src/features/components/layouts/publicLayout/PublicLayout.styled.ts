import styled from "styled-components";

export const StyledPublicLayout = styled.div`
	width: 100%;
	height: 100%;
`;

export const StyledPublicHeader = styled.header`
	background: none;
	width: 100%;
	height: 75px;
	padding: 0 3rem;
	z-index: 100;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	a {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;

		img {
			width: 40px;
			height: 40px;
		}
	}

	svg {
		display: none;
		width: 35px;
		height: 35px;
		color: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
		position: absolute;
		top: 20px;
		right: 2rem;

		@media (max-width: 1080px) {
			display: block;
		}
	}
`;

interface NavProps {
	$isNavOpen: boolean;
}

export const StyledPublicNav = styled.div<NavProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5rem;
	transition: all 0.25s ease-in-out;

	svg {
		display: none;
		width: 35px;
		height: 35px;
		color: ${({ theme }) => theme.colors.textGray};
		cursor: pointer;
		position: absolute;
		top: 20px;
		right: 2rem;

		@media (max-width: 1080px) {
			display: block;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		align-items: center;
		transition: all 0.25s ease-in-out;

		a {
			color: ${({ theme }) => theme.colors.textGray};
			font-size: 1rem;
			letter-spacing: -0.1px;
			transition: all 0.25s ease-in-out;

			&.active {
				color: ${({ theme }) => theme.colors.primary};
				font-weight: 500;
			}
		}
	}

	@media (max-width: 1080px) {
		position: fixed;
		left: ${({ $isNavOpen }) => ($isNavOpen ? "0" : "100vw")};
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: white;
		flex-direction: column;
		padding: 2rem;
		z-index: 1000;

		nav {
			flex-direction: column;

			a {
				font-size: 1.5rem;
			}
		}

		button {
			width: 100%;
		}
	}
`;
