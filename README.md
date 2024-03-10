
<img src="" align="left"
     alt="dplayz/codenamecore2" width="125" height="125">
### codenamecore2
An experimental Hugo theme based on Bootstrap 5

---

# Motivation
The first iteration of codenamecore is too time consuming to develop. This theme utilizes Bootstrap framework to easily develop features and blocks.

# Usage
### I heavily discourage the use of this theme, because this is under alpha release. If you still insist too, or you want to test, check the instructions below:

<details><summary>Installation instructions</summary>

1. Clone the repo as site submodule
   SSH: ``git submodule add themes/codenamecore git@github.com/dplayz/codenamecore2.git``
   HTTPS: ``git submodule add themes/codenamecore https://github.com/dplayz/codenamecore2.git``
2. Installing the [dependencies](#dependencies) that is required to installed.
3. Initializing the submodule
   ``git submodule update --init``
4. Building the site:
   Build once: ``hugo <desired parameters here>``
   Live build: ``hugo server <desired parameters here>``

</details>


A reference implementation sites can be seen here:
~~- https://codenamecore.dpG06.top~~ Soon

# Versioning
This project follows Calendar versioning, using this format:
```
XXXX.YyZZ.Vv
Example: 2023.802.0, 2023.1231.2

X - Year of the publication
Y - Month of the publication
Z - Day of the publication
V - Release iteration during the day of publication
```

# Contributors
For now, the sole contributor of this project is [dplayz](https://github.com/dplayz), but future contributions is accepted and will be acknowledged.
See [CONTRIBUTION.md](./blob/main/CONTRIBUTION.md) to be a contributor

# Dependencies
- twbs/bootstrap - Bootstrap framework
- gohugo/hugo - Hugo SSG

