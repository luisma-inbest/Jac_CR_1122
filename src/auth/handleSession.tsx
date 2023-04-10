import { user } from "@/assets";
import { handleMainPage } from "@/models/routes&permissions";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getParams } from "@/auth/AuthFuncs";
import UserContext, { UserContextType } from "@/context/UserContext";

function handleSession() {
	return new Promise((resolve, reject) => {
		getParams()
			.then((data: any) => {
				// console.log(data);
				resolve({
					session: true,
					id: data["custom:id"],
					email: data["email"],
					name: data["nickname"],
					role: data["custom:role"],
					AgencyId: data["custom:agencyID"],
				});
			})
			.catch((err: any) => {
				reject({
					session: false,
					role: "none",
				});
			});
	});
}

export { handleSession };
