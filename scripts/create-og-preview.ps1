# Render original typography and vector artwork to a real PNG.
# Uses installed Windows fonts; no font binaries or third-party artwork are bundled.
Add-Type -AssemblyName System.Drawing
$bitmap = New-Object System.Drawing.Bitmap 1200,630
$canvas = [System.Drawing.Graphics]::FromImage($bitmap)
$canvas.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$canvas.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
function Brush($hex) { New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex)) }
function Font($name, $size, $style = [System.Drawing.FontStyle]::Regular) { New-Object System.Drawing.Font($name, $size, $style, [System.Drawing.GraphicsUnit]::Pixel) }
function Text($value, $font, $color, $x, $y) { $brush = Brush $color; $canvas.DrawString($value, $font, $brush, [single]$x, [single]$y); $brush.Dispose() }
function Star($x, $y, $size, $color) {
  $pen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($color)),2
  $points = [System.Drawing.PointF[]]@(
    [System.Drawing.PointF]::new($x,$y-$size), [System.Drawing.PointF]::new($x+4,$y-4),
    [System.Drawing.PointF]::new($x+$size,$y), [System.Drawing.PointF]::new($x+4,$y+4),
    [System.Drawing.PointF]::new($x,$y+$size), [System.Drawing.PointF]::new($x-4,$y+4),
    [System.Drawing.PointF]::new($x-$size,$y), [System.Drawing.PointF]::new($x-4,$y-4)
  )
  $canvas.DrawPolygon($pen,$points); $pen.Dispose()
}
$canvas.Clear([System.Drawing.ColorTranslator]::FromHtml('#D4CEE5'))
$cream = Brush '#FFFAF4'; $canvas.FillRectangle($cream,22,22,1156,586); $cream.Dispose()
$pink = Brush '#F8E3EE'; $canvas.FillEllipse($pink,900,-100,390,390); $pink.Dispose()
$lavender = Brush '#EEE4F5'; $canvas.FillEllipse($lavender,-120,400,390,390); $lavender.Dispose()
$border = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#E9D9E7')),1
$canvas.DrawRectangle($border,44,44,1112,542); $border.Dispose()
$scriptFont = Font 'Segoe Print' 34
$serif = Font 'Georgia' 108 ([System.Drawing.FontStyle]::Bold)
$sans = Font 'Segoe UI' 30
$small = Font 'Segoe UI' 24
$note = Font 'Segoe Print' 22
Text 'Hi there!' $scriptFont '#51346E' 94 92
Text "I'm" $serif '#38263F' 88 155
Text 'Jasmin' $serif '#AE83B5' 292 155
Text '♡' (Font 'Segoe UI Symbol' 66) '#DF68AA' 751 185
$underline = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#EFC9DF')),9
$underline.StartCap = 'Round'; $underline.EndCap = 'Round'
$canvas.DrawBezier($underline,305,285,420,271,614,284,723,276); $underline.Dispose()
Text 'Computer Information Systems Student' $sans '#493359' 96 332
Text 'Software Development • Creative Projects' $small '#776084' 98 389
$state = $canvas.Save(); $canvas.TranslateTransform(898,365); $canvas.RotateTransform(-8)
$paper = Brush '#FBE6ED'; $canvas.FillRectangle($paper,-8,-8,183,130); $paper.Dispose()
Text 'always learning' $note '#63457B' 3 9
Text 'always creating ♡' (Font 'Segoe Print' 19) '#63457B' 0 52
$canvas.Restore($state)
Star 1050 139 27 '#AC8BC3'; Star 884 254 17 '#DE8BB5'; Star 1080 486 22 '#AA8AC0'
Text 'a little creativity, a world of possibilities ♡' $note '#84658F' 98 517
$canvas.Dispose()
$output = Join-Path $PSScriptRoot '../public/og-preview.png'
$bitmap.Save([System.IO.Path]::GetFullPath($output), [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()

