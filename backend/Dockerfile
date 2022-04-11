
FROM python:3.7

# initial python settings
RUN #apt-get update -y && apt-get install -y python3-pip python-dev
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

# copy everything to docker file IO
COPY . .

# install necessary modules
RUN pip install -r requirements.txt

# expose port for listening (local)
EXPOSE 9090

# expose port for listening (prod)
# EXPOSE 5000 

# init gunicorn 
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "entrypoint.sh"]
