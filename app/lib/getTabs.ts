interface Tab {
  title: string;
  href: string;
}

const getTabs = (): Tab[] => {
  return [
    {
      title: 'About me',
      href: 'https://www.michalciberej.com',
    },
    {
      title: 'Posts',
      href: '/posts',
    },
    {
      title: 'Demos',
      href: '/demos',
    },
  ];
};

export default getTabs;
