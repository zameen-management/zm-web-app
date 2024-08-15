import { MdFileUpload } from "react-icons/md";
import { StyledFileUpload } from "./FileUpload.styled";
import { FC } from "react";

interface FileUploadProps {
	multiple?: boolean;
	allowedFileTypes?: string[];
	onChange: (files: any) => void;
	text?: string;
	isLoading?: boolean;
}

const FileUpload: FC<FileUploadProps> = ({
	multiple = false,
	allowedFileTypes = [],
	onChange,
	text,
	isLoading,
}) => {
	const handleFileChange = (e: any) => {
		const files = Array.from(e.target.files);
		if (onChange) onChange(files);
	};

	return (
		<StyledFileUpload>
			<input
				id="file-upload"
				type="file"
				multiple={multiple}
				onChange={handleFileChange}
				accept={allowedFileTypes.join(",")}
				disabled={isLoading}
			/>
			<label htmlFor="file-upload">
				<MdFileUpload />
				<p>{isLoading ? "Uploading..." : text || "Select File(s)"}</p>
			</label>
		</StyledFileUpload>
	);
};

export default FileUpload;
