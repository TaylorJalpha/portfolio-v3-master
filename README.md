
# ⚡️Nuxt Bento Portfolio

This is a modern, quasi-minimal, and highly customizable portfolio template built with Nuxt 3, Vue, and Tailwind CSS— Fork of the Ladvace Astro theme by apdev95. Crafted for developers, technical product managers, designers, or anyone who wants to showcase their work in a design-focused way, it features a sleek bento grid hero section, an experience timeline, and a versatile portfolio view supporting blog posts, case studies with an embedded PDF viewer, projects, and tags. Effortlessly connect your own [Sanity.io](https://www.sanity.io/) headless CMS to manage portfolio items, and use any backend you prefer (Rails, Node, etc.) to handle contact form submissions and API logic.

---

## Features

- Bento-grid hero section to display dense content and animations for a quick overview of experience, skills, etc
- Fully responsive and mobile-friendly
- Easy integration with your own Sanity headless CMS
- Contact form with backend support (Rails example included)
- Built for quick deployment and customization

---

## 🚀 Getting Started

```bash
# Clone this repository
$ git clone https://github.com/TaylorJalpha/portfolio-v3-master.git
```

```bash
# Go into the repository
$ cd portfolio-v3-master
```

```bash
# Install dependencies
$ npm install
```

```bash
# Start the project in development
$ npm run dev
```

---

## 🛠️ Connect Your Own Sanity Headless CMS

1. [Create a Sanity.io project](https://www.sanity.io/get-started) and set up your schemas for projects, case studies, and blog posts (see `schemas copy/` for examples).
2. In your Nuxt app, set the following environment variables (in a `.env` file or your deployment platform):
	 - `SANITY_PROJECT_ID` (your Sanity project ID)
	 - `SANITY_DATASET` (usually `production`)
	 - `SANITY_API_TOKEN` (optional, for write access)
3. The app will use these to fetch portfolio items dynamically. You can update the logic in `lib/sanity.ts` and `services/sanityApi.js` if you want to customize queries or endpoints.

---

## Contact Form & Backend API

The contact form is ready to send data to a backend of your choice. By default, it’s set up for a Rails API, but you can swap in Node, Python, or any backend you like.

### Example: Rails Backend

1. Create a Rails API with a `ContactForm` controller to handle POST requests.
2. Enable CORS and CSRF protection for API requests.
3. Update the `baseURL` in `components/ContactForm.vue` and `services/sanityApi.js` to point to your backend.
4. The backend should accept JSON data and (optionally) forward it to Sanity or send you an email.

**Sample Rails endpoint:**

```ruby
# app/controllers/contact_form_controller.rb
class ContactFormController < ApplicationController
	protect_from_forgery with: :null_session
	def create
		# Save to DB, send email, or forward to Sanity
		render json: { message: "Received!" }, status: :created
	end
end
```

---

## Contributing & Customization

Feel free to fork, star, and make it your own! If you add cool features or integrations, open a PR or let me know. I’m always happy to connect with fellow builders.

---

## 👋 About

Built by [Taylor Jalpha](https://github.com/TaylorJalpha) and contributors. If you use this template, I’d enjoy a follow on GitHub!

---


## Features

- Modern and Minimal bento-like, sleek UI Design
- All in one page (almost)
- Fully Responsive

## Tech Stack

- [Nuxt/Vue 3](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [motion](https://motion.dev/)

# Steps ▶️

```bash
# Clone this repository
$ git clone https://github.com/apdev95/bento-portfolio-nuxt.git
```

```bash
# Go into the repository
$ cd bento-portfolio-nuxt
```

```bash
# Install dependencies
$ npm install
```

```bash
# Start the project in development
$ npm run dev
```

