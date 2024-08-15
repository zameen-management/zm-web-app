import { StyledDropdown } from "./Dropdown.styled";
import { FC, useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";

interface Option {
	label: string;
	value: any;
}

interface DropdownProps {
	id: string;
	label: string;
	options: Option[];
	value: string;
	onChange: (option: Option) => void;
	disabled?: boolean;
	required?: boolean;
	placeholder?: string;
}

const Dropdown: FC<DropdownProps> = ({
	id,
	label,
	options,
	value,
	onChange,
	disabled = false,
	required = false,
	placeholder,
	...props
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(value);

	useOutsideClick(ref, () => setIsDropdownOpen(false));

	const handleOpen = () => {
		if (!disabled) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	const handleOptionClick = (option: Option) => {
		setSelectedOption(option.value);
		onChange(option);
	};

	useEffect(() => {
		setSelectedOption(value);
	}, [value]);

	return (
		<StyledDropdown open={isDropdownOpen} ref={ref} onClick={handleOpen}>
			{label && (
				<label htmlFor={id}>
					{label}
					{required && <span>*</span>}
				</label>
			)}
			<input
				type="text"
				id={id}
				value={selectedOption || ""}
				onChange={() => {}}
				placeholder={placeholder || "Please Select One..."}
				disabled={disabled}
				required={required}
				{...props}
			/>
			<MdArrowDropDown />
			{isDropdownOpen && (
				<ul className="options">
					{options.map((option: Option, index: number) => (
						<li
							onClick={() => handleOptionClick(option)}
							key={index}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</StyledDropdown>
	);
};

export default Dropdown;
