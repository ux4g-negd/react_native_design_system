FROM node:20-alpine AS build

WORKDIR /app

# 1. Install root dependencies (provides React Native type definitions)
COPY package*.json ./
RUN npm ci --ignore-scripts

# 2. Install storybook dependencies
COPY storybook/package*.json ./storybook/
RUN cd storybook && npm ci

# 3. Copy full source code (node_modules and build artifacts excluded via .dockerignore)
COPY . .

# 4. Build Storybook documentation
WORKDIR /app/storybook
RUN npm run build

FROM nginx:alpine AS runtime

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/storybook/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


