import firebase_admin
from firebase_admin import credentials, firestore
import os
from dotenv import load_dotenv
import difflib


load_dotenv()

firestoreConfig = {
  "type": "service_account",
  "project_id": os.getenv("PROJECT_ID"),
  "private_key_id": os.getenv("PRIVATE_KEY_ID"),
  "private_key": os.getenv("PRIVATE_KEY").replace("|", '\n'),
  "client_email": os.getenv("CLIENT_EMAIL"),
  "client_id": os.getenv("CLIENT_ID"),
  "auth_uri": os.getenv("AUTH_URI"),
  "token_uri": os.getenv("TOKEN_URI"),
  "auth_provider_x509_cert_url": os.getenv("AUTH_PROVIDER_CERT_URL"),
  "client_x509_cert_url": os.getenv("CLIENT_CERT_URL"),
  "universe_domain": os.getenv("UNIVERSE_DOMAIN")
}

class Database:
    def __init__(self):
        self.__cred = credentials.Certificate(firestoreConfig)
        firebase_admin.initialize_app(self.__cred)
        self.__db = firestore.client()
    
    def getVisitedJobsDocs(self, userId):
        users_ref = self.__db.collection("users")
        query = users_ref.where("userId", "==", userId)

        docs = query.stream()
        visited_jobs_docs = []

        for doc in docs:
            visited_jobs_ref = self.__db.collection("users").document(doc.id).collection("visitedJobs")
            visited_jobs_doc = visited_jobs_ref.stream()
            for job_doc in visited_jobs_doc:
                visited_jobs_docs.append(job_doc)
        
        return visited_jobs_docs
        