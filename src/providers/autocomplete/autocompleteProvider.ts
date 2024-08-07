import * as monaco from "monaco-editor";

export const autoCompleteProvider: monaco.languages.CompletionItemProvider = {
	triggerCharacters: ["."],
	provideCompletionItems(_model, _pos, _ctx, _tok) {
		// TODO: auto complete not implemented yet.
		console.log("TODO: provideCompletionItems");
		return {
			suggestions: [],
		};
	},
};
