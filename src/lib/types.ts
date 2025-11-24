export type CmsType = {
    super_title: string;
    title: string;
    description: string;
    btn_one_text: string;
    btn_one_link: string;
    btn_two_text: string;
    btn_two_link: string;
    media_path: string;
    media_alt: string;
    project_title: string;
    skills_title: string;
    about_title: string;
    about_description: string;
    contact_title: string;
};


export type ProfileSectionProps = {
    cms: CmsType;
};

export type aboutProps = {
    title: string;
    description: string;
}

export type TechType = {
  name: string;
};

export type ProjectType = {
  title: string;
  description: string;
  media_path: string;
  media_alt: string;
  project_link: string;
  github_link: string;
  status: boolean;
  sort_order: number;
  technologies_list: TechType[]; // use TechType array
};

export type skillType = {
  skills: string;
  status: boolean;
  sort_order: number;
  media_path: string;
  media_alt: string;
}
