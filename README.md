# playground-nodejs-timezone
First NodeJS: convert a datetime between timezones.

The "dependencies" in `package.json` haven't been updated.

Missing dependencies:

1. validator
2. moment-timezone & moment

```bash
$ curl -i -X POST -H 'Content-Type: application/json' -d '{"date":"2000-12-31T23:59:59","from_tz": "Pacific/Tongatapu", "to_tz": "Canada/East-Saskatchewan"}' http://localhost:3000/timezone
```

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 27
ETag: W/"1b-tn2T1hCW5IkiPcWM7QXp6w"
Date: Wed, 16 Sep 2015 04:53:22 GMT
Connection: keep-alive

"2000-12-31T03:59:59-06:00
````
