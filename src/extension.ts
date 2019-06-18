import * as vscode from 'vscode';
import { KeyCompletionProvider } from './key-completion-provider';
import { ValueCompletionProvider } from './value-completion-provider';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider('grc-app', new KeyCompletionProvider()),
        vscode.languages.registerCompletionItemProvider('grc-app', new ValueCompletionProvider(), '=', ',', ' '));
}