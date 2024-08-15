import {
	Container,
	Font,
	Heading,
	Hr,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import EmailHeader from "../src/features/emails/EmailHeader";
import EmailFooter from "../src/features/emails/EmailFooter";
import { FC } from "react";

interface I {
	name: string;
	address: string;
}

const ApprovedApplication: FC<I> = ({ name, address }) => {
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

			<Preview>Your application has been approved!</Preview>

			<Container>
				<EmailHeader />

				<Hr />

				<Heading as="h2">Your application has been approved!</Heading>
				<Text>Hi {name},</Text>
				<Text>
					We are pleased to inform you that your application for the
					property at {address} has been approved!
				</Text>
				<Text>Here are the next steps to finalize the process:</Text>
				<Text>
					Please feel free to reach out if you have any questions or
					need further assistance. We look forward to welcoming you to
					your new home.
				</Text>
				<Text>Best regards, </Text>
				<Text>
					Faiqa Kamran
					<br></br>Leasing Director
					<br></br>Phone: (417) 669-2258
					<br></br>Email: faiqakamran@icloud.com
				</Text>

				<Hr />

				<EmailFooter />
			</Container>
		</Html>
	);
};

export default ApprovedApplication;
