# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in LoopBoard, please **do not** open a public issue. Instead, please report it responsibly by emailing security@loopboard.dev with the following information:

1. **Description** – Clear explanation of the vulnerability
2. **Location** – Where in the code the vulnerability exists
3. **Impact** – What could be affected or exploited
4. **Proof of Concept** – Steps to reproduce (if applicable)
5. **Suggested Fix** – If you have a solution

We will acknowledge your report within 48 hours and work with you to resolve the issue.

## Security Principles

LoopBoard is built with security and privacy as core principles:

### Local Processing

- **All processing is local** – No data is transmitted to external servers
- **No cloud dependencies** – The app works entirely on your device
- **No tracking** – No analytics or telemetry collection
- **No data storage** – No user data is stored or logged

### Code Security

- **Regular dependency updates** – We keep dependencies current and patched
- **Type safety** – TypeScript prevents many common vulnerabilities
- **Input validation** – All user input is validated and sanitized
- **No eval or dynamic code execution** – We never execute arbitrary code

### Privacy Protection

- **UTF-8 sanitization** – Removes invisible characters and encoding attacks
- **No keyboard logging** – The keyboard doesn't log or store input
- **No network access** – The app has no network permissions
- **Encrypted storage** – Any local data is encrypted

## Supported Versions

We provide security updates for the following versions:

| Version | Status | Support Until |
|---------|--------|----------------|
| 1.x     | Active | 2027-02-28     |
| 0.x     | Legacy | 2026-08-28     |

## Known Security Considerations

### UTF-8 Encoding

LoopBoard sanitizes UTF-8 input to prevent invisible character attacks. This includes:

- Zero-width characters (U+200B, U+200C, U+200D)
- Right-to-left marks (U+202E)
- Byte order marks (U+FEFF)
- Other invisible Unicode characters

### Keyboard Permissions

On Android, LoopBoard requires keyboard permissions. These are used only for:

- Detecting typing input
- Analyzing cognitive state
- Processing language detection
- Generating output

We do **not** use these permissions to:

- Log keystrokes
- Record user activity
- Transmit data
- Access other apps

## Security Best Practices for Users

1. **Keep your device updated** – Install OS and security updates
2. **Use strong authentication** – Protect your device with a password or biometric
3. **Review permissions** – Understand what permissions LoopBoard requests
4. **Report suspicious activity** – If you notice unusual behavior, report it
5. **Verify sources** – Only download LoopBoard from official sources

## Security Testing

We conduct regular security reviews including:

- **Dependency scanning** – Automated checks for vulnerable dependencies
- **Code review** – Manual review of security-critical code
- **Penetration testing** – External security audits (planned)
- **Fuzzing** – Testing with unexpected inputs

## Compliance

LoopBoard complies with:

- **GDPR** – General Data Protection Regulation (EU)
- **CCPA** – California Consumer Privacy Act (USA)
- **HIPAA** – Health Insurance Portability and Accountability Act (USA)
- **Accessibility Standards** – WCAG 2.1 Level AA

## Vulnerability Disclosure Timeline

We follow responsible disclosure practices:

1. **Report received** – Acknowledged within 48 hours
2. **Investigation** – We assess the severity and impact
3. **Fix development** – We develop and test a fix
4. **Release** – We release a patched version
5. **Disclosure** – We publicly disclose the vulnerability after patching

Typically, this process takes 30-90 days depending on complexity.

## Contact

- **Security Issues**: security@loopboard.dev
- **General Questions**: contact@loopboard.dev
- **GitHub**: Report via GitHub Security Advisory

---

**INVICTUS** – Security and privacy for neurodivergent minds.
