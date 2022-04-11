from config.imports import mariadb, sys

local_flask = False


def get_connection():
    try:
        conn = mariadb.connect(
            user="mod",
            password="inkorea",
            host="inkorea_db",
            port=3306,
            database="inkorea_db"
        )
        return conn
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)