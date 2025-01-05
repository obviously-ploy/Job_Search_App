from sklearn.feature_extraction.text import TfidfVectorizer
from preprocessor import preprocess


def get_descriptions_vectorizer(all_job_descriptions):
    cleaned_descriptions = [preprocess(desc) for desc in all_job_descriptions]

    vectorizer = TfidfVectorizer(
        max_features=500,
        stop_words='english',  
        max_df=0.5,
        min_df=2  
    )

    vectorizer.fit(cleaned_descriptions)
    return vectorizer

