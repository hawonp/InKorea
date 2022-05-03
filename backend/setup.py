# imports
import config.db_connect as setting
from config.imports import Flask, CORS, Api
from config.config import ApplicationConfig

# Import APIs
# import api.Login as Login
# import api.Post as Post
import api.Dev as Dev
import api.Guide as Guide
import api.AppCatalog as AppCatalog
import api.Documents as Documents
import api.Scenario as Scenario


# initialize Flask,
app = Flask(__name__)
app.config.from_object(ApplicationConfig)

# initialize CORS
CORS(app, origins=["localhost:9090", "localhost:3000", "*", "http://localhost:9090"])

# initialize Flask-RESTful
api = Api(app)

# import dev_tools api
Dev.init_routes(api)

# import routes
Guide.init_routes(api)
AppCatalog.init_routes(api)
Documents.init_routes(api)
Scenario.init_routes(api)

# Run the application
if __name__ == '__main__':
    app.run(debug=False)
