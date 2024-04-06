interface SocialLink {
  title: string;
  href: string;
}

const getSocials = (): SocialLink[] => {
  return [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/michal-ciberej-a1b235247',
    },
    {
      title: 'Github',
      href: 'https://www.github.com/michalciberej',
    },
  ];
};

export default getSocials;
