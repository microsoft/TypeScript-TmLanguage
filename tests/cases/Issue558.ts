export const interview = async (
   fabricatedCase : FabricatedCase
) : Promise<InterviewTest> => {
   const res = await fetch(API_URL + '/interviews', {
       method: 'POST',
       headers: new Headers({
           'Content-Type': 'application/json',
       }),
       body: JSON.stringify(fabricatedTest),
   });
   const interviewTest = await res.json();
   return interviewTest;
};