

### Setup
```
git clone git@github.com:ankkho/assignment.git
cd assignment
docker compose build
docker compose up
```

### Project directory
server - proxy service which invokes graphql service based on the service function call  
client - grpc client that exposes two endpoints  


### Invoking grpc client

Run the below curl commands in order to interact with grpc proxy service:

```
curl --location --request GET 'localhost:3000/greeter/your-name-here'

curl --location --request GET 'localhost:3000/ping'

```

### Preferred architectural changes

- Using k8s for container orchestration
- Authentication and authorization for API
- Monitoring and alerts
- Rate limit to API
- Detailed logging with request and response along with unique requestId shared among services
- Using logging service like stackdriver
- Using secrets manager to store env variables