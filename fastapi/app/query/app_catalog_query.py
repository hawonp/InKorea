from app.util.db_connect import get_connection
import mariadb

def query_all_apps_by_platform(page, platform, search):
    try:
        print("get_apps_by_platform:", platform, "page", page)
        print("this is the current search patterns:", search)
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        limit = 8
        offset = (page - 1) * 8  # if page 1, then it should start from 1.

        # no platform filtering
        if platform == 'All':
            if len(search) > 1 and search != "":
                query = "SELECT A.* FROM App A, Tag T, App_Tag ApT WHERE ApT.app_id = A.app_id AND Apt.tag_id = T.tag_id and LOWER(T.tag_title) LIKE LOWER(?) UNION DISTINCT SELECT A.* FROM App A WHERE LOWER(A.app_title) LIKE LOWER(?) ORDER BY app_id LIMIT ?, ?"
                values = (search, search, offset, limit)
            else:
                query = "SELECT A.* FROM App A LIMIT ?, ?"
                values = ( offset, limit)
        # platform filtering
        else:
            if len(search) > 1 and search != "":
                query = "SELECT A.* FROM App A, App_Platform P WHERE A.app_id = P.app_id AND P.platform_title = ? intersect (SELECT A.* FROM App A, Tag T, App_Tag ApT WHERE ApT.app_id = A.app_id AND Apt.tag_id = T.tag_id and LOWER(T.tag_title) LIKE LOWER(?) UNION DISTINCT SELECT A.* FROM App A WHERE LOWER(A.app_title) LIKE LOWER(?)) ORDER BY app_id LIMIT ?, ?"
                values = (platform, search, search, offset, limit)
            else:
                query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN(SELECT DISTINCT * FROM App_Platform WHERE platform_title = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
                values = (platform, offset, limit)

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        json_data = []
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()

        for result in rv:
            json_data.append(dict(zip(row_headers, result)))
        
        max_page_a = len(rv)
        cursor.close()

        # Obtain max page count
        # Obtainting DB cursor
        cursor = conn.cursor()

        # Set up query statement and values
        query = "SELECT COUNT(*) FROM App"
        # values = (order, offset, limit)
        # Fetching count with given filter
        print("Selecting with query", query, " and values ", values)
        cursor.execute(query)

        # serialize results into JSON
        rv = cursor.fetchone()

        # return the results!
        max_page_b = (rv[0]//10 + 1)
        
        if len(search) > 1 and search != "":
            max_page = max_page_a
        else:
            max_page = max_page_b
        res_data = {'apps': json_data, 'maxPageCount': max_page}

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        res_data = 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return res_data

def query_app_by_id(app_id):
    json_data = []
    try:
        print("get app info", app_id)

        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # query for data
        query = "SELECT A.* FROM App A WHERE A.app_id = ?"
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

def query_app_info_by_id(app_id):
    json_data = []
    try:
        print("get the app info blocks:", app_id)

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

def query_platform_info_by_app_id(app_id):
    json_data = []
    try:
        print("get the platform information for an app:", app_id)

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
    return json_data if len(json_data) > 0 else 0


def query_tags_by_app_id(app_id):
    json_data = []
    try:
        print("get the platform information for an app:", app_id)

        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # query for database
        query = "SELECT T.* FROM App A, Tag T, App_Tag ApT WHERE ApT.app_id = A.app_id AND ApT.tag_id = T.tag_id AND A.app_id = ?"
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
    return json_data if len(json_data) > 0 else 0

def query_search_app_by_name(input, platform):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        if platform.lower() == "all":
            print("check app names by all platform")
            query = "SELECT DISTINCT A.* from App A WHERE LOWER(A.app_title) LIKE LOWER(?) OR Lower(A.app_title_kor) LIKE LOWER(?)"
            values = ("%" + input + "%", "%" + input + "%",)
        else:
            print("check app names by platform", platform)
            query = "SELECT DISTINCT A.* FROM App A, App_Platform P WHERE A.app_id = P.app_id AND LOWER(P.platform_title) = LOWER(?) AND (LOWER(A.app_title) LIKE LOWER(?) OR Lower(A.app_title_kor) LIKE LOWER(?))"
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

def query_search_app_by_tag(input, platform):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        if platform.lower() == "all":
            print("check app tags by all platform")
            query = "SELECT DISTINCT A.*, T.tag_title FROM App A, App_Tag X, Tag T WHERE A.app_id = X.app_id AND T.tag_id = X.tag_id AND LOWER(T.tag_title) LIKE LOWER(?)"
            values = ("%" + input + "%",)
        else:
            print("check app names by platform", platform)
            query = "SELECT DISTINCT A.*, T.tag_title FROM App A, App_Tag X, Tag T, App_Platform P WHERE A.app_id = X.app_id AND T.tag_id = X.tag_id AND A.app_id = P.app_id AND LOWER(P.platform_title) = LOWER(?) AND LOWER(T.tag_title) LIKE LOWER(?)"
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

def query_search_for_names(input):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        if(len(input) < 1):
            return None

        # Set up query statements and values
        query = "SELECT DISTINCT  A.* FROM App A WHERE LOWER(A.app_title) LIKE LOWER(?)"
        values = ("%" + input + "%",)
        print("Selecting with query", query, " and values ", values)
        cursor.execute(query, values)

        app_result = cursor.fetchall()
        return_result = []

        for i in range(len(app_result)):
            temp = {"type": "app", "id": app_result[i][0], "text": app_result[i][1]}
            return_result.append(temp)

    except mariadb.Error as e:
        print(f"Error search database for app: {e}")
        return None

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return return_result

def query_search_for_tags(input):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        if(len(input) < 1):
            return None

        # Set up query statements and values
        query = "SELECT DISTINCT  Tag.tag_id, Tag.tag_title From Tag where LOWER(Tag.tag_title) LIKE LOWER(?)"
        values = ("%" + input + "%",)
        print("Selecting with query", query, " and values ", values)
        cursor.execute(query, values)

        tag_result = cursor.fetchall()
        return_result = []

        for i in range(len(tag_result)):
            # tag_result[i] = "[TAG] " + tag_result[i]
            temp = {"type": "tag", "id": tag_result[i][0], "text": tag_result[i][1]}
            return_result.append(temp)

    except mariadb.Error as e:
        print(f"Error search database for tags: {e}")
        return None

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return return_result
    