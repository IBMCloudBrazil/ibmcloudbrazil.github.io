# Bluemix Documentation Starter Kit

Simple-to-edit (for developers and non-developers alike) documentation framework.

## Development Stuff

When merging changes, **DO NOT overwrite the `_content` directory**. This is kind of weird, so just use the following and we'll all be much happier.

``` sh
# Make sure you’ve got the starter set as your upstream.
git remote add upstream git@github.ibm.com:jason-lengstorf/docs-starter.git

# Merge the changes into your own branch.
git checkout gh-pages    
git merge --no-commit --no-ff upstream master
git reset -- _content # revert updates from path
git commit
```
