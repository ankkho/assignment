
### Setup
```
git clone git@github.com:ankkho/assignment.git
cd assignment
docker compose build
docker compose up
```

### Project directory
server - proxy service which invokes graphql service based on the service function call  
client - grpc client exposes two endpoints


### Invoking grpc proxy server - Option 1 using curl

Run the below curl commands in order to interact with grpc proxy service:

```
curl --location --request GET 'localhost:3000/greeter/ankit'

curl --location --request GET 'localhost:3000/ping'

```

### Invoking grpc proxy server - Option 2 using postman

[Postman supports grpc](https://blog.postman.com/postman-now-supports-grpc/)  

Import proto file (server/proto/greeter.proto) into postman  

Set server url as: `localhost:6000`  
Select `greeter` server  
Provide a version: `1.0.0`  
Select any method provided  
Click `Invoke`

Run following commands:

```
cd server  

yarn dev
```

### Preferred architectural changes

- Using k8s for container orchestration
- Authentication and authorization for API
- Monitoring and alerts
- Rate limit to API
- Detailed logging with request and response along with unique requestId shared among services
- Using logging service like stackdriver
- Using secrets manager to store env variables