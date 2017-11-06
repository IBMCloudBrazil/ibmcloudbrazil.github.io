---
title: How to Add Pages to Sidebar Sections
---

To keep content readable, we want to break up bigger topics into individual pages. This document will show you how to create new pages in your documentation.

## What Are Pages?

Each page in the documentation is listed underneath a sidebar section.

{%
  include figure.html
  src="/assets/img/pages-vs-sections.png"
  alt="pages vs. sections in the documentation"
  caption="Pages are nested below sections."
%}

## How to Add a New Page

When you're ready to add a new page, follow these steps to make your dreams a reality.

### Step 1: Navigate to the Folder Where Your Page Will Live

In GitHub, go to the home page of your repo (e.g. {{ site.github_repo }}), then click on the `_content` folder. Inside, choose the folder that matches the section where you want the page to live.

{%
  include figure.html
  src="/assets/img/add-page-step-1.gif"
  alt="navigate to the appropriate folder"
  caption="In this case, we’re adding a page to the “intro” section."
%}

If you don't see a folder, see [the docs on adding section folders](https://pages.github.ibm.com/Jason-Lengstorf/docs-starter/content/sidebar-sections/#step-4-add-a-new-folder-for-the-sections-content) for a walkthrough on creating it.

### Step 2: Create a New File

Inside the section's folder, click the "Create new file" button at the top right. You'll be prompted for a file name.

The file name is what will be used as the page's link — it is _not_ the display title. (We'll set a title in Step 3.) For example, if we want add a new page called "Growls, Grunts, and Roars", we might want it to be linked as `/intro/bear-sounds/`, so we should name the file `bear-sounds.md`.

{%
  include figure.html
  src="/assets/img/add-page-step-2.gif"
  alt="create a new file"
  caption="We haven't saved this file yet — see step 3."
%}

**NOTE:** The file name _must_ end in `.md` or it will not be recognized as a page.

### Step 3: Add a Title and Content to the Page

Next, we need to add a title for the page, along with the page's content.

At the top of the page, add the title using the following format:

```yaml
---
title: Your Title Goes Here
---
```

**NOTE:** If you want to use a colon (`:`) in your title, surround the title with quotes (e.g. `title: "Bear Sounds: Grunts, Growls, and Roars"`).

Below the title block, you can add any content you wish. See the [formatting cheat sheet](https://pages.github.ibm.com/Jason-Lengstorf/docs-starter/formatting/cheatsheet/) for tips on formatting page content.

{%
  include figure.html
  src="/assets/img/add-page-step-3.gif"
  alt="navigate to the appropriate folder"
  caption="In this case, we’re adding a page to the “intro” section."
%}

### Step 4: View Your New Page

After saving, you can view the new page by visiting your live docs. You'll see the new page in the sidebar under the section, and clicking on it will show you the new content.

{%
  include figure.html
  src="/assets/img/add-page-step-4.png"
  alt="the newly-created page"
  caption="Our new page is now visible under the “intro” section."
%}

