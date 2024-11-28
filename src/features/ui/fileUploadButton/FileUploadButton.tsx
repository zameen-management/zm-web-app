import { MdUpload } from "react-icons/md";
import { StyledFileUploadButton } from "./FileUploadButton.styled";

interface Props {
	id: string;
	label?: string;
	maxFileSize?: number;
	supportedFileTypes?: string[];
	allowMultiple?: boolean;
	onChange?: (files: File | File[]) => void;
}

const FileUploadButton = ({
	id,
	label,
	maxFileSize = 5 * 1024 * 1024,
	supportedFileTypes = [
		"image/jpeg",
		"image/png",
		"application/pdf",
		"image/heic",
	],
	allowMultiple = false,
	onChange,
}: Props) => {
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);
		const validFiles: File[] = [];

		files.forEach((file) => {
			if (file.size > maxFileSize) {
				alert(
					`${file.name} exceeds the max file size of ${
						maxFileSize / (1024 * 1024)
					} MB.`
				);
				return;
			}

			if (!supportedFileTypes.includes(file.type)) {
				alert(`${file.name} is not a supported file type.`);
				return;
			}

			validFiles.push(file);
		});

		if (onChange) {
			if (allowMultiple) {
				onChange(validFiles);
			} else {
				onChange(validFiles[0]);
			}
		}
	};

	return (
		<StyledFileUploadButton>
			<input
				id={id}
				type="file"
				multiple={allowMultiple}
				onChange={handleFileChange}
			/>
			<label htmlFor={id}>
				<MdUpload />
				{label || `Upload ${allowMultiple ? "File(s)" : "File"}`}
			</label>
		</StyledFileUploadButton>
	);
};

export default FileUploadButton;
