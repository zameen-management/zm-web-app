import styled from "styled-components";

interface PillProp {
	color: string;
}

export const StyledPropertyListings = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;

	@media (max-width: 1400px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledPropertyCard = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	cursor: pointer;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	& img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		object-position: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.no-images {
		width: 100%;
		height: 300px;
		background-image: url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
		background-size: cover;
		background-position: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		.blur {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.75);
			backdrop-filter: blur(6px);
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-size: 26px;
			font-weight: 500;
			letter-spacing: 0.25px;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
		}
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;

		.card-address {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			color: var(--gray);

			svg {
				width: 20px;
				height: 20px;
			}

			p {
				color: gray;
				letter-spacing: 0.1px;
			}
		}

		.card-spec {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;

			svg {
				color: var(--primary);
				background: whitesmoke;
				border-radius: 4px;
				padding: 0.25rem;
				width: 26px;
				height: 26px;
			}
		}
	}
`;

export const StyledPill = styled.p<PillProp>`
	position: absolute;
	top: 1rem;
	left: 1rem;
	background: ${(props) => props.color};
	width: min-content;
	white-space: nowrap;
	font-size: 12px;
	line-height: 14px;
	font-weight: 400 !important;
	color: white !important;
	padding: 2px 8px;
	border-radius: 5px;
`;

export const InfoPill = styled.p`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: gray;
	width: min-content;
	white-space: nowrap;
	font-size: 12px;
	line-height: 14px;
	font-weight: 400 !important;
	color: white !important;
	padding: 2px 8px;
	border-radius: 5px;
`;

export const StyledPropertyInfo = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-gap: 2rem;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 1080px) {
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
`;

export const PropertyInfoCard = styled.div`
	background: white;
	padding: 1rem;
	border-radius: 16px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	height: min-content;
`;

export const StyledPropertyImageGallery = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	img {
		height: 500px;
		width: auto;
		object-fit: cover;
		border-radius: 4px;
	}

	svg {
		background: black;
		color: white;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		padding: 0.5rem;
		cursor: pointer;
	}

	@media (max-width: 1080px) {
		img {
			width: 100%;
			height: auto;
		}
	}
`;
