from sklearn.feature_extraction.text import TfidfVectorizer
from preprocessor import preprocess


def description_vectorizer(job_descriptions):
    cleaned_descriptions = [preprocess(desc) for desc in job_descriptions]

    print(cleaned_descriptions)

    vectorizer = TfidfVectorizer()

    tfidf_matrix = vectorizer.fit_transform(cleaned_descriptions)

    return tfidf_matrix


