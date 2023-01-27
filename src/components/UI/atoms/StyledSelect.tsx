import styled, {css} from "styled-components";

interface PropType {
	customType: string;
}

export const StyledSelect = styled.select.attrs<PropType>({})`
	width: 100%;
	min-width: 30rem;
	min-height: 3rem;
	padding: 1rem 0.5rem;
	border: none;
	margin-bottom: 1.9rem;
	background-color: ${(props: PropType) =>
		props.customType === "primary" ? "var(--background)" : "var(--white)"};
	border-bottom: ${(props: PropType) =>
		props.customType === "primary" ? "none" : "1px solid var(--gray2)"};
	font-size: var(--p);
	color: var(--text);
	border-radius: var(--br-1);
`;
