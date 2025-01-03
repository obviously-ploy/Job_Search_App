import numpy as np


def cosine_similarity(viewed_jobs, fetched_jobs):
    # # Example matrices (TF-IDF vectors)
    # M = np.random.rand(100, 300)  # 100 viewed jobs, 300 features each
    # N = np.random.rand(10, 300)   # 10 potential jobs, 300 features each

    dot_product = np.dot(fetched_jobs, viewed_jobs.T)

    N_norms = np.linalg.norm(fetched_jobs, axis=1)[:, None]  
    M_norms = np.linalg.norm(viewed_jobs, axis=1)          

    cosine_similarities = dot_product / (N_norms * M_norms)  

    # Each row in `cosine_similarities` corresponds to a potential job
    # Each column in `cosine_similarities` corresponds to a viewed job



