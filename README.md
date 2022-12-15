# OAuth2 API
> API that generates authentication tokens following the OAuth2 protocol


## Routes
```sh
POST
/register-client
Generate access credentials

Payload:

"client_name": "Test Client",
"client_id": "test-client",
"grant_type": "client_credentials"

Response:
{
    "client_id": "test-client",
    "client_secret": "e5cc95230beccb230c81a26d054af74baf442f2a4b2f8c610b42e4201995d4fc"
}
```

```sh
POST
/access-token
Generate access-token

Content-Type: application/x-www-form-urlencoded

Parameters:
client_id: test-client
client_secret: e5cc95230beccb230c81a26d054af74baf442f2a4b2f8c610b42e4201995d4fc
grant_type: client_credentials

Response:

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOnsiY2xpZW50X2lkIjoidGVzdC1jbGllbnQiLCJjbGllbnRfc2VjcmV0IjoiZTVjYzk1MjMwYmVjY2IyMzBjODFhMjZkMDU0YWY3NGJhZjQ0MmYyYTRiMmY4YzYxMGI0MmU0MjAxOTk1ZDRmYyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifSwiaWF0IjoxNjcxMDczMTU0LCJleHAiOjE2NzEwNzQwNTQsInN1YiI6IlRlc3QgQ2xpZW50In0.T4RCH5M78Tj79weBQPVuWLfqCHWH89O8QbbMtmTrYyU",
    "expires_in": 900,
    "type": "Bearer"
}

```

