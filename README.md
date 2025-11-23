# Developer Portfolio - Soham Mishra

A modern, code-themed personal portfolio built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- Dark theme with neon green accents
- Code-themed design elements
- Smooth scroll animations
- Responsive layout
- Interactive project cards
- Mac-style code windows
- Typing animation effects

## 🚀 Quick Edit Guide

### Personalizing Your Portfolio

#### 1. Update Personal Information

**Header & Hero Section** (`src/components/Hero.tsx` and `src/components/Header.tsx`):
- Replace "Soham Mishra" with your name
- Update the subtitle text
- Modify the bio description
- Change social media links (LinkedIn, GitHub)

#### 2. Update About Section (`src/components/About.tsx`):
- Edit the bio paragraphs
- Add your photo at `src/assets/developer.jpg`
- Update the polaroid caption

#### 3. Add Your Projects (`src/components/Projects.tsx`):
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    date: "Month Year - Present",
    gradient: "from-blue-500 to-cyan-400", // Choose gradient colors
    tags: ["Tech1", "Tech2", "Tech3"],
    link: "project-url"
  },
  // Add more projects...
];
```

#### 4. Update Skills (`src/components/Skills.tsx`):
```typescript
const skills = {
  languages: ["Your", "Languages"],
  frameworks: ["Your", "Frameworks"],
  tools: ["Your", "Tools"],
  databases: ["Your", "Databases"],
  practices: ["Your", "Practices"]
};
```

#### 5. Add Experience (`src/components/Experience.tsx`):
```typescript
const experiences = [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    period: "Start - End",
    description: "Role description",
    achievements: ["Achievement 1", "Achievement 2"]
  },
  // Add more experiences...
];
```

#### 6. Update Contact Information (`src/components/Contact.tsx`):
- Email address
- Phone number
- Location
- Add form submission logic (integrate with backend/service)

### Design Customization

#### Change Color Scheme (`src/index.css`):
```css
:root {
  --primary: 142 76% 56%;  /* Green accent color */
  --background: 220 26% 7%; /* Dark background */
  /* Modify other colors as needed */
}
```

#### Change Fonts (`index.html`):
Currently using:
- JetBrains Mono (monospace)
- Inter (sans-serif)

To change, update the Google Fonts link and CSS variables.

### Adding Images

1. **Your Photo**:
   - Add to: `src/assets/developer.jpg`
   - Import in `About.tsx`

2. **Project Images** (optional):
   - Create: `src/assets/projects/`
   - Add images and import in `Projects.tsx`

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

### Deploy to Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Import your GitHub repository
2. Framework: Vite
3. Deploy!

## 📝 SEO Optimization

Update in `index.html`:
- Title tag
- Meta description
- Open Graph tags
- Twitter card tags

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Contact

For questions about this template, please refer to the code comments and documentation.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!
