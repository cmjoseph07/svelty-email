<h1 align="center"><strong>Svelt𝑦-Email</strong></h1>
<div align="center">Community fork for <a href="https://github.com/carstenlebek/svelte-email">Svelte-Email</a>. Designing emails has never been easier.</div>
<hr>
<div align="center">
<a href="https://svelte-email.vercel.app/">Documentation (Previous Author Site)</a> 
<span> · </span>
<a href="https://github.com/cmjoseph07/svelty-email">GitHub</a> 
</div>

# Warning

> [!WARNING]
> Breaking change made for Svelte 5 support will lib is being re-written. Please use `0.0.11` for Svelte 4 apps.

# Introduction

> [!NOTE]
> After seeing [react-email](https://github.com/resendlabs/react-email) Carsten decided to create a similar library for Svelte. `svelte-email` enables you to write and design email templates with svelte and render them to HTML or plain text. This is a community maintained fork to keep the project going as svelte continues to evolve under `svelty-email`.

# Installation

Install the package to your existing SvelteKit project:

```bash title="npm"
npm install svelty-email
```

```bash title="pnpm"
pnpm install svelty-email
```

# Getting started

## 1. Create an email using Svelte

`src/$lib/emails/Hello.svelte`

```html
<script>
	import { Button, Hr, Html, Text } from 'svelty-email';

	export let name = 'World';
</script>

<Html lang="en">
	<Text>
		Hello, {name}!
	</Text>
	<Hr />
	<Button href="https://svelte.dev">Visit Svelte</Button>
</Html>
```

## 2. Send email

This example uses [Nodemailer](https://nodemailer.com/about/) to send the email. You can use any other email service provider.

`src/routes/emails/hello/+server.js`

```js
import { render } from 'svelty-email';
import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	secure: false,
	auth: {
		user: 'my_user',
		pass: 'my_password'
	}
});

const emailHtml = render({
	template: Hello,
	props: {
		name: 'Svelte'
	}
});

const options = {
	from: 'you@example.com',
	to: 'user@gmail.com',
	subject: 'hello world',
	html: emailHtml
};

transporter.sendMail(options);
```

# Advanced Example REPL(s):

> [!CAUTION]
> Update: fix broken Airbnb example formatting in old docs, broken logos

[Airbnb Example](https://www.sveltelab.dev/dk5ce45zckb7h9v?files=.%2Fsrc%2Froutes%2F%2Bpage.svelte%2C.%2Fsrc%2Froutes%2F%2Bpage.server.js%2C.%2Fsrc%2Flib%2Femails%2FAirbnbExp.svelte) 

# Documentation

> [!WARNING]
> Documentation page is from previous project, `svelte-email` will need to be replaced with `svelty-email` but examples are great. 

For more information, please visit the [documentation](https://svelte-email.vercel.app/).

# Components

A set of standard components to help you build amazing emails without having to deal with the mess of creating table-based layouts and maintaining archaic markup.

- [HTML](https://svelte-email.vercel.app/docs/components/HTML)
- [Head](https://svelte-email.vercel.app/docs/components/head)
- [Heading](https://svelte-email.vercel.app/docs/components/heading)
- [Button](https://svelte-email.vercel.app/docs/components/button)
- [Link](https://svelte-email.vercel.app/docs/components/link)
- [Image](https://svelte-email.vercel.app/docs/components/image)
- [Divider](https://svelte-email.vercel.app/docs/components/hr)
- [Paragraph](https://svelte-email.vercel.app/docs/components/paragraph)
- [Container](https://svelte-email.vercel.app/docs/components/container)
- [Preview](https://svelte-email.vercel.app/docs/components/preview)
- [Body](https://svelte-email.vercel.app/docs/components/body)
- [Column](https://svelte-email.vercel.app/docs/components/column)
- [Section](https://svelte-email.vercel.app/docs/components/section) -- *Please do not use as 'root' element, can break styling*

# Integrations

Emails built with React Email can be converted into HTML and sent using any email service provider. Here are some examples:

- [Nodemailer](https://github.com/resendlabs/react-email/tree/main/examples/nodemailer)
- [SendGrid](https://github.com/resendlabs/react-email/tree/main/examples/sendgrid)
- [Postmark](https://github.com/resendlabs/react-email/tree/main/examples/postmark)
- [AWS SES](https://github.com/resendlabs/react-email/tree/main/examples/aws-ses)

# Advanced Examples:



## Author

- Chris Joseph

### Previous Author [svelte-email](https://github.com/carstenlebek/svelte-email)

- Carsten Lebek ([@carstenlebek](https://twitter.com/carstenlebek1))

### Authors of the original project [react-email](https://github.com/resendlabs/react-email)

- Bu Kinoshita ([@bukinoshita](https://twitter.com/bukinoshita))
- Zeno Rocha ([@zenorocha](https://twitter.com/zenorocha))
