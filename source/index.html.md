---
title: Unofficial MOFH API Docs

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - python

toc_footers:
  - <a href='https://github.com/Wallvon/MOFH-API-Docs'>GitHub Repository</a>
  - <a href='https://that-guy.tech'>Made by Robert S.</a>

includes:
  - errors

search: true

code_clipboard: true
---

# Introduction

Welcome to the unofficial MyOwnFreeHost API Docs! You can use our API to learn how the MOFH API works.

There are examples in Python and cURL, but if you know any other coding language please make a pull request on the [GitHub page](https://github.com/Wallvon/MOFH-API-Docs). You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

Other MOFH API wrappers:   

* [mofh-client](https://github.com/InfinityFreeHosting/mofh-client) (PHP)

Coming soon:   

* [mofh.py](#) (Python)

# Authentication

> To authorize, use this code:

```python
import requests

url = "https://panel.myownfreehost.net:2087/xml-api/" # This is the base URL
data = {}

response = requests.post(url, params=data, auth=('API USERNAME' 'API PASSWORD'), verify=False)
```

```shell
curl --insecure "https://panel.myownfreehost.net:2087/xml-api/" --user username:password
```

> Make sure to replace `username:password` or `API USERNAME` and `API PASSWORD` with your API credentials.

MOFH uses API credentials to allow access to the API, you can get them [here](https://panel.myownfreehost.net/panel/index2.php?option=api).

MOFH expects for the API credentials to be included in all API requests to the server.

<aside class="notice">
You must replace <code>username:password</code> or <code>API USERNAME</code> and <code>API PASSWORD</code> with your API credentials.
</aside>

# API - Accounts

## Create Account

```python
import requests
from xml.etree.ElementTree import fromstring, ElementTree

url = "https://panel.myownfreehost.net:2087/xml-api/createacct.php"
data = {'username': 'example', 'password': 'password', 'contactemail': 'example@example.co', 'domain': 'subdomain.example.com', 'plan': 'MyAwesomePlan'}
# if you want to use a domain which is not a subdomain, put that domain in.

response = requests.post(url, params=data, auth=('API USERNAME' 'API PASSWORD'), verify=False)
tree = ElementTree(fromstring(response.content))
root = tree.getroot()
for child in root:
  print(child[0][1].text) # The vPanel and FTP username
```

```shell
COMING SOON
```

> The above command returns XML structured like this:

```xml
COMING SOON
```

This endpoint creates a new user account with the provided information.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/createacct.php`