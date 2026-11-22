param([int]$Port = 8765, [string]$Root = (Get-Location).Path)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Output "Serving $Root at http://localhost:$Port/"

$mime = @{
  ".html" = "text/html; charset=utf-8"; ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript"; ".json" = "application/json"
  ".png" = "image/png"; ".jpg" = "image/jpeg"; ".jpeg" = "image/jpeg"
  ".svg" = "image/svg+xml"; ".pdf" = "application/pdf"; ".exe" = "application/octet-stream"
  ".ico" = "image/x-icon"; ".woff2" = "font/woff2"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $path = [System.Uri]::UnescapeDataString($ctx.Request.Url.LocalPath)
  if ($path -eq "/") { $path = "/index.html" }
  $file = Join-Path $Root ($path -replace "/", "\")
  if (Test-Path $file -PathType Leaf) {
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $ext = [System.IO.Path]::GetExtension($file).ToLower()
    $ctx.Response.ContentType = $(if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" })
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
    $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  }
  $ctx.Response.Close()
}
