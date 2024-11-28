import Popup from "../../../ui/popup/Popup";
import Form from "../../../ui/form/Form";
import { Column } from "../../../styles/Column.styled";
import Input from "../../../ui/input/Input";
import TextArea from "../../../ui/textArea/TextArea";
import Button from "../../../ui/button/Button";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
	setShowForm: Dispatch<SetStateAction<boolean>>;
}

const WalkthroughForm = ({ setShowForm }: Props) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		availability: "",
	});

	const handleSubmit = () => {
		console.log(form);
	};

	return (
		<Popup onClose={() => setShowForm(false)}>
			<Form onSubmit={handleSubmit}>
				<Column $gap="2rem">
					<h2>Request a Walkthrough</h2>
					<Column>
						<Input
							id="name"
							autoFocus
							label="Full name"
							placeholder="Full Name"
							value={form.name || ""}
							onChange={(e) =>
								setForm({ ...form, name: e.target.value })
							}
							required
						/>
						<Input
							id="email"
							label="Email"
							placeholder="Email"
							type="email"
							value={form.email || ""}
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
							required
						/>
						<TextArea
							id="availableTimes"
							label="Please provide available days/times"
							value={form.availability || ""}
							onChange={(e) =>
								setForm({
									...form,
									availability: e.target.value,
								})
							}
							required
						/>
					</Column>
					<Button style={{ width: "100%" }}>
						Schedule Walkthrough
					</Button>
				</Column>
			</Form>
		</Popup>
	);
};

export default WalkthroughForm;
