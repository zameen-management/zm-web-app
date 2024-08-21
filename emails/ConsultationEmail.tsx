import {
	Container,
	Font,
	Heading,
	Hr,
	Html,
	Preview,
} from "@react-email/components";
import { FC } from "react";
import EmailHeader from "../src/features/emails/EmailHeader";
import EmailFooter from "../src/features/emails/EmailFooter";

interface I {
	consultation: {
		name: string;
		email: string;
		phoneNumber: string;
		availability: string;
		propertyCount: string;
		comments: string;
	};
}

const ConsultationEmail: FC<I> = ({ consultation }) => {
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

			<Preview>
				{consultation?.name || "N/A"} has requested a consultation!
			</Preview>

			<Container>
				<EmailHeader />

				<Hr />

				<Heading as="h3">
					{consultation?.name || "N/A"} has requested a consultation!
				</Heading>
				<p>Email: {consultation?.email || "N/A"}</p>
				<p>Phone Number: {consultation?.phoneNumber || "N/A"}</p>
				<p>Availability: {consultation?.availability || "N/A"}</p>
				<p>Property Count: {consultation?.propertyCount || "N/A"}</p>
				<p>Comments: {consultation?.comments || "N/A"}</p>

				<Hr />

				<EmailFooter />
			</Container>
		</Html>
	);
};

export default ConsultationEmail;
