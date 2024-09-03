import styled from "styled-components";

export const StyledHeaderGallery = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: row;
	gap: 1rem;

	.large-column {
		width: 50%;
		height: 100%;

		.gallery-card {
			width: 100%;
			height: 100%;
		}
	}

	.small-column-a,
	.small-column-b {
		width: 25%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.gallery-card {
			width: 100%;
			height: calc(50% - 0.5rem);
		}
	}

	.gallery-card {
		cursor: pointer;
		border-radius: 10px;
		overflow: hidden;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
				rgba(0, 0, 0, 0.12) 0px -12px 30px,
				rgba(0, 0, 0, 0.12) 0px 4px 6px,
				rgba(0, 0, 0, 0.17) 0px 12px 13px,
				rgba(0, 0, 0, 0.09) 0px -3px 5px;
		}
	}

	.show-all {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		background: var(--off-white);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		color: black;
		padding: 0.25rem 0.5rem;
		border-radius: 5px;
		cursor: pointer;

		svg {
			width: 30px;
			height: 30px;
		}

		p {
			color: black;
			font-size: 14px;
			line-height: 14px;
		}
	}

	.show-more {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 22px;
	}

	img {
		border-radius: 10px;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1080px) {
		height: 400px;

		.large-column {
			width: 66%;
		}

		.small-column-a {
			display: none;
		}

		.small-column-b {
			width: 33%;
		}
	}

	@media (max-width: 650px) {
		height: 300px;

		.large-column {
			width: 100%;
		}

		.small-column-b {
			display: none;
		}
	}
`;
