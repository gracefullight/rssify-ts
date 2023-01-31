# @gracefullight/rssify

A GitHub Action to convert a website into an Atom feed file.

This action takes website url and CSS selectors as inputs, then generate Atom feed file. You can customize feed details such as title, author name, email, etc.

## Usage

Create a workflow in your repository:

```yml
name: RSS

on:
  schedule:
    - cron:  '0 0 * * *'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Generate Atom Feed
      uses: @gracefullight/rssify@v0.1.0
      with:
        TITLE: <feed title>
        URL: <target website URL>
        ITEM_TITLE_CSS: <item title CSS selector>
        ITEM_URL_CSS: <item url CSS selector>
        FILENAME: <output filename>
```

## Inputs

| Name                 | Required | Description                                        |
| -------------------- | -------- | -------------------------------------------------- |
| TITLE                | true     | Feed title                                         |
| SUBTITLE             | false    | Feed subtitle                                      |
| URL                  | true     | Target website URL                                 |
| AUTHOR_URL           | false    | Author's website URL                               |
| AUTHOR_NAME          | false    | Author name                                        |
| AUTHOR_EMAIL         | false    | Author email                                       |
| COPYRIGHT            | false    | Copyright information                              |
| LANGUAGE             | false    | Feed language code                                 |
| ITEM_URL_CSS         | true     | CSS selector for item URL                          |
| ITEM_DATE_CSS        | false    | CSS selector for item date                         |
| ITEM_AUTHOR_CSS      | false    | CSS selector for item author                       |
| ITEM_DESCRIPTION_CSS | false    | CSS selector for item description                  |
| ITEM_IMAGE_CSS       | false    | CSS selector for item image                        |
| ITEM_DATE_FORMAT     | false    | Format of item date (using Luxon date format)      |
| ITEM_TIMEZONE        | false    | Timezone for item date (using iana timezone names) |
| FILENAME             | false    | Output filename                                    |

## Note

This action was heavily inspired by [tabhub/rssify](https://github.com/tabhub/rssify).
