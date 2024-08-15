import {
	MdAttachMoney,
	MdBuild,
	MdCampaign,
	MdEditDocument,
	MdInsertChartOutlined,
	MdOtherHouses,
	MdSearch,
} from "react-icons/md";
import { HomeSection } from "./Services.styled";
import Accordion from "../../ui/accordion/Accordion";

const services = [
	{
		icon: <MdOtherHouses />,
		title: "Property Acquisition",
		content: (
			<p>
				Our property acquisition service leverages deep local expertise
				and extensive connections to secure ideal residential investment
				properties. We identify high-potential homes and guide you
				through the entire process, from scouting and evaluating
				opportunities to negotiating deals and closing transactions,
				ensuring a seamless investment experience.
			</p>
		),
	},
	{
		icon: <MdCampaign />,
		title: "Marketing",
		content: (
			<p>
				Enhance your property's visibility and rental income with our
				powerful marketing strategies, blending online promotion with
				strong local connections tailored for property management.
			</p>
		),
	},
	{
		icon: <MdSearch />,
		title: "Tenant Screening",
		content: (
			<p>
				We strive to find the best tenants for your property with our
				extensive screening process that includes credit checks,
				background verifications, employment confirmations, and rental
				history cross-checks.
			</p>
		),
	},
	{
		icon: <MdEditDocument />,
		title: "Lease Management",
		content: (
			<p>
				Every lease is carefully crafted to safeguard the interests of
				both property owners and tenants, ensuring a fair and balanced
				agreement for all parties.
			</p>
		),
	},
	{
		icon: <MdAttachMoney />,
		title: "Rent Collection",
		content: (
			<p>
				Our automated rent collection service guarantees seamless
				payment transitions, eliminating any worries about collecting
				rent.
			</p>
		),
	},
	{
		icon: <MdBuild />,
		title: "Maintenance",
		content: (
			<p>
				Whether it’s routine maintenance or emergency repairs, our team
				is available around the clock through our in-house maintenance
				request system to address all your property needs.
			</p>
		),
	},
	{
		icon: <MdInsertChartOutlined />,
		title: "Financial Reporting",
		content: (
			<p>
				Rely on us for regular updates on your property's financial
				performance, including detailed reports and relevant tax
				documents, allowing you to focus on asset growth.
			</p>
		),
	},
];

const ServiceServices = () => {
	return (
		<HomeSection style={{ background: "var(--off-white)" }}>
			<div className="container">
				<div className="column gap-05">
					<h2>Full-Service Property Management Solution</h2>
					<p>
						Our end-to-end services ensure your property is
						well-maintained and tenants are satisfied, all while
						providing you with a{" "}
						<span className="underline">hands-off</span> approach to
						investing.
					</p>
				</div>
				<Accordion rows={services} />
			</div>
		</HomeSection>
	);
};

export default ServiceServices;
