import { MdArrowDropDown } from "react-icons/md";
import { AccordionSection, StyledAccordion } from "./Accordion.styled.ts";
import { FC, ReactNode, useState } from "react";

interface RowProps {
	icon: any;
	title: String;
	content: ReactNode;
}

interface AccordionProps {
	rows: RowProps[];
}

const Accordion: FC<AccordionProps> = ({ rows }) => {
	const [selectedRow, setSelectedRow] = useState<Number | null>(null);

	const handleRowClick = (index: Number) => {
		if (selectedRow === index) {
			setSelectedRow(null);
		} else {
			setSelectedRow(index);
		}
	};

	return (
		<StyledAccordion>
			{rows.map((row, index) => (
				<AccordionSection
					key={index}
					selected={selectedRow === index}
					onClick={() => handleRowClick(index)}
				>
					<div className="row align-center justify-sb">
						<div className="row align-center gap-1">
							{row.icon}
							<h3>{row.title}</h3>
						</div>
						<MdArrowDropDown className="arrow-down" />
					</div>
					<div className="content">{row.content}</div>
				</AccordionSection>
			))}
		</StyledAccordion>
	);
};

export default Accordion;
