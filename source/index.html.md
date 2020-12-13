---
title: Unofficial MOFH API Docs

language_tabs: # must be one of https://git.io/vQNgJ
  - python

toc_footers:
  - <a href='https://github.com/Wallvon/MOFH-API-Docs' target="_blank">GitHub Repository</a>
  - <a href='https://robert-s.dev' target="_blank">Made with ❤️ by Robert S.</a>

includes:
  - errors

search: true

code_clipboard: true
---

# Introduction

Welcome to the unofficial MyOwnFreeHost (MOFH) API Docs! You can use our API to learn how the MOFH API works.

There are examples in Python, but if you know any other coding language and are willing to contribute please consider making a pull request on the [GitHub repository](https://github.com/Wallvon/MOFH-API-Docs). You can view code examples in the dark area to the right, and you can switch the coding language of the examples with the tabs in the top right.

Other MOFH API wrappers:   

* [mofh-client](https://github.com/InfinityFreeHosting/mofh-client) (PHP)

* [mofh.py](#) (Python) (Coming Soon)

Some other side-notes:

* You can create up to 3 accounts per email with the MOFH API.
* The MOFH API is very limited, so you can't really do more than what is listed here.
* The MOFH API is not user-friendly, and I really wouldn't recommend using it.

# Authentication

> To authorize, use this code:

```python
import requests

url = "https://panel.myownfreehost.net:2087/xml-api/" # This is the base URL
data = {}

response = requests.post(url, params=data, auth=('username' 'password'), verify=False)
```

> Make sure to replace 'username' and 'password' with your API credentials.

MOFH uses API credentials to allow access to the API, you can get them [here](https://panel.myownfreehost.net/panel/index2.php?option=api).

MOFH expects the API credentials to be included in all API requests to the server.

<aside class="notice">
You must replace <code>username</code> and <code>password</code> with your API credentials.
</aside>

# API - Accounts

## Create account

```python
import requests
from requests.auth import HTTPBasicAuth
# from xml.etree.ElementTree import fromstring, ElementTree - Do this if you want to only get the username.

url = "https://panel.myownfreehost.net:2087/xml-api/createacct.php"
data = {'username': 'example', 'password': 'password', 'contactemail': 'example@example.com', 'domain': 'subdomain.example.com', 'plan': 'MyAwesomePlan'} # If you want to use a domain which is not a subdomain, put that domain in.

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text)

# tree = ElementTree(fromstring(response.content)) - Do this if you want to only get the username.
# root = tree.getroot() - Do this if you want to only get the username.
# for child in root: - Do this if you want to only get the username.
#  print(child[0][1].text) # The vPanel and FTP username - Do this if you want to only get the username.
```

> The above command returns XML structured like this:

```xml
<createacct>
     <result>        
          <options>
                  <ip>n</ip>
                  <vpusername>hname_12345678</vpusername>
                  <nameserver>ns1.byet.org</nameserver>
                  <nameserver2>ns2.byet.org</nameserver2>
                  <nameserver3/>
                  <nameserver4/>
                  <nameservera/>
                  <nameservera2/>
                  <nameservera3/>
                  <nameservera4/>
                  <nameserverentry/>
                  <nameserverentry2/>
                  <nameserverentry3/>
                  <nameserverentry4/>
                  <package></package>
           </options>
           <rawout>
           account added to queue to be added 
            </rawout>
            <status>1</status>
            <statusmsg>This account has been successfuly created</statusmsg>
     </result>
</createacct>
```

This endpoint creates a new user account with the provided information.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/createacct.php`

## Suspend account

```python
import requests
from requests.auth import HTTPBasicAuth
# from xml.etree.ElementTree import fromstring, ElementTree - Do this if you want to only get the status code.

url = "https://panel.myownfreehost.net:2087/xml-api/suspendacct.php"
data = {'user': 'username', 'reason': 'My beautiful reason.'} # For the username, use the same username you set when creating the account.

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text)

# tree = ElementTree(fromstring(response.content)) - Do this if you want to only get the status code.
# root = tree.getroot() - Do this if you want to only get the status code.
# for child in root: - Do this if you want to only get the status code.
#  print(child[0].text) # The status code (can either be 0 or 1) - Do this if you want to only get the status code.
```


> The above command returns XML structured like this:

```xml
<suspendacct>
    <result>
        <status>1</status>
        <statusmsg>
            <script>if (self['clear_ui_status']) { clear_ui_status(); }</script>
            Changing Shell to /bin/false...Changing shell for username.
            Shell changed.
            Locking Password...Locking password for user username.
            marking user vhosts / databases for suspension.
            ..
            ..
            Completed, this account will be fully suspended in 2 minutes.
        </statusmsg>
    </result>
</suspendacct>
```

This endpoint suspends a user account with the provided information.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/suspendacct.php`

## Unsuspend account

```python
import requests
from requests.auth import HTTPBasicAuth
# from xml.etree.ElementTree import fromstring, ElementTree - Do this if you want to only get the status code.

url = "https://panel.myownfreehost.net:2087/xml-api/unsuspendacct.php"
data = {'user': 'username'} # For the username, use the same username you set when creating the account.

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text)

# tree = ElementTree(fromstring(response.content)) - Do this if you want to only get the status code.
# root = tree.getroot() - Do this if you want to only get the status code.
# for child in root: - Do this if you want to only get the status code.
#  print(child[0].text) # The status code (can either be 0 or 1) - Do this if you want to only get the status code.
```

> The above command returns XML structured like this:

```xml
<unsuspendacct>
    <result>
        <status>1</status>
        <statusmsg>
            <script>if (self['clear_ui_status']) { clear_ui_status(); }</script>
            username account has been unsuspended
        </statusmsg>
    </result>
</unsuspendacct>
```

This endpoint unsuspends a user account with the provided information.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/unsuspendacct.php`

## Change password

```python
import requests
from requests.auth import HTTPBasicAuth
# from xml.etree.ElementTree import fromstring, ElementTree - Do this if you want to only get the status code.

url = "https://panel.myownfreehost.net:2087/xml-api/passwd.php"
data = {'user': 'username', 'pass': 'password'} # For the username, use the same username you set when creating the account.

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text)

# tree = ElementTree(fromstring(response.content)) - Do this if you want to only get the status code.
# root = tree.getroot() - Do this if you want to only get the status code.
# for child in root: - Do this if you want to only get the status code.
#  print(child[5].text) # The status code (can either be 0 or 1) - Do this if you want to only get the status code.
```

> The above command returns XML structured like this:

```xml
<passwd>
        <passwd>
                <rawout>        
                 Changing password for username
                 Password for username has been changed 
                 Updating ftp passwords for username
                 Ftp password files updated. 
                 Ftp vhost passwords synced
                </rawout>
                 <services>
                      <app>system</app>
                 </services>
                 <services>
                      <app>ftp</app>
                 </services>
                 <services>
                      <app>mail</app>
                 </services>
                 <services>
                       <app>mySQL</app>
                 </services>
                <status>1</status>
                <statusmsg>Password changed for user username</statusmsg>
        </passwd>
</passwd>
```

This endpoint changes the password of a user account with the provided information.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/passwd.php`

# API - Domains

## Check if a domain is available

```python
import requests
from requests.auth import HTTPBasicAuth

url = "https://panel.myownfreehost.net:2087/xml-api/checkavailable.php"
data = {'api_user': 'API USERNAME', 'api_key': 'API PASSWORD', 'domain': 'subdomain.example.com'} # If you want to use a domain which is not a subdomain, put that domain in.

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text) # Returns the status code, either 0 or 1.

```

> The above command returns XML structured like this:

```xml
1
```

This endpoint checks if the requested domain name is available.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/checkavailable.php`

## Get a user's domains

```python
import requests
from requests.auth import HTTPBasicAuth

url = "https://panel.myownfreehost.net:2087/xml-api/getuserdomains.php"
data = {'api_user': 'API USERNAME', 'api_key': 'API PASSWORD', 'username': 'hname_12345678'}

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text)

```

> The above command returns a list/array structured like this:

```python
[["ACTIVE","subdomain.example.com"]]
```

This endpoint gets the domains connected to a user's account.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/getuserdomains.php`

## Get a user by a domain

```python
import requests
from requests.auth import HTTPBasicAuth

url = "https://panel.myownfreehost.net:2087/xml-api/getdomainuser.php"
data = {'api_user': 'API USERNAME', 'api_key': 'API PASSWORD', 'domain': 'subdomain.example.com'}

response = requests.post(url, params=data, auth=HTTPBasicAuth('API USERNAME', 'API PASSWORD'))

print(response.text)

```

> The above command returns a list/array structured like this:

```python
["ACTIVE","subdomain.example.com","\/home\/vol15_2\/example.com\/hname_12345678\/htdocs","hname_12345678"]
```

This endpoint gets a user which has the requested domain connected to their account.

### HTTP Request

`POST https://panel.myownfreehost.net:2087/xml-api/getdomainuser.php`