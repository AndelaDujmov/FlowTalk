FROM node:22-alpine

ARG USERNAME
ARG PORT
ARG USER_UID=1100
ARG USER_GID=${USER_UID}

RUN apk add --no-cache shadow

RUN addgroup -g ${USER_GID} ${USERNAME} \
    && adduser -D -u ${USER_UID} -G ${USERNAME} ${USERNAME}

WORKDIR /workdir/${USERNAME}

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE ${PORT}

CMD ["npm", "run", "dev", "--", "--host"]

