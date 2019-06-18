import * as vscode from 'vscode';
import { makeCompletion } from './completion-util';

export class KeyCompletionProvider implements vscode.CompletionItemProvider {

    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position) {

        const line = document.lineAt(position).text;
        if (line.indexOf('=') >= 0) {
            return undefined;
        }

        return [
            makeCompletion('regexp=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            }),
            makeCompletion('colours=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            }),
            makeCompletion('command=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            }),
            makeCompletion('concat=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            }),
            makeCompletion('skip=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            }),
            makeCompletion('replace=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            }),
            makeCompletion('count=', {
                commitCharacters: ['='],
                command: { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' }
            })
        ];
    }
}