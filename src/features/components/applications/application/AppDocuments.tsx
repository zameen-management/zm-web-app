import { MdDelete } from "react-icons/md";
import { Column } from "../../../styles/Column.styled";
import { Row } from "../../../styles/Row.styled";
import FileUploadButton from "../../../ui/fileUploadButton/FileUploadButton";
import Form from "../../../ui/form/Form";
import { useState } from "react";
import Button from "../../../ui/button/Button";

const AppDocuments = () => {
	const [photoId, setPhotoId] = useState<File>();
	const [proofOfIncome, setProofOfIncome] = useState<File[]>([]);
	const [otherDocs, setOtherDocs] = useState<File[]>([]);

	const uploadProofOfIncome = (files: File[]) => {
		const existingFileNames = new Set(
			proofOfIncome.map((file) => file.name)
		);
		const filteredNewFiles = files.filter(
			(file) => !existingFileNames.has(file.name)
		);
		const updatedFiles = [...proofOfIncome, ...filteredNewFiles];
		setProofOfIncome(updatedFiles);
	};

	const deleteProofOfIncome = (index: number) => {
		const filteredFiles = [...proofOfIncome];
		filteredFiles.splice(index, 1);
		setProofOfIncome(filteredFiles);
	};

	const uploadOtherDocs = (files: File[]) => {
		const existingFileNames = new Set(otherDocs.map((file) => file.name));
		const filteredNewFiles = files.filter(
			(file) => !existingFileNames.has(file.name)
		);
		const updatedFiles = [...otherDocs, ...filteredNewFiles];
		setOtherDocs(updatedFiles);
	};

	const deleteOtherDocs = (index: number) => {
		const filteredFiles = [...otherDocs];
		filteredFiles.splice(index, 1);
		setOtherDocs(filteredFiles);
	};

	const handleSubmit = () => {};

	return (
		<Form onSubmit={handleSubmit}>
			<Column $gap="2rem">
				<Column $gap="0.25rem">
					<h3>Upload Documents</h3>
					<p>
						Upload PDF, PNG, JPEG, and HEIC files up to a maximum
						size of 10MB.
					</p>
				</Column>
				<Column>
					<Column $gap="0.25rem">
						<h4>Upload Documents</h4>
						<p>
							Must be government-issued e.g. driver’s license,
							passport, military ID, etc.
						</p>
					</Column>
					{photoId && (
						<DocumentUpload
							file={photoId}
							onDelete={() => setPhotoId(undefined)}
						/>
					)}
					<FileUploadButton
						id="uploadPhotoId"
						label="Upload Photo ID"
						onChange={(file) => file && setPhotoId(file as File)}
					/>
				</Column>
				<Column>
					<Column $gap="0.25rem">
						<h4>Proof of Income</h4>
						<p>
							E.g. paystub, bank statement, social security, etc.
						</p>
					</Column>
					{proofOfIncome.length > 0 && (
						<Column $gap="0.75rem">
							{proofOfIncome.map((file, index) => (
								<DocumentUpload
									key={index}
									file={file}
									onDelete={() => deleteProofOfIncome(index)}
								/>
							))}
						</Column>
					)}
					<FileUploadButton
						allowMultiple
						id="uploadProofOfIncome"
						label="Upload Proof of Income"
						onChange={(files) =>
							uploadProofOfIncome(files as File[])
						}
					/>
				</Column>
				<Column>
					<Column $gap="0.25rem">
						<h4>Other Documents (Optional)</h4>
						<p>
							Include any other documents requested by the
							landlord. .
						</p>
					</Column>
					{otherDocs.length > 0 && (
						<Column $gap="0.75rem">
							{otherDocs.map((file, index) => (
								<DocumentUpload
									key={index}
									file={file}
									onDelete={() => deleteOtherDocs(index)}
								/>
							))}
						</Column>
					)}
					<FileUploadButton
						allowMultiple
						id="uploadOtherDocs"
						label="Upload Other Documents"
						onChange={(files) => uploadOtherDocs(files as File[])}
					/>
				</Column>
			</Column>
			<Button fullWidth>Next</Button>
		</Form>
	);
};

const DocumentUpload = ({
	file,
	onDelete,
}: {
	file: File;
	onDelete: () => void;
}) => {
	const fileURL = URL.createObjectURL(file);
	const isImage = file.type.startsWith("image/");

	return (
		<Row $justifyContent="space-between">
			<Row $gap="0.5rem">
				{isImage && (
					<img
						src={fileURL}
						alt={file.name}
						style={{
							width: "40px",
							height: "40px",
							objectFit: "cover",
							borderRadius: "2px",
						}}
					/>
				)}
				<p>{file.name}</p>
			</Row>
			<MdDelete onClick={onDelete} className="icon" />
		</Row>
	);
};

export default AppDocuments;
