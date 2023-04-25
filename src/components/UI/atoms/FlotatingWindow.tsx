import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledFlotatingWindow = styled.div`
	background-color: rgba(116, 116, 116, 0.6);
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	left: 0;

	z-index: 99;
`;

export const StyledFlotatingCard = styled.div`
	background-color: var(--white);
	height: calc(95% - 7rem);
	width: 90%;
	max-width: 70rem;
	border-radius: var(--br-1);
	margin-top: calc(7rem);

	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
	overflow-y: scroll;
`;
