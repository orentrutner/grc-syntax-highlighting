import * as vscode from 'vscode';

export interface CompletionItemProps {
    kind?: vscode.CompletionItemKind;
    detail?: string;
    documentation?: string | vscode.MarkdownString;
    sortText?: string;
    filterText?: string;
    preselect?: boolean;
    insertText?: string | vscode.SnippetString;
    range?: vscode.Range;
    commitCharacters?: string[];
    keepWhitespace?: boolean;
    textEdit?: vscode.TextEdit;
    additionalTextEdits?: vscode.TextEdit[];
    command?: vscode.Command;
}

export function makeCompletion(label: string, props: CompletionItemProps): vscode.CompletionItem {
    const item = new vscode.CompletionItem(label, props.kind);

    item.kind = props.kind;
    item.detail = props.detail;
    item.documentation = props.documentation;
    item.sortText = props.sortText;
    item.filterText = props.filterText;
    item.preselect = props.preselect;
    item.insertText = props.insertText;
    item.range = props.range;
    item.commitCharacters = props.commitCharacters;
    item.keepWhitespace = props.keepWhitespace;
    item.textEdit = props.textEdit;
    item.additionalTextEdits = props.additionalTextEdits;
    item.command = props.command;

    return item;
}
