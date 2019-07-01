import * as vscode from 'vscode';
import { makeCompletion } from './completion-util';
import { COLOR_NAMES } from './colors';

export class ValueCompletionProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        // get all text until the `position` and check if it reads `console.`
        // and iff so then complete if `log`, `warn`, and `error`
        const line = document.lineAt(position).text;
        const operatorIndex = line.indexOf('=');
        const key = operatorIndex >= 0 ? line.substring(0, operatorIndex).trim(): null;
        switch (key) {
            case 'colours':
                return COLOR_NAMES.map(color => makeCompletion(color, { kind: vscode.CompletionItemKind.Color }));

            case 'count':
                return [
                    makeCompletion('once', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: new vscode.MarkdownString('means that if the regexp is matched, its first occurrence is coloured and the program will continue with other regexp\'s')
                    }),
                    makeCompletion('more', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: new vscode.MarkdownString('means that if there are multiple matches of the regexp in one line, all of them will be coloured')
                    }),
                    makeCompletion('stop', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: new vscode.MarkdownString('means that the regexp will be coloured and program will move to the next line (i.e. ignoring other regexp\'s)')
                    }),
                    makeCompletion('previous', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: new vscode.MarkdownString('means the count will be the same as for the previous line')
                    }),
                    makeCompletion('block', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: new vscode.MarkdownString('marks a start of a multiline block of text, coloured with the same colour')
                    }),
                    makeCompletion('unblock', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: new vscode.MarkdownString('marks the end of a block')
                    })
                ];

            case 'skip':
                return [
                    makeCompletion('yes', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: 'the matched line is skipped (discarded from the output)'
                        }),
                    makeCompletion('no', {
                        kind: vscode.CompletionItemKind.Enum,
                        documentation: 'the matched line is not skipped'
                        })
                ];

            default: return undefined;
        }
    }
}