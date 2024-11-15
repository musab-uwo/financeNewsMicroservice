# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the local files (HTML, CSS, JS) into their respective directories inside the Nginx container
COPY ./css /usr/share/nginx/html/css
COPY ./js /usr/share/nginx/html/js
COPY ./index.html /usr/share/nginx/html/


# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx web server in the foreground
CMD ["nginx", "-g", "daemon off;"]
