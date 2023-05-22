import { useContext, useState } from "react";
import { Button, Input, StyledSelect } from "@/components/UI/atoms";
import AlertsContext, { AlertsContextType } from "@/context/AlertsContext";
import CurrentAgencyContext, {
	CurrentAgencyContextType,
} from "@/context/currentAgencyContext/CurrentAgencyContext";
import { useMutation } from "react-query";
import { AgencyAPI } from "@/apis";
import States from "@/utils/states";

export const AgencyLocation = () => {
	const { Alerts, SetAlerts, createAlert } = useContext(
		AlertsContext
	) as AlertsContextType;
	const { CurrentAgency, DispatchCurrentAgency } = useContext(
		CurrentAgencyContext
	) as CurrentAgencyContextType;

	const editAgencyMutation = useMutation({
		mutationFn: () => AgencyAPI.update(CurrentAgency),
		onSuccess(data, variables, context) {
			createAlert(
				"success",
				"Exito!",
				"La información se ha actualizado"
			);
		},
		onError(error, variables, context) {
			console.log(error);
			createAlert("error", "Error", "Hubo un error");
		},
	});

	const handleFormSubmit = (event: any) => {
		event.preventDefault();
		console.log(CurrentAgency);
		editAgencyMutation.mutate();
	};

	return (
		<>
			<div className="row ">
				<div className="col-xs-12 mb-2">
					<h2>Ubicación</h2>
				</div>
				<div className="col-xs-12 col-md-9">
					<Input
						placeholder="Calle"
						inputType="text"
						value={CurrentAgency.street}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "street",
						}}
					/>
				</div>
				<div className="col-xs-6 col-md-3">
					<Input
						placeholder="Número exterior"
						inputType="number"
						value={CurrentAgency.exteriorNumber}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "exteriorNumber",
						}}
					/>
				</div>
				<div className="col-xs-6 col-md-3">
					<Input
						placeholder="Número interior"
						inputType="number"
						value={CurrentAgency.interiorNumber!}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "interiorNumber",
						}}
					/>
				</div>

				<div className="col-xs-6 col-md-3">
					<Input
						placeholder="Código postal"
						inputType="number"
						value={CurrentAgency.postalCode}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "postalCode",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-8">
					<StyledSelect
						customType="secondary"
						value={CurrentAgency.state}
						onChange={(e) =>
							DispatchCurrentAgency({
								type: "state",
								value: e.target.value,
							})
						}
					>
						<option value="" disabled>
							*-- Estado --
						</option>
						{States.map((e, index) => {
							return (
								<option key={index} value={e.sulg}>
									{e.name}
								</option>
							);
						})}
					</StyledSelect>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Ciudad"
						inputType="text"
						value={CurrentAgency.city}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "city",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Municipio"
						inputType="text"
						value={CurrentAgency.municipality}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "municipality",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Delegación"
						inputType="text"
						value={CurrentAgency.deputation}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "deputation",
						}}
					/>
				</div>
				<div className="col-xs-12 col-md-6">
					<Input
						placeholder="Colonia"
						inputType="text"
						value={CurrentAgency.suburb}
						type="reducer"
						params={{
							dispatch: DispatchCurrentAgency,
							dispType: "suburb",
						}}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<Button
						text="Actualizar"
						func={(even: any) => handleFormSubmit(event)}
						full={true}
					/>
				</div>
			</div>
		</>
	);
};
