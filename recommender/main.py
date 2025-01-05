from descVectorizer import get_descriptions_vectorizer
from firestore import Database
from similiraty import cosine_similarity
import numpy as np

db = Database()

# visited_job_docs = db.getVisitedJobsDocs(3) 

visited_jobs_file = open("visited_jobs_desc.txt", "r")
random_desc_file = open("random_desc.txt", "r")
similar_desc_file = open("similar_desc.txt", "r")


random_jobs_desc = random_desc_file.read().split("|")
similar_jobs_desc = similar_desc_file.read().split("|")
visited_jobs_desc = visited_jobs_file.read().split("|")

random_desc_file.close()
similar_desc_file.close()
visited_jobs_file.close()

# array = []

# for job_doc in visited_job_docs:
#    job_dict = job_doc.to_dict()
#    array.append(job_dict['job_description'])

# print(array)


vectorizer = get_descriptions_vectorizer(random_jobs_desc+similar_jobs_desc+visited_jobs_desc)

# Transform individual datasets using the same vectorizer
viewed_jobs_desc_matrix = vectorizer.transform(visited_jobs_desc).toarray()
random_jobs_desc_matrix = vectorizer.transform(random_jobs_desc).toarray()
similar_jobs_desc_matrix = vectorizer.transform(similar_jobs_desc).toarray()


similarity_random_desc = cosine_similarity(viewed_jobs_desc_matrix, random_jobs_desc_matrix)
similarity_similar_desc = cosine_similarity(viewed_jobs_desc_matrix, similar_jobs_desc_matrix)

mean_similarity_random_desc = np.mean(similarity_random_desc)
mean_similarity_similar_desc =np.mean(similarity_similar_desc)

# Calculate percentage difference
similarity_difference = mean_similarity_similar_desc - mean_similarity_random_desc
percentage_difference = (similarity_difference / mean_similarity_random_desc) * 100

# Output results
print(f"Similarity with random descriptions: {mean_similarity_random_desc}")
print(f"Similarity with similar descriptions: {mean_similarity_similar_desc}")
print(f"Similarity difference between descriptions: {similarity_difference}")
print(f"Percentage difference: {percentage_difference:.2f}%")


# Print similarity matrices
print("Similarity Matrix for Random Descriptions:")
print(np.array2string(similarity_random_desc, formatter={'float_kind': lambda x: f"{x:.2f}"}))

random_desc_mean = similarity_random_desc.mean(axis=1)  # Mean similarity for each row
print(f"Mean similarity values for Random Descriptions: {np.array2string(random_desc_mean, formatter={'float_kind': lambda x: f'{x:.2f}'})}")
print(f"Overall mean similarity for Random Descriptions: {random_desc_mean.mean():.2f}")

print("\nSimilarity Matrix for Similar Descriptions:")
print(np.array2string(similarity_similar_desc, formatter={'float_kind': lambda x: f"{x:.2f}"}))

similar_desc_mean = similarity_similar_desc.mean(axis=1)  # Mean similarity for each row
print(f"Mean similarity values for Similar Descriptions: {np.array2string(similar_desc_mean, formatter={'float_kind': lambda x: f'{x:.2f}'})}")
print(f"Overall mean similarity for Similar Descriptions: {similar_desc_mean.mean():.2f}")