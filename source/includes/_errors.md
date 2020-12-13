# Errors

The MOFH API doesn't use any error codes, and will always return a 200 HTTP code.

You would have to get the text inside the `<status></status>` tags to get the status of your request (either `0` or `1`). Or if you try to use the `getuserdomains.php` and `getdomainuser.php` endpoints you will see that it just returns `null` instead of the list/array it usually gives.