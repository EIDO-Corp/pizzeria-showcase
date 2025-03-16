# Pizzeria Showcase Website

A beautiful, responsive pizzeria showcase website built with Next.js, Tailwind CSS, and inspired by 21st.dev components.

## Features

- Modern, responsive design
- Interactive components
- Smooth animations
- Dark mode support
- Mobile-friendly navigation

## Sections

- Hero section with image carousel
- Menu section with pizza categories
- About section with restaurant story
- Testimonials section with customer reviews
- Contact section with form and information

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons
- [clsx](https://github.com/lukeed/clsx) - Utility for constructing className strings
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind CSS classes without style conflicts

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pizzeria-showcase.git
   cd pizzeria-showcase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app` - Next.js app router pages
- `src/components` - React components
  - `layout` - Layout components (header, footer)
  - `sections` - Page sections (hero, menu, about, etc.)
  - `ui` - Reusable UI components (button, card, etc.)
- `src/lib` - Utility functions and data
- `public/images` - Images used in the website

## Customization

You can customize the website by:

1. Modifying the data in `src/lib/utils.ts`
2. Changing colors in `src/app/globals.css`
3. Adding or removing sections in `src/app/page.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from [21st.dev](https://21st.dev/)
- Images from [Unsplash](https://unsplash.com/)
