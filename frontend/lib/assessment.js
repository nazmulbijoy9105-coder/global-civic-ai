ximport { api } from "./api";  // reuse your APIClient instance

// Fetch assessment questions
export async function getAssessmentQuestions() {
  return api.request("/assessment/questions", { method: "GET" });
}

// Submit responses
export async function submitAssessmentResponses(responses) {
  return api.request("/assessment/responses", {
    method: "POST",
    body: JSON.stringify(responses),
  });
}

// Get assessment results for a user
export async function getAssessmentResult(userId) {
  return api.request(`/assessment?user_id=${userId}`, { method: "GET" });
}
