---
title: Tables for Data Display
weight: 500
---

If you're showing off a large set of closely-related data, a table is a natural choice.

## How to Add a Basic Table

Imagine that you've conducted a highly scientific ranking of bears from best to worst. To display that, a table seems like the best option. With Markdown, adding tables is a matter of building table cells using the pipe character (`|`). We can also add column headings at the top by creating cells with hyphens (`-`) as the second row.

| Bears   | Rank | Description                                           |
| ------- | ---- | ----------------------------------------------------- |
| Grizzly |    1 | The grizzly bear is the most awesome of bears.        |
| Panda   |    2 | Pandas know kung fu. Unless Jack Black is a liar.     |
| Polar   |    3 | The polar bear sold out for a Coke sponsorship. Lame. |
| Koala   |   DQ | Koalas, despite their koalafications, are not bears.  |

``` md
| Bears   | Rank | Description                                           |
| ------- | ---- | ----------------------------------------------------- |
| Grizzly |    1 | The grizzly bear is the most awesome of bears.        |
| Panda   |    2 | Pandas know kung fu. Unless Jack Black is a liar.     |
| Polar   |    3 | The polar bear sold out for a Coke sponsorship. Lame. |
| Koala   |   DQ | Koalas, despite their koalafications, are not bears.  |
```

**Don't feel like typing out the table cells? Use [this Markdown table generator](http://www.tablesgenerator.com/markdown_tables) to save yourself time.**

## Cell Alignment in Tables

In some cases, it makes sense to change the alignment of a column. For instance, if you're showing prices, it's easier to read if everything is right-aligned.

To right align, add a colon (`:`) to the end of the hyphens in the second row for the cell you want to right-align.

To center, add a colon (`:`) to both sides of the hyphens in the second row for the cell you want to center.

| Item             | Color   | Category  | Price      |
| ---------------- | ------- | :-------: | ---------: |
| Rubber Duck      | Yellow  | Debugging |      $9.99 |
| Pantone Mug      | 13-1520 | Design    |      24.99 |
| Artisanal Coffee | n/a     | Survival  |      14.99 |
| **Total Cost**   |         |           | **$49.97** |

``` md
| Item             | Color   | Category  | Price      |
| ---------------- | ------- | :-------: | ---------: |
| Rubber Duck      | Yellow  | Debugging |      $9.99 |
| Pantone Mug      | 13-1520 | Design    |      24.99 |
| Artisanal Coffee | n/a     | Survival  |      14.99 |
| **Total Cost**   |         |           | **$49.97** |
```

### ProTip™: the formatting doesn't have to be perfect.

Your tables don't have to look good in Markdown. They'll look fine when they're rendered, even if they look like crap in the editor.

That means this clunky Markdown:

``` md
Accessory | Hipster Score | Rating
--- | :-: | ---
Craft IPA | 93.2 | 🍻🍺
Raybans | 99.8 | 🕶 ✖️ 1,000,000
Unfinished Novel | 72.4 | 📓📓📓
Vinyl | 61.3 | 📻🎶
```

Still renders to a pretty table:

Accessory | Hipster Score | Rating
--- | :-: | ---
Craft IPA | 93.2 | 🍻🍺
Raybans | 99.8 | 🕶 ✖️ 1,000,000
Unfinished Novel | 72.4 | 📓📓📓
Vinyl | 61.3 | 📻🎶
