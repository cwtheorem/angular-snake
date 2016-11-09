# angular-snake

## To run in Docker on port 8080

Build the repository
```
docker build -t angular-snake git@github.com:astrobass/angular-snake.git
```

Run the web server
```
docker run -d -p 8080:80 --name webserver angular-snake
```
