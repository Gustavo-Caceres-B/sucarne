Add-Type -AssemblyName System.Drawing

$imgPath = "c:\sucarne\assets\images\logos\marcas_grid.png"
$outPath = "c:\sucarne\assets\images\logos\marcas_grid_transparente.png"

$img = [System.Drawing.Image]::FromFile($imgPath)
$bmp = New-Object System.Drawing.Bitmap($img)
$img.Dispose()

# Hacer el blanco transparente
$bmp.MakeTransparent([System.Drawing.Color]::White)

# Guardar como PNG
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Imagen transparente guardada en $outPath"
