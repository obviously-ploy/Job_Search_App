import { auth, db } from "../firebaseConfig"; // Ensure auth and db are configured properly
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const logJobs = async (job, action) => {
    const timestamp = new Date().toISOString();

    // Construct the job information object
    const jobInfo = {
        job_id: job.job_id,
        job_description: job.job_description,
        job_title: job.job_title,
        job_employment_type: job.job_employment_type,
        employer_name: job.employer_name,
        job_city: job.job_city,
        job_state: job.job_state,
        job_country: job.job_country,
        action,
        timestamp,
    };

    try {
        // Ensure a user is logged in
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error("No authenticated user found");
        }

        const email = currentUser.email; // Use the logged-in user's email to identify them

        // Query the users collection to find the user document based on `email`
        const usersRef = collection(db, "users");
        const userQuery = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
            throw new Error("No user document found for the current user");
        }

        // Assuming there's only one document per email
        const userDoc = querySnapshot.docs[0];
        const userDocId = userDoc.id;

        // Reference to the `visitedJobs` subcollection under the specific user's document
        const visitedJobsRef = collection(db, "users", userDocId, "visitedJobs");

        // Check if the job ID already exists in the `visitedJobs` subcollection
        const jobQuery = query(visitedJobsRef, where("job_id", "==", job.job_id));
        const jobQuerySnapshot = await getDocs(jobQuery);

        if (!jobQuerySnapshot.empty) {
            console.log(`Job with ID ${job.job_id} already exists in visitedJobs.`);
            return { success: false, message: "Duplicate job ID." };
        }

        // Add the job data to the `visitedJobs` subcollection
        await addDoc(visitedJobsRef, jobInfo);
        console.log("Job logged successfully under visitedJobs.");
        return { success: true };
    } catch (error) {
        console.error("Error logging job: ", error.message);
        return { success: false, error: error.message };
    }
};

export default logJobs;
