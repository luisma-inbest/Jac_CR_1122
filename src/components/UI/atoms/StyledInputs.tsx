import styled, {css} from "styled-components";

export interface PropsTxt {
	customType: string;
}
export const StyledInputText = styled.input.attrs<PropsTxt>({
	type: "text",
})`
	background-color: ${(props: PropSubmit) =>
		props.customType === "gray" ? "var(--gray1)" : "var(--white)"};
	border: none;
	font-size: var(--p);
	border-radius: var(--br-1);
	height: 3rem;
	padding: 1em 0.5em;
	margin-bottom: 1.9rem;
	&:focus {
		outline: 3px solid var(--blue1);
	}
`;

export interface PropSubmit {
	customType: string;
}

export const StyledInputSubmit = styled.input.attrs<PropSubmit>({
	type: "submit",
})`
	background-color: ${(props: PropSubmit) =>
		props.customType === "primary" ? "var(--blue1)" : "var(--white)"};
	color: ${(props: PropSubmit) =>
		props.customType === "primary" ? "var(--white)" : "var(--red)"};

	font-size: var(--p2);
	font-weight: bold;
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
	background-color: #fff;
	margin: 0;
	font: inherit;
	color: currentColor;
	width: 1.15em;
	height: 1.15em;
	border: 0.15em solid currentColor;
	border-radius: 30%;
	transform: translateY(-0.075em);
	display: grid;
	place-content: center;

	&:before {
		content: "";
		width: 0.65em;
		height: 0.65em;
		border-radius: 50%;
		transform: scale(0);
		transition: 220ms transform ease-in-out;
		box-shadow: inset 1em 1em var(--color-secondary);
	}

	&:checked &:before {
		transform: scale(1);
	}

	&:checked&:before {
		transform: scale(1);
	}
`;

export const StyledInputDate = styled.input.attrs({
	type: "date",
})`
	max-width: 15rem;
	height: 3rem;
	text-align: center;
	border: none;
	background-color: var(--white);
	padding: 0.3em 0.5em;
	border-radius: var(--border-radius-two);

	font-size: var(--p3);
	color: var(--text);
	cursor: pointer;

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
  width: auto;
	height: 3rem;
  padding: 0.3em 0.7em;
	padding-right: 2.5em;
	margin-bottom: 1.9rem;

  background: url("https://firebasestorage.googleapis.com/v0/b/happycoast.appspot.com/o/arrowdown.svg?alt=media&token=665fca61-4cda-471b-9717-70c2612ca0e4")
      no-repeat right 0.8em center / 1em,
    var(--white);
  color: var(--text);
  border-radius: var(--border-radius-two);
  /*box-shadow: 0 0 0.em 0 rgba(0, 0, 0, 0.2);*/
  cursor: pointer;
	

  /* <option> colors */
  option {
    color: inherit;
    background-color: var(--white);
		font-family: Arial;
		font-size: var(--p3);
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
