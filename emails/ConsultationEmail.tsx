import { Font, Heading, Hr, Html } from "@react-email/components";
import { FC } from "react";

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

			<Heading as="h3">
				{consultation?.name} has requested a consultation!
			</Heading>
			<Hr />
			<Heading as="h4">Contact Information:</Heading>
			<p>
				{consultation?.email}, {consultation?.phoneNumber}
			</p>
			<Heading as="h4">Availability:</Heading>
			<p>{consultation?.availability}</p>
			<Heading as="h4">Property Count:</Heading>
			<p>{consultation?.propertyCount}</p>
			<Heading as="h4">Addtional Comments:</Heading>
			<p>{consultation?.comments}</p>
		</Html>
	);
};

export default ConsultationEmail;
