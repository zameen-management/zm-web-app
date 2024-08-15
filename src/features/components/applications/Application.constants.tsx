import ApplicationOverview from "./ApplicationOverview";
import EmploymentSection from "./steps/EmploymentSection";
import GeneralSection from "./steps/GeneralSection";
import OthersSection from "./steps/OthersSection";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import PetsSection from "./steps/PetsSection";
import ReferenceSection from "./steps/ReferenceSection";
import ResidenceStep from "./steps/ResidenceStep";
import SignatureSection from "./steps/SignatureSection";
import WelcomeStep from "./steps/WelcomeStep";

export const APPLICATION_STEPS = [
	<WelcomeStep />,
	<PersonalInfoStep />,
	<ResidenceStep />,
	<EmploymentSection />,
	<GeneralSection />,
	<ReferenceSection />,
	<PetsSection />,
	<OthersSection />,
	<SignatureSection />,
	<ApplicationOverview />,
];
