

### **Integrating and Using Changesets And Automatically Release New Version**

With the monorepo structure in place, let's introduce Changesets to manage versioning and changelogs.

#### **Step 1: Initialize Changesets**

1.  **Navigate to the root of your monorepo.**

2.  **Add the Changesets CLI as a dev dependency to the root `package.json`:**
    ```bash
    pnpm add -D @changesets/cli
    ```

3.  **Initialize Changesets:**
    ```bash
    pnpm changeset init
    ```
    This command creates a `.changeset` directory with a `config.json` file and a `README.md`.


#### **Step 3: The Automated Release Process in Action**

Here's what will happen now:

1.  **Push to `main`:** When you push your commit with the changeset file to the `main` branch, the `Release` GitHub Action will trigger.

2.  **Changeset Action Creates a PR:** The `changesets/action` will detect the changeset file. Instead of publishing immediately, it will:
    *   Consume the `.changeset/lovely-llamas-unite.md` file.
    *   Bump the version of `@test-jonathan148/utils` in its `package.json` from `1.0.0` to `1.1.0`.
    *   Update the `CHANGELOG.md` file for `@test-jonathan148/utils`.
    *   Create a new pull request titled **"Version Packages"** with these changes.

3.  **Merge the "Version Packages" PR:** Review the PR to ensure the version bumps and changelogs are correct. Once you merge it into `main`, the `Release` action will run again.

4.  **Publishing to npm:** This time, when the `changesets/action` runs, it won't find any changeset files. However, it will detect that the package versions in `package.json` do not exist in the npm registry. It will then execute the `publish` command (`pnpm run publish:packages`), publishing the new version of `@test-jonathan148/utils` to npm.

#### **Step 4: Make the change in any file**

Here's what will happen now:

1.  **Update any file:**

2. **Run command:**
    ```bash
    pnpm changesets
    ```

3. **Push to origin:**
4. **Wait the pipeline**
5. **Waiting for pipeline create PR and then approval the PR**
6. **The version will automatically increase**


Note: How to allow Github action to automatically create PR 

Please go to your repo's settings, click on the 'Actions' category on the left side that is under 'Code and automation', scroll down to 'Workflow permissions', select 'Read and write permissions', click 'Allow Github Actions to create and approve pull requests', and click 'Save.'

Without organization
 ```bash
pnpm --filter test-jonathan148-react-ui add test-jonathan148-react-utils@workspace:*
```

or

Within organization
 ```bash
pnpm --filter react-ui add @my-only-one-org/utils@workspace:*
```