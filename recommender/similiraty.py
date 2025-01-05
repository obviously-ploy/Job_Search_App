import numpy as np

def cosine_similarity(viewed_jobs_matrix, fetched_jobs_matrix):
    # Debugging: Check matrix shapes
    print(f"Shape of viewed_jobs_matrix: {viewed_jobs_matrix.shape}")
    print(f"Shape of fetched_jobs_matrix: {fetched_jobs_matrix.shape}")

    # Debugging: Check if matrices contain non-zero elements
    if viewed_jobs_matrix.sum() == 0 or fetched_jobs_matrix.sum() == 0:
        raise ValueError("One of the matrices is empty or contains only zeros.")

    # Compute dot product
    dot_product = np.dot(fetched_jobs_matrix, viewed_jobs_matrix.T)

    # Compute norms and ensure they are not zero
    N_norms = np.linalg.norm(fetched_jobs_matrix, axis=1)[:, None]
    M_norms = np.linalg.norm(viewed_jobs_matrix, axis=1)
    
    if np.any(N_norms == 0) or np.any(M_norms == 0):
        raise ValueError("One of the rows in the matrices has a zero norm, leading to invalid similarity calculations.")

    # Calculate cosine similarities
    cosine_similarities = dot_product / (N_norms * M_norms)

    return cosine_similarities
