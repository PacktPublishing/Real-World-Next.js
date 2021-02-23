# Source code for REST APIs used in Chapter 4, Next.js data flow.

Those APIs are served by AWS API Gateway.
Private APIs need to be authorized using an authorization header.

Given that private APIs are "secured" for learning purposes only (and their data is publicly accessible on this repository), you can use `realworldnextjs` as an authorization token for testing them.

### Examples

**Get a list of fake users**

```bash
curl https://api.realworldnextjs.com/04/users
```

**Get detailed information of a given fake user**

```bash
curl -H "authorization: realworldnextjs" https://api.realworldnextjs.com/04/users/mspadelli8
```
