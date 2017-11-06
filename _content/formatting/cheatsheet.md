---
title: Formatting Cheat Sheet to a Page
weight: 1
---

For the most part, content is pretty straightforward: you write things, and people read them.

But it's helpful to have a few tricks up your sleeve to present that content in a clear, engaging way. Fortunately, [Markdown](https://daringfireball.net/projects/markdown/) makes that quick and painless.

Here's a quick cheat-sheet for styling content with Markdown.

- 
{:toc}

## Headings, Paragraphs, Lists, and Quotes

Most pages will be primarily composed of headings, paragraphs, and the occasional quote. Here's how to make that happen.

### Paragraphs

To add paragraphs, just type. Seriously. No formatting required.

``` md
To add paragraphs, just type. Seriously. No formatting required.
```

### Headings

To add headings, place between two (2) and six (6) pound signs (`#`) — that's the "hashtag" for anyone under 25 — before the heading text.

## This Is a Heading
{:.no_toc}

### This would be a sub-heading.
{:.no_toc}

#### Four pound signs means this heading is smaller.
{:.no_toc}

##### If you find yourself this deep, consider multiple pages.
{:.no_toc}

###### Seriously? I feel like you’re just messing with me now.
{:.no_toc}

``` md
## This Is a Heading

### This would be a sub-heading.

#### Four pound signs means this heading is smaller.

##### If you find yourself this deep, consider multiple pages.

###### Seriously? I feel like you’re just messing with me now.
```

### Lists

Organizing lots of information gets a lot easier if you can put it into lists. Lucky for us, that's really easy with Markdown.

#### Bulleted lists

To create a bulleted list, use hyphens (`-`) or asterisks (`*`) before each item in the list.

- Lions
- Tigers
- Bears

(Oh my!)

``` md 
- Lions
- Tigers
- Bears

(Oh my!)
```

You can nest items as well by adding four spaces before the next list item.

- Bears
    - Grizzly
    - Polar
- Big Cats
    - Lions
    - Tigers

``` md
- Bears
    - Grizzly
    - Polar
- Big Cats
    - Lions
    - Tigers
```

#### Numbered lists

A numbered list is created by numbering items.

1. Black Bear 
2. Grizzly Bear 
3. ~~Koala~~ Polar Bear 

``` md 
1. Black Bear 
2. Grizzly Bear 
3. ~~Koala~~ Polar Bear 
```

**NOTE:** You don't have to sequence the numbers; Markdown will do that automatically. You can technically use `1.` for every item and it'll still work.

1. Is this magic?
1. No — it's Markdown!

``` md 
1. Is this magic?
1. No — it's Markdown!
```

### Blockquotes

Sometimes, you want to let someone else do the talking. That's what quotes are for.

To add a blockquote, put a greater-than symbol (`>`) in front of the text that you want to quote.

> I love deadlines. I like the whooshing sound they 
> make as they fly by.
> 
> – Douglas Adams

``` md 
> I love deadlines. I like the whooshing sound they 
> make as they fly by.
> 
> – Douglas Adams
```

## Text Styles

The simplest way to spruce up a page is by adding some emphasis with **bold**, _italicized_, and ~~strike-through~~ text.

### Bold
To call attention to important text — for example, the key takeaways of the paragraph — **use bold text to draw the eye.**

Text surrounded by two asterisks (`**`) is **bolded**.

``` md
Text surrounded by two asterisks (`**`) is **bolded**.
```

### Italic

In other cases, you may want to introduce a new term or emphasize a phrase. To do this, use _italics_.

Text surrounded by underscores (`_`) is _italicized_.

``` md
Text surrounded by underscores (`_`) is _italicized_.
```

### Strike-through

If you make changes to a document, but want to keep the original text for historical and/or reference reasons, you can ~~hide the evidence~~ cross out the out-of-date text.

Text surrounded by two tildes (`~~`) is ~~crossed out~~.

``` md
Text surrounded by two tildes (`~~`) is ~~crossed out~~.
```

## Links

To really make documentation useful and user-friendly, we ought to be adding links to additional information that can help.

To do this, place the text to be linked inside square brackets (`[]`), then place the link inside parentheses (`()`) immediately afterward.

[I'm a link!](http://google.com)

``` md 
[I'm a link!](http://google.com)
```

## Images

Adding images is _almost_ the same as adding links, except you add an exclamation point (`!`) before the square brackets (`[]`). The square brackets should contain text describing the image (for accessibility), and the parentheses (`()`) should contain the path to the image.

![Bluemix]({{ site.github.url }}/assets/img/bluemix.svg)

``` md
![Bluemix]({{ site.github.url }}/assets/img/bluemix.svg)
```
