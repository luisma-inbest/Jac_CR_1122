import { submenuSells } from "./submenuSells";
import { submenuSupport } from "./submenuSupport";
import { submenuMarketing } from "./submenuMarketing";
import { submenuProduct } from "./submenuProduct";
import { submenuHR } from "./submenuHR";
import { submenuAdmin } from "./subMenuAdmin";
import { permissions } from "@/utils";

export let Menu = [
	[
		{
			submenu: false,
			data: {
				pos: 0,
				text: "Mi Perfil JAC",
				icon: "user",
				route: "/profile",
			},
			subitems: [],
			permissions: ["admin", "sells"],
		},
		{
			submenu: true,
			data: {
				pos: 1,
				text: "Ventas",
				icon: "sells",
			},
			subitems: submenuSells,
			permissions: ["admin", "sells"],
		},
		{
			submenu: true,
			data: {
				pos: 2,
				text: "Atención al Cliente",
				icon: "support",
			},
			subitems: submenuSupport,
			permissions: ["admin", "support"],
		},
		{
			submenu: true,
			data: {
				pos: 3,
				text: "Marketing",
				icon: "marketing",
			},
			subitems: submenuMarketing,
			permissions: ["admin", "marketing"],
		},
		{
			submenu: true,
			data: {
				pos: 4,
				text: "Producto",
				icon: "product",
			},
			subitems: submenuProduct,
			permissions: ["admin", "product", "sells"],
		},
		{
			submenu: true,
			data: {
				pos: 5,
				text: "Recursos Humanos",
				icon: "hr",
			},
			subitems: submenuHR,
			permissions: ["admin", "hr"],
		},
		{
			submenu: true,
			data: {
				pos: 6,
				text: "JAC Store",
				icon: "office",
			},
			subitems: submenuAdmin,
			permissions: ["admin"],
		},
	],
];
