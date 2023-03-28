FROM --platform=linux/amd64 node:16-alpine AS builder

#ENV TURBO_VERSION 1.6.1
#ENV YARN_VERSION 3.2.4

RUN apk add --no-cache libc6-compat
#RUN yarn policies set-version $YARN_VERSION
#RUN yarn dlx turbo@$TURBO_VERSION --version

WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
COPY . .

# RUN yarn install --frozen-lockfile
RUN npm install --inline-builds

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
