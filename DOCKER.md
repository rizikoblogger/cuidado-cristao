# How to run under Docker Containers

## Install Docker - if necessary
````
https://docs.docker.com/get-started/get-docker/
````

## Build a brand new image
````
docker build -t sails .
````

## Check the generated <image_id> of your brand new image
````
docker images
````

## Run it
docker run -d -p 80:80 [--ip my_ip_address] <image_id>
