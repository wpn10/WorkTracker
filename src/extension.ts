// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const trackWorkCommand = vscode.commands.registerCommand("work-tracker.trackWork", () => {
		exec(`python ${pythonScript}`, (error, stdout, stderr) => {
			if (error) {
				vscode.window.showErrorMessage(`Error running python script: ${error.message}`);
			}
			if (stderr) {
				vscode.window.showErrorMessage(`Error running python script: ${stderr}`);
			}
			vscode.window.showInformationMessage(`Python script output: ${stdout}`);
		});
	});

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "work-tracker" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('work-tracker.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from work-tracker!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

const pythonScript = path.join(__dirname, '..', 'python', 'work_tracker.py');
