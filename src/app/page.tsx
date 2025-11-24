import Portfolio from "@/components/contentWrapper";
import fetchAPI from "@/lib/api";

export default async function Page() {

    

  const { data, error } = await fetchAPI('web');

  const { cms, projects, skills } = data;
    
    if(error){
      return <div>Error loading data</div>;
    }
    
  return <Portfolio cms={cms} projects={projects} skills={skills} />;
}