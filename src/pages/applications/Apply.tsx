import { useNavigate } from "react-router-dom";
import useQuery from "../../features/hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import {
	getApplicationToken,
	removeApplicationToken,
	setApplication,
} from "../../features/app/applicationSlice";
import { useEffect, useState } from "react";
import Container from "../../features/ui/container/Container";
import ApplicationForm from "../../features/components/applications/ApplicationForm";
import { Property } from "../../features/types/Property.types";
import PropertyApi from "../../features/api/Property.api";
import ApplicationApi from "../../features/api/Application.api";
import { EmptyApplication } from "../../features/types/Application.types";

const Apply = () => {
	const query = useQuery();
	const propertyId = query.get("property");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector(getApplicationToken);
	const [isLoading, setIsLoading] = useState(true);
	const [property, setProperty] = useState<Property>();

	const checkForToken = async () => {
		try {
			if (!propertyId) {
				navigate("/properties");
				return;
			}

			const propertyData = await PropertyApi.getById(propertyId);
			setProperty(propertyData);

			if (token) {
				const apps = await ApplicationApi.getAll({ token });
				if (apps.length < 1) return;
				const appData = apps[0];
				dispatch(setApplication(appData));

				if (
					appData.property !== propertyData._id ||
					appData.status !== "In-Review"
				) {
					dispatch(removeApplicationToken(""));
					dispatch(setApplication(EmptyApplication));
					return;
				}

				const data = await PropertyApi.getById(appData.property);
				setProperty(data);

				return;
			}
		} catch (err) {
			alert("Invalid token.");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		checkForToken();
	}, [token]);

	return (
		<Container>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<>{property && <ApplicationForm property={property} />}</>
			)}
		</Container>
	);
};

export default Apply;
