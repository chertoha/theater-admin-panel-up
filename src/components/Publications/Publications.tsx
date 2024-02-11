import React, { FC } from "react";
import { useGetPublicationsQuery } from "../../redux/publications/publicationsApi";

interface IPublicationsProps {
  //...
}

const Publications: FC<IPublicationsProps> = () => {
  const { data } = useGetPublicationsQuery({});

  //   if (!data) return null;

  console.log(data);

  return <div>Publications component</div>;
};

export default Publications;
