from CatModelFast import CatModelFast
from pathlib import Path

parentPath = Path('.').absolute() #depending on what the pwd of the terminal this is running from, might have to add .parent
print(parentPath)
testModel = CatModelFast(Path(parentPath, 'notebooks/catexport.pkl'))
print(testModel.getCategories())
print(testModel.predict(Path(parentPath, 'notebooks/bubblesloaf.jpg')))