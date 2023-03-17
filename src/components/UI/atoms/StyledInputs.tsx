import styled, { css } from "styled-components";

export interface PropsTxt {
	customType: string;
}
export const StyledInputText = styled.input.attrs<PropsTxt>({
	type: "text",
})`
	background-color: ${(props: PropType) =>
		props.customType === "gray" ? "var(--background)" : "var(--white)"};
	color: var(--text);
	border: none;
	font-size: var(--p);
	border-radius: var(--br-1);
	min-height: 3rem;
	padding: 1rem 0.5rem;
	margin-bottom: 1.9rem;
	&:focus {
		outline: 3px solid var(--highlight);
	}
`;

interface PropType {
	customType: string;
}

export const StyledInputSubmit = styled.input.attrs<PropType>({
	type: "submit",
})`
	background-color: ${(props: PropType) =>
		props.customType === "primary" ? "var(--highlight)" : "var(--white)"};
	color: ${(props: PropType) =>
		props.customType === "primary" ? "var(--white)" : "var(--red)"};

	font-size: var(--p2);
	font-weight: 600;
	border: none;
	border-radius: 0.5rem;
	height: 4rem;
	width: 100%;
	margin-bottom: 1.9rem;
	cursor: pointer;
`;

export const StyledInputRadio = styled.input.attrs({
	type: "radio",
})`
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	margin: 0;
	appearance: none;
	margin: 0;
	font: inherit;
	color: currentColor;
	width: 1.5em;
	height: 1.5em;
	border: 0.15em solid currentColor;
	border-radius: 45%;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;

	&:before {
		content: "";
		width: 0.9em;
		height: 0.9em;
		border-radius: 50%;
		transform: scale(0);
		transition: 220ms transform ease-in-out;
		box-shadow: inset 1em 1em #0069d1;
	}

	&:checked &:before {
		transform: scale(1);
	}

	&:checked&:before {
		transform: scale(1);
	}
`;

export const StyledInputDate = styled.input.attrs<PropType>({
	type: "date",
})`
	min-height: 3rem;
	text-align: center;
	border: none;
	background-color: ${(props: PropType) =>
		props.customType === "primary" ? "var(--background)" : "var(--white)"};
	padding: 1rem 0.5rem;
	border-radius: var(--br-1);
	border-bottom: ${(props: PropType) =>
		props.customType === "primary" ? "none" : "1px solid var(--gray2)"};
	font-size: var(--p);
	text-align: left;
	color: var(--text);
	cursor: pointer;
	margin-bottom: 1.9rem;

	&:focus {
		outline: 3px solid #3fa9f5;
	}
`;

export const StyledInputSelect = styled.select.attrs({
	type: "date",
})`
	 /* Reset */
  appearance: none;
  border: 0;
  outline: 0;
  font-family: inherit;
	font-size: var(--p3);

  /* Personalize */
  width: 100%;
	min-width: 30rem;
	height: 3rem;
  padding: 0.3em 0.7em;
	padding-right: 2.5em;
	margin-bottom: 1.9rem;

  background: url("https://firebasestorage.googleapis.com/v0/b/happycoast.appspot.com/o/arrowdown.svg?alt=media&token=665fca61-4cda-471b-9717-70c2612ca0e4")
      no-repeat right 0.8em center / 1em,
    var(--white);
  color: var(--text);
	font-size: var(--p);
  border-radius: var(--br-2);
  /*box-shadow: 0 0 0.em 0 rgba(0, 0, 0, 0.2);*/
  cursor: pointer;
	

  /* <option> colors */
  option {
    color: inherit;
    background-color: var(--white);
		font-family: Arial;
		font-size: var(--p);
  }

  /* Remove focus outline */
  &:focus {
		outline: 3px solid #3fa9f5;
	}

  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }
}

`;
