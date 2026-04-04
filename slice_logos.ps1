Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\sucarne\assets\images\logos\marcas_grid_transparente.png")

function Crop-Image ($x, $y, $w, $h, $name) {
    if ($x+$w -gt $img.Width) { $w = $img.Width - $x }
    if ($y+$h -gt $img.Height) { $h = $img.Height - $y }
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $out = "c:\sucarne\assets\images\logos\" + $name + ".png"
    $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Cortado $name"
}

Crop-Image 40 120 190 130 "marca_pollo"
Crop-Image 230 120 190 130 "marca_cerdo"
Crop-Image 420 120 210 130 "marca_sopraval"
Crop-Image 630 120 190 130 "marca_crianza"
Crop-Image 820 120 190 130 "marca_king"

Crop-Image 40 320 190 150 "marca_beef"
Crop-Image 230 320 190 150 "marca_maipo"

$img.Dispose()
Write-Host "Marcas separadas cortadas!"
