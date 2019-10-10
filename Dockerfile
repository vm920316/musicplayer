FROM nginx
RUN mkdir /app
WORKDIR /app
COPY ./dist /app
COPY nginx/default.conf /etc/nginx/nginx.conf