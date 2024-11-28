import styled from "styled-components";

export const StyledPopup = styled.div`
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(3px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	.popup-modal {
		background: white;
		border-radius: 3px;
		min-width: 500px;
		max-width: calc(100vw - 2rem);
		max-height: calc(90vw);
		padding: 2rem;
		overflow-x: hidden;
		overflow-y: scroll;

		.popup-close {
			color: black;
			width: 35px;
			height: 35px;
			cursor: pointer;
			position: absolute;
			top: 2rem;
			right: 2rem;
		}

		@media (max-width: 960px) {
			width: calc(100vw - 2rem);
			padding: 1rem;

			.popup-close {
				top: 1rem;
				right: 1rem;
			}
		}
	}
`;
