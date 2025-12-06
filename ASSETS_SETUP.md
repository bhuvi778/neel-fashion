# Copy Assets Instructions

To complete the setup of this React application, you need to copy the assets from the original HTML project.

## Required Steps:

### 1. Copy Images
Copy the entire `img` folder from the original project:
```
FROM: ashion-master/img/
TO:   ashion-react/public/img/
```

This includes:
- `/img/banner/` - Banner images
- `/img/blog/` - Blog images
- `/img/categories/` - Category images
- `/img/instagram/` - Instagram feed images
- `/img/product/` - Product images
- `/img/shop/` - Shop page images
- `/img/trend/` - Trending products images
- `/img/logo.png` - Logo image
- All other image assets

### 2. Copy Fonts (Optional)
If there are custom fonts in the original project:
```
FROM: ashion-master/fonts/
TO:   ashion-react/public/fonts/
```

Note: Most fonts are now loaded from CDN (Font Awesome, Simple Line Icons, Google Fonts)

### 3. Verify Structure
After copying, your public folder should look like:
```
public/
├── img/
│   ├── banner/
│   ├── blog/
│   ├── categories/
│   ├── instagram/
│   ├── product/
│   ├── shop/
│   ├── trend/
│   └── logo.png
└── fonts/ (if applicable)
```

## Quick Copy Commands (Windows PowerShell):

```powershell
# Navigate to the parent directory containing both folders
cd "C:\Users\Lenovo\Downloads\ashion-master"

# Copy images
Copy-Item -Path ".\ashion-master\img" -Destination ".\ashion-react\public\" -Recurse

# Copy fonts (if exists)
Copy-Item -Path ".\ashion-master\fonts" -Destination ".\ashion-react\public\" -Recurse
```

## Alternative: Manual Copy
1. Open File Explorer
2. Navigate to `ashion-master` folder
3. Copy the `img` folder
4. Navigate to `ashion-react/public/` folder
5. Paste the `img` folder there

Once assets are copied, you can run:
```bash
npm install
npm run dev
```
