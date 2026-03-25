# Contributing to LoopBoard

Thank you for your interest in contributing to LoopBoard! We welcome contributions from the community, whether you're fixing bugs, adding features, improving documentation, or sharing ideas.

## 🤝 Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to maintain a welcoming and inclusive community.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/loopboard.git
cd loopboard-standalone-app

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Run type checking
pnpm run check
```

## 📋 Before You Start

1. **Check existing issues** – Look for similar issues or feature requests that might already be in progress
2. **Create an issue** – For significant changes, open an issue first to discuss your approach
3. **Fork the repository** – Create your own fork to work on
4. **Create a branch** – Use a descriptive branch name (e.g., `feature/ncae-improvements` or `fix/loop-detection-bug`)

## 🔧 Development Workflow

### Making Changes

1. Create a new branch from `main`
2. Make your changes with clear, descriptive commits
3. Test your changes thoroughly
4. Update documentation if needed
5. Push to your fork
6. Create a Pull Request

### Commit Messages

Use clear, descriptive commit messages following this format:

```
[Type] Brief description

Longer explanation if needed. Reference issues with #123.

- Bullet point for major changes
- Another change
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

### Testing

Before submitting a PR, ensure:

```bash
# Type checking passes
pnpm run check

# Code builds successfully
pnpm run build
```

## 📝 Documentation

- Update README.md if you add new features
- Document new components with JSDoc comments
- Update CONTRIBUTING.md if you change the contribution process
- Add examples for new features

## 🎯 Areas for Contribution

### High Priority

- **iOS Support** – Help port LoopBoard to iOS
- **Additional Languages** – Add support for French, Portuguese, Mandarin, etc.
- **Accessibility Improvements** – Enhance screen reader support and keyboard navigation
- **Performance Optimization** – Reduce bundle size and improve load times

### Medium Priority

- **UI/UX Improvements** – Enhance the visual design and user experience
- **Documentation** – Improve guides, tutorials, and API documentation
- **Testing** – Add unit tests and integration tests
- **Community Features** – Keyboard layout sharing, user profiles, etc.

### Low Priority

- **Bug Fixes** – Small fixes and edge case handling
- **Code Cleanup** – Refactoring and technical debt reduction
- **Dependencies** – Updating and maintaining dependencies

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** – Clear explanation of the bug
2. **Steps to Reproduce** – How to reproduce the issue
3. **Expected Behavior** – What should happen
4. **Actual Behavior** – What actually happens
5. **Environment** – OS, browser, Node version
6. **Screenshots** – If applicable

## 💡 Suggesting Features

When suggesting features, please include:

1. **Description** – Clear explanation of the feature
2. **Use Case** – Why this feature is needed
3. **Proposed Solution** – How you envision it working
4. **Alternatives** – Other approaches you've considered
5. **Examples** – Real-world examples or mockups

## 📦 Pull Request Process

1. Update the README.md with any new features or changes
2. Update documentation and examples
3. Ensure all tests pass and type checking succeeds
4. Request review from maintainers
5. Address feedback and make requested changes
6. Once approved, your PR will be merged

### PR Checklist

- [ ] Code follows the style guidelines
- [ ] Type checking passes (`pnpm run check`)
- [ ] Build succeeds (`pnpm run build`)
- [ ] Documentation is updated
- [ ] Commit messages are clear and descriptive
- [ ] No unnecessary dependencies added

## 🎓 Learning Resources

- [NCAE Architecture](./docs/NCAE.md) – Understanding cognitive state detection
- [SMMP Design](./docs/SMMP.md) – Multilingual processing system
- [FSPP Protocol](./docs/FSPP.md) – Flow-state preservation
- [CLDAS System](./docs/CLDAS.md) – Loop detection and amplification

## 💬 Communication

- **GitHub Issues** – For bug reports and feature requests
- **GitHub Discussions** – For questions and general discussion
- **Discord** – Join our community server for real-time chat
- **Email** – For sensitive topics or private inquiries

## 🏆 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page
- Community spotlight

## 📄 License

By contributing to LoopBoard, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

We appreciate your interest in making LoopBoard better for neurodivergent users everywhere. Your contributions help us build a keyboard system that truly works for neurodivergent brains.

---

**INVICTUS** – Your keyboard should work for your brain, not against it.
