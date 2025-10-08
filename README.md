
# ⚡️Nuxt Bento Portfolio

This is a modern, quasi-minimal, and highly customizable portfolio template built with Nuxt 3, Vue, and Tailwind CSS—[Fork of the Ladvace Astro theme]( https://github.com/Ladvace/astro-bento-portfolio) by [Appdev95](https://github.com/apdev95/bento-portfolio-nuxt ). Crafted for developers, technical product managers, engineers, data scientists, or anyone technical who wants to showcase their work in a design-focused way with dense content sections for a hasty overview on page load. It features a bento grid hero section, an animated experience timeline, and a versatile portfolio view supporting blog posts, case studies with an embedded PDF viewer, projects, and tags. Effortlessly connect your own [Sanity.io](https://www.sanity.io/) headless CMS to manage portfolio items, and use any backend you prefer (Rails, Node, etc.) to handle contact form submissions and API logic.

---

## Features

#### Front end 

- Modern bento-grid hero section provides a dense, interactive overview of skills and experience, enhanced with animations- Hasty overview on page load. 
- Animated experience timeline implementation modeled off the Acternity UI Timeline and Aurora Background components, re-built specifically from React to Vue syntax.
- Built to be fully responsive and mobile-friendly across all devices.
- Easy integration with a Sanity headless CMS, but can be adapted for any CMS of your choice.

#### Backend & API:

- Functional contact form with included backend logic (Rails API example provided).
- The Rails API acts as a proxy to securely fetch data from Sanity via POST requests, handling critical configurations like CORS and environment variables.
- README.md for the Rails backend implementation is located at portfolio-v3-master/backend-example/README.md and contains detailed setup instructions.
- Structured for rapid deployment and straightforward customization.





---

## 🚀 Getting Started

```bash
# Clone repo
$ git clone https://github.com/TaylorJalpha/portfolio-v3-master.git
```

```bash
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

1. [Create a Sanity.io project](https://www.sanity.io/get-started) and set up your schemas for projects, case studies, and blog posts.
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

Feel free to fork, star, and make this project your own – If you add cool features or integrations, open a pull request or reach out—I'm always happy to connect with fellow builders.

---

## Feedback & Feature Requests

Have feature requests or suggestions? Use the contact form button in the Bento-grid hero section on the home screen (right next to the interactive easter egg button). I welcome all recommendations and feature requests!


---

**Check out the live project:** [![Visit www.taylorferguson.xyz](https://img.shields.io/badge/Visit-www.taylorferguson.xyz-1e90ff?style=for-the-badge&logo=google-chrome)](https://www.taylorferguson.xyz)

<br>

---


### Tech Stack - For the full-stack experience

<a href="https://nuxt.com/" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white" alt="Nuxt.js"/>
</a>
<a href="https://vuejs.org/" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js"/>
</a>
<a href="https://rubyonrails.org/" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="Ruby on Rails"/>
</a>
<br>
<a href="https://tailwindcss.com/" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</a>
<br>
<a href="https://www.sanity.io/" style="display:inline-block;">
	<img src="https://img.shields.io/badge/Sanity-EF3A37?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity"/>
</a>
<br>
<a href='https://www.heroku.com/' style="display:inline-block;"> 
	<img src='https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white' alt='Heroku'/>
</a>

<a href="https://aws.amazon.com/" style="display:inline-block;"> 
	<img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900" alt="AWS"/>
</a>

---


