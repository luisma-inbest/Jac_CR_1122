import { submenuSells } from "./submenuSells";
import { submenuSupport } from "./submenuSupport";
import { submenuMarketing } from "./submenuMarketing";
import { submenuProduct } from "./submenuProduct";
import { submenuHR } from "./submenuHR";
import { submenuAdmin } from "./subMenuAdmin";

export let Menu = [
	[
		{
			submenu: true,
			data: {
				pos: 1,
				text: "Ventas",
				icon: "sells",
			},
			subitems: submenuSells,
		},
		{
			submenu: true,
			data: {
				pos: 2,
				text: "Atención al Cliente",
				icon: "support",
			},
			subitems: submenuSupport,
		},
		{
			submenu: true,
			data: {
				pos: 3,
				text: "Marketing",
				icon: "marketing",
			},
			subitems: submenuMarketing,
		},
		{
			submenu: true,
			data: {
				pos: 4,
				text: "Producto",
				icon: "product",
			},
			subitems: submenuProduct,
		},
		{
			submenu: true,
			data: {
				pos: 5,
				text: "Recursos Humanos",
				icon: "hr",
			},
			subitems: submenuHR,
		},
		{
			submenu: true,
			data: {
				pos: 6,
				text: "Corporativo",
				icon: "hr",
			},
			subitems: submenuAdmin,
		},
	],
];
