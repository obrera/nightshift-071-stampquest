//#region src/utils.ts
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function lowercaseFirstLetter(str) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}
function someOrNone(value) {
	return value !== void 0 ? {
		__option: "Some",
		value
	} : { __option: "None" };
}
function toWords(str) {
	return str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}
function unwrapOption(value) {
	return value.__option === "Some" ? value.value : void 0;
}

//#endregion
export { unwrapOption as a, toWords as i, lowercaseFirstLetter as n, someOrNone as r, capitalizeFirstLetter as t };
//# sourceMappingURL=utils-D2Jm8keN.mjs.map