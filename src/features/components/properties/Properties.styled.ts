import styled from "styled-components";

export const StyledPropertyListings = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;

	@media (max-width: 1400px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	@media (max-width: 850px) {
		grid-template-columns: 1fr;
	}
`;

interface PropertyCardProps {
	$status: "Available" | "Unavailable" | "Occupied";
}

export const StyledPropertyCard = styled.div<PropertyCardProps>`
	background: var(--light-gray);
	width: 100%;
	height: 400px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: cover;
	}

	.card-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50%;
		background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	.card-content {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;

		h3 {
			font-size: 24px;
			font-weight: 500;
		}

		h4 {
			font-size: 22px;
			color: var(--off-white);
		}

		p {
			color: white;
		}

		.card-specs {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;

			svg {
				width: 25px;
				height: 25px;
			}
		}
	}

	.pill {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 14px;
		line-height: 12px;
		padding: 0.35rem 0.5rem;
		font-weight: 500;
		letter-spacing: 0.1px;
		border-radius: 5px;
		background: ${({ $status }) =>
			$status === "Available" ? "var(--success)" : "black"};
		color: white;
	}
`;
