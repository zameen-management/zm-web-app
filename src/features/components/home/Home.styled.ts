import styled from "styled-components";

export const HomeHero = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url("https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg");
	background-position: center;
	background-size: cover;

	.hero-overlay {
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.85),
			rgba(0, 0, 0, 0.6) 90%
		);
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
`;
