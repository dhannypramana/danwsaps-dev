# Danwsaps Personal Portfolio

## Prerequisites

Before you begin, ensure you have the following installed:

- Runtime Environment [Node.js (>=22.14.0)](https://nodejs.org)
- Package manager: [bun (>=1.3.1)](https://bun.com)

Optional, but recommended:

- Version Control [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) or any modern IDE with Vue/Nuxt support

## Usage

### Installations

Install Dependencies

```bash
bun install
```

### Development

Run the development server and visit https://localhost:8000

```bash
bun dev
```

### Build

To build the application using production env, run the following command

```bash
bun build
```

To build the application using development env, run the following command

```bash
bun build:development
```

To build the application using staging env, run the following command

```bash
bun build:staging
```

### Testing

To run tests, run the following command

```bash
bun test
```

Or you want to test based on UI, run the following command

```bash
bun test:ui
```

### Linting

To lint your code and automatically fix the issues, run the following command

```bash
bun lint:fix
```

### Commit your changes

To commit your changes (ensure your changes are already staged):

```bash
git add .
bun commit
```

## Version Management

The project includes scripts for version management:

- Update `patch` version:

```bash
bun bump:patch
```

- Update `minor` version:

```bash
bun bump:minor
```

- Update `major` version:

```bash
bun bump:major
```

## Contributing

1. Create a feature branch following the naming convention:

```
[feature/fix/hotfix/defect]/_[branch_name]
```

Example: `feat/auth-add-user-management`

2. Make your changes and commit them following the commit message format using this script:

```bash
bun commit
```

3. Submit a pull request with `development` as the base branch.
4. Assign a technical leader as the reviewer for your pull request.

## Production Deployment Guide

1. Add all next release features in `staging` branch
2. Submit a pull request to branch `main` with a technical leader as the reviewer
3. Merge the pull request
4. Add tag on the merge commit with tag name as same as with version number of project
   Example: If the project version is 1.102.14, the tag should be `v1.102.14`
5. Push the tag to remote repository
