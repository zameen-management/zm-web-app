import {
	Button,
	Container,
	Font,
	Heading,
	Hr,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import { ButtonStyle } from "../src/features/emails/EmailStyles";
import EmailHeader from "../src/features/emails/EmailHeader";
import EmailFooter from "../src/features/emails/EmailFooter";
import { FC } from "react";

interface I {
	address: string;
	applicant: string;
	url: string;
}

const RevisionsMadeEmail: FC<I> = ({ address, applicant, url }) => {
	return (
		<Html lang="en">
			<Font
				fontFamily="Roboto"
				fallbackFontFamily="Verdana"
				webFont={{
					url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
					format: "woff2",
				}}
				fontWeight={400}
				fontStyle="normal"
			/>

			<Preview>Application Revision: {address}</Preview>

			<Container>
				<EmailHeader />

				<Hr />

				<Heading as="h2">
					Someone revised an application for {address}.
				</Heading>

				<Hr />

				<Text>Applicant: {applicant}</Text>
				<Button href={url} style={ButtonStyle}>
					View Application
				</Button>

				<EmailFooter />
			</Container>
		</Html>
	);
};

export default RevisionsMadeEmail;
