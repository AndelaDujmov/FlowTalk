#!/bin/bash

PORT=3000
USERNAME=andela

docker build -t flowtalk --build-arg USERNAME=$USERNAME --build-arg PORT=$PORT .
echo "Successfully build the image!"
docker run -p $PORT:$PORT flowtalk
echo "Image is up and running"