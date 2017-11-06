---
title: Numbered and Bulleted Lists
---

Organizing lots of information gets a whole lot easier if you can put it into lists. Lucky for us, that's _really_ easy with Markdown.

- 
{:toc}

## How to Add Bulleted Lists

To create a bulleted list, use hyphens (`-`) before each item in the list.

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

See how it looks like a list already? This is what makes Markdown so great — the docs are easy to read both in the repo _and_ on the live docs.

### How to add nested list items.

You can nest items as well by adding four spaces before the nested list item.

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

## How to Add Numbered Lists

A numbered list is created by numbering items.

1. Black Bear 
2. Grizzly Bear 
3. Polar Bear 

``` md 
1. Black Bear 
2. Grizzly Bear 
3. Polar Bear 
```

### Markdown will automatically number list items.

Markdown will number the list items automatically. You can technically use `1.` for every item and it'll still work.

1. Is this magic?
1. No — it's Markdown!

``` md 
1. Is this magic?
1. No — it's Markdown!
```

## How to Include Multiple Paragraphs in List Items

In some cases, it will make sense to include more than one paragraph in a list item. This is accomplished by adding spaces before the next paragraph to line it up with the list item text.

1.  "There is a theory which states that if ever anyone discovers exactly what 
    the Universe is for and why it is here, it will instantly disappear and be 
    replaced by something even more bizarre and inexplicable. 

    "There is another theory which states that this has already happened."
    
    – Douglas Adams, _The Restaurant at the End of the Universe_

2.  “Some humans would do anything to see if it was possible to do it. If you 
    put a large switch in some cave somewhere, with a sign on it saying 
    'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even 
    have time to dry.”
    
    – Terry Pratchett, _Thief of Time_


``` md
1.  "There is a theory which states that if ever anyone discovers exactly what 
    the Universe is for and why it is here, it will instantly disappear and be 
    replaced by something even more bizarre and inexplicable. 

    "There is another theory which states that this has already happened."
    
    – Douglas Adams, _The Restaurant at the End of the Universe_

2.  “Some humans would do anything to see if it was possible to do it. If you 
    put a large switch in some cave somewhere, with a sign on it saying 
    'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even 
    have time to dry.”
    
    – Terry Pratchett, _Thief of Time_
```
