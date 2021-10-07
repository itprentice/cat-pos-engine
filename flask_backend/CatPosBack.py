from flask import Flask, request, Response
from pathlib import Path
from CatModelFast import CatModelFast
from PIL import Image
import sys
import warnings

app = Flask(__name__)

#ignoring the userwarning from pytorch about named tensors
if not sys.warnoptions:
    warnings.simplefilter("ignore")

#correct assuming the cwd is cat-pos-engine/flask_backend
parentPath = Path().resolve().parent
catModel = CatModelFast(Path(parentPath, 'notebooks/catexport.pkl'))

@app.route('/upload', methods=['POST'])
def imageUpload():
    imageFile = request.files['catImage']
    img = Image.open(imageFile)
    prediction = catModel.predict(img)
    return Response(prediction[0] + " " + str(prediction[2][prediction[1].item()].item()), mimetype="text/plain")

