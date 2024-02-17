import { dotnet } from './dotnet.js'

const is_browser = typeof window != "undefined";
if (!is_browser) throw new Error(`Expected to be running in a browser`);

const { setModuleImports, getAssemblyExports, getConfig, runMainAndExit } = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

const html = 
    exports
        .WASM_Demo    // Namespace
        .Program      // Class Name
        .Response();  // Function Name

// Regular javascript code
document.getElementById("app").innerHTML = `${html}`;

await runMainAndExit(config.mainAssemblyName, [] /* Console App Args */);