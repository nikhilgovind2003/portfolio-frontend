import Portfolio from "@/components/contentWrapper";
import fetchAPI from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function Page() {

    

  const { data, error } = await fetchAPI('web');

  const { cms, projects, skills, experience } = data;
  

    if(error){
      return <div>Error loading data</div>;
    }
    
  return <Portfolio cms={cms} projects={projects} skills={skills} experience={experience} />;
}