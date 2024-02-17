using System.Runtime.InteropServices.JavaScript;

namespace WASM_Demo;

public partial class Program
{
    static void Main(string[] args) { }

    [JSExport]
    public static string Response()
    {
        return """
               <h1>
                   Hello World
               </h1>
               """;
    }
}