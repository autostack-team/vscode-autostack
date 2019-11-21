/**
 * Author: Elijah Sawyers
 * Date: 11/15/2019
 */

import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.registerCommand('autostack', () => {
        const panel = vscode.window.createWebviewPanel(
          'autostack',
          'autostack',
          vscode.ViewColumn.Beside,
          {},
        );
        panel.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'images', 'icon.png'));
      });
}

export function deactivate() {}
