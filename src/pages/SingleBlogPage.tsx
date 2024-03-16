
import { useParams } from '@solidjs/router'
import React from 'react';

const SingleBlogPage = () => {
  const {id} = useParams();
  return (
    <div>
      Single Blog post page {id}
    </div>
  );
};

export default SingleBlogPage;