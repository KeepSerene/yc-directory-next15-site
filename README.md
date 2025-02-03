# YC Directory - Startup Pitch Platform

## Overview

YC Directory is an innovative platform for entrepreneurs to pitch their startup ideas, connect with other founders, and grow their network.

## Tech Stack

- **Frontend**: Next.js 15 (Canary)
- **Backend**: Sanity CMS
- **Authentication**: GitHub OAuth (NextAuth)
- **Styling**: Tailwind CSS
- **Error Tracking**: Sentry
- **UI Components**: Shadcn/UI
- **Runtime**: React 19

## Key Features

- Startup pitch submissions
- User authentication via GitHub
- Search and filter startups
- User profiles
- Markdown-powered pitch descriptions
- Responsive design

## Installation

### Prerequisites

- Node.js 20+
- npm 10.8.2

### Setup

1. Clone the repository

```bash
git clone https://github.com/KeepSerene/yc-directory-next15-site.git
cd yc-directory-next15-site
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

- Create `.env.local` file
- Add necessary configurations for:
  - Sanity
  - GitHub OAuth
  - Sentry DSN

4. Run the development server

```bash
npm run dev
```

## Notable Technologies

### Next.js 15 Canary

- Implemented Partial Prerendering (PPR)
- Incremental Static Regeneration
- Server Actions

### React 19 Features

- `useActionState` hook for form state management
- Improved server-side rendering

### GitHub OAuth Integration

- Seamless authentication
- Automatic user profile creation in Sanity
- Secure login process

### Sanity CMS

- Headless CMS for content management
- Dynamic schema definition
- Real-time content updates

### Sentry Integration

- Error tracking
- Performance monitoring
- Automatic error reporting

### Shadcn/UI

- Customizable, accessible UI components
- Tailwind CSS integration
- Modular design system

## Deployment

- Vercel recommended for optimal Next.js deployment
- Configure environment variables
- Set up Sanity and Sentry integrations

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Author

**Dhrubajyoti Bhattacharjee**

- GitHub: [@KeepSerene](https://github.com/KeepSerene)
- LinkedIn: [Dhrubajyoti Bhattacharjee](https://www.linkedin.com/in/dhrubajyoti-bhattacharjee-320822318/)
- Personal Website: [MathToDev](https://math-to-dev.vercel.app/)

## Live Demo

[Insert Live Demo URL](https://yc-directory-keep-serene-ofilei3pl.vercel.app/)

## License

This project is licensed under the MIT License.
