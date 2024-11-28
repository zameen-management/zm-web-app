import styled from "styled-components";

export const StyledPropertiesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;

	@media (max-width: 1250px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const StyledPropertyCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: 3px;

	&:hover {
		img {
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		}
	}

	img {
		aspect-ratio: 16 / 9;
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center;
		border-radius: 3px;
		cursor: pointer;

		&:first-child {
			border: 1px solid lightgray;
		}
	}

	.property-address {
		font-size: 18px;
	}

	.property-info {
		font-size: 14px;
		font-weight: 300;
		color: ${({ theme }) => theme.colors.textGray};
	}
`;

export const StyledProperty = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;

	.property-left,
	.property-right {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media (max-width: 1080px) {
		flex-direction: column;

		.property-left,
		.property-right {
			width: 100%;
		}
	}
`;

export const StyledPropertyImages = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	img {
		border-radius: 3px;
		cursor: pointer;
	}

	.primary-image {
		aspect-ratio: 16 / 9;
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center;
	}

	.property-images-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.5rem;

		img {
			width: 100%;
			aspect-ratio: 16 / 9;
			height: auto;
			object-fit: cover;
			object-position: center;
		}
	}
`;

export const MoreImagesCard = styled.div`
	overflow: hidden;

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 3px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			color: white;
			font-weight: 400;
			background-color: rgba(0, 0, 0, 0.8);
			border-radius: 3px;
			padding: 2px 5px;
		}
	}
`;

export const StyledImageGallery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	svg {
		width: 50px;
		height: 50px;
		cursor: pointer;
	}

	img {
		height: 500px;
		width: auto;
		border-radius: 3px;
		cursor: default;

		@media (max-width: 1200px) {
			width: 100%;
			height: auto;
		}
	}

	p {
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 14px;
			line-height: 1.1rem;
		}
	}
`;
