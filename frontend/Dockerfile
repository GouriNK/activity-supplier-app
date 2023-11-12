FROM node:18-alpine

ENV REACT_APP_DATABASE_URI 'http://localhost:5000/graphql'

RUN mkdir /activity-supplier-app/
RUN mkdir /activity-supplier-app/frontend/
COPY . /activity-supplier-app/frontend/
WORKDIR /activity-supplier-app/frontend

RUN npm install

# EXPOSE 5000

CMD ["npm", "start"]
# CMD ["npm", "run", "dev"
# docker build -t frontend:v1 .
# docker images
# docker run [IMAGE_ID] 
# docker run --name frontend_container -p 3000:3000 frontend:v1
# --- live preview and map volumes to our project folders ---
# docker run --name activity-supplier-app_container --rm -v /Users/gounanda/Documents/GYG/ImprovedWithTesting/activity-supplier-app:/activity-supplier-app -v /activity-supplier-app/node_modules activity-supplier-app:v1
# -- clear EVERYTHING (delet) --
# dcoker system prune

# docker ps
# docker stop [CONTAINER_ID]

# volumes for constant changes
