import React from 'react'
type blogdetailpageprops={
  params:{
    id:string;
  };
};

function blogdetail({params}:blogdetailpageprops) {
  return (
    <div>here is the detail of blog</div>
  )
}

export default blogdetail