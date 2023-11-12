FROM node:18-alpine

ENV MONGO_URI 'mongodb+srv://new_user:new_user_db_pw@clusteractivitysupplier.wrdof.mongodb.net/activity_supplier_db?retryWrites=true&w=majority'
ENV NODE_ENV 'development'

# RUN npm install -g nodemon

COPY package.json /activity-supplier-app/
WORKDIR /activity-supplier-app
RUN npm install

RUN mkdir /activity-supplier-app/backend/
COPY backend /activity-supplier-app/backend

RUN npm install

RUN cd /activity-supplier-app/backend

# EXPOSE 5000

# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]

# docker build -t backend:v1 .
# docker images
# docker run [IMAGE_ID] 
# docker run --name backend_container -p 5000:5000 backend:v1
# --- live preview and map volumes to our project folders ---
# docker run --name activity-supplier-app_container --rm -v /Users/gounanda/Documents/GYG/ImprovedWithTesting/activity-supplier-app:/activity-supplier-app -v /activity-supplier-app/node_modules activity-supplier-app:v1
# -- clear EVERYTHING (delet) --
# dcoker system prune

# docker ps
# docker stop [CONTAINER_ID]

# volumes for constant changes
