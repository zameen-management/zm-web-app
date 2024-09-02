import { FC, useEffect, useState } from "react";
import { StyledFileUploadModal } from "./FileUploadModal.styled";
import { getImageUrl } from "../../utils/getImageUrl";
import { MdDelete } from "react-icons/md";
import FileUpload from "../fileUpload/FileUpload";
import AssetApi from "../../api/Asset.api";

interface UploadModalProps {
	value: string[];
	onChange: (files: string[]) => void;
	multiple?: boolean;
	allowedFileTypes?: string[];
}

const FileUploadModal: FC<UploadModalProps> = ({
	value,
	onChange,
	multiple = false,
	allowedFileTypes = [],
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const text = multiple ? "Upload File(s)" : "Upload File";
	const [selectedFiles, setSelectedFiles] = useState(value || []);

	const handleChange = async (files: any) => {
		if (files.length === 0) return;
		try {
			setIsLoading(true);
			const tempFiles = [];
			for (const file of files) {
				const key = await AssetApi.upload(file);
				tempFiles.push(key);
			}
			setSelectedFiles(tempFiles);
		} catch (err: any) {
			alert(`Unable to upload assets: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (key: string) => {
		try {
			setIsLoading(true);
			await AssetApi.delete(key);
			setSelectedFiles((prev: any) =>
				prev.filter((file: any) => file !== key)
			);
		} catch (err: any) {
			alert(`Unable to delete asset: ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		onChange(selectedFiles);
	}, [selectedFiles]);

	return (
		<StyledFileUploadModal>
			<FileUpload
				multiple={multiple}
				allowedFileTypes={allowedFileTypes}
				onChange={handleChange}
				text={text}
				isLoading={isLoading}
			/>
			{selectedFiles.length > 0 && (
				<div className="upload-modal">
					{selectedFiles.map((file, index) => {
						if (!file) return;
						return (
							<div key={index} className="modal-img">
								<img src={getImageUrl(file)} alt="File" />
								<MdDelete onClick={() => handleDelete(file)} />
							</div>
						);
					})}
				</div>
			)}
		</StyledFileUploadModal>
	);
};

export default FileUploadModal;
