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
	address: string;
}

const RejectedApplicationEmail: FC<I> = ({ address }) => {
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

			<Preview>Your application has been reviewed.</Preview>

			<Container>
				<EmailHeader />

				<Hr />

				<Heading as="h2">
					We've reviewed your application for {address}.
				</Heading>
				<Text>
					Thank you for your interest in renting the property at{" "}
					{address} and for taking the time to submit your
					application. We appreciate the effort you put into the
					process.
				</Text>
				<Text>
					After careful consideration, we regret to inform you that we
					will not be able to move forward with your application at
					this time. Please understand that this decision was not
					easy, as we received numerous applications from qualified
					candidates.
				</Text>
				<Text>
					We encourage you to apply for future openings, and we will
					be happy to consider your application for other properties
					that may become available. Thank you again for your interest
					in our property. We wish you the best of luck in finding a
					suitable home.
				</Text>
				<Text>Best regards, </Text>
				<Text>Zameen Management</Text>

				<Hr />

				<EmailFooter />
			</Container>
		</Html>
	);
};

export default RejectedApplicationEmail;
