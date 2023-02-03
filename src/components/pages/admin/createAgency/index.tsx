import {
	Input,
	StyledInputDate,
	StyledInputSubmit,
	StyledSelect,
} from "@/components/UI/atoms";
import {Agency, AgencyRowProps} from "@/models";
import React, {useState} from "react";

import styles from "./CreateAgency.module.css";

export const CreateAgency = () => {
	const [name, setName] = useState("");
	const [businessName, setBusinessName] = useState("");
	const [logo, setLogo] = useState("");
	const [logoDark, setlogoDdark] = useState("");
	const [url, setUrl] = useState("");
	const [service, setService] = useState("");
	const [street, setStreet] = useState("");
	const [exterior, setExterior] = useState("");
	const [interior, setInterior] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [suburb, setSuburb] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [municipality, setMunicipality] = useState("");
	const [deputation, setDeputation] = useState("");
	const [agencySocialMedia, setAgencySocialMedia] = useState([
		{name: "facebook", url: "facebook.com/test"},
		{name: "youtube", url: "youtube.com/test"},
	]);
	const apiURl = "http://localhost:3001/agency";

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log("Submit");
		let newAgency: Agency = {
			name: name,
			businessName,
			logo,
			logoDark,
			url,
			service,
			street,
			exterior_number: exterior,
			interior_number: interior,
			transfer_code: state,
			state,
			city,
			suburb,
			postal_code: postalCode,
			municipality,
			deputation,
			agencySocialMedia,
			active: true,
		};
		let agency = {
			agency: newAgency,
		};

		console.log("Agency: ", agency);

		fetch(apiURl, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(agency),
		})
			.then((res) => res.json())
			.then((res) => {
				// Handle response
				console.log("Response: ", res);
			})
			.catch((err) => {
				// Handle error
				console.log("Error message: ", err);
			});
	}

	return (
		<div className={`row ${styles.formContainer}`}>
			<div
				className={`col-xs-11 col-sm-7 col-md-6 row ${styles.main_component}`}
			>
				<h1>Registrar una Agencia</h1>
				<form className={styles.form} onSubmit={handleSubmit}>
					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Información personal</p>
					<hr className="hr mb-1" />

					<Input
						placeholder="Nombre Comercial"
						value={name}
						setValue={setName}
					/>

					<Input
						placeholder="Razón Social"
						value={businessName}
						setValue={setBusinessName}
					/>

					<Input placeholder="Logo" value={logo} setValue={setLogo} />
					<Input
						placeholder="Logo Dark"
						value={logoDark}
						setValue={setlogoDdark}
					/>
					<Input placeholder="Url" value={url} setValue={setUrl} />

					<StyledSelect
						customType="secondary"
						defaultValue=""
						onChange={(e) => setService(e.target.value)}
					>
						<option value="" disabled>
							-- Servicio --
						</option>
						<option value="true">Cuenta con Servicio</option>
						<option value="false">No Cuenta con Servicio</option>
					</StyledSelect>

					{/* Info General */}
					<p className="p2 bold secondary mb-0 mt-3">Ubicación</p>
					<hr className="hr mb-1" />

					<Input placeholder="Calle" value={street} setValue={setStreet} />
					<Input
						placeholder="Nª Interior"
						value={interior}
						setValue={setInterior}
					/>
					<Input
						placeholder="Nª Exterior"
						value={exterior}
						setValue={setExterior}
					/>
					<Input
						placeholder="Código Postal"
						value={postalCode}
						setValue={setPostalCode}
					/>
					<Input placeholder="Estado" value={state} setValue={setState} />
					<Input placeholder="Ciudad" value={city} setValue={setCity} />
					<Input placeholder="Colonia" value={suburb} setValue={setSuburb} />
					<Input
						placeholder="Municipio"
						value={municipality}
						setValue={setMunicipality}
					/>
					<Input
						placeholder="Delegación"
						value={deputation}
						setValue={setDeputation}
					/>

					<StyledInputSubmit
						customType="primary"
						type="submit"
						value="Registrar"
					/>
				</form>
			</div>
		</div>
	);
};
