from app.util.db_connect import get_connection
import mariadb

def query_phrases_by_subcategory_id(subcategory_id):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT P.phrase_id from Phrase P, Phrase_Subcategory PS WHERE P.phrase_id = PS.phrase_id AND PS.subcategory_id = ?"
        values = (subcategory_id,)

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()

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
    
def query_phrase_by_phrase_id(phrase_id):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT * From Phrase P WHERE P.phrase_id = ?"
        values = (phrase_id, )

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()

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

def query_keywords_by_phrase_id(phrase_id):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT K.* FROM Keyword K, Phrase P, Keyword_Phrase KP WHERE KP.keyword_id = K.keyword_id AND KP.phrase_id = P.phrase_id AND KP.phrase_id = ?"
        values = (phrase_id, )

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()

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

def query_keyword_by_keyword_id(keyword_id):
    json_data = []
    try:
        # Obtainting DB cursor
        conn = get_connection()
        cursor = conn.cursor()

        # Set up query statements and values
        query = "SELECT * FROM Keyword WHERE keyword_id = ?"
        values = (keyword_id, )

        # Set up query statements and values
        
        print("Selecting with query", query, values)
        cursor.execute(query, values)

        # serialize results into JSON
        row_headers = [x[0] for x in cursor.description]
        rv = cursor.fetchall()

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