"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const convert_1 = require("../utils/convert");
class TypeScriptFormattingProvider {
    constructor(client, formattingOptionsManager) {
        this.client = client;
        this.formattingOptionsManager = formattingOptionsManager;
        this.enabled = true;
    }
    updateConfiguration(config) {
        this.enabled = config.get('format.enable', true);
    }
    isEnabled() {
        return this.enabled;
    }
    async doFormat(document, options, args, token) {
        await this.formattingOptionsManager.ensureFormatOptions(document, options, token);
        try {
            const response = await this.client.execute('format', args, token);
            if (response.body) {
                return response.body.map(this.codeEdit2SingleEditOperation);
            }
        }
        catch (_a) {
            // noop
        }
        return [];
    }
    async provideDocumentRangeFormattingEdits(document, range, options, token) {
        const absPath = this.client.normalizePath(document.uri);
        if (!absPath) {
            return [];
        }
        const args = {
            file: absPath,
            line: range.start.line + 1,
            offset: range.start.character + 1,
            endLine: range.end.line + 1,
            endOffset: range.end.character + 1
        };
        return this.doFormat(document, options, args, token);
    }
    async provideOnTypeFormattingEdits(document, position, ch, options, token) {
        const filepath = this.client.normalizePath(document.uri);
        if (!filepath) {
            return [];
        }
        const args = {
            file: filepath,
            line: position.line + 1,
            offset: position.character + 1,
            key: ch
        };
        await this.formattingOptionsManager.ensureFormatOptions(document, options, token);
        return this.client.execute('formatonkey', args, token).then((response) => {
            let edits = response.body;
            let result = [];
            if (!edits) {
                return result;
            }
            for (let edit of edits) {
                let textEdit = this.codeEdit2SingleEditOperation(edit);
                let range = textEdit.range;
                // Work around for https://github.com/Microsoft/TypeScript/issues/6700.
                // Check if we have an edit at the beginning of the line which only removes white spaces and leaves
                // an empty line. Drop those edits
                if (range.start.character === 0 && range.start.line === range.end.line && textEdit.newText === '') {
                    let lText = document.lineAt(range.start.line).text;
                    // If the edit leaves something on the line keep the edit (note that the end character is exclusive).
                    // Keep it also if it removes something else than whitespace
                    if (lText.trim().length > 0 || lText.length > range.end.character) {
                        result.push(textEdit);
                    }
                }
                else {
                    result.push(textEdit);
                }
            }
            return result;
        }, () => {
            return [];
        });
    }
    codeEdit2SingleEditOperation(edit) {
        return new vscode_1.TextEdit(convert_1.tsTextSpanToVsRange(edit), edit.newText);
    }
}
exports.TypeScriptFormattingProvider = TypeScriptFormattingProvider;
class FormattingProviderManager {
    constructor(modeId, formattingProvider, selector) {
        this.modeId = modeId;
        this.formattingProvider = formattingProvider;
        this.selector = selector;
    }
    dispose() {
        if (this.formattingProviderRegistration) {
            this.formattingProviderRegistration.dispose();
            this.formattingProviderRegistration = undefined;
        }
    }
    updateConfiguration() {
        const config = vscode_1.workspace.getConfiguration(this.modeId);
        this.formattingProvider.updateConfiguration(config);
        if (!this.formattingProvider.isEnabled() && this.formattingProviderRegistration) {
            this.formattingProviderRegistration.dispose();
            this.formattingProviderRegistration = undefined;
        }
        else if (this.formattingProvider.isEnabled() && !this.formattingProviderRegistration) {
            this.formattingProviderRegistration = vscode_1.languages.registerDocumentRangeFormattingEditProvider(this.selector, this.formattingProvider);
        }
    }
}
exports.FormattingProviderManager = FormattingProviderManager;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/79b44aa704ce542d8ca4a3cc44cfca566e7720f1/extensions\typescript\out/features\formattingProvider.js.map
