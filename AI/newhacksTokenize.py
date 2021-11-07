#imports
import nltk 
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet
# nltk.download('punkt')
# nltk.download('wordnet')
lemmatizer = WordNetLemmatizer()


def wordcheck(AI_word,inplst):
    """returns True if at least one word from inplst is the same as AI_word, False otherwise"""
    checklst=[]
    for i in range(len(inplst)):
        if inplst[i].lower()==AI_word.lower():
            checklst.append(True)
        else:
            checklst.append(False)
    return any(checklst)
def synonymCheck(AI_word,inplst):
    """returns True if a least one word in inplst is the same as at least one word in synlst, False otherwise"""
    synlst=[]
    checklst=[]
    for vsyn in wordnet.synsets(AI_word):
        for l in vsyn.lemmas():
            synlst.append(l.name())
    for i in range(len(inplst)):
        for j in range(len(synlst)):
            if (inplst[i].lower()==synlst[j].lower()):
                checklst.append(True)
            else:
                checklst.append(False)
    return any(checklst)


def inputter(AIList):
    """returns outlst, a list of length len(AIList), containing 0s or 1s"""
    outlst=[] 
    inputstr=input("Ask a question:")
    inputlst1=nltk.word_tokenize(inputstr)
    inputlst=[lemmatizer.lemmatize(word.lower()) for word in inputlst1]
    for AIwordIndex in range(len(AIList)):
        if (wordcheck(AIList[AIwordIndex],inputlst)==True) or (synonymCheck(AIList[AIwordIndex],inputlst)==True):
           outlst.append(1)
        else:
            outlst.append(0)
    return outlst


testlst=["'s", 'Are', 'BigFoot', 'Cya', 'Did', 'Do', 'Good', 'Goodbye', 'Growing', 'Have', 'Hello', 'Hi', 'How', 'I', 'If', 'Is', 'Leaving', 'See', 'Were', 'What', 'Whatâ€™s', 'Where', 'Which', 'Who', 'a', 'about', 'am', 'and', 'any', 'anyone', 'anywhere', 'are', 'author', 'basis', 'be', 'before', 'believe', 'best', 'book', 'born', 'boyfriend', 'car', 'child', 'childhood', 'cooked', 'could', 'country', 'crime', 'currently', 'daily', 'day', 'did', 'dislike', 'do', 'during', 'enjoy', 'event', 'ever', 'family', 'favorite', 'first', 'food', 'freind', 'get', 'ghost', 'girlfreind', 'good', 'got', 'grade', 'grandchild', 'growing', 'have', 'help', 'historic', 'hometown', 'if', 'in', 'influential', 'is', 'it', 'job', 'kid', 'kind', 'last', 'later', 'life', 'like', 'likely', 'live', 'medication', 'memorable', 'most', 'move', 'movie', 'need', 'of', 'old', 'on', 'one', 'or', 'own', 'parent', 'partner', 'person', 'pet', 'play', 'read', 'school', 'spedning', 'sport', 'strict', 'taking', 'the', 'there', 'time', 'to', 'took', 'trip', 'trouble', 'twin', 'up', 'wa', 'watch', 'were', 'where', 'which', 'who', 'why', 'with', 'witnessed', 'worst', 'would', 'year', 'you', 'your']
#print(inputter(testlst))



