# SAC Website — Code of Conduct

**Project:** Student Activity Cell (SAC) Website  
**Applies to:** All contributors, branches, commits, pull requests, and project files.

## 1. Branching and Pull Requests

- Create a **separate branch for every feature or isolated fix**. Do not work directly on the shared `main` branch.
- Use descriptive branch names, such as `feature/gallery-page` or `fix/login-validation`.
- **Before starting work**, update from the appropriate remote/base branch using `git pull`, and confirm the repository state with `git status`.
- Before staging or committing, fetch/pull and integrate the latest relevant changes from the base branch as required by the team's workflow. Resolve conflicts carefully and test again.
- Push your feature branch and open a **Pull Request (PR)** for review. Follow the team's review and approval process before merging.
- Keep each PR focused on one feature or fix. Include a clear title, summary, files/pages changed, testing performed, screenshots when useful, and known limitations.

## 2. Secrets and Sensitive Information

- Never commit or expose passwords, API secrets, private keys, database connection strings, access tokens, private environment files, or other sensitive details.
- Use a local `.env` file where appropriate and ensure secret-bearing files are excluded through `.gitignore`.
- When useful, commit an `.env.example` containing **placeholder values only**.
- Do not place private secrets in frontend code. Anything bundled into a browser application can be visible to users; private credentials must stay in backend/server-side configuration.
- If a secret is accidentally committed, inform the project owner immediately and revoke/rotate it. Deleting it in a later commit does not make the leaked secret safe.

## 3. Local Development and Verification

- Before implementation, update your working branch from the appropriate remote/base branch and confirm the repository state.
- Install dependencies using the repository's package manager and lockfile. Do not casually replace or regenerate lockfiles.
- Run `npm run dev` first and verify the page/functionality in the browser. Check responsive layouts, interactions, console errors, and failed network requests.
- Before committing/pushing, run `npm run build` and `npm run typecheck` **if these scripts exist** in `package.json`.
- Also run the project's lint and test scripts when available.
- If a script is not defined, do not claim it passed. Tell the project owner and run the checks that are actually configured. Fix relevant errors before opening the PR.

## 4. Clean, Maintainable, Structured Code

- Keep components small, readable, reusable, and focused on a clear responsibility. Avoid unnecessary duplication, giant components, unclear names, and unexplained hacks.
- Follow the repository's naming, routing, formatting, and import conventions. Do not introduce a new library or architectural pattern without a clear need and team agreement.
- Keep page components separate from reusable UI components, and keep data/configuration separate from rendering logic.
- Store hardcoded content and arrays in a separate `data.js` file in the relevant feature/page folder, rather than embedding them directly in JSX.
- Store static images in the appropriate subfolders under `public/`. Reference assets consistently and avoid duplicating the same image or data unnecessarily.
- Use meaningful error handling and accessible labels. Validate forms and handle loading, success, and failure states rather than leaving controls inert.

## 5. Commit and Handover

- Make commits small and meaningful, with messages describing the change, for example:
  - `feat: add responsive gallery page`
  - `fix: validate team registration fields`
- Commit completed work on the correct feature branch, push the branch, and create/update the PR according to the team's workflow.
- In the PR description or handover message, clearly state:
  - What you implemented
  - Which files/pages changed
  - What you tested
  - Build/type-check results
  - Anything still pending
- Never claim a check passed unless you actually ran it. If something fails or remains incomplete, explain it clearly.

## 6. Professional Collaboration

- Communicate blockers, API contract questions, shared-component changes, and integration risks early.
- Do not silently guess API endpoints or backend payloads.
- Respect other contributors' work. Do not overwrite, revert, or reformat unrelated files without coordination.
- Review your diff before committing to catch accidental files, debug code, secrets, unrelated formatting, and unfinished changes.

---

## Quick Checklist

- [ ] Pull the latest relevant changes before starting work.
- [ ] Create a separate branch for the feature/fix.
- [ ] Keep secrets and sensitive details out of the repository.
- [ ] Keep JSX/components clean; put hardcoded data in the relevant `data.js`.
- [ ] Keep static images in the appropriate `public/` subfolders.
- [ ] Run `npm run dev` and test locally.
- [ ] Run `npm run build`, `npm run typecheck` (if configured), and available lint/tests.
- [ ] Review the diff and use a meaningful commit message.
- [ ] Push the branch and open a PR.
- [ ] Describe what changed, what was tested, and what remains pending.

**Rule of thumb:** Pull first → branch per feature → code cleanly → test locally → build/type-check → commit clearly → push and open a PR → explain the work.
