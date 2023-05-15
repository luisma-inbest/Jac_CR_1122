import { useContext, useEffect, useReducer, useState } from "react";
import { Button, Input, Dropdown, StyledSelect } from "@/components/UI/atoms";
import { reducer, initial } from "./reducer";
import { UserAPI } from "@/apis";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import UserContext, { UserContextType } from "@/context/UserContext";

interface Props {
	agencyId: any;
}

export const AgencyGeneral = (props: Props) => {
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

	//TODO: borrar todo lo de arriba
	const [fields, dispatch] = useReducer(reducer, initial);
	const [dataSellers, setDataSellers] = useState<any>([]);
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { User } = useContext(UserContext) as UserContextType;

	const handleFormSubmit = () => {
		// Call API.
	};

	useEffect(() => {
		UserAPI.filterSellers(String(props.agencyId), [
			"coordinator",
			"bdc",
			"adviser-digital",
			"adviser-floor",
			"adviser-hybrid",
		])
			.then((res) => {
				console.log("sellers:", res);
				setDataSellers(res);
			})
			.catch((err) => {
				console.log("sellers err:", err);
			});
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-xs-12">
					<div className=" content-side">
						<h2>Información General</h2>
					</div>
				</div>
				<div className="col-xs-4">
					<div className=" padding-side">
						<Input
							placeholder="Nombre comercial (Marca)"
							inputType="text"
							value={commercialName}
							type="state"
							params={{ setValue: setCommercialName }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className=" padding-side">
						<Input
							placeholder="Razón social"
							inputType="text"
							value={businessName}
							type="state"
							params={{ setValue: setBusinessName }}
						/>
					</div>
				</div>
				<div className="col-xs-4">
					<div className=" padding-side">
						<Input
							placeholder="Logo"
							inputType="text"
							value={logo}
							type="state"
							params={{ setValue: setLogo }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className=" padding-side">
						<Input
							placeholder="Logo Dark"
							inputType="text"
							value={logoDark}
							type="state"
							params={{ setValue: setLogoDark }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className=" padding-side">
						<Input
							placeholder="URL"
							inputType="text"
							value={url}
							type="state"
							params={{ setValue: setUrl }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="Vista 360"
							inputType="url"
							value={view360}
							type="state"
							params={{ setValue: setView360 }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="URL Google Maps"
							inputType="text"
							value={googleMapsUrl}
							type="state"
							params={{ setValue: setGoogleMapsUrl }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="SICOP"
							inputType="text"
							value={sicop}
							type="state"
							params={{ setValue: setSicop }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="Código de transferencia"
							inputType="text"
							value={transferCode}
							type="state"
							params={{ setValue: setTransferCode }}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12">
					<div className=" content-side">
						<h2>Contacto</h2>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="Nombre del contacto"
							inputType="text"
							value={contactName}
							type="state"
							params={{ setValue: setContactName }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="Puesto"
							inputType="text"
							value={position}
							type="state"
							params={{ setValue: setPosition }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="Correo"
							inputType="email"
							value={email}
							type="state"
							params={{ setValue: setEmail }}
						/>
					</div>
				</div>
				<div className="col-xs-6">
					<div className=" padding-side">
						<Input
							placeholder="Teléfono"
							inputType="number"
							value={phoneNumber}
							type="state"
							params={{ setValue: setPhoneNumber }}
						/>
					</div>
				</div>
				<div className="col-xs-12">
					<div className=" padding-side">
						<span>Mostrar agentes en formularios de citas</span>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12">
					<div className=" content-side">
						<h2>Servicios de Seller</h2>
					</div>
				</div>
				<div className="col-xs-12">
					<div className=" padding-side">
						<Dropdown
							title="JAC Store habilitada para"
							menuItems={sellers}
							onSelection={setSelectedSeller}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12 ">
					<h2>Asignación de Leads</h2>
				</div>

				<div className="col-xs-12 col-md-6">
					<StyledSelect
						customType="secondary"
						value={fields.assignmentType}
						onChange={(e) => {
							dispatch({
								type: "assignmentType",
								value: e.target.value,
							});
						}}
					>
						<option value="" disabled>
							-- Tipo de asignación --
						</option>
						<option value="auction">Subasta</option>
						<option value="defaultUser">Gerente</option>
					</StyledSelect>
				</div>

				{fields.assignmentType === "defaultUser" ? (
					<div className="col-xs-12 col-md-6">
						<StyledSelect customType="secondary" defaultValue="">
							<option value="" disabled>
								-- Asignar Usuario --
							</option>
							{dataSellers.map((seller: any) => {
								return (
									<option value={seller.id} key={seller.id}>
										{seller.nickname}
									</option>
								);
							})}
						</StyledSelect>
					</div>
				) : (
					<></>
				)}
			</div>

			<div className="row">
				<div className="col-xs-12">
					<div className=" content-side">
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
