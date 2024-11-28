import { Property } from "../types/Property.type";
import BaseApi from "./Base.api";

class PropertyApi extends BaseApi<Property> {
	constructor() {
		super("/properties");
	}
}

export default new PropertyApi();
