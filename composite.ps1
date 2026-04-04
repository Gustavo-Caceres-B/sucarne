Add-Type -AssemblyName System.Drawing

# Rutas de las imagenes
$bgPath = "c:\sucarne\assets\images\hero\asado_3.png"
$logosPath = "c:\sucarne\assets\images\logos\marcas_grid.png"
$pincheiraPath = "c:\sucarne\assets\images\logos\logo_pincheira.png"
$outPath = "c:\sucarne\assets\images\hero\pollo_cerdo_partners_final.png"

# Cargar imagenes
$bgImg = [System.Drawing.Image]::FromFile($bgPath)
$logosImg = [System.Drawing.Image]::FromFile($logosPath)
$pincheiraImg = [System.Drawing.Image]::FromFile($pincheiraPath)

# Crear imagen final del mismo tamano que el fondo
$finalImg = New-Object System.Drawing.Bitmap($bgImg.Width, $bgImg.Height)
$graphics = [System.Drawing.Graphics]::FromImage($finalImg)

# Mejorar calidad de dibujo
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Dibujar fondo
$graphics.DrawImage($bgImg, 0, 0, $bgImg.Width, $bgImg.Height)

# Dibujar un overlay oscuro para que el banner se lea bien (estilo degradado oscuro)
$overlayColor = [System.Drawing.Color]::FromArgb(180, 0, 0, 0) # Semitransparente negro
$brush = New-Object System.Drawing.SolidBrush($overlayColor)
$graphics.FillRectangle($brush, 0, 0, $bgImg.Width, $bgImg.Height)

# Calcular tamanos objetivo de los logos

# La grilla tiene harto margen, hagamosla grande
$logosTargetWidth = 800
$logosTargetHeight = [math]::Round($logosImg.Height * ($logosTargetWidth / $logosImg.Width))

# Pincheira
$pincheiraTargetHeight = 180
$pincheiraTargetWidth = [math]::Round($pincheiraImg.Width * ($pincheiraTargetHeight / $pincheiraImg.Height))

# Calcular posiciones (centrados y con un gap entre ellos)
# Los pondremos alineados horizontalmente
$totalWidth = $logosTargetWidth + 50 + $pincheiraTargetWidth
$startX = ($bgImg.Width - $totalWidth) / 2
$centerY = ($bgImg.Height) / 2 + 100 # Un poco mas abajo para dejar espacio al texto que se pondra por HTML

# Dibujar logos
$graphics.DrawImage($logosImg, $startX, $centerY - ($logosTargetHeight/2), $logosTargetWidth, $logosTargetHeight)
$graphics.DrawImage($pincheiraImg, $startX + $logosTargetWidth + 50, $centerY - ($pincheiraTargetHeight/2), $pincheiraTargetWidth, $pincheiraTargetHeight)

# Guardar
$finalImg.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Liberar recursos
$graphics.Dispose()
$bgImg.Dispose()
$logosImg.Dispose()
$pincheiraImg.Dispose()
$finalImg.Dispose()

Write-Host "Imagen generada en $outPath"
