from config.db_connect import get_connection
from config.imports import mariadb

##########################################################
#                         SELECT                         #
##########################################################

# Getting all the list of apps
def get_apps_wth_tag_and_platform(page, tag_id, platform):
    try:
        print("get_apps_wth_category_and_platform")
        print("page, category, platform", page, category, platform)
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        limit = 10
        offset = (page - 1) * 10  # if page 1, then it should start from 1.
        if category == "All" and platform == "All":
            query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a LIMIT ?, ?"
            values = (offset, limit)
        elif category == "All":
            query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN(SELECT DISTINCT * FROM App_Platform WHERE platform_title = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
            values = (platform, offset, limit)
        elif platform == "All":
            query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN((SELECT app_id FROM App_Tag WHERE tag_id = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
            values = (tag_id, offset, limit)
        else: #TODO:
            query = "SELECT s.*, a.app_id, a.app_title, a.app_title_kor, a.app_text, a.app_image FROM App a INNER JOIN(SELECT DISTINCT * FROM App_Platform INNER JOIN (SELECT app_id FROM App_Tag WHERE tag_id = ?) AS filtered ON filtered.app_id = App_Platform.app_id AND platform_title = ?) AS s ON s.app_id = a.app_id LIMIT ?, ?"
            values = (tag_id, platform, offset, limit)
        # Set up query statements and values
        
        print("Selecting with query", query)
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


# Getting subcategory id with name
def get_tag_id(tag_name):
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT tag_id FROM Tag WHERE tag_name = ?"
        values = (tag_name,)
        print("Selecting with query", query)
        cursor.execute(query, values)

        #Fetching one row since we know its only one
        rv = cursor.fetchone()

    except mariadb.Error as e:
        print(f"Error ocurred while querying database: {e}")
        return 0

    # Closing cursor and commiting  connection
    cursor.close()
    conn.commit()
    conn.close()
    return rv[0]