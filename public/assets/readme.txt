# Asset Placeholder Guide

This file maps placeholder assets to their locations in the portfolio.

## Image Placeholders

1. developer.jpg
   - Location: About section polaroid frame
   - Recommended size: 800x800px (square)
   - Format: JPG or PNG
   - Description: Your professional photo for the polaroid-style display
   - To replace: Add your image to src/assets/developer.jpg and import it in About.tsx

## Project Banner Images (Optional)

The project cards currently use CSS gradients for banners. If you want to use actual images:
- Location: Projects section card headers
- Recommended size: 600x400px
- Format: JPG, PNG, or WebP
- Add to: src/assets/projects/

## Customization Instructions

### To add your photo:
1. Place your photo at: src/assets/developer.jpg
2. In src/components/About.tsx, replace the placeholder div with:
   <img src={developerImage} alt="Developer" className="w-full h-full object-cover" />
3. Add import at top: import developerImage from "@/assets/developer.jpg";

### To add project images:
1. Create folder: src/assets/projects/
2. Add images: project1.jpg, project2.jpg, etc.
3. In Projects.tsx, import images and use in project data
4. Replace gradient backgrounds with actual images

### General Tips:
- Use ES6 imports for all images in src/assets/
- Optimize images before adding (use tools like TinyPNG)
- Use WebP format for better performance when possible
- Keep images under 500KB for optimal loading
