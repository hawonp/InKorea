# pull python
FROM python:3.9

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set directory
WORKDIR /code

# install dependancies
COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# copy rest of code over
COPY ./app /code/app

# expose port for listening (local)
EXPOSE 9090

# expose port for listening (prod)
# EXPOSE 5000 

# CMD [ "python", "./app/main.py" ]
# CMD ["uvicorn", "app.main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "9090"]