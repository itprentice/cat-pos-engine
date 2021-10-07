from flask import Flask
from CatModelFast import CatModelFast
app = Flask(__name__)

catModel = CatModelFast(modelPath="bruh")

@app.route('/')
def helloWorld():
    return '<p>Hello World</p>'
