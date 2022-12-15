# OAuth2 API
> API that generates authentication tokens following the OAuth2 protocol


## Routes
```sh
/register-client POST
Generate access credentials

Payload:

"client_name": "Client Name",
"client_id": "Client Id",
"grant_type": "Concession Type"

Response:
{
    "client_id": "test-client",
    "client_secret": "random-client-hex-secret"
}
```

```sh
/access-token POST
Generate access-token

Content-Type: application/x-www-form-urlencoded

Parameters:
client_id
client_secret
grant_type

Response:

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOnsiY2xpZW50X2lkIjoidGVzdC1jbGllbnQiLCJjbGllbnRfc2VjcmV0IjoiZTVjYzk1MjMwYmVjY2IyMzBjODFhMjZkMDU0YWY3NGJhZjQ0MmYyYTRiMmY4YzYxMGI0MmU0MjAxOTk1ZDRmYyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifSwiaWF0IjoxNjcxMDczMTU0LCJleHAiOjE2NzEwNzQwNTQsInN1YiI6IlRlc3QgQ2xpZW50In0.T4RCH5M78Tj79weBQPVuWLfqCHWH89O8QbbMtmTrYyU",
    "expires_in": 900,
    "type": "Bearer"
}

```

