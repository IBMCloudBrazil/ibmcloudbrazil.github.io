---
title: How to Manage Sidebar Sections
---

To keep documentation organized, it's helpful to separate pages into groups of relevant content. We call these "sidebar sections".

- 
{:toc}

## What Are Sidebar Sections?

If we were writing documentation about the original Nintendo, for example, it might make sense to have one group called "Strategies & Tips", and one called "Maintenance & Troubleshooting".

The "Strategies & Tips" group could contain pages like, "Lean to Make Your Character Run Faster" and "When In Doubt, Mash All the Buttons".

And the "Maintenance & Troubleshooting" group might contain "Have You Tried Turning It Off and On Again?" and "Blow Into the Cartridge".

**Separating pages into sections makes it much easier to organize content**, and allows readers to quickly understand how each page relates to other pages.


## How to Add a New Section to the Sidebar

In the main directory of the site (this would be the GitHub home page, e.g. <{{ site.github_repo }}>), there's a folder called `_data`. That's where sections are defined.

### Step 1: Open the section file for editing.

![Opening sections.yml for editing]({{ site.github.url }}/assets/img/sections-step-1.gif)

First, click on the `_data` folder. Inside, click on `sections.yml`, then click the <i class="u-icon--before u-icon--pencil"></i>&nbsp;edit icon in the top-right of the screen.

### Step 2: Add the new section.

Continuing with our Nintendo example from the beginning of the article, here's how we would add our new "Strategies & Tips" section to the sidebar:

``` yaml
tips:
    title: Strategies & Tips
    icon: gamepad
```

See how `tips:` is at the top, with the `title` and `icon` indented below. _The indent is important!_

#### Section Slug (What Shows Up in the URL)

The first part — `tips` — is the "section slug" for the section. This is what shows up in the URL (the address in the browser) before the page slug. So if the page was called "Lean to Make Your Character Run Faster", the URL might be "http://example.com/tips/lean-to-run-faster".

This is useful for helping readers know where they're going _before_ they click a link — it's easy to make an educated guess about what that page will contain just from its URL.

**NOTE:** This needs to be URL-friendly, so stick to lowercase letters, numbers, and hyphens only. No spaces, no special characters (e.g. `tricks-treats` or `tricks-and-treats` for a section called "Tricks & Treats"). Things _will_ break if you don't do this.

#### Section Title

The second part is the `title` of the section ("Strategies & Tips" in this example). This is what shows up in the sidebar. Make sure this is descriptive and lets the reader know what kind of information they'll find inside. Also, remember that space is limited, so keep it short.

#### Section Icon

The third part is the `icon`. This shows up to the left of the title, and gives a visual clue about the section's content. In this example, we're using the <i class="u-icon--before u-icon--gamepad"></i>&nbsp;gamepad icon since this is about gaming strategies.

For more information on what icons are available and how to use them, see [_How Icons Work_]({{ site.github.url }}/content/icons).

### Step 3: Save the file and reload the page.

After you've add the new section, save `sections.yml` and reload the docs. You'll see the new section in the sidebar, ready for content.

![new section]({{ site.github.url }}/assets/img/sections-step-3.gif)

### Step 4: Add a new folder for the section's content.

Once the section exists, we need to create a folder where the pages in that section will live.

In the `_content` folder — it's in the same place the `_data` folder is — create a new folder with the same name as the section slug you chose (e.g. in the example above, the section slug is "tips", so we'd create a folder called `tips`).

In order to put content into these sections, the pages _must_ be placed in this new folder. See [_How to Add Pages to Sidebar Sections_]({{ site.github.url }}/content/pages) for details.

## Advanced Section Stuff

### How to control the section order.

Sections will be displayed in the sidebar in the order they are declared in `sections.yml`. So if you want to move a section higher or lower in the order, just copy-paste it into the correct order.

### How to create secret sections.

In rare cases, you may need to have a section for content that doesn't show up in the sidebar.

To do this, simply add an extra piece to the section called `hidden` and set its value to `true`.

``` yaml
secret:
  title: Secret Section...Shhh!
  icon: lock
  hidden: true
```

This is useful if you have something like an index of terms with a lot of pages — this would clutter up the sidebar, but it's extremely useful information. A hidden section allows us to keep things organized and link to the index pages as needed, without adding tons of extra stuff to the sidebar.
