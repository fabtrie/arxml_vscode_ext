import path from 'path';
import { Disposable, ExtensionContext, commands, workspace } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient/node';

export async function activate(context: ExtensionContext) {
    const arxmlContext = new ArxmlContext;
    context.subscriptions.push(arxmlContext);

    context.subscriptions.push(commands.registerCommand("arxmlLanguageServer.restartLanguageServer", async () => {
        await arxmlContext.dispose();
        await arxmlContext.activate();
    }));

    await arxmlContext.activate();
}

export class ArxmlContext implements Disposable {
    subscriptions: Disposable[] = [];
    client!: LanguageClient;
  
    async activate() {
        const serverOptions:ServerOptions = {
            command: path.join(__dirname, "../arxml_lang_server.exe"),
        }
		
        const clientOptions: LanguageClientOptions = {
            documentSelector: [{ language: 'xml', pattern: '**/*.arxml' }],
            synchronize: {
                fileEvents: workspace.createFileSystemWatcher('**/*.arxml')
            }
            
        };
  
        this.client = new LanguageClient('ARXML_LanguageServer', 'ARXML Language Server', serverOptions, clientOptions);
        
        this.client.start();
        console.log('ARXML Language Server is now active!');
    }
    
    dispose() {
        this.subscriptions.forEach((d) => { d.dispose(); });
        if (this.client)
            this.client.stop();
        this.subscriptions = []
    }
}