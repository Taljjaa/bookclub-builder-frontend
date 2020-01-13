import React from 'react';
import { Link } from 'react-router-dom';

const AdminOptions = () => {
   return (
      <div>
         <Link to="/bookclubs/:id/poll">
            <button>Create Poll</button>
         </Link>
         <Link to="/bookclubs/:id/edit">
            <button>Edit Club</button>
         </Link>
      </div>
   );
};

export default AdminOptions;
