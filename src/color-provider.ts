import * as vscode from 'vscode';
import { COLORS_REGEX, COLORS } from './colors';

export class ColorProvider implements vscode.DocumentColorProvider {

    public provideDocumentColors(document: vscode.TextDocument) {
        const text = document.getText();
        const documentColors: vscode.ColorInformation[] = [];
        for (let match = COLORS_REGEX.exec(text); match; match = COLORS_REGEX.exec(text)) {
            const colorName = match[0];
            const vscodeColor = (COLORS as { [key: string]: any })[colorName];
            if (vscodeColor) {
                documentColors.push(new vscode.ColorInformation(
                    new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)),
                    vscodeColor
                ));
            }
        }

        return documentColors;
    }

    public provideColorPresentations(
        color: vscode.Color,
        context: { document: vscode.TextDocument, range: vscode.Range }) {

        return [
            new vscode.ColorPresentation('tadaa')
        ];
    }
}