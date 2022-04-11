import datetime
import json
import os
import datetime
import requests
import sys

import cachecontrol
import mariadb
import requests
from blinker import signal
from dotenv import load_dotenv
from flask import (Blueprint, Flask, abort, flash, get_flashed_messages,
                   jsonify, redirect, request, session, url_for)
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource
from marshmallow import Schema, fields, validate