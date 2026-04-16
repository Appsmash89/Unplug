Add-Type -AssemblyName System.Drawing

$source = "C:\Users\haris\Desktop\Unplug\app-icon.png"
$resBase = "C:\Users\haris\Desktop\Unplug\app\src\main\res"

$sizes = @{
    "mipmap-mdpi"    = 48
    "mipmap-hdpi"    = 72
    "mipmap-xhdpi"   = 96
    "mipmap-xxhdpi"  = 144
    "mipmap-xxxhdpi" = 192
}

if (-not (Test-Path $source)) {
    Write-Error "Source icon not found at $source"
    exit 1
}

$img = [System.Drawing.Image]::FromFile($source)

foreach ($folder in $sizes.Keys) {
    $targetSize = $sizes[$folder]
    $destFolder = Join-Path $resBase $folder
    
    if (-not (Test-Path $destFolder)) {
        New-Item -ItemType Directory -Path $destFolder -Force
    }

    $destPath = Join-Path $destFolder "ic_launcher.png"
    $roundDestPath = Join-Path $destFolder "ic_launcher_round.png"

    Write-Host "Generating icon for $folder ($($targetSize)x$($targetSize))..."

    $newImg = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
    $g = [System.Drawing.Graphics]::FromImage($newImg)
    
    # High quality settings
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.DrawImage($img, 0, 0, $targetSize, $targetSize)
    
    $newImg.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $newImg.Save($roundDestPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $newImg.Dispose()
}

$img.Dispose()
Write-Host "Icon generation complete."
