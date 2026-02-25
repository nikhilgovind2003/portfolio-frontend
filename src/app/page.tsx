import Portfolio from "@/components/contentWrapper";
import fetchAPI from "@/lib/api";

export default async function Page() {

    

  const { data, error } = await fetchAPI('web');

  const { cms, projects, skills, experience } = data;
  
  console.log("data", data);
  console.log("projects", projects);
  console.log("skills", skills);
  console.log("experience", experience);

    if(error){
      return <div>Error loading data</div>;
    }
    
  return <Portfolio cms={cms} projects={projects} skills={skills} experience={experience} />;
}