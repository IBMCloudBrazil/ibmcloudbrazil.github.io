---
title: How to Add a Table of Contents
---

On pages with more than one or two headings, it may be a good idea to add a table of contents to help readers find their way around.

## How to Add a Table of Contents to Pages

The process for adding a table of contents is a little weird, but stick with us.

To add a table of contents, insert a hyphen and a space (`- `), then press `return`. On the next line, add `{:toc}`.

- 
{:toc}

``` md
- 
{:toc}
```

**NOTE:** Don't forget the space after the hyphen; this _will not work_ without it.

### How the table of contents is built.

The table of contents is built from the [headings and subheadings]({{ site.github.url }}/formatting/headings) on the page, with subheadings nested under headings.

This is helpful for several reasons:

1. You can easily link to a particular section of a page by clicking its link in the table of contents and sending that to someone.
2. The heading-based nature of the table of contents encourages us to create better section titles, which makes the documentation more helpful to readers.
3. We don't have to manually manage a table of contents, which is one less thing to worry about.

## Why the Table of Contents Doesn't Work on GitHub

If you're looking at the content in the repo, the table of contents doesn't work. Don't worry — **this is an issue with GitHub, not with the docs themselves.**

GitHub doesn't support the `{:toc}` feature. This means that you won't see the table of contents until you view the page on the live docs.

**NOTE:** If you're particularly bothered by this, go add a thumbs-up to [this issue about adding table of contents support on GitHub](https://github.com/github/markup/issues/904#issuecomment-267380899).
