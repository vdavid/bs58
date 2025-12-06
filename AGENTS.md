# Project overview

This is a component to compute base 58 encoding, an encoding typically used for cryptocurrencies such as Bitcoin.

## Dev process

Always follow this process when developing in this project:

1. Before developing a feature, plan, know exactly what you want to achieve, and have a task list.
2. Do the changes in small iterations. Adhere to the style guide!
3. `pnpm run format`, `pnpm run lint:fix`, and `pnpm run test` to check that everything is up to standards.
4. Add tests for new code. Think about unit and integration tests.
5. If you added new patterns, external deps, or made architectural changes, update the related docs. Even consider
   updating `AGENTS.md` (incl. this very process) to keep the next agent's work streamlined.
6. Before you call it done, reflect on the diff of your changes and make sure all changes are actually needed. Revert
   unneeded changes. Simplify.
7. Suggest a commit message, in the format seen in the style guide.

Always keep the dev process and style guide in mind.

## "Red line" rules (do not break)

- Modular architecture, no global state, no package cycles.
- Always make the checks happy, including warnings.
- Sentence case titles and labels!
- Never rely on your training data about the latest versions of packages. Always check with NPM or google the latest
  versions.

# Style guide

Writing and code styles.

## Writing

- Wording
    - **Use a friendly style**: Make all texts informal, friendly, encouraging, and concise.
    - **Use active voice**: Prefer an active voice rather than passive when writing text.
    - **Abbreviate English**: Use "I'm", "don't", and such.
    - **Don't trivialize**: Avoid the terminology of "just", "simple", "easy", and "all you have to do".
    - **Use gender-neutral language**: Use they/them rather than he/him/she/her. Use "folks" or "everyone" rather than
      "guys".
    - **Use universally understood terms**: Use "start" instead of "kickoff", and "end" instead of "wrap up".
    - **Avoid ableist language**: "placeholder value" rather than "dummy value". No "lame", "sanity check" which derive
      from disabilities.
    - **Avoid violent terms**: "stop a process" rather than "kill" or "nuke" it.
    - **Avoid exclusionary terminology**: Prefer "primary/secondary" or "main/replica" over "master/slave". Use
      "allowlist/denylist" over "whitelist/blacklist".
    - **Be mindful of user expertise**: Avoid jargon. Link to definitions and explain concepts when necessary.
    - **Avoid latinisms**: For example, use "for example" instead of "e.g.".
    - **Avoid abbreviations**: Very common acronyms like "URL" are okay. Also, use "docs" rather than "documentation".
- Punctuation, capitalization, numbers
    - **Use sentence case in titles**: Regardless whether visible on the UI or dev only.
    - **Use sentence case in labels**: Applies to buttons, labels, and similar. But omit periods on short microcopy.
    - **Capitalize names correctly**: For example, there is GitHub but mailcow.
    - **Use the Oxford comma**: Use "1, 2, and 3" rather than "1, 2 and 3".
    - **Spell out numbers one through nine.** Use numerals for 10+.
    - **Use ISO dates**: Use YYYY-MM-DD wherever it makes sense.
- UI
    - Make **error messages** positive, actionable, and specific.
    - **Start UI actions with a verb**: This makes buttons and links more actionable. Use "Create user" instead of "New
      user".
    - **Give examples in placeholder text**: Use "Example: 2025-01-01" or "name@example.com" rather than an instruction
      like "Enter your email".

## Code

- **Package manager**: Use `pnpm` (not npm or yarn)
- **TypeScript**: Incremental migration in progress. New files should be `.ts` or `.tsx`. Existing `.js` files are being
  converted gradually.
- **No classes**: Don't use classes in TypeScript. Use modules and functional components only. Convert class components
  to functional components when updating them.
- **Strict types**: Gradually enabling strict mode. Use proper types, avoid `any` when possible.
- **Imports**: Organized by groups (builtin, external, internal, parent, sibling, index).
- **Formatting**: Prettier is the authority. Run `pnpm run format` before committing.
- **Comments**: Add meaningful comments for public go functions, methods, and types to help the next dev.
- **React**: Hooks rules enforced, no dangerous HTML.
- **Docker**: Use Docker Compose for local development and testing. See `docker-compose.yml` and `Dockerfile` files.
- **Automations**: Keep editor settings in sync with `.editorconfig`, and Prettier config so they all format code
  consistently.

## Commit messages

The first line is max 50 characters. Examples: "Add new feature X", "Frontend: Fix Save button size on the Settings
page"

Then a blank line. Then a more detailed description if needed, as a form of a concise bulleted list, or free text with
meaningful extra details on what the commit does.

## DB

- Use plural names for tables and singular names for columns.

### Comments

When creating tables or columns, always add meaningful comments on each table and column.

- If a field can be NULL, explain what NULL means.
- In case of paths, always describe whether a closing "/" must be present, must not be present, or doesn't matter.
- Don't state the obvious, actually try to **help the next developer**.
- If an entity is very obvious, like a NOT NULL "email_address" field on a "users" table, then **don't add a comment**.

Store comments in two places:

1. In the DB, using `COMMENT ON...` statements in your migrations.
2. Together with the Go models. See, for example, `/backend/internal/models/user.go` for examples.
