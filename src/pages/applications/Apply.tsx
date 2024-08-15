import { useNavigate } from "react-router-dom";
import useQuery from "../../features/hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import {
	getApplicationToken,
	removeApplicationToken,
	setApplication,
} from "../../features/app/applicationSlice";
import { useEffect, useState } from "react";
import { IProperty } from "../../features/types/Property";
import getPropertyById from "../../features/api/property/getPropertyById";
import getApplicationByToken from "../../features/api/applications/getApplicationByToken";
import { APPLICATION_MODEL } from "../../features/types/Application";
import Container from "../../features/ui/container/Container";
import ApplicationForm from "../../features/components/applications/ApplicationForm";

const Apply = () => {
	const query = useQuery();
	const propertyId = query.get("property");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector(getApplicationToken);
	const [isLoading, setIsLoading] = useState(true);
	const [property, setProperty] = useState<IProperty>();

	const checkForToken = async () => {
		try {
			if (!propertyId) {
				navigate("/properties");
				return;
			}

			const { data: propertyData } = await getPropertyById(propertyId);
			setProperty(propertyData);

			if (token) {
				const { data: appData } = await getApplicationByToken(token);
				dispatch(setApplication(appData));

				if (
					appData.property !== propertyData._id ||
					appData.status !== "In-Review"
				) {
					dispatch(removeApplicationToken(""));
					dispatch(setApplication(APPLICATION_MODEL));
					return;
				}

				const { data } = await getPropertyById(appData.property);
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
