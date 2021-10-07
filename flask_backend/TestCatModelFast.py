from CatModelFast import CatModelFast
from pathlib import Path
import sys
import warnings

#ignoring the userwarning from pytorch about named tensors
if not sys.warnoptions:
    warnings.simplefilter("ignore")

parentPath = Path().resolve().parent #depending on what the pwd of the terminal this is running from, might have to add .parent to Path('.')
print(parentPath)
testModel = CatModelFast(Path(parentPath, 'notebooks/catexport.pkl'))
print(testModel.getCategories())
print(testModel.predict(Path(parentPath, 'notebooks/bubblesloaf.jpg')))