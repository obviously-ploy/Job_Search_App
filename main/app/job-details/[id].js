import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState, useEffect } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import fetchJobs from "../../utils/fetchJobs";
import logJobs from "../../utils/logJobs";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = fetchJobs(
    "job-details",
    {
      job_id: params.id,
    },
    true
  );

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [logLoading, setLogLoading] = useState(false);
  const [logError, setLogError] = useState("");
  const [loggedJobs, setLoggedJobs] = useState(new Set());

  // Function to log job
  const logViewedJob = async () => {
    if (data && data.length > 0 && !loggedJobs.has(data[0].job_id)) {
      setLogLoading(true);
      const result = await logJobs(data[0], "viewed");
      if (!result.success) {
        setLogError(result.error);
      } else {
        setLoggedJobs((prev) => new Set(prev).add(data[0].job_id)); // Add logged job ID
      }
      setLogLoading(false);
    }
  };

  // Log the job when the component loads
  useEffect(() => {
    logViewedJob();
  }, [data]); // Only execute when `data` changes

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout
            info={data[0].job_description ?? "No data provided"}
          />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: COLORS.lightWhite,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            ></ScreenHeaderBtn>
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
            ></ScreenHeaderBtn>
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something Went Wrong</Text>
          ) : data.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        {logLoading && <ActivityIndicator size="small" color={COLORS.primary} />}
        {logError && <Text style={{ color: COLORS.red }}>{logError}</Text>}

        <JobFooter
          url={data[0]?.job_google_link ?? "https://career.google.com/jobs/result"}
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
