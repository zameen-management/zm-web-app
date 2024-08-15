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
import EmailHeader from "../src/features/emails/EmailHeader";
import { ButtonStyle } from "../src/features/emails/EmailStyles";
import EmailFooter from "../src/features/emails/EmailFooter";
import { FC } from "react";

interface I {
	name: string;
	address: string;
	url: string;
}

const RevisionsRequestedEmail: FC<I> = ({ name, address, url }) => {
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
				We have requested some revisions on your application for{" "}
				{address}
			</Preview>

			<Container>
				<EmailHeader />

				<Hr />

				<Heading as="h1">
					We've requested some revisions, {name}.
				</Heading>
				<Text>
					We have requested some revisions on your application for{" "}
					{address}. It is important that you take time to revise your
					application to have the best chances of getting your
					application approved!
				</Text>
				<Text>
					To view your application, please click the link below:
				</Text>
				<Button href={url} style={ButtonStyle}>
					View Application
				</Button>

				<Hr />

				<EmailFooter />
			</Container>
		</Html>
	);
};

export default RevisionsRequestedEmail;
