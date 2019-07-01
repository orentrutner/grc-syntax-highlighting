import * as vscode from 'vscode';

export const COLORS = {
    'black':                new vscode.Color( 0.2,  0.2,  0.2,    1),
    'red':                  new vscode.Color( 0.7,  0.2,  0.2,    1),
    'green':                new vscode.Color( 0.2,  0.7,  0.2,    1),
    'yellow':               new vscode.Color( 0.7,  0.7,  0.2,    1),
    'blue':                 new vscode.Color( 0.2,  0.2,  0.7,    1),
    'magenta':              new vscode.Color( 0.7,  0.2,  0.7,    1),
    'cyan':                 new vscode.Color( 0.2,  0.7,  0.7,    1),
    'white':                new vscode.Color( 0.7,  0.7,  0.7,    1),

    'bright_black':         new vscode.Color( 0.2,  0.2,  0.2,    1),
    'bright_red':           new vscode.Color(   1,  0.2,  0.2,    1),
    'bright_green':         new vscode.Color( 0.2,    1,  0.2,    1),
    'bright_yellow':        new vscode.Color(   1,    1,  0.2,    1),
    'bright_blue':          new vscode.Color( 0.2,  0.2,    1,    1),
    'bright_magenta':       new vscode.Color(   1,  0.2,    1,    1),
    'bright_cyan':          new vscode.Color( 0.2,    1,    1,    1),
    'bright_white':         new vscode.Color(   1,    1,    1,    1),

    'on_black':             new vscode.Color( 0.2,  0.2,  0.2,    1),
    'on_red':               new vscode.Color( 0.7,  0.2,  0.2,    1),
    'on_green':             new vscode.Color( 0.2,  0.7,  0.2,    1),
    'on_yellow':            new vscode.Color( 0.7,  0.7,  0.2,    1),
    'on_blue':              new vscode.Color( 0.2,  0.2,  0.7,    1),
    'on_magenta':           new vscode.Color( 0.7,  0.2,  0.7,    1),
    'on_cyan':              new vscode.Color( 0.2,  0.7,  0.7,    1),
    'on_white':             new vscode.Color( 0.7,  0.7,  0.7,    1),

    'on_bright_black':      new vscode.Color( 0.2,  0.2,  0.2,    1),
    'on_bright_red':        new vscode.Color(   1,  0.2,  0.2,    1),
    'on_bright_green':      new vscode.Color( 0.2,    1,  0.2,    1),
    'on_bright_yellow':     new vscode.Color(   1,    1,  0.2,    1),
    'on_bright_blue':       new vscode.Color( 0.2,  0.2,    1,    1),
    'on_bright_magenta':    new vscode.Color(   1,  0.2,    1,    1),
    'on_bright_cyan':       new vscode.Color( 0.2,    1,    1,    1),
    'on_bright_white':      new vscode.Color(   1,    1,    1,    1),

    'none':                 null,
    'default':              null,
    'unchanged':            null,
    'beep':                 null,

    'bold':                 null,
    'underline':            null,
    'blink':                null,
    'reverse':              null,
    'concealed':            null
};

export const COLOR_NAMES = Object.keys(COLORS);

export const COLORS_REGEX = new RegExp(COLOR_NAMES.join('|'), 'g');