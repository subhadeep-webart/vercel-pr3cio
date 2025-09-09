# pr3cio-web

## Overview

pr3cio-web is a Next.js-based web application designed for seamless and efficient user experiences. The project leverages modern frontend technologies such as React 19, Redux Toolkit, React Query, and Tailwind CSS.

## URLs

- **Staging:** [https://master.dcwp4u5uk7fuf.amplifyapp.com/](https://master.dcwp4u5uk7fuf.amplifyapp.com/)
- **Production:** [https://pr3cio.com](https://pr3cio.com)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/pr3cio-web.git
cd pr3cio-web
npm install  # or yarn install
```

### Development

Start the development server:

```sh
npm run dev  # or yarn dev
```

The app will be available at `http://localhost:3000` by default.

### Build and Run

To build the project:

```sh
npm run build  # or yarn build
```

To start the production server:

```sh
npm run start  # or yarn start
```

This will start the server on port 4000.

### Linting & Formatting

Check for linting issues:

```sh
npm run lint  # or yarn lint
```

Fix linting issues:

```sh
npm run lint:fix  # or yarn lint:fix
```

## Project Structure

```
pr3cio-web/
│── .husky/                   # Husky configuration for Git hooks
│── .next/                    # Next.js build output
│── node_modules/             # Dependencies
│── public/                   # Static assets
│── src/
│   ├── app/                  # Next.js app directory
│   ├── components/           # Reusable UI components
│   ├── configs/              # Configuration files
│   ├── constants/            # Constants and enums
│   ├── hooks/                # Custom React hooks
│   ├── models/               # TypeScript models and interfaces
│   ├── redux/                # Redux state management
│   ├── services/             # API calls and business logic
│   ├── styles/               # Tailwind styles and global CSS
│   ├── utils/                # Utility functions
│   ├── middleware.ts         # Next.js middleware
│── .env                      # Environment variables
│── .eslintrc.json            # ESLint configuration
│── .gitignore                # Git ignore file
│── .prettierrc               # Prettier configuration
│── docker-compose.yml        # Docker Compose configuration
│── Dockerfile                # Docker build configuration
│── next-env.d.ts             # TypeScript Next.js environment
│── next.config.js            # Next.js configuration
│── package-lock.json         # Lock file for dependencies
│── package.json              # Project dependencies & scripts
│── postcss.config.js         # PostCSS configuration
│── README.md                 # Project documentation
│── tailwind.config.ts        # Tailwind CSS configuration
│── tsconfig.json             # TypeScript configuration
```

## Technologies Used

- **Next.js** (15.1.7)
- **React** (19.0.0)
- **Redux Toolkit** (2.5.1)
- **React Query** (5.66.0)
- **Tailwind CSS** (3)
- **HeroUi** (2.6.14)
- **Formik & Yup** (for form handling)
- **Framer Motion** (for animations)
- **Husky & Lint-Staged** (for pre-commit checks)

## Contributing

### Branching Strategy

We follow a structured branching convention:

- **Feature branches:** `feature/<feature-name>`
- **Bugfix branches:** `bug/<bugfix-name>`

### Merge Strategy

We follow **squash merge** to keep a clean and readable commit history.

### Steps to Contribute

1. Clone the repository.
2. Create a new branch (`git checkout -b feature/<feature-name>` or `git checkout -b bug/<bugfix-name>`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature/<feature-name>` or `git push origin bug/<bugfix-name>`).
5. Open a Pull Request.
