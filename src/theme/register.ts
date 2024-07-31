export async function initThemes() {
	const select = document.querySelector("select")!;
	const importedGroup = select.querySelector("optgroup#themes-imported-group")!;
	/**
	 * @param {string[]} themes A list of theme file names.
	 * @returns {Promise<void>}
	 */
	const registerThemes = async (themes: string[]): Promise<void> => {
		for (const themeFileName of themes) {
			const name = themeFileName.replace(".json", "");
			const modifiedName = name
				.toLowerCase()
				.replace(/[^a-z0-9-]+/g, "-");
			const option = document.createElement("option");
			option.textContent = name;
			option.value = modifiedName;
			option.dataset.filePath = `./Themes/${themeFileName}`;
			option.dataset.defined = JSON.stringify(false);
			importedGroup.appendChild(option);
		}
	};

	const res = await fetch("./themes/data/themes.json");
	if (res.ok) await registerThemes(await res.json());
}
export default initThemes;
