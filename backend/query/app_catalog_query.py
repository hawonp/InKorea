import json
from platform import platform
from config.db_connect import get_connection
from config.imports import mariadb, abort

##########################################################
#                         SELECT                         #
##########################################################

# Getting all the list of apps
def get_apps_by_platform(page, platform):
    try:
        print("get_apps_by_platform")
        print("page, platform", page, platform)
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        limit = 10
        offset = (page - 1) * 10  # if page 1, then it should start from 1.
        # if category == "All" and platform == "All":
        #     query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a LIMIT ?, ?"
        #     values = (offset, limit)
        # elif category == "All":
            # query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN(SELECT DISTINCT * FROM App_Platform WHERE platform_title = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
            # values = (platform, offset, limit)
        # elif platform == "All":
        #     query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN((SELECT app_id FROM App_Tag WHERE tag_id = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
        #     values = (tag_id, offset, limit)
        # else: #TODO:
        #     query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN(SELECT DISTINCT * FROM App_Platform INNER JOIN (SELECT app_id FROM App_Tag WHERE tag_id = ?) AS filtered ON filtered.app_id = App_Platform.app_id AND platform_title = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
        #     values = (tag_id, platform, offset, limit)

        # no platform filtering
        if platform == 'All':
            query = "SELECT A.* FROM App A LIMIT ?, ?"
            values = (offset, limit)
        # platform filtering
        else:
            query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN(SELECT DISTINCT * FROM App_Platform WHERE platform_title = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
            values = (platform, offset, limit)

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        return 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data


# get the platform information for a specific app
def get_platform_info_by_app_id(app_id):
    json_data = []
    try:
        print("get platform information by app_id", app_id)

        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # query for database
        query = "SELECT * FROM App_Platform WHERE App_Platform.app_id = ?"
        values = (app_id,)

        print("Selecting with query", query, values)
        cursor.execute(query, values)
        
        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        json_data = 0
    
    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

# get the info blocks for a specific app
def get_info_by_app_id(app_id):
    json_data = []
    try:
        print("get app information by app_id", app_id)

        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # query for data
        query = "SELECT * FROM App_Info_Block A WHERE A.app_id = ? ORDER BY A.info_index ASC; "
        values = (app_id, )


        # send query to database
        print("Selecting with query", query, values)
        cursor.execute(query, values)
        
        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))


    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        json_data = 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data


# search by names
def search_apps_by_name(input, platform):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        if(len(input) < 1):
            abort(400)

        # Set up query statements and values
        if platform == "All":
            print("check app names by all platform")
            query = "SELECT DISTINCT A.* from App A WHERE LOWER(A.app_title) LIKE LOWER(?) OR Lower(A.app_title_kor) LIKE LOWER(?)"
            values = ("%" + input + "%", "%" + input + "%",)
        else:
            print("check app names by platform", platform)
            query = "SELECT DISTINCT A.* FROM App A, App_Platform P WHERE A.app_id = P.app_id AND P.platform_title = ? AND (LOWER(A.app_title) LIKE LOWER(?) OR Lower(A.app_title_kor) LIKE LOWER(?))"
            values = (platform ,"%" + input + "%", "%" + input + "%",)
        print("Selecting with query", query, " and values ", values)
        cursor.execute(query, values)

       # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error search app database by names: {e}")
        json_data = 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data

# search by tags
def search_apps_by_tag(input, platform):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        if(len(input) < 1):
            abort(400)

        # Set up query statements and values
        if platform == "All":
            print("check app names by all platform")
            query = "SELECT DISTINCT A.*, T.tag_title FROM App A, App_Tag X, Tag T WHERE A.app_id = X.app_id AND T.tag_id = X.tag_id AND LOWER(T.tag_title) LIKE LOWER(?)"
            values = ("%" + input + "%",)
        else:
            print("check app names by platform", platform)
            query = "SELECT DISTINCT A.*, T.tag_title FROM App A, App_Tag X, Tag T, App_Platform P WHERE A.app_id = X.app_id AND T.tag_id = X.tag_id AND A.app_id = P.app_id AND P.platform_title = ? AND LOWER(T.tag_title) LIKE LOWER(?)"
            values = (platform, "%" + input + "%",)

        print("Selecting with query", query, " and values ", values)
        cursor.execute(query, values)

       # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()
        json_data = []

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

    except mariadb.Error as e:
        print(f"Error search app database by tags: {e}")
        json_data = 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return json_data