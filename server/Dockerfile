FROM node:20-alpine

WORKDIR /app

COPY . .

RUN addgroup app && adduser -S -G app app

RUN chown -R app:app /app

USER app

EXPOSE 3000

CMD [ "npm", "start" ]