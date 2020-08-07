FROM node:14.7.0-alpine3.10 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN npm install -s
COPY . /app
RUN npm run build
FROM nginx:1.19.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]