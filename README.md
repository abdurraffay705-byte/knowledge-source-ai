# Deployment Guide: KnowledgeSource Admin

Follow these steps to make your website public and accessible via a URL.

## Step 1: Initialize Git
Open your terminal in the project directory and run:
```bash
git init
git add .
git commit -m "Initial commit: Professional Admin Dashboard"
```

## Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Follow the instructions to push your local code to the remote repository:
```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended)
1. Go to [Vercel](https://vercel.com/new).
2. Connect your GitHub account and import your repository.
3. Click **Deploy**. Vercel will automatically detect the HTML project and give you a public URL.

## Step 4: Alternative (Netlify)
1. Drag and drop the `Website` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. It will deploy instantly and provide a link.

---

### Important Notes
- **Home Page**: The site is configured to start at `login.html`.
- **Mock Data**: Since this is a frontend prototype, all data is stored in the browser. Refreshing on a different device will show the default mock data.
