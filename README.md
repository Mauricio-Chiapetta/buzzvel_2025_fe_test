# Buzzvel 2025 Frontend Developer Test

This project is a modern web application built with [Next.js](https://nextjs.org), designed as a technical test for frontend developers at Buzzvel. The application demonstrates advanced UI/UX, animations, and responsive design, leveraging a robust technology stack.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Animations](#animations)
- [Responsiveness](#responsiveness)
- [Deployment](#deployment)
- [Learn More](#learn-more)

---

## Technologies Used

- **[Next.js](https://nextjs.org/):** React framework for server-side rendering, routing, and static site generation.
- **[React](https://react.dev/):** Library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** Strongly-typed JavaScript for safer and scalable code.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid UI development.
- **[GSAP (GreenSock Animation Platform)](https://gsap.com/):** Library for performant and complex animations.
- **[Swiper.js](https://swiperjs.com/):** Modern slider/carousel library for touch and desktop.
- **[Lucide React](https://lucide.dev/):** Icon library for consistent and scalable SVG icons.
- **[React CountUp](https://www.npmjs.com/package/react-countup):** Animated number counter for statistics.
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts):** Font optimization and loading (using Geist and Roboto).

---

## Features

- **Modern UI/UX:** Clean, professional interface with attention to detail.
- **Animations:** Smooth entrance, scroll, and parallax effects using GSAP and ScrollTrigger.
- **Responsive Design:** Fully responsive layout for mobile, tablet, and desktop.
- **Reusable Components:** Modular React components for cards, carousels, testimonials, and more.
- **Carousel/Slider:** Interactive testimonial and feature carousels powered by Swiper.js.
- **Statistics Section:** Animated counters for key metrics.
- **Accessibility:** Semantic HTML and accessible navigation.
- **Optimized Assets:** Efficient image handling with Next.js and optimized font loading.

---

## Getting Started

To run the development server locally, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can start editing the main page by modifying [`src/app/page.tsx`](src/app/page.tsx). The application supports hot reloading, so your changes will be reflected immediately.

---

## Project Structure

```
src/
  app/
    components/
      (Sections)/
        AllInOneApp.tsx
        Carousel.tsx
        CTA.tsx
        Depoiments.tsx
        Features.tsx
        Footer.tsx
        Hero.tsx
        Join.tsx
        MeetStudents.tsx
        Navbar.tsx
        StatisticsSection.tsx
    page.tsx
  assets/
  globals.css
public/
package.json
tsconfig.json
```

---

## Animations

Animations are implemented using [GSAP](https://gsap.com/) and its [ScrollTrigger](https://gsap.com/scrolltrigger/) plugin. Key animation features include:

- **Scroll-based reveals:** Elements animate into view as the user scrolls.
- **Parallax effects:** Background and foreground elements move at different speeds.
- **Carousel transitions:** Smooth slide animations for testimonials and features.
- **Animated counters:** Numbers count up dynamically in the statistics section.

You can find animation logic in components such as:
- [`src/app/components/(Sections)/Hero.tsx`](src/app/components/(Sections)/Hero.tsx)
- [`src/app/components/(Sections)/Features.tsx`](src/app/components/(Sections)/Features.tsx)
- [`src/app/components/(Sections)/AllInOneApp.tsx`](src/app/components/(Sections)/AllInOneApp.tsx)
- [`src/app/components/(Sections)/Depoiments.tsx`](src/app/components/(Sections)/Depoiments.tsx)
- [`src/app/components/(Sections)/Join.tsx`](src/app/components/(Sections)/Join.tsx)
- [`src/app/components/(Sections)/CTA.tsx`](src/app/components/(Sections)/CTA.tsx)

---

## Responsiveness

The application is fully responsive, adapting to all screen sizes using:

- **Tailwind CSS breakpoints:** Utility classes for mobile-first design.
- **Flexible layouts:** Use of flexbox and grid for adaptive sections.
- **Adaptive images:** Next.js `<Image />` component for optimized, responsive images.
- **Conditional rendering:** Layout and content adjustments for different devices.

All main sections and components are tested for usability on mobile, tablet, and desktop.

---

## Deployment

The recommended way to deploy your Next.js application is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

For more information on deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – Interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) – Source code and community contributions.

---

If you have any questions or feedback, feel free to open an issue or submit a pull request. Happy coding!
---
make with ❤️ by [Mauricio Chiapetta](https://github.com/Mauricio-Chiapetta)
