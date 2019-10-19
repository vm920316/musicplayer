FROM nginx
RUN mkdir /app
WORKDIR /app
COPY ./dist /app
COPY ./nginx/ /etc/nginx/conf.d/