import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
   <p>There are {props.repos.length} repos.</p>
   <ul>
        { props.repos.map(data => <li key={data.id}>{data.name}</li>) }
   </ul>

  </div>
)

// class RepoList extends React.Component {
//     constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//     <div>
//         <h4> Repo List Component </h4>
//         There are {props.repos.length} repos.
//     </div>
//     )
//   }
// }


export default RepoList;