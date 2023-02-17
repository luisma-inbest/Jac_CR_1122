import { useState } from "react";
import { Button, Input, Dropdown } from "@/components/UI/atoms";

export const AgencyGeneral = () => {
	const [commercialName, setCommercialName] =
		useState<string>("JAC MX Planta");
	const [businessName, setBusinessName] = useState<string>("JAC MX");
	const [logo, setLogo] = useState<string>("");
	const [logoDark, setLogoDark] = useState<string>("");
	const [url, setUrl] = useState<string>("");
	const [view360, setView360] = useState<string>("");
	const [googleMapsUrl, setGoogleMapsUrl] = useState<string>("");
	const [sicop, setSicop] = useState<string>("");
	const [transferCode, setTransferCode] = useState<string>("");

	const [contactName, setContactName] = useState<string>("");
	const [position, setPosition] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const [selectedSeller, setSelectedSeller] = useState({ name: "???" });

	const sellers = [{ name: "??" }, { name: "????" }];

	const handleFormSubmit = () => {
		// Call API.
	};

	return (
		<>
			<div className="row">
				<div className="col-xs-12">
					<div className="box content-side">
						<h2>Información General</h2>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box padding-side">
						<Input
							placeholder="Nombre comercial (Marca)"
							value={commercialName}
							type="state"
							params={{ setValue: setCommercialName }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box padding-side">
						<Input
							placeholder="Razón social"
							value={businessName}
							type="state"
							params={{ setValue: setBusinessName }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="box padding-side">
						<Input
							placeholder="Logo"
							value={logo}
							type="state"
							params={{ setValue: setLogo }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box padding-side">
						<Input
							placeholder="Logo Dark"
							value={logoDark}
							type="state"
							params={{ setValue: setLogoDark }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box padding-side">
						<Input
							placeholder="URL"
							value={url}
							type="state"
							params={{ setValue: setUrl }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Vista 360"
							value={view360}
							type="state"
							params={{ setValue: setView360 }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="URL Google Maps"
							value={googleMapsUrl}
							type="state"
							params={{ setValue: setGoogleMapsUrl }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="SICOP"
							value={sicop}
							type="state"
							params={{ setValue: setSicop }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Código de transferencia"
							value={transferCode}
							type="state"
							params={{ setValue: setTransferCode }}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12">
					<div className="box content-side">
						<h2>Contacto</h2>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Nombre del contacto"
							value={contactName}
							type="state"
							params={{ setValue: setContactName }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Puesto"
							value={position}
							type="state"
							params={{ setValue: setPosition }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Correo"
							value={email}
							type="state"
							params={{ setValue: setEmail }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="box padding-side">
						<Input
							placeholder="Teléfono"
							value={phoneNumber}
							type="state"
							params={{ setValue: setPhoneNumber }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box padding-side">
						<span>Mostrar agentes en formularios de citas</span>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12">
					<div className="box content-side">
						<h2>Servicios de Seller</h2>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="box padding-side">
						<Dropdown
							title="JAC Store habilitada para"
							menuItems={sellers}
							onSelection={setSelectedSeller}
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
