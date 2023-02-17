import { useState } from "react";
import { Button, Input, Dropdown } from "@/components/UI/atoms";

export const AgencyLocation = () => {
	const [street, setStret] = useState<string>("Venustiano Carranza");
	const [interiorNumber, setInteriorNumber] = useState<string>("JAC MX");
	const [externalNumber, setNumberNumber] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [latitute, setLatitude] = useState<string>("");
	const [longitude, setLongitude] = useState<string>("");

	const [state, setState] = useState({ name: "???" });
	const [municipality, setMunicipality] = useState({ name: "???" });
	const [neighborhood, setNeighborhood] = useState({ name: "???" });
	const [delegation, setDelegation] = useState({ name: "???" });

	const states = [{ name: "CDMX" }, { name: "Guadalajara" }];
	const municipalities = [{ name: "Santa Fe" }, { name: "Coyoacán" }];
	const neighborhoods = [{ name: "Roma" }, { name: "Condesa" }];
	const delegations = [{ name: "Iztapalapa" }, { name: "Venustiano Carranza" }];

	const handleFormSubmit = () => {
		// Call API.
	};

	return (
		<>
			<div className="row">
				<div className="col-xs-12">
					<div className="box content-side">
						<h2>Ubicación</h2>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box padding-side">
						<Input
							placeholder="Calle"
							value={street}
							type="state"
							params={{ setValue: setStret }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box padding-side">
						<Input
							placeholder="Número interior"
							value={interiorNumber}
							type="state"
							params={{ setValue: setInteriorNumber }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box padding-side">
						<Input
							placeholder="Número exterior"
							value={externalNumber}
							type="state"
							params={{ setValue: setNumberNumber }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box padding-side">
						<Input
							placeholder="Código postal"
							value={postalCode}
							type="state"
							params={{ setValue: setPostalCode }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Dropdown
							title="Estado"
							menuItems={states}
							onSelection={setState}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Dropdown
							title="Municipio"
							menuItems={municipalities}
							onSelection={setMunicipality}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Dropdown
							title="Colonia"
							menuItems={neighborhoods}
							onSelection={setNeighborhood}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Dropdown
							title="Delegación"
							menuItems={delegations}
							onSelection={setDelegation}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Latitud"
							value={latitute}
							type="state"
							params={{ setValue: setLatitude }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Longitud"
							value={longitude}
							type="state"
							params={{ setValue: setLongitude }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box content-side">
						<Button
							text="Actualizar"
							func={() => handleFormSubmit()}
							full={false}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
