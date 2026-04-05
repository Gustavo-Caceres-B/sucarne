Add-Type -AssemblyName System.Drawing
$code = @"
using System;
using System.Drawing;

public class Cleaner {
    public static void CleanWhite(string input, string output) {
        Bitmap bmp = new Bitmap(input);
        for(int y=0; y<bmp.Height; y++) {
            for(int x=0; x<bmp.Width; x++) {
                Color c = bmp.GetPixel(x,y);
                // Erase any pixel that is very close to white (R,G,B all > 240)
                // Also erase the 'Nuestras marcas' text at the top (y < 90)
                if ((c.R > 230 && c.G > 230 && c.B > 230) || y < 100) {
                    bmp.SetPixel(x,y, Color.FromArgb(0, 0, 0, 0));
                }
            }
        }
        bmp.Save(output, System.Drawing.Imaging.ImageFormat.Png);
        bmp.Dispose();
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[Cleaner]::CleanWhite("c:\sucarne\assets\images\logos\marcas_grid.png", "c:\sucarne\assets\images\logos\marcas_grid_perfect.png")
Write-Host "Off-white noise cleaned!"
