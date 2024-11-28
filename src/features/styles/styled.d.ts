import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			textGray: string;
			lightGray: string;
			darkGray: string;
		};
	}
}
