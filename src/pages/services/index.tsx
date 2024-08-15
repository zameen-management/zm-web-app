import { useRef } from "react";
import ServiceHero from "../../features/components/services/ServiceHero";
import ServiceServices from "../../features/components/services/ServiceServices";
import ServiceForm from "../../features/components/services/ServiceForm";

const ServicesHome = () => {
	const formRef = useRef<HTMLFormElement>();

	const handleClick = () => {
		formRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<ServiceHero onClick={handleClick} />
			<ServiceServices />
			<ServiceForm ref={formRef} />
		</>
	);
};

export default ServicesHome;
