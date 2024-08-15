import styled from "styled-components";

export const StyledFileUploadModal = styled.div`
	padding: 2rem;
	border: 3px dashed var(--light-gray);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	.upload-modal {
		left: 0;
		bottom: 0;
		width: 100%;
		height: 250px;
		display: flex;
		align-items: center;
		gap: 1rem;
		overflow-x: scroll;

		.modal-img {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			img {
				height: 200px;
			}

			svg {
				width: 30px;
				height: 30px;
				cursor: pointer;

				&:hover {
					color: var(--error);
				}
			}
		}
	}
`;
