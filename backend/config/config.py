from config.imports import load_dotenv, os

load_dotenv()


class ApplicationConfig:

    # secret key used by Flask, etc
    SECRET_KEY = os.environ['SECRET_KEY']

    # # google API credentials
    # GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID')
    # GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET')
    # GOOGLE_DISCOVERY_URL = ('GOOGLE_DISCOVERY_URL')

    # Session Management
    SESSION_TYPE = 'filesystem'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True

    # session url (localhost)

    # CORS headers
    CORS_HEADERS = 'Access-Control-Allow-Origin'

    # PRIVATE_KEY = os.environ.get('PRIVATE_KEY')
    # PUBLIC_KEY = os.environ.get('PUBLIC_KEY')
    # URL_ENTPOINT = os.environ.get('URL_ENTPOINT')
    # IMG_SECRET_KEY = os.environ.get('IMG_SECRET_KEY')
