#imports all of the vision package in order to read
from fastai.vision.all import *

class CatModelFast:
    def __init__(self, modelPath):
        #print(modelPath)
        self.model = load_learner(modelPath)
        
    def getCategories(self):
        return self.model.dls.vocab
    #returns a tuple with the following: (prediction, predictionIndex, probabilities)
    #probabilities is a list with the probability of each category, with prediction being the category with probabilities[predictionIndex] (highest probability)
    def predict(self, imgData):
        #print(imgData)
        if isinstance(imgData, Image.Image):
            img = np.array(imgData)
        else:
            img = PILImage.create(imgData)
        #print(img)
        return self.model.predict(img)