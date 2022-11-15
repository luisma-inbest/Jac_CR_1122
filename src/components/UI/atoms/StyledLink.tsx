import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const NavbarLink = styled(Link)`
	background-color: var(--color-main);
	&:hover,
	&:focus {
		color: blue;
	}
	&:hover,
	&:focus {
		background-color: red;
	}
`;
