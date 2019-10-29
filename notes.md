# Routing Notes

[ client ] == makes a request to an == [ api] == sends a response back to the == [ client ]

what is the interface for a web api? ==>

- URI (Uniform Resource Identifier)
- URL (Universal Resource Locator)
- Endpoint (very related to a URI)
- HTTP === network protocol, set a rules for communication

REST(ish)

- everything is a 'Resource'
- singlRI per resource
- use HTTP METHODS to perform operations on resoures
- hypermedia (at this level we are fully REST)

| Non REST           | REST              |
| :----------------- | :---------------- |
| /listAllChannels   | GET /channels     |
| /createChannel     | POST /channels    |
| /updateChannel     | PUT /channels     |
| /deleteChannel     | DELETE /channels  |
| /findChannel?id123 | GET /channels/123 |
