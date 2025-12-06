# PowerShell script to copy assets from original project to React project

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Ashion React - Assets Copy Script" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$originalPath = "..\ashion-master"
$reactPath = ".\public"

# Check if original project exists
if (-Not (Test-Path $originalPath)) {
    Write-Host "ERROR: Original project not found at $originalPath" -ForegroundColor Red
    Write-Host "Please make sure the original 'ashion-master' folder is in the parent directory" -ForegroundColor Yellow
    exit 1
}

# Create public directory if it doesn't exist
if (-Not (Test-Path $reactPath)) {
    New-Item -ItemType Directory -Path $reactPath -Force | Out-Null
}

# Copy images
Write-Host "Copying images..." -ForegroundColor Yellow
if (Test-Path "$originalPath\img") {
    Copy-Item -Path "$originalPath\img" -Destination $reactPath -Recurse -Force
    Write-Host "✓ Images copied successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Images folder not found in original project" -ForegroundColor Red
}

# Copy fonts if they exist
Write-Host "Copying fonts..." -ForegroundColor Yellow
if (Test-Path "$originalPath\fonts") {
    Copy-Item -Path "$originalPath\fonts" -Destination $reactPath -Recurse -Force
    Write-Host "✓ Fonts copied successfully!" -ForegroundColor Green
} else {
    Write-Host "⚠ Fonts folder not found (this is optional)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Asset copying completed!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run 'npm install' to install dependencies" -ForegroundColor White
Write-Host "2. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host ""
