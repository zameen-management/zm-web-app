import { FC, ImgHTMLAttributes, useEffect, useState } from "react";
import { getImageUrl } from "../../utils/getImageUrl";
import axios from "../../api/axios";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	imageKey: string;
}

const Image: FC<Props> = ({ imageKey, ...rest }) => {
	const [url, setUrl] = useState("");

	useEffect(() => {
		const getImage = async () => {
			try {
				const { data } = await axios.get(getImageUrl(imageKey));
				setUrl(data.url);
			} catch (error: any) {
				console.log(error);
			}
		};

		getImage();
	}, [imageKey]);

	return <img {...rest} src={url} loading="lazy" />;
};

export default Image;
