Add-Type -AssemblyName System.Drawing

$pincheiraPath = "c:\sucarne\assets\images\logos\logo_pincheira.png"
$outPincheira = "c:\sucarne\assets\images\logos\logo_pincheira_transparente.png"

$img = [System.Drawing.Image]::FromFile($pincheiraPath)
$bmp = New-Object System.Drawing.Bitmap($img)
$img.Dispose()

$bmp.MakeTransparent([System.Drawing.Color]::White)
$bmp.Save($outPincheira, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Pincheira transparente"
